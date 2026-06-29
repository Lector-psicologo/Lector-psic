/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  HardHat, 
  HeartHandshake, 
  TrendingUp, 
  CheckCircle2, 
  Users, 
  FileSpreadsheet,
  Calendar,
  AlertTriangle,
  Award,
  HelpCircle
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import { PSYCHOLOGIST_INFO } from '../data';

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export default function CorporateDossier() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Servicios Corporativos",
      subtitle: "Mg. Miguel Angel Del Campo Vargas",
      content: (
        <div className="flex flex-col items-center justify-center text-center h-full p-6 space-y-6">
          <div className="w-24 h-24 rounded-full bg-brand-orange/10 flex items-center justify-center border border-brand-orange/20 animate-pulse">
            <Award className="w-12 h-12 text-brand-orange" />
          </div>
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display">
              PS. MIGUEL ANGEL DEL CAMPO
            </h1>
            <p className="text-brand-orange uppercase text-xs sm:text-sm tracking-widest font-bold">
              Psicólogo Organizacional & Clínico • C.Ps.P. 25871
            </p>
          </div>
          <div className="max-w-md text-slate-400 text-sm font-light leading-relaxed">
            Dossier de soluciones estratégicas para la mitigación del riesgo psicosocial, desarrollo de habilidades blandas y programas de bienestar integral.
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "¿Quién Soy?",
      subtitle: "Experiencia y Trayectoria Colegiada",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full p-4">
          <div className="md:col-span-4 flex justify-center">
            <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-slate-800 shadow-xl bg-slate-950">
              <img 
                src="/input_file_0.png" 
                alt="Ps. Miguel Angel Del Campo" 
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80';
                }}
              />
            </div>
          </div>
          <div className="md:col-span-8 space-y-4">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Soy psicólogo colegiado con el registro <strong className="text-white">CPSP 25871</strong>, Magíster, psicoterapeuta, conferencista y capacitador con <strong className="text-brand-orange">más de 12 años de experiencia</strong> diseñando y ejecutando talleres enfocados en la salud mental y en el desarrollo personal y organizacional.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Además, he sido conductor en televisión por cable del programa <strong className="text-white">"Latidos Azules"</strong>, espacio enfocado en fomentar la psicoeducación y apoyo a padres con hijos con autismo y cuidadores en todo el país.
            </p>
            <div className="flex items-center space-x-2 text-xs text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-lg border border-brand-orange/20 w-max">
              <span>Habilitado y Colegiado por el Colegio de Psicólogos del Perú</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Nuestros Servicios",
      subtitle: "Un Portafolio de Base Científica",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 h-full items-center">
          {[
            { title: "Monitoreo de Riesgo Psicosocial", desc: "Cumplimiento normativo y evaluación sistemática de factores estresores." },
            { title: "Consultoría Psicológica y Psicoterapia", desc: "Atención individual y grupal basada en Terapia Cognitivo-Conductual." },
            { title: "Talleres Psicoemocionales", desc: "Desarrollo estratégico de resiliencia, control de estrés y burnout." },
            { title: "Servicios Ad Hoc a Solicitud", desc: "Programas 100% personalizados según las necesidades de la empresa." }
          ].map((srv, idx) => (
            <div key={idx} className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 space-y-1">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
                {srv.title}
              </h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed pl-4">{srv.desc}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 4,
      title: "Monitoreo de Riesgo Psicosocial",
      subtitle: "SST & Cumplimiento Normativo de Ley",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 h-full items-center">
          <div className="space-y-4">
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              La medición de factores de riesgo psicosocial es indispensable para diagnosticar y prevenir enfermedades ocupacionales, absentismo y rotación.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Aplicación de pruebas virtuales y/o presenciales y entrevistas diagnósticas.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Entrega de informe estadístico detallado y recomendaciones de intervención.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Capacitaciones preventivas orientadas a la mejora del clima laboral.</span>
              </li>
            </ul>
          </div>
          <div className="bg-brand-orange/5 border border-brand-orange/20 rounded-3xl p-6 text-center space-y-3">
            <p className="text-xs text-brand-orange uppercase tracking-wider font-bold">Tarifa Corporativa</p>
            <p className="text-4xl font-black text-white font-display">S/ 5.00 <span className="text-sm font-normal text-slate-400">soles</span></p>
            <p className="text-xs text-slate-400 font-light">Por persona / colaborador evaluado.</p>
            <p className="text-[10px] text-slate-500 italic pt-2 border-t border-slate-800">Sujeto a volumen de planilla. Aplican términos y condiciones.</p>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Consulta Psicológica y Psicoterapia",
      subtitle: "Atención Terapéutica Personalizada",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 h-full items-center">
          <div className="space-y-4">
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              Asistencia psicoterapéutica bajo el enfoque clínico estándar de mayor respaldo científico mundial: el enfoque Cognitivo-Conductual.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Modalidad Flexible: Sesiones Presenciales, Virtuales o Sesiones Innovadoras en la Playa para descompresión profunda.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Incluye la aplicación de test psicológicos e informes de progreso.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Enfoque directo en la solución de problemas reales.</span>
              </li>
            </ul>
          </div>
          <div className="bg-brand-orange/5 border border-brand-orange/20 rounded-3xl p-6 text-center space-y-3">
            <p className="text-xs text-brand-orange uppercase tracking-wider font-bold">Inversión Individual</p>
            <p className="text-4xl font-black text-white font-display">S/ 100.00 <span className="text-sm font-normal text-slate-400">soles</span></p>
            <p className="text-xs text-slate-400 font-light">Por sesión personalizada presencial / virtual.</p>
            <p className="text-[10px] text-slate-500 italic pt-2 border-t border-slate-800">Tarifa social y corporativa disponible previa coordinación.</p>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Talleres y Habilidades Blandas",
      subtitle: "Capacitaciones Grupales de Alto Rendimiento",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-4 h-full items-center">
          <div className="md:col-span-8 space-y-3">
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Catálogo de talleres prácticos para impulsar el talento y salvaguardar la salud mental de sus colaboradores:
            </p>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400">
              <div className="space-y-1">
                <p>• Comunicación Asertiva</p>
                <p>• Gestión Estratégica del Estrés</p>
                <p>• Prevención de Ansiedad/Depresión</p>
                <p>• Liderazgo y Gestión de Equipos</p>
              </div>
              <div className="space-y-1">
                <p>• Crianza Positiva (Cuidadores)</p>
                <p>• Inteligencia Emocional</p>
                <p>• Creencias Limitantes y Team Building</p>
                <p>• Coaching de Proyecto de Vida</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 bg-brand-orange/5 border border-brand-orange/20 rounded-3xl p-5 text-center space-y-2">
            <p className="text-xs text-brand-orange uppercase tracking-wider font-bold">Tarifa Ponencia</p>
            <p className="text-3xl font-black text-white font-display">S/ 230.00</p>
            <p className="text-[10px] text-slate-400">Soles la hora de capacitación.</p>
            <p className="text-[9px] text-slate-500 italic border-t border-slate-800 pt-1.5 mt-1.5">No incluye gastos de traslado a provincias.</p>
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "Proceso de Contratación",
      subtitle: "Simple, Profesional y Estructurado",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 h-full items-stretch">
          {[
            { step: "01", title: "Contacto Inicial", desc: "Comuníquese al +51 949 958 214 o envíe su requerimiento por la web para agendar una reunión de coordinación inmediata." },
            { step: "02", title: "Coordinación y Diseño", desc: "Durante la reunión dejamos en claro las necesidades específicas del cliente, la fecha tentativa, el presupuesto y las políticas de pago correspondientes." },
            { step: "03", title: "Ejecución Eficaz", desc: "Se efectúa el requerimiento con el más alto rigor científico, garantizando informes detallados y un trato colegiado ejemplar." }
          ].map((st, idx) => (
            <div key={idx} className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
              <span className="text-2xl font-black text-brand-orange font-mono">{st.step}</span>
              <div className="space-y-1.5 mt-3">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">{st.title}</h4>
                <p className="text-[11px] text-slate-400 font-light leading-relaxed">{st.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 8,
      title: "Cifras sobre Salud Mental",
      subtitle: "La Importancia del Cuidado Preventivo",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 h-full items-center">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center space-y-2">
            <p className="text-3xl sm:text-4xl font-extrabold text-brand-orange font-display">8 / 10</p>
            <p className="text-xs font-bold text-white">Trabajadores sufren de Burnout</p>
            <p className="text-[11px] text-slate-400 leading-relaxed font-light">
              Según estadísticas publicadas por el Diario Gestión en el Perú, con graves repercusiones en trastornos de ansiedad, afectivos y alimentarios.
            </p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center space-y-2">
            <p className="text-3xl sm:text-4xl font-extrabold text-brand-orange font-display">280,000</p>
            <p className="text-xs font-bold text-white">Personas atendidas por el MINSA</p>
            <p className="text-[11px] text-slate-400 leading-relaxed font-light">
              Registradas oficialmente durante el año 2023 debido a problemas de salud mental en el país, mostrando una tendencia que va en preocupante aumento.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 9,
      title: "Términos y Condiciones",
      subtitle: "Transparencia Profesional Asegurada",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-4 h-full items-center">
          <div className="md:col-span-4 flex justify-center">
            <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center border border-amber-500/20">
              <AlertTriangle className="w-10 h-10 text-brand-orange" />
            </div>
          </div>
          <div className="md:col-span-8 space-y-4">
            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                Las tarifas corporativas presentadas no incluyen la póliza SCTR.
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                Los precios de ponencias y talleres no incluyen traslados ni viáticos para servicios en Provincia.
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                El presupuesto base no incluye derechos de grabación ni reproducción del material dictado.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800">
              <p className="text-xs font-bold text-white uppercase tracking-wider">Información Legal:</p>
              <p className="text-[11px] text-slate-400 mt-1">RUC: <strong className="text-white">10476129741</strong> • PS. MIGUEL ANGEL DEL CAMPO VARGAS</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Generate dynamic premium PDF presentation with jsPDF
  const generatePDF = () => {
    setIsGenerating(true);
    try {
      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      // Slide 1: Cover
      doc.setFillColor(15, 23, 42); // slate-900
      doc.rect(0, 0, 297, 210, 'F');
      
      doc.setDrawColor(249, 115, 22); // brand orange border line
      doc.setLineWidth(1.5);
      doc.line(20, 20, 277, 20);
      doc.line(20, 190, 277, 190);

      doc.setTextColor(249, 115, 22);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(28);
      doc.text("PS. MIGUEL ANGEL DEL CAMPO", 148, 85, { align: "center" });
      
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(18);
      doc.text("SERVICIOS CORPORATIVOS & CLÍNICOS", 148, 105, { align: "center" });

      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.setTextColor(148, 163, 184);
      doc.text("C.Ps.P. 25871 | Soluciones de Base Científica en Salud Mental", 148, 120, { align: "center" });
      doc.text("Contacto: +51 949 958 214 | miguelangel.delcampo@outlook.com", 148, 130, { align: "center" });

      // Slide 2: About
      doc.addPage();
      doc.setFillColor(15, 23, 42);
      doc.rect(0, 0, 297, 210, 'F');
      doc.setTextColor(249, 115, 22);
      doc.setFontSize(22);
      doc.text("¿QUIÉN SOY?", 20, 35);
      
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text("Experiencia, rigor científico y vocación", 20, 45);
      
      doc.setFont("helvetica", "normal");
      doc.setTextColor(203, 213, 225);
      const textAbout1 = "Psicologo (CPSP 25871), Magister, psicoterapeuta, conferencista y capacitador, con mas de 12 anos de experiencia disenando y ejecutando talleres enfocados en la salud mental y en el desarrollo personal y organizacional.";
      const textAbout2 = "Ademas, he sido conductor en television por cable en el programa 'Latidos Azules', el cual fomenta la psicoeducacion para padres con hijos con autismo y cuidadores en todo el pais.";
      
      doc.text(doc.splitTextToSize(textAbout1, 250), 20, 65);
      doc.text(doc.splitTextToSize(textAbout2, 250), 20, 95);

      // Slide 3: Portfolio
      doc.addPage();
      doc.setFillColor(15, 23, 42);
      doc.rect(0, 0, 297, 210, 'F');
      doc.setTextColor(249, 115, 22);
      doc.setFontSize(22);
      doc.text("PORTAFOLIO DE SERVICIOS", 20, 35);

      doc.setTextColor(255, 255, 255);
      doc.setFontSize(14);
      doc.text("1. Monitoreo de Riesgo Psicosocial", 20, 55);
      doc.setFontSize(11);
      doc.setTextColor(148, 163, 184);
      doc.text("  - Aplicacion de la prueba virtual y/o presencial, entrevistas diagnosticas.", 20, 62);
      doc.text("  - Informe detallado estadistico con conclusiones ejecutivas.", 20, 68);
      doc.text("  - Capacitacion preventivas directas al personal.", 20, 74);

      doc.setTextColor(255, 255, 255);
      doc.setFontSize(14);
      doc.text("2. Servicio de Consulta Psicologica y Psicoterapia", 20, 88);
      doc.setFontSize(11);
      doc.setTextColor(148, 163, 184);
      doc.text("  - Sesion personalizada (Presencial, virtual o de descompresion innovadora en la playa).", 20, 95);
      doc.text("  - Aplicacion de test psicologicos e informes clinicos formales.", 20, 101);
      doc.text("  - Psicoterapia Cognitivo-Conductual cientificamente validada.", 20, 107);

      doc.setTextColor(255, 255, 255);
      doc.setFontSize(14);
      doc.text("3. Talleres Psicoemocionales y de Habilidades Blandas", 20, 121);
      doc.setFontSize(11);
      doc.setTextColor(148, 163, 184);
      doc.text("  - Comunicacion asertiva, gestion del tiempo, control de estres y Burnout.", 20, 128);
      doc.text("  - Inteligencia emocional, liderazgo, creencias limitantes y dinámicas de Team Building.", 20, 134);

      // Slide 4: Cost/Rates
      doc.addPage();
      doc.setFillColor(15, 23, 42);
      doc.rect(0, 0, 297, 210, 'F');
      doc.setTextColor(249, 115, 22);
      doc.setFontSize(22);
      doc.text("CUADRO DE TARIFAS Y PRESUPUESTO", 20, 35);

      doc.setFillColor(30, 41, 59);
      doc.rect(20, 50, 257, 120, 'F');

      doc.setTextColor(255, 255, 255);
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text("SERVICIO", 30, 62);
      doc.text("UNIDAD DE MEDIDA", 140, 62);
      doc.text("TARIFA BASE", 220, 62);

      doc.setDrawColor(71, 85, 105);
      doc.line(25, 68, 272, 68);

      doc.setFont("helvetica", "normal");
      doc.setTextColor(203, 213, 225);
      doc.text("Monitoreo de Riesgo Psicosocial", 30, 80);
      doc.text("Por persona evaluada", 140, 80);
      doc.text("Desde S/ 5.00 soles", 220, 80);

      doc.line(25, 88, 272, 88);

      doc.text("Consulta Psicologica / Psicoterapia", 30, 100);
      doc.text("Por sesion (1 hora)", 140, 100);
      doc.text("Desde S/ 100.00 soles", 220, 100);

      doc.line(25, 108, 272, 108);

      doc.text("Talleres y Habilidades Blandas", 30, 120);
      doc.text("Por hora de ponencia", 140, 120);
      doc.text("Desde S/ 230.00 soles", 220, 120);

      doc.line(25, 128, 272, 128);

      doc.text("Servicio ad hoc", 30, 140);
      doc.text("Segun requerimiento", 140, 140);
      doc.text("A cotizar", 220, 140);

      // Slide 5: Hiring process and terms
      doc.addPage();
      doc.setFillColor(15, 23, 42);
      doc.rect(0, 0, 297, 210, 'F');
      doc.setTextColor(249, 115, 22);
      doc.setFontSize(22);
      doc.text("PROCESO DE CONTRATACIÓN & TÉRMINOS", 20, 35);

      doc.setTextColor(255, 255, 255);
      doc.setFontSize(13);
      doc.text("Proceso en 3 Pasos:", 20, 52);
      
      doc.setFontSize(10);
      doc.setTextColor(203, 213, 225);
      doc.text("Paso 1: Contactar al telefono 949 958 214 para indicar requerimiento y agendar coordinacion.", 20, 62);
      doc.text("Paso 2: En la reunion se definen objetivos del cliente, fecha tentativa, presupuesto y politicas.", 20, 70);
      doc.text("Paso 3: Se efectua el requerimiento formal con el maximo rigor cientifico y etico.", 20, 78);

      doc.setTextColor(249, 115, 22);
      doc.setFontSize(13);
      doc.text("Terminos y Condiciones Generales:", 20, 96);

      doc.setFontSize(10);
      doc.setTextColor(148, 163, 184);
      doc.text("- Los precios de ponencias y monitoreos no incluyen poliza SCTR laboral.", 20, 106);
      doc.text("- Los precios presentados no incluyen traslados ni viaticos de viaje para Provincias.", 20, 114);
      doc.text("- El presupuesto base de talleres no incluye derechos de grabacion ni redistribucion.", 20, 122);
      doc.text("- Emision de comprobante de pago bajo Regimen Legal de Persona Natural con RUC.", 20, 130);

      doc.setDrawColor(249, 115, 22);
      doc.line(20, 145, 277, 145);
      
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(11);
      doc.text("PS. MIGUEL ANGEL DEL CAMPO VARGAS | RUC: 10476129741", 20, 155);
      doc.text("Habilitado C.Ps.P. 25871 | Atencion Nacional las 24 horas del dia, de Lunes a Domingo", 20, 163);

      doc.save(`Dossier_Corporativo_Miguel_Del_Campo.pdf`);
    } catch (err) {
      console.error(err);
      alert('Error al generar el PDF. Por favor inténtelo de nuevo.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="dossier" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      {/* Decorative ambient backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/5 rounded-full filter blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16" id="dossier-header">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/15 border border-brand-orange/30 px-3 py-1.5 rounded-full inline-block">
            Documentación Profesional
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Presentación de <span className="text-brand-orange">Servicios Corporativos</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            Consulte y descargue de manera inmediata nuestro dossier ejecutivo oficial con tarifas base estructuradas, proceso de contratación y términos legales.
          </p>
        </div>

        {/* Interactive PDF Slide Viewer */}
        <div className="max-w-4xl mx-auto bg-slate-900/60 backdrop-blur-md rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col justify-between" id="dossier-viewer-container">
          
          {/* Header Bar */}
          <div className="bg-slate-950/80 border-b border-slate-800/80 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center border border-brand-orange/20">
                <FileText className="w-4 h-4 text-brand-orange" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Dossier Interactivo Oficial</p>
                <p className="text-[10px] text-slate-500 font-light mt-0.5">Slide {currentSlide + 1} de {slides.length} • {slides[currentSlide].subtitle || 'Información de Servicios'}</p>
              </div>
            </div>
            
            <button
              onClick={generatePDF}
              disabled={isGenerating}
              className="bg-brand-orange hover:bg-brand-orange-hover text-slate-950 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center space-x-2 transition-all hover:shadow-lg hover:shadow-brand-orange/10 active:scale-95 disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isGenerating ? 'Generando...' : 'Descargar Dossier (PDF)'}</span>
            </button>
          </div>

          {/* Slide Stage */}
          <div className="min-h-[380px] sm:min-h-[320px] p-6 sm:p-10 flex items-center justify-center bg-slate-950/40 relative">
            <div className="w-full h-full animate-fade-in" key={currentSlide}>
              <p className="text-[10px] text-brand-orange font-bold uppercase tracking-widest mb-2 border-b border-slate-800/50 pb-2">
                {slides[currentSlide].title}
              </p>
              {slides[currentSlide].content}
            </div>
          </div>

          {/* Controls Footer */}
          <div className="bg-slate-950/80 border-t border-slate-800/80 px-6 py-4 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-light">
              RUC 10476129741 • Habilitado
            </span>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-xl flex items-center justify-center border border-slate-800 transition-all active:scale-95"
                title="Slide Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex space-x-1">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentSlide ? 'w-5 bg-brand-orange' : 'w-1.5 bg-slate-800 hover:bg-slate-700'
                    }`}
                    title={`Ver slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-10 h-10 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-xl flex items-center justify-center border border-slate-800 transition-all active:scale-95"
                title="Slide Siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
