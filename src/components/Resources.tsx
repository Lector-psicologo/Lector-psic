/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Youtube, BookOpen, BrainCircuit, Microscope, Play, ExternalLink, Users } from 'lucide-react';
import { VIDEOS_DATA, PSYCHOLOGIST_INFO } from '../data';

export default function Resources() {
  const brandPillars = [
    {
      id: 'pillar-libros',
      icon: <BookOpen className="w-8 h-8 text-white" />,
      title: "Libros",
      color: "bg-sky-600",
      desc: "Análisis y recomendaciones de literatura especializada en psicología, neurociencias y crecimiento personal."
    },
    {
      id: 'pillar-ciencia',
      icon: <Microscope className="w-8 h-8 text-white" />,
      title: "Ciencia",
      color: "bg-brand-orange",
      desc: "Divulgación de investigaciones científicas y teorías de la terapia cognitivo-conductual explicadas de forma comprensible."
    },
    {
      id: 'pillar-mente',
      icon: <BrainCircuit className="w-8 h-8 text-white" />,
      title: "Mente",
      color: "bg-emerald-600",
      desc: "Herramientas prácticas para mejorar la inteligencia emocional, relaciones sociales, resiliencia y bienestar mental."
    }
  ];

  return (
    <section id="contenido" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16" id="resources-header">
          <div className="inline-flex items-center space-x-2 bg-red-500/10 text-red-400 border border-red-500/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Youtube className="w-4 h-4" />
            <span>Canal Lector Psicólogo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Divulgación en <span className="text-brand-orange">Psicología y Ciencia</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            A través de mi canal y redes sociales bajo el nombre de la marca <strong className="font-semibold text-brand-orange">"{PSYCHOLOGIST_INFO.youtubeChannelName}"</strong>, comparto contenido educativo continuo para promover el cuidado preventivo de la salud mental.
          </p>
        </div>

        {/* Slogan Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20" id="brand-pillars-grid">
          {brandPillars.map((pillar) => (
            <div 
              key={pillar.id} 
              className="bg-slate-900/65 backdrop-blur-sm rounded-3xl p-8 shadow-md border border-slate-800 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
              id={pillar.id}
            >
              <div className={`w-16 h-16 ${pillar.color} rounded-2xl flex items-center justify-center shadow-lg mb-6`}>
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold font-display text-white tracking-tight mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Video Showcase Section */}
        <div className="space-y-8" id="videos-showcase-section">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <h3 className="text-2xl font-bold font-display text-white tracking-tight flex items-center gap-2">
              <Youtube className="w-6 h-6 text-red-500" />
              <span>Videos Recientes</span>
            </h3>
            <a 
              href={PSYCHOLOGIST_INFO.youtubeUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-bold text-brand-orange hover:text-brand-orange-hover flex items-center gap-1.5 transition-colors"
            >
              <span>Visitar Canal Completo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="videos-grid">
            {VIDEOS_DATA.map((video) => (
              <a 
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-900/65 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                id={`video-card-${video.id}`}
              >
                {/* Thumbnail Image Wrapper */}
                <div className="relative aspect-video bg-slate-950 overflow-hidden shrink-0">
                  <img 
                    src={video.thumbnailUrl} 
                    alt={video.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Dark overlay with play button on hover */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Content text */}
                <div className="p-5 flex flex-col justify-between flex-grow space-y-2">
                  <h4 className="text-base font-bold font-display text-white group-hover:text-brand-orange transition-colors line-clamp-2">
                    {video.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-light line-clamp-3 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* YouTube Call To Action bar */}
        <div className="bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 text-white rounded-3xl p-8 md:p-12 mt-16 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden" id="youtube-cta-bar">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full filter blur-2xl"></div>
          <div className="space-y-4 text-center md:text-left relative">
            <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight">
              Aprende psicología basada en ciencia gratis
            </h3>
            <p className="text-sm text-slate-400 max-w-xl font-light">
              Suscríbete para recibir explicaciones sencillas, resúmenes de libros clave y técnicas científicas para combatir el estrés laboral, la ansiedad y mejorar tus habilidades sociales.
            </p>
          </div>
          <a 
            href={PSYCHOLOGIST_INFO.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all shadow-md shrink-0 active:scale-95"
            id="youtube-cta-btn"
          >
            <Youtube className="w-5 h-5" />
            <span>Suscribirse en YouTube</span>
          </a>
        </div>

      </div>
    </section>
  );
}
