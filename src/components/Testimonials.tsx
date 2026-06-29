/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Quote, Star, ArrowRight } from 'lucide-react';
import { TESTIMONIALS_DATA, PSYCHOLOGIST_INFO } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-slate-900/20 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16" id="testimonials-header">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/15 border border-brand-orange/35 px-3 py-1.5 rounded-full inline-block">
            Garantía de Confianza
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Casos de <span className="text-brand-orange">Éxito y Respaldo</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            Conozca las opiniones de pacientes individuales e instituciones corporativas que han confiado en la asesoría del Mg. Miguel Angel Del Campo.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-cards-grid">
          {TESTIMONIALS_DATA.map((item) => (
            <div 
              key={item.id}
              className="bg-slate-900/60 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 relative flex flex-col justify-between h-full hover:shadow-lg transition-all duration-300"
              id={`testimonial-card-${item.id}`}
            >
              {/* Quote marks */}
              <div className="absolute top-6 right-8 opacity-10">
                <Quote className="w-16 h-16 text-brand-orange" />
              </div>

              <div className="space-y-4 relative">
                {/* Five gold stars */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-light italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white font-display">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA trust bar */}
        <div className="bg-slate-900/70 rounded-3xl p-6 md:p-8 mt-16 text-center max-w-4xl mx-auto border border-slate-800" id="testimonials-trust-bar">
          <p className="text-sm text-slate-300 leading-relaxed font-light">
            🔒 <strong className="text-brand-orange font-semibold">Ética, Secreto Profesional y Confidencialidad:</strong> Toda consulta psicológica y corporativa con el <strong className="text-white">Mg. Miguel Angel Del Campo (C.Ps.P. 25871)</strong> se rige estrictamente por la Ley de Trabajo del Psicólogo en el Perú y los códigos éticos de la salud mental.
          </p>
        </div>

      </div>
    </section>
  );
}
