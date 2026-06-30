/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Calendar, 
  MessageSquare, 
  MapPin, 
  Building, 
  User, 
  Send, 
  CheckCircle2, 
  Clock,
  Briefcase,
  Users,
  FileSpreadsheet,
  Copy,
  Check,
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import { PSYCHOLOGIST_INFO } from '../data';
import { ServiceItem } from '../types';

interface BookingSystemProps {
  selectedService: ServiceItem | null;
  clearSelectedService: () => void;
}

export default function BookingSystem({ selectedService, clearSelectedService }: BookingSystemProps) {
  const [profile, setProfile] = useState<'individual' | 'empresa'>('individual');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Google Sheets integration state
  const [sheetsUrl, setSheetsUrl] = useState(() => localStorage.getItem('lector_sheets_url') || '');
  const [showSheetsGuide, setShowSheetsGuide] = useState(false);
  const [sheetsStatus, setSheetsStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [copiedCode, setCopiedCode] = useState(false);

  const appsScriptCode = `function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      new Date(),
      data.name,
      data.email,
      data.phone,
      data.profile === 'individual' ? 'Personal' : 'Empresarial',
      data.serviceRequested,
      data.details,
      data.message
    ]);
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader('Access-Control-Allow-Origin', '*');
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader('Access-Control-Allow-Origin', '*');
  }
}`;

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(appsScriptCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 3000);
  };

  // Individual parameters
  const [individualTarget, setIndividualTarget] = useState<'adulto' | 'adolescente' | 'nino'>('adulto');
  const [individualObjective, setIndividualObjective] = useState('Psicoterapia Cognitivo-Conductual');

  // Corporate parameters
  const [corporateNeed, setCorporateNeed] = useState('Evaluaciones Psicológicas');
  const [companyName, setCompanyName] = useState('');
  const [employeeCount, setEmployeeCount] = useState('1-10');
  const [locationType, setLocationType] = useState<'lima' | 'provincias'>('lima');

  // Handle selected service injection
  useEffect(() => {
    if (selectedService) {
      if (selectedService.category === 'empresarial') {
        setProfile('empresa');
        setCorporateNeed(selectedService.title);
      } else {
        setProfile('individual');
        setIndividualObjective(selectedService.title);
      }
      // Scroll to booking system
      const bookingSection = document.getElementById('contacto');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const serviceRequested = profile === 'individual' ? individualObjective : corporateNeed;
    const details = profile === 'individual' 
      ? `Paciente: ${individualTarget === 'adulto' ? 'Adulto' : individualTarget === 'adolescente' ? 'Adolescente' : 'Niño'}`
      : `Empresa: ${companyName || 'No especificada'}, Tamaño: ${employeeCount}, Ubicación: ${locationType === 'lima' ? 'Lima' : 'Provincias'}`;

    // If Google Sheets URL is configured, send the request automatically in the background
    if (sheetsUrl.trim()) {
      setSheetsStatus('sending');
      try {
        await fetch(sheetsUrl.trim(), {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            profile,
            serviceRequested,
            details,
            message: message || 'Sin mensaje adicional'
          })
        });
        setSheetsStatus('success');
      } catch (err) {
        console.error('Error enviando a Google Sheets:', err);
        setSheetsStatus('error');
      }
    }

    // Construct email subject and body
    const subject = encodeURIComponent(`Consulta Lector Psicólogo - ${profile === 'individual' ? 'Servicio Individual' : 'Servicio Empresa'}`);
    
    let bodyText = `Hola Mg. Miguel Angel Del Campo,\n\n`;
    bodyText += `He visitado su sitio web "Lector Psicólogo" y me gustaría solicitar una consulta:\n\n`;
    bodyText += `--- DATOS DE CONTACTO ---\n`;
    bodyText += `Nombre: ${name}\n`;
    bodyText += `Email: ${email}\n`;
    bodyText += `Teléfono/WhatsApp: ${phone}\n\n`;

    if (profile === 'individual') {
      bodyText += `--- DETALLES DEL SERVICIO ---\n`;
      bodyText += `Tipo: Consulta Personal/Familiar\n`;
      bodyText += `Paciente: ${individualTarget === 'adulto' ? 'Adulto' : individualTarget === 'adolescente' ? 'Adolescente' : 'Niño'}\n`;
      bodyText += `Objetivo principal: ${individualObjective}\n\n`;
    } else {
      bodyText += `--- DETALLES DE LA EMPRESA ---\n`;
      bodyText += `Tipo: Consultoría Corporativa\n`;
      bodyText += `Empresa: ${companyName || 'No especificada'}\n`;
      bodyText += `Servicio requerido: ${corporateNeed}\n`;
      bodyText += `Tamaño de equipo estimado: ${employeeCount} colaboradores\n`;
      bodyText += `Ubicación: ${locationType === 'lima' ? 'Lima' : 'Provincias / Todo el Perú'}\n\n`;
    }

    bodyText += `--- MENSAJE ADICIONAL ---\n`;
    bodyText += `${message || 'Sin mensaje adicional'}\n\n`;
    bodyText += `Agradezco su atención 24/7 y quedo a la espera de su respuesta.\n`;

    const encodedBody = encodeURIComponent(bodyText);
    const emailHref = `mailto:${PSYCHOLOGIST_INFO.email}?subject=${subject}&body=${encodedBody}`;

    // Open email client
    window.location.href = emailHref;
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      clearSelectedService();
    }, 5000);
  };

  return (
    <section id="contacto" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative Blur BG */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 rounded-full filter blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16" id="booking-header">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/15 border border-brand-orange/30 px-3 py-1.5 rounded-full inline-block">
            Mesa de Enlace Profesional
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Canales de <span className="text-brand-orange">Atención Inmediata</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            Comuníquese directamente o configure su requerimiento a continuación para recibir atención inmediata de lunes a domingo las 24 horas, tanto en Lima como en provincias.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="booking-grid">
          
          {/* Left panel: Direct Contact Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-slate-900/60 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-800 relative overflow-hidden" id="booking-contact-card">
            {/* Background design */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-8 -mt-8"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-orange/10 rounded-full -ml-12 -mb-12 filter blur-lg"></div>

            <div className="relative space-y-8">
              <div>
                <span className="text-xs text-brand-orange font-bold uppercase tracking-widest">Contacto Directo</span>
                <h3 className="text-2xl font-bold font-display text-white tracking-tight mt-1">
                  Atención Colegiada 24/7
                </h3>
                <p className="text-xs text-slate-400 mt-2 font-light leading-relaxed">
                  Para consultas urgentes, agendamiento inmediato o cotizaciones de servicios corporativos de SBS y habilidades blandas, puede contactar al Mg. Miguel Angel Del Campo a través de los siguientes canales:
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-6" id="direct-contact-items">
                <a 
                  href={`tel:${PSYCHOLOGIST_INFO.phone.replace(/\s+/g, '')}`} 
                  className="flex items-center space-x-4 bg-slate-950/40 hover:bg-slate-950/80 p-4 rounded-2xl border border-slate-800 transition-all group"
                  id="direct-phone-call"
                >
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform border border-slate-800">
                    <Phone className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest leading-none">Teléfono / Llamadas</p>
                    <p className="text-base font-bold text-white mt-1.5">{PSYCHOLOGIST_INFO.phone}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Atención nacional (Perú)</p>
                  </div>
                </a>

                <a 
                  href={`mailto:${PSYCHOLOGIST_INFO.email}`} 
                  className="flex items-center space-x-4 bg-slate-950/40 hover:bg-slate-950/80 p-4 rounded-2xl border border-slate-800 transition-all group"
                  id="direct-email-send"
                >
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform border border-slate-800">
                    <Mail className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest leading-none">Correo Electrónico</p>
                    <p className="text-sm font-bold text-white mt-1.5 truncate">{PSYCHOLOGIST_INFO.email}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Respuestas en menos de 2 horas</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 bg-slate-950/40 p-4 rounded-2xl border border-slate-800">
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800">
                    <Clock className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest leading-none">Horario de Servicio</p>
                    <p className="text-sm font-bold text-white mt-1.5">Lunes a Domingo (24/7)</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Feriados incluidos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Prompt for WhatsApp button */}
            <div className="relative pt-8 mt-8 border-t border-slate-800 space-y-4">
              <div className="flex items-center space-x-2 text-brand-orange">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider">Enlace Oficial de WhatsApp</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Utilice el siguiente enlace oficial para abrir directamente un chat de asesoramiento confidencial.
              </p>
              <a 
                href={PSYCHOLOGIST_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-orange hover:bg-brand-orange-hover text-slate-950 py-4 rounded-xl text-center font-bold flex items-center justify-center space-x-2 shadow-lg hover:shadow-brand-orange/35 transition-all transform hover:-translate-y-0.5"
                id="booking-whatsapp-direct"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Iniciar Chat de WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right panel: Interactive Configurator Form */}
          <div className="lg:col-span-7 bg-slate-900/60 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-800 p-8 lg:p-10" id="booking-configurator-form">
            <h3 className="text-2xl font-bold font-display text-white tracking-tight flex items-center gap-2">
              <Calendar className="w-6 h-6 text-brand-orange" />
              <span>Configurador de Consulta</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed font-light mb-8">
              Personalice su necesidad de atención psicológica o corporativa. El sistema generará una plantilla estructurada y le permitirá enviarla instantáneamente por correo electrónico.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Profile Toggle (Individual vs. Empresa) */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">Tipo de Perfil</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setProfile('individual');
                      clearSelectedService();
                    }}
                    className={`p-4 rounded-2xl border text-left flex items-center space-x-3 transition-all duration-300 ${
                      profile === 'individual'
                        ? 'border-brand-orange bg-brand-orange/10 text-brand-orange ring-2 ring-brand-orange/25'
                        : 'border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <User className="w-5 h-5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold">Personal</p>
                      <p className="text-[11px] text-slate-400 font-light mt-0.5">Terapia individual o familiar</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setProfile('empresa');
                      clearSelectedService();
                    }}
                    className={`p-4 rounded-2xl border text-left flex items-center space-x-3 transition-all duration-300 ${
                      profile === 'empresa'
                        ? 'border-brand-orange bg-brand-orange/10 text-brand-orange ring-2 ring-brand-orange/25'
                        : 'border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <Building className="w-5 h-5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold">Empresarial</p>
                      <p className="text-[11px] text-slate-400 font-light mt-0.5">Talleres SBC, coaching o RRHH</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Dynamic parameters based on Profile */}
              {profile === 'individual' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in" id="form-individual-params">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300">¿Quién solicita la consulta?</label>
                    <select
                      value={individualTarget}
                      onChange={(e) => setIndividualTarget(e.target.value as any)}
                      className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all font-medium text-slate-100"
                    >
                      <option value="adulto">Un Adulto (Terapia)</option>
                      <option value="adolescente">Un Adolescente</option>
                      <option value="nino">Un Niño (Psicoterapia/Habilidades)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300">Objetivo del Servicio</label>
                    <select
                      value={individualObjective}
                      onChange={(e) => setIndividualObjective(e.target.value)}
                      className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all font-medium text-slate-100"
                    >
                      <option value="Psicoterapia Cognitivo-Conductual">Psicoterapia Cognitivo-Conductual</option>
                      <option value="Entrenamiento en Habilidades Sociales">Desarrollo de Habilidades Sociales</option>
                      <option value="Coaching de Vida y Liderazgo">Coaching de Vida / Personal</option>
                      <option value="Evaluación Psicológica">Evaluación Clínica / Despestaje</option>
                    </select>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 animate-fade-in" id="form-corporate-params">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300">Nombre de la Empresa</label>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Ej. Rímac, Antamina, etc."
                        className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all text-slate-100 placeholder:text-slate-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300">Servicio Corporativo Requerido</label>
                      <select
                        value={corporateNeed}
                        onChange={(e) => setCorporateNeed(e.target.value)}
                        className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all font-medium text-slate-100"
                      >
                        <option value="Evaluaciones Psicológicas">Evaluaciones Psicológicas Organizacionales</option>
                        <option value="Talleres en SBS y SST">Talleres de SBC / SST</option>
                        <option value="Capacitación en Hostigamiento Sexual">Prevención de Hostigamiento Sexual Laboral</option>
                        <option value="Desarrollo de Habilidades Blandas">Talleres de Habilidades Blandas / Liderazgo</option>
                        <option value="Sesiones Psicológicas y Coaching Empleados">Psicología & Coaching para Colaboradores</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300">Tamaño Estimado del Equipo</label>
                      <select
                        value={employeeCount}
                        onChange={(e) => setEmployeeCount(e.target.value)}
                        className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all font-medium text-slate-100"
                      >
                        <option value="1-10">1 a 10 colaboradores</option>
                        <option value="11-50">11 a 50 colaboradores</option>
                        <option value="51-200">51 a 200 colaboradores</option>
                        <option value="200+">Más de 200 colaboradores</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300">Ubicación del Servicio</label>
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        <button
                          type="button"
                          onClick={() => setLocationType('lima')}
                          className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                            locationType === 'lima'
                              ? 'bg-brand-orange text-slate-950 border-brand-orange'
                              : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-900'
                          }`}
                        >
                          Lima Metropolitana
                        </button>
                        <button
                          type="button"
                          onClick={() => setLocationType('provincias')}
                          className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                            locationType === 'provincias'
                              ? 'bg-brand-orange text-slate-950 border-brand-orange'
                              : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-900'
                          }`}
                        >
                          Provincias (Todo el Perú)
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Standard contact inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" id="form-contact-fields">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">Su Nombre *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Juan Pérez"
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all text-slate-100 placeholder:text-slate-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">Su Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ej. juan@correo.com"
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all text-slate-100 placeholder:text-slate-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">Su Teléfono / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ej. +51 999 999 999"
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all text-slate-100 placeholder:text-slate-500"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">Comentarios Adicionales</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  placeholder="Escriba aquí cualquier detalle adicional, horarios de preferencia o requerimientos particulares..."
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all text-slate-100 placeholder:text-slate-500"
                ></textarea>
              </div>

              {/* Google Sheets Integration Segment */}
              <div className="p-5 bg-slate-950/50 rounded-2xl border border-slate-800/80 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-slate-300">
                    <FileSpreadsheet className="w-5 h-5 text-brand-orange shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider">Conectar Google Sheets</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowSheetsGuide(!showSheetsGuide)}
                    className="text-xs text-brand-orange hover:underline flex items-center gap-1"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>{showSheetsGuide ? 'Ocultar Guía' : 'Ver Guía de Conexión'}</span>
                  </button>
                </div>

                {showSheetsGuide && (
                  <div className="space-y-3 bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-400 animate-fade-in">
                    <p className="font-bold text-white mb-1 text-[11px]">Guía paso a paso en 1 Minuto para tu Hoja de Cálculo:</p>
                    <ol className="list-decimal list-inside space-y-1.5 leading-relaxed font-light text-[11px]">
                      <li>
                        Abre tu Google Sheet oficial:{' '}
                        <a 
                          href="https://docs.google.com/spreadsheets/d/1e9uBfo30ChdOQ3b9U4YVDqV1MAdgBWTHjLY-0UK5-xM/edit?gid=0#gid=0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-orange hover:underline break-all font-mono"
                        >
                          docs.google.com/spreadsheets/...
                        </a>
                      </li>
                      <li>Haz clic en el link y llena los datos <strong>Extensiones &gt; Apps Script</strong>.</li>
                    </ol>

                    <div className="relative mt-2">
                      <pre className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-[10px] font-mono text-slate-300 overflow-x-auto max-h-[140px] leading-tight">
                        {appsScriptCode}
                      </pre>
                      <button
                        type="button"
                        onClick={copyCodeToClipboard}
                        className="absolute top-2 right-2 bg-brand-orange hover:bg-brand-orange-hover text-slate-950 px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1 transition-all"
                      >
                        <Copy className="w-3 h-3" />
                        <span>{copiedCode ? '¡Copiado!' : 'Copiar'}</span>
                      </button>
                    </div>

                    <ol className="list-decimal list-inside space-y-1.5 leading-relaxed font-light text-[11px]" start={4}>
                      <li>Yape al 949958214, no olvides escribir por wsp.</li>
                    </ol>
                  </div>
                )}

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-bold text-slate-300">URL del Script de Google Sheets (Opcional)</label>
                    {sheetsUrl && (
                      <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Conectado
                      </span>
                    )}
                  </div>
                  <input
                    type="url"
                    value={sheetsUrl}
                    onChange={(e) => {
                      setSheetsUrl(e.target.value);
                      localStorage.setItem('lector_sheets_url', e.target.value);
                    }}
                    placeholder="Pega aquí la URL de tu aplicación web (Apps Script)"
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all text-slate-100 placeholder:text-slate-600"
                  />
                  <p className="text-[10px] text-slate-500 font-light leading-normal">
                    Nos contactaremos contigo tan pronto como nos sea posible.
                  </p>
                </div>

                {sheetsStatus === 'sending' && (
                  <div className="text-xs text-brand-orange animate-pulse flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 shrink-0" /> Guardando en Google Sheets de forma automática...
                  </div>
                )}
                {sheetsStatus === 'success' && (
                  <div className="text-xs text-emerald-400 flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> ¡Guardado con éxito en tu Google Sheet!
                  </div>
                )}
                {sheetsStatus === 'error' && (
                  <div className="text-xs text-red-400 flex items-center gap-1.5 font-medium">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" /> Error al conectar con tu script. Asegúrate de haber publicado como 'Cualquiera'.
                  </div>
                )}
              </div>

              {/* Submit triggers */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4" id="form-submit-actions">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl text-sm font-bold flex items-center justify-center space-x-2 transition-all active:scale-95 shadow-md border border-slate-700"
                  id="form-email-btn"
                >
                  <Send className="w-4 h-4" />
                  <span>Redactar Correo de Solicitud</span>
                </button>
                <span className="text-xs text-slate-500 font-medium">o alternativamente</span>
                <a 
                  href={PSYCHOLOGIST_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-slate-950 px-8 py-4 rounded-xl text-sm font-bold flex items-center justify-center space-x-2 transition-all active:scale-95 shadow-md"
                  id="form-whatsapp-alternative"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar por WhatsApp</span>
                </a>
              </div>

              {submitted && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-start space-x-3 text-emerald-300 animate-fade-in" id="form-success-banner">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold">¡Solicitud Procesada!</p>
                    <p className="text-xs text-emerald-400 mt-1 leading-relaxed">
                      Se ha abierto su cliente de correo electrónico para enviar la solicitud al Mg. Miguel Angel Del Campo. Si desea un contacto aún más rápido, recuerde dar clic en el botón de WhatsApp.
                    </p>
                  </div>
                </div>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
