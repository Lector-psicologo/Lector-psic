/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Award, ShieldCheck, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { PSYCHOLOGIST_INFO } from '../data';

export default function Hero() {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section id="inicio" className="relative pt-28 lg:pt-36 pb-20 bg-gradient-to-b from-brand-indigo via-brand-indigo to-brand-indigo-dark text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full filter blur-3xl -z-10 animate-pulse duration-5000"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-indigo-light/10 rounded-full filter blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text/Info Side */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left" id="hero-text-content">
            {/* Slogan pill */}
            <div className="inline-flex items-center space-x-2 bg-brand-orange/15 border border-brand-orange/30 px-3 py-1.5 rounded-full text-brand-orange text-xs font-semibold uppercase tracking-wider animate-fade-in" id="hero-slogan-pill">
              <span className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-ping"></span>
              <span>{PSYCHOLOGIST_INFO.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-tight tracking-tight text-white" id="hero-title">
              Salud Mental Basada en <span className="text-brand-orange text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">Evidencia</span> y Liderazgo
            </h1>

            {/* Intro */}
            <p className="text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed" id="hero-description">
              Soy <span className="text-white font-semibold">{PSYCHOLOGIST_INFO.name}</span> (C.Ps.P. {PSYCHOLOGIST_INFO.license.replace(/\D/g, '')}), psicoterapeuta cognitivo-conductual con más de 11 años de trayectoria clínica y consultoría empresarial. Ayudo a personas y organizaciones a desarrollar su máximo potencial.
            </p>

            {/* Quick trust badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0 pt-2 text-left" id="hero-badges-grid">
              <div className="flex items-center space-x-2 text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-sm font-medium">Terapia Cognitivo-Conductual</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-200">
                <Award className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-sm font-medium">Magíster por la UPC</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-200">
                <ShieldCheck className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-sm font-medium">Atención Colegiada Especializada</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-sm font-medium">Atención 24/7 Lima y Provincias</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4" id="hero-cta-buttons">
              <a
                href={PSYCHOLOGIST_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center space-x-3 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-brand-orange/20 active:scale-95"
                id="hero-whatsapp-btn"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Agendar por WhatsApp</span>
              </a>
              <a
                href="#servicios"
                className="w-full sm:w-auto bg-brand-indigo-light/30 hover:bg-brand-indigo-light/50 border border-brand-indigo-light/50 text-white px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center space-x-2 transition-all active:scale-95"
                id="hero-explore-btn"
              >
                <span>Nuestros Servicios</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Image/Photo Side */}
          <div className="lg:col-span-5 flex justify-center" id="hero-image-wrapper">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-orange-400 rounded-3xl transform rotate-3 scale-[1.01] -z-10 opacity-70"></div>
              <div className="absolute inset-0 bg-brand-indigo-dark rounded-3xl transform -rotate-3 scale-[0.99] -z-20"></div>

              {/* Main Image Frame */}
              <div className="relative overflow-hidden rounded-3xl bg-brand-indigo-dark aspect-[4/5] shadow-2xl border border-white/10">
                {!photoError ? (
                  <img
                    src="/input_file_1.png"
                    alt={PSYCHOLOGIST_INFO.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={() => setPhotoError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-brand-indigo-light/20">
                    <Award className="w-16 h-16 text-brand-orange mb-4" />
                    <p className="text-lg font-bold font-display">{PSYCHOLOGIST_INFO.name}</p>
                    <p className="text-xs text-slate-400 mt-1">{PSYCHOLOGIST_INFO.license}</p>
                  </div>
                )}

                {/* Info Overlay Panel */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 text-left">
                  <span className="text-xs text-brand-orange font-bold uppercase tracking-wider">Psicólogo Colegiado</span>
                  <h3 className="text-xl font-bold font-display text-white mt-0.5">{PSYCHOLOGIST_INFO.name}</h3>
                  <p className="text-xs text-slate-300 font-medium mt-1">C.Ps.P. {PSYCHOLOGIST_INFO.license.replace(/\D/g, '')} • Magíster por la UPC</p>
                </div>
              </div>

              {/* Decorative mini badges */}
              <div className="absolute -bottom-4 -right-4 bg-white text-slate-900 rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 leading-none">Experiencia</p>
                  <p className="text-sm font-bold text-slate-900 mt-1 leading-none">11+ Años Clínico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
