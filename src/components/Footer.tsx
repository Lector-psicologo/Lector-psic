/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, Clock, MapPin, Youtube, ShieldCheck, Heart, Facebook, Instagram } from 'lucide-react';
import { PSYCHOLOGIST_INFO } from '../data';

export default function Footer() {
  const [logoError, setLogoError] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-900" id="footer-upper-grid">
          
          {/* Column 1: Brand details & Logo */}
          <div className="md:col-span-5 space-y-6" id="footer-brand-col">
            <a href="#inicio" className="flex items-center space-x-3 group" id="footer-logo-link">
              <div className="relative w-12 h-12 flex items-center justify-center rounded-lg bg-slate-950 p-1 border border-brand-orange/20 overflow-hidden">
                {!logoError ? (
                  <img
                    src="/input_file_0.png"
                    alt="Lector Psicólogo Logo"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <span className="text-xl font-bold text-brand-orange">LP</span>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold font-display text-white tracking-wide leading-none group-hover:text-brand-orange transition-colors">
                  LECTOR
                </span>
                <span className="text-sm font-semibold font-display text-brand-orange leading-none tracking-wider mt-1">
                  PSICÓLOGO
                </span>
                <span className="text-[9px] text-slate-400 tracking-[0.15em] uppercase leading-none mt-1">
                  Libros • Ciencia • Mente
                </span>
              </div>
            </a>
            
            <p className="text-sm text-slate-300 font-light leading-relaxed max-w-sm">
              Servicios profesionales de psicoterapia cognitivo-conductual de vanguardia y programas estratégicos de habilidades blandas para personas y empresas a nivel nacional.
            </p>

            <div className="flex items-center space-x-2 text-slate-300 bg-slate-900/60 border border-slate-800 px-3.5 py-2 rounded-2xl w-fit">
              <ShieldCheck className="w-5 h-5 text-brand-orange shrink-0" />
              <span className="text-xs font-semibold">C.Ps.P. {PSYCHOLOGIST_INFO.license.replace(/\D/g, '')} • Habilitado</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-6" id="footer-links-col">
            <h4 className="text-sm font-bold font-display uppercase tracking-widest text-white">
              Navegación
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#inicio" className="hover:text-brand-orange transition-colors font-light">Inicio</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-brand-orange transition-colors font-light">Nuestros Servicios</a>
              </li>
              <li>
                <a href="#trayectoria" className="hover:text-brand-orange transition-colors font-light">Biografía Profesional</a>
              </li>
              <li>
                <a href="#contenido" className="hover:text-brand-orange transition-colors font-light">Canal de Divulgación</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-brand-orange transition-colors font-light">Canales de Contacto</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details & Coverage */}
          <div className="md:col-span-4 space-y-6" id="footer-contact-col">
            <h4 className="text-sm font-bold font-display uppercase tracking-widest text-white">
              Atención 24/7
            </h4>
            
            <div className="space-y-4 text-sm" id="footer-contact-details">
              <a 
                href={`tel:${PSYCHOLOGIST_INFO.phone.replace(/\s+/g, '')}`} 
                className="flex items-center space-x-3 hover:text-white transition-colors"
                id="footer-phone-call"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                <span className="font-light">{PSYCHOLOGIST_INFO.phone}</span>
              </a>

              <a 
                href={`mailto:${PSYCHOLOGIST_INFO.email}`} 
                className="flex items-center space-x-3 hover:text-white transition-colors"
                id="footer-email-send"
              >
                <Mail className="w-4 h-4 text-brand-orange" />
                <span className="font-light truncate">{PSYCHOLOGIST_INFO.email}</span>
              </a>

              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span className="font-light">
                  Cobertura completa para Lima y provincias (Atención virtual y presencial programada).
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-brand-orange" />
                <span className="font-light text-slate-300">Lunes a Domingo — 24 horas del día</span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower row: Disclosures, License & Copyright */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-light" id="footer-lower-disclosures">
          <div className="space-y-2 text-center md:text-left max-w-3xl">
            <p>
              © {currentYear} Lector Psicólogo. Todos los derechos reservados. Desarrollado con los más altos estándares de excelencia profesional.
            </p>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              <strong>Aviso legal:</strong> El psicólogo Miguel Angel del Campo está colegiado bajo el registro oficial C.Ps.P. 25871. La información en esta plataforma tiene fines informativos y de enlace para servicios profesionales; no sustituye la evaluación clínica formal. Los tratamientos se rigen por el código de ética del Colegio de Psicólogos del Perú y metodologías científicas de la Terapia Cognitivo-Conductual (TCC).
            </p>
          </div>
          
          {/* Social icons */}
          <div className="flex items-center space-x-4 shrink-0" id="footer-social-icons">
            <a 
              href={PSYCHOLOGIST_INFO.facebookUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-900 hover:bg-blue-600 hover:text-white hover:border-blue-600 rounded-xl flex items-center justify-center transition-all border border-slate-800 shadow-md"
              title="Sigue a Lector Psicólogo en Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href={PSYCHOLOGIST_INFO.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-900 hover:bg-pink-600 hover:text-white hover:border-pink-600 rounded-xl flex items-center justify-center transition-all border border-slate-800 shadow-md"
              title="Sigue a Lector Psicólogo en Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href={PSYCHOLOGIST_INFO.youtubeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-900 hover:bg-red-600 hover:text-white hover:border-red-600 rounded-xl flex items-center justify-center transition-all border border-slate-800 shadow-md"
              title="Sigue a Lector Psicólogo en YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
