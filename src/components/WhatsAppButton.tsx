/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { PSYCHOLOGIST_INFO } from '../data';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after a small delay to engage user attention
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2 pointer-events-none" id="floating-whatsapp-container">
      {/* Interactive Tooltip speech bubble */}
      {showTooltip && (
        <div className="bg-slate-900 text-slate-200 p-3.5 rounded-2xl shadow-2xl border border-slate-800 flex items-start space-x-3 max-w-[280px] animate-fade-in pointer-events-auto relative mr-2" id="whatsapp-tooltip">
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping shrink-0 mt-1.5"></div>
          <div className="flex-1">
            <p className="text-xs font-bold text-white">Mg. Miguel Angel Del Campo</p>
            <p className="text-[11px] text-slate-400 mt-1 leading-normal font-light">¿Cómo puedo ayudarte hoy? Estoy disponible de Lunes a Domingo 24/7.</p>
            <a 
              href={PSYCHOLOGIST_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-brand-orange hover:text-brand-orange-hover mt-1.5 inline-block"
              onClick={() => setShowTooltip(false)}
            >
              Iniciar Chat Ahora
            </a>
          </div>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-slate-500 hover:text-slate-300 shrink-0 p-0.5"
            aria-label="Cerrar sugerencia"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          {/* Bubble tail pointing right-down */}
          <div className="absolute right-6 -bottom-1.5 w-3.5 h-3.5 bg-slate-900 border-r border-b border-slate-800 transform rotate-45"></div>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={PSYCHOLOGIST_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl pointer-events-auto transition-all transform hover:scale-110 active:scale-95 group relative border border-emerald-400/20"
        title="Contactar al Psicólogo Miguel Angel por WhatsApp"
        id="floating-whatsapp-trigger"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-30 animate-ping -z-10 group-hover:hidden"></span>
        <MessageSquare className="w-7 h-7 fill-current" />
        
        {/* Unread notification dot */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-slate-950 rounded-full flex items-center justify-center text-[9px] font-bold text-white">
          1
        </span>
      </a>
    </div>
  );
}
