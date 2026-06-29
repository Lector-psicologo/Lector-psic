/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { PSYCHOLOGIST_INFO } from '../data';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Dossier', href: '#dossier' },
    { name: 'Trayectoria', href: '#trayectoria' },
    { name: 'Contenido', href: '#contenido' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md shadow-lg py-3 border-b border-slate-900'
          : 'bg-slate-950/70 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Brand Area */}
          <a href="#inicio" className="flex items-center space-x-3 group" id="navbar-logo-link">
            <div className="relative w-12 h-12 flex items-center justify-center rounded-lg bg-slate-900 p-1 border border-brand-orange/20 overflow-hidden">
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
              <span className="text-[9px] text-slate-300 tracking-[0.15em] uppercase leading-none mt-1">
                Libros • Ciencia • Mente
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8" id="desktop-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-200 hover:text-brand-orange font-medium text-sm transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-orange hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4" id="desktop-cta-buttons">
            <a
              href={`tel:${PSYCHOLOGIST_INFO.phone.replace(/\s+/g, '')}`}
              className="text-slate-300 hover:text-white flex items-center space-x-2 text-sm font-medium transition-colors"
              id="navbar-phone-link"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>{PSYCHOLOGIST_INFO.phone}</span>
            </a>
            <a
              href={PSYCHOLOGIST_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange hover:bg-brand-orange-hover text-slate-950 px-5 py-2.5 rounded-full text-sm font-bold flex items-center space-x-2 transition-all shadow-md hover:shadow-brand-orange/20 active:scale-95"
              id="navbar-whatsapp-cta"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Consulta 24/7</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center" id="mobile-menu-trigger">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-900 focus:outline-none transition-colors"
              aria-expanded="false"
              id="hamburger-btn"
            >
              <span className="sr-only">Abrir menú</span>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-950/98 border-t border-slate-900 shadow-2xl transition-all duration-300" id="mobile-drawer">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-semibold text-slate-200 hover:text-white hover:bg-slate-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 pb-2 border-t border-slate-900 px-3 space-y-3">
              <a
                href={`tel:${PSYCHOLOGIST_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center space-x-3 text-slate-300 hover:text-white py-2"
              >
                <Phone className="w-5 h-5 text-brand-orange" />
                <span className="font-medium">{PSYCHOLOGIST_INFO.phone}</span>
              </a>
              <a
                href={PSYCHOLOGIST_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-orange hover:bg-brand-orange-hover text-slate-950 py-3 rounded-xl text-center font-bold flex items-center justify-center space-x-2 shadow-md"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Conversar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
