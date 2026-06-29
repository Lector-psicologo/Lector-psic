/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import CorporateDossier from './components/CorporateDossier';
import Biography from './components/Biography';
import Resources from './components/Resources';
import Testimonials from './components/Testimonials';
import BookingSystem from './components/BookingSystem';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { ServiceItem } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleClearSelectedService = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-brand-orange selection:text-slate-950" id="root-app-container">
      {/* Navigation */}
      <Navbar />

      {/* Hero Header */}
      <Hero />

      {/* Live Scientific Badges & Stats */}
      <Stats />

      {/* Services Showcase (Filterable Individual vs. Enterprise) */}
      <Services onSelectService={handleSelectService} />

      {/* Corporate Dossier & Interactive Deck */}
      <CorporateDossier />

      {/* Extensive Biography & clinical experience */}
      <Biography />

      {/* Slogan "LIBROS • CIENCIA • MENTE" Pillars and YouTube divulgation */}
      <Resources />

      {/* Quality Reviews & Testimonials */}
      <Testimonials />

      {/* Comprehensive interactive booking client & Mail/WhatsApp Linkage */}
      <BookingSystem 
        selectedService={selectedService} 
        clearSelectedService={handleClearSelectedService} 
      />

      {/* Legal Disclosures and Detailed Footer */}
      <Footer />

      {/* Floating high-converting WhatsApp trigger */}
      <WhatsAppButton />
    </div>
  );
}

