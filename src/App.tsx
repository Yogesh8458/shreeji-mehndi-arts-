/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SalonSection } from './components/SalonSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CertificationSection } from './components/CertificationSection';
import { PriceEstimator } from './components/PriceEstimator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Royal Bridal Mehndi');
  const [initialNotes, setInitialNotes] = useState<string>('');

  const scrollToBooking = (serviceName?: string, notes?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    if (notes) {
      setInitialNotes(notes);
    }
    const bookEl = document.getElementById('book');
    if (bookEl) {
      bookEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C2420] font-['Montserrat'] selection:bg-[#D4AF37]/30 selection:text-[#4A1521]">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenBooking={() => scrollToBooking()} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenBooking={() => scrollToBooking()} />

        {/* Newly Opened Salon & Grand Opening Section */}
        <SalonSection onOpenBooking={() => scrollToBooking()} />

        {/* Services Section */}
        <ServicesSection onSelectService={(name) => scrollToBooking(name)} />

        {/* Portfolio Gallery Section */}
        <GallerySection />

        {/* Why Choose Us & Stain Care Guide */}
        <WhyChooseUs />

        {/* Certified Master Artist & Recognition Section */}
        <CertificationSection />

        {/* Interactive Pricing Estimator */}
        <PriceEstimator onPreFillBooking={(service, notes) => scrollToBooking(service, notes)} />

        {/* Real Testimonials from Indore Brides */}
        <TestimonialsSection />

        {/* Booking & Inquiry Form */}
        <BookingForm initialService={selectedService} initialNotes={initialNotes} />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Floating WhatsApp Quick-Contact Button */}
      <FloatingWhatsApp />
    </div>
  );
}
