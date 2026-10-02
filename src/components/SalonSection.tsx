import React from 'react';
import { Sparkles, MapPin, Gift, Clock, ShieldCheck, Heart, ArrowRight, MessageCircle, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO, SALON_FEATURES, INAUGURAL_OFFERS } from '../data/mehndiData';

interface SalonSectionProps {
  onOpenBooking: () => void;
}

export const SalonSection: React.FC<SalonSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="salon" className="py-20 bg-gradient-to-b from-[#2E0B12] via-[#3D101A] to-[#2E0B12] text-white relative overflow-hidden">
      {/* Background Mandala & Ambient Lighting */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#9B3340]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Grand Opening Banner Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#F5E5A4] shadow-md">
            <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
            <span>✨ GRAND OPENING IN INDORE ✨</span>
            <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
          </div>

          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Indore's Brand New{' '}
            <span className="gold-gradient-text font-['Cinzel']">
              Luxury Mehndi Salon & Studio
            </span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
            We are excited to announce our newly opened physical studio at <strong className="text-white font-medium">LIG Atal Dwar, Indore</strong>! Step into a dedicated, air-conditioned sanctuary designed for comfort, creativity, and flawless bridal artistry.
          </p>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </div>

        {/* Salon Highlights & Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SALON_FEATURES.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/5 border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37]">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#F5E5A4]">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Grand Opening Special Inaugural Offers */}
        <div className="bg-gradient-to-r from-[#4A1521] via-[#5C1D24] to-[#4A1521] rounded-3xl p-6 sm:p-10 border-2 border-[#D4AF37]/40 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-[#D4AF37]/30">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5E5A4]">
                <Gift className="w-4 h-4 text-[#D4AF37]" />
                <span>Inauguration Specials & Celebration Offers</span>
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-white mt-1">
                Special Opening Discounts for Indore Brides & Families
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-full text-xs uppercase font-bold tracking-wider text-[#2E0B12] bg-gradient-to-r from-[#F5E5A4] via-[#D4AF37] to-[#B89628] hover:brightness-110 shadow-lg transition-all cursor-pointer"
              >
                Claim Offer Online
              </button>
            </div>
          </div>

          {/* 3 Offer Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {INAUGURAL_OFFERS.map((offer, idx) => (
              <div
                key={idx}
                className="bg-black/30 rounded-2xl p-5 border border-white/10 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#D4AF37]/20 text-[#F5E5A4] border border-[#D4AF37]/30 inline-block">
                    {offer.badge}
                  </span>
                  <h4 className="font-['Playfair_Display'] text-lg font-bold text-white">
                    {offer.title}
                  </h4>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {offer.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase text-neutral-400 block">Use Code:</span>
                    <span className="font-mono text-xs font-bold text-[#F5E5A4]">{offer.code}</span>
                  </div>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(
                      `Hello Shreeji mehndi arts, I want to claim your Grand Opening Offer: "${offer.title}" (Code: ${offer.code}) for my event!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold flex items-center gap-1 shadow-md transition-colors"
                    title="Claim via WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Claim</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Salon Visit Invitation */}
          <div className="mt-8 pt-6 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>
                <strong>Studio Address:</strong> LIG Atal Dwar, Indore, Madhya Pradesh
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span>Walk-ins & Appointments: 9:00 AM – 9:30 PM (Daily)</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
