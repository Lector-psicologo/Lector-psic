/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  User, 
  Users, 
  FileCheck, 
  ShieldAlert, 
  HeartOff, 
  Briefcase, 
  Activity, 
  Check, 
  ArrowUpRight, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { ServiceItem } from '../types';

export default function Services({ onSelectService }: { onSelectService: (service: ServiceItem) => void }) {
  const [activeTab, setActiveTab] = useState<'todos' | 'individual' | 'empresarial'>('todos');

  // Explicitly mapping service icons
  const renderIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-brand-orange" };
    switch (iconName) {
      case 'User': return <User {...props} />;
      case 'Users': return <Users {...props} />;
      case 'FileCheck': return <FileCheck {...props} />;
      case 'ShieldAlert': return <ShieldAlert {...props} />;
      case 'HeartOff': return <HeartOff {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'Activity': return <Activity {...props} />;
      default: return <User {...props} />;
    }
  };

  const filteredServices = SERVICES_DATA.filter(
    service => activeTab === 'todos' || service.category === activeTab
  );

  return (
    <section id="servicios" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-brand-orange/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-brand-orange/5 rounded-full filter blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16" id="services-header">
          <div className="inline-flex items-center space-x-1.5 bg-brand-orange/10 text-brand-orange px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-orange/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nuestros Servicios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Consultoría Psicológica de <span className="text-brand-orange">Alto Impacto</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            Ofrecemos soluciones clínicas de base científica para personas y programas estratégicos para organizaciones que buscan maximizar el bienestar de sus equipos.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center mb-12" id="services-tabs-container">
          <div className="bg-slate-900 p-1.5 rounded-2xl shadow-xl border border-slate-800/80 flex space-x-1 max-w-lg w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('todos')}
              className={`flex-1 sm:flex-initial px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === 'todos'
                  ? 'bg-brand-orange text-slate-950 shadow-lg shadow-brand-orange/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Todos los Servicios
            </button>
            <button
              onClick={() => setActiveTab('individual')}
              className={`flex-1 sm:flex-initial px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === 'individual'
                  ? 'bg-brand-orange text-slate-950 shadow-lg shadow-brand-orange/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Para Personas
            </button>
            <button
              onClick={() => setActiveTab('empresarial')}
              className={`flex-1 sm:flex-initial px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === 'empresarial'
                  ? 'bg-brand-orange text-slate-950 shadow-lg shadow-brand-orange/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Para Empresas
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-slate-900/60 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl border border-slate-800 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden"
              id={`service-card-${service.id}`}
            >
              {/* Category tag decoration */}
              <div className="absolute top-0 right-0">
                <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl border-l border-b border-slate-850 ${
                  service.category === 'empresarial' 
                    ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' 
                    : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                }`}>
                  {service.category === 'empresarial' ? 'Empresas' : 'Personal'}
                </span>
              </div>

              <div className="space-y-6">
                {/* Icon Circle */}
                <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center transition-colors duration-300 group-hover:bg-brand-orange/20 shrink-0">
                  {renderIcon(service.icon)}
                </div>

                {/* Title & Desc */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-display text-white tracking-tight leading-snug group-hover:text-brand-orange transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                {/* Details Checkmarks */}
                <ul className="space-y-3 pt-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-slate-300 leading-relaxed">
                      <Check className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center space-x-2 text-sm font-bold text-slate-300 hover:text-brand-orange transition-colors"
                  id={`cta-btn-${service.id}`}
                >
                  <span>Solicitar consulta</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
