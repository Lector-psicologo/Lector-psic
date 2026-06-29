/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Award, 
  GraduationCap, 
  Tv, 
  Users, 
  Briefcase, 
  HeartHandshake,
  CheckCircle,
  HardHat,
  Coins,
  Lightbulb,
  ShoppingBag,
  Heart
} from 'lucide-react';
import { PSYCHOLOGIST_INFO, SECTORS_DATA } from '../data';

export default function Biography() {
  const achievementsList = [
    {
      id: 'ach-1',
      icon: <GraduationCap className="w-6 h-6 text-brand-orange" />,
      title: "Maestría Universitaria",
      desc: "Magíster graduado por la prestigiosa Universidad Peruana de Ciencias Aplicadas (UPC)."
    },
    {
      id: 'ach-2',
      icon: <Award className="w-6 h-6 text-brand-orange" />,
      title: "Enfoque Científico",
      desc: "Psicoterapeuta Cognitivo-Conductual con amplia práctica clínica individualizada."
    },
    {
      id: 'ach-3',
      icon: <Tv className="w-6 h-6 text-brand-orange" />,
      title: "Impacto en Medios y TV",
      desc: "Conductor y divulgador del programa por cable 'Latidos azules', enfocado en promover la concientización y apoyo integral del espectro autista."
    },
    {
      id: 'ach-4',
      icon: <Users className="w-6 h-6 text-brand-orange" />,
      title: "Docencia y Liderazgo",
      desc: "Docente universitario especializado en Liderazgo y Desarrollo Personal desde hace 4 años."
    },
    {
      id: 'ach-5',
      icon: <HeartHandshake className="w-6 h-6 text-brand-orange" />,
      title: "Salud Mental Social",
      desc: "Promotor activo del bienestar emocional a través de la colaboración constante con ONGs aliadas."
    }
  ];

  // Map industry icons
  const renderSectorIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-brand-orange shrink-0" };
    switch (iconName) {
      case 'HardHat': return <HardHat {...props} />;
      case 'Coins': return <Coins {...props} />;
      case 'Lightbulb': return <Lightbulb {...props} />;
      case 'ShoppingBag': return <ShoppingBag {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      default: return <Briefcase {...props} />;
    }
  };

  return (
    <section id="trayectoria" className="py-24 bg-slate-900/20 relative overflow-hidden border-t border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Timeline and highlights left side */}
          <div className="lg:col-span-7 space-y-8" id="bio-left-side">
            <div className="space-y-4">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/15 border border-brand-orange/30 px-3 py-1.5 rounded-full inline-block">
                Perfil Clínico y Académico
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight leading-none">
                Sobre el Mg. Miguel Angel Del Campo
              </h2>
              <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed">
                Su enfoque profesional entrelaza la rigurosidad de la terapia cognitivo-conductual con la experiencia corporativa estratégica y la docencia de nivel superior, construyendo intervenciones verdaderamente efectivas.
              </p>
            </div>

            {/* Achievements list */}
            <div className="space-y-6" id="achievements-list">
              {achievementsList.map((ach) => (
                <div key={ach.id} className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-slate-900/60 transition-colors" id={ach.id}>
                  <div className="p-3 bg-brand-orange/10 rounded-xl shrink-0 mt-0.5">
                    {ach.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-display">
                      {ach.title}
                    </h4>
                    <p className="text-sm text-slate-400 mt-1 font-light leading-relaxed">
                      {ach.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive stats and Experience Sectors on the right */}
          <div className="lg:col-span-5 bg-slate-900/60 backdrop-blur-sm rounded-3xl p-8 lg:p-10 text-white shadow-2xl border border-slate-800 relative overflow-hidden" id="bio-right-side">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-orange/10 rounded-full -ml-16 -mb-16 filter blur-xl"></div>
            
            <div className="relative space-y-8">
              <div className="border-b border-slate-800 pb-6">
                <h3 className="text-2xl font-bold font-display text-white tracking-tight">
                  Experiencia Multisectorial
                </h3>
                <p className="text-xs text-slate-400 mt-2 font-light leading-relaxed">
                  A lo largo de sus 11 años de trayectoria clínica, ha brindado asesoría psicológica, conferencias y programas de entrenamiento de habilidades blandas a empresas e instituciones en sectores clave del país:
                </p>
              </div>

              {/* Sectors loop */}
              <div className="space-y-4" id="experience-sectors">
                {SECTORS_DATA.map((sector) => (
                  <div 
                    key={sector.id} 
                    className="flex items-center space-x-3 bg-slate-950/40 hover:bg-slate-950/80 p-3 rounded-xl border border-slate-800 transition-all duration-300 group"
                    id={`sector-badge-${sector.id}`}
                  >
                    <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-slate-800">
                      {renderSectorIcon(sector.icon)}
                    </div>
                    <span className="text-sm font-semibold text-slate-200 tracking-wide">
                      {sector.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Extra TV Show Highlight Box */}
              <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-5 mt-6 flex items-start space-x-3.5" id="tv-highlight-box">
                <Tv className="w-8 h-8 text-brand-orange shrink-0 mt-1" />
                <div>
                  <h5 className="text-sm font-bold text-white font-display">
                    Latidos Azules (TV Cable)
                  </h5>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed font-light">
                    Como conductor del programa de cable 'Latidos azules', se enfoca en concientizar sobre el Trastorno del Espectro Autista (TEA), demostrando un firme compromiso ético y social.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
