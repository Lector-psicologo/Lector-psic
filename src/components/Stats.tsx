/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Calendar, Award, ShieldAlert, BookOpen, Clock } from 'lucide-react';
import { PSYCHOLOGIST_INFO } from '../data';

export default function Stats() {
  const statsList = [
    {
      id: 'stat-experience',
      icon: <Award className="w-8 h-8 text-brand-orange" />,
      number: "11+ Años",
      title: "Trayectoria Profesional",
      description: "Experiencia en clínica y grandes empresas del país."
    },
    {
      id: 'stat-colegiado',
      icon: <ShieldAlert className="w-8 h-8 text-brand-orange" />,
      number: "C.Ps.P. 25871",
      title: "Psicólogo Colegiado",
      description: "Colegiatura oficial habilitada para ejercer a nivel nacional."
    },
    {
      id: 'stat-teaching',
      icon: <BookOpen className="w-8 h-8 text-brand-orange" />,
      number: "4+ Años",
      title: "Docencia Universitaria",
      description: "Cátedra en Liderazgo y Desarrollo Personal."
    },
    {
      id: 'stat-hours',
      icon: <Clock className="w-8 h-8 text-brand-orange" />,
      number: "24 / 7",
      title: "Disponibilidad Total",
      description: "Atención de lunes a domingo para Lima y provincias."
    }
  ];

  return (
    <section id="stats-bar" className="relative z-10 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-900/85 backdrop-blur-md rounded-3xl shadow-2xl border border-slate-800 p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12" id="stats-inner-grid">
          {statsList.map((stat, idx) => (
            <div 
              key={stat.id} 
              className={`flex flex-col items-center lg:items-start text-center lg:text-left ${
                idx !== statsList.length - 1 ? 'lg:border-r lg:border-slate-800 lg:pr-8' : ''
              }`}
              id={stat.id}
            >
              <div className="p-3 bg-brand-orange/10 rounded-2xl mb-4 shrink-0">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-extrabold font-display text-white tracking-tight">
                {stat.number}
              </h3>
              <p className="text-base font-bold text-brand-orange mt-1">
                {stat.title}
              </p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
