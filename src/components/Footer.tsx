import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Mail, Sparkles, Heart, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mehndiData';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#23080E] text-white pt-16 pb-12 border-t border-[#D4AF37]/30 relative overflow-hidden">
      {/* Decorative Subtle Patterns */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#D4AF37]/20">
          
          {/* Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#2E0B12] shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-['Cinzel'] text-2xl font-bold tracking-wider text-white">
                  Shreeji
                </span>
                <span className="block text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] -mt-0.5">
                  Mehndi Arts • Indore
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              Exquisite bridal, engagement, and festive henna artistry. Visit our newly opened physical studio at LIG Atal Dwar, Indore, or book our mobile team for doorstep home visits across Indore. Formulated with 100% organic Sojat henna with guaranteed dark stains.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#E6CA65]">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Newly Opened Studio · LIG Atal Dwar, Indore</span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="font-['Playfair_Display'] text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li><a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Bridal & Services</a></li>
              <li><a href="#gallery" className="hover:text-[#D4AF37] transition-colors">Portfolio Gallery</a></li>
              <li><a href="#why-us" className="hover:text-[#D4AF37] transition-colors">Why Choose Us</a></li>
              <li><a href="#stain-guide" className="hover:text-[#D4AF37] transition-colors">Stain Care Guide</a></li>
              <li><a href="#pricing" className="hover:text-[#D4AF37] transition-colors">Price Estimator</a></li>
              <li><a href="#book" className="hover:text-[#D4AF37] transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="font-['Playfair_Display'] text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
              Contact Details
            </h4>
            <div className="space-y-3 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Studio Location:</span>
                  <span>{BUSINESS_INFO.address}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <div>
                  <span className="text-neutral-400 block text-[11px]">Phone / Bookings:</span>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-white hover:text-[#D4AF37] font-medium transition-colors">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <div>
                  <span className="text-neutral-400 block text-[11px]">Direct WhatsApp:</span>
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline font-medium"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-400 block text-[11px]">Working Hours:</span>
                  <span className="text-neutral-200">{BUSINESS_INFO.operatingHours}</span>
                  <span className="block text-[10px] text-neutral-400">(Doorstep visits by appointment)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Location & Map Preview (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="font-['Playfair_Display'] text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
              Visit or Locate Us
            </h4>
            <div className="rounded-xl overflow-hidden border border-[#D4AF37]/30 bg-[#2E0B12] p-3 space-y-2">
              <div className="flex items-center justify-between text-xs text-neutral-300">
                <span className="font-medium text-white">LIG Atal Dwar, Indore</span>
                <span className="text-[10px] text-[#D4AF37]">Madhya Pradesh</span>
              </div>
              <p className="text-[11px] text-neutral-400">
                Easily accessible from AB Road, Vijay Nagar, Palasia, and central Indore.
              </p>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-[#F5E5A4] flex items-center justify-center gap-1.5 transition-colors border border-white/10"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-2.5 rounded-lg bg-black/40 border border-neutral-800 text-[11px] text-neutral-400">
              🚗 <span className="text-neutral-200 font-medium">Home Visits:</span> We travel to your home or banquet hall with all equipment across Indore.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-light">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} <span className="text-neutral-200 font-medium">Shreeji mehndi arts</span>. All rights reserved. LIG Atal Dwar, Indore.
          </div>

          <div className="flex items-center gap-1 text-center">
            <span>Handcrafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37] inline mx-0.5" />
            <span>for brides & celebrations across India.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
