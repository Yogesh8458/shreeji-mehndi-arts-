import React from 'react';
import { MessageCircle, Calendar, Sparkles, MapPin, Award, ShieldCheck, Heart, ArrowRight, Store } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mehndiData';
import { MehndiImage } from './MehndiImage';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[#2E0B12] via-[#4A1521] to-[#380F17] text-white">
      {/* Decorative Traditional Mandala & Gradient Background Effects */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-30 pointer-events-none" />
      
      {/* Subtle Warm Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#9B3340]/25 rounded-full blur-3xl pointer-events-none" />
      
      {/* Top Ornamental Arch Flourish */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Grand Opening Announcement Strip */}
        <div className="mb-6 flex justify-center lg:justify-start">
          <a
            href="#salon"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-xs sm:text-sm font-semibold tracking-wider text-[#F5E5A4] hover:bg-[#D4AF37]/30 transition-all shadow-md group"
          >
            <Store className="w-4 h-4 text-[#D4AF37]" />
            <span>✨ NEWLY OPENED SALON & STUDIO AT LIG ATAL DWAR, INDORE ✨</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Location & Distinction Kicker */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-widest text-[#E6CA65] uppercase font-medium">
              <span className="flex items-center gap-1.5 text-[#F5E5A4]">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                LIG Atal Dwar, Indore
              </span>
              <span className="text-[#D4AF37]/60">·</span>
              <span>Studio & Home Visits</span>
              <span className="text-[#D4AF37]/60">·</span>
              <span>100% Organic Henna</span>
            </div>

            {/* Script Tagline Accent */}
            <div className="font-['Great_Vibes'] text-3xl sm:text-4xl lg:text-5xl text-[#D4AF37] tracking-wide -mb-2">
              Pure Artistry & Celebration
            </div>

            {/* Main Headline */}
            <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Weaving Timeless Stories in{' '}
              <span className="gold-gradient-text font-['Cinzel'] block sm:inline">
                Deep Henna Hues
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Welcome to Indore’s brand new luxury bridal and festive mehndi studio. Visit our modern air-conditioned studio at LIG Atal Dwar or enjoy our prompt doorstep home service anywhere in Indore with guaranteed dark stains.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider text-[#2E0B12] bg-gradient-to-r from-[#F5E5A4] via-[#D4AF37] to-[#B89628] hover:brightness-110 shadow-lg shadow-[#D4AF37]/20 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-full font-semibold text-sm tracking-wide text-white bg-[#25D366] hover:bg-[#20ba59] shadow-lg shadow-black/20 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Key Trust Highlights Strip */}
            <div className="pt-6 border-t border-[#D4AF37]/20 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left">
              <div>
                <div className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#F5E5A4]">New Studio</div>
                <div className="text-xs text-neutral-300 font-light">LIG Atal Dwar</div>
              </div>
              <div>
                <div className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#F5E5A4]">1,500+</div>
                <div className="text-xs text-neutral-300 font-light">Happy Brides</div>
              </div>
              <div>
                <div className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#F5E5A4]">100%</div>
                <div className="text-xs text-neutral-300 font-light">Organic Sojat Cones</div>
              </div>
              <div>
                <div className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#F5E5A4]">Dark Stain</div>
                <div className="text-xs text-neutral-300 font-light">Guaranteed Peak</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Gold Frame Border */}
              <div className="absolute -inset-3 rounded-3xl border border-[#D4AF37]/40 rotate-1 pointer-events-none" />
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#D4AF37]/30 to-[#9B3340]/30 -rotate-1 pointer-events-none" />

              {/* Main Featured Photo with Robust Image Component */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/50 aspect-[4/5] bg-[#2E0B12]">
                <MehndiImage
                  src="https://images.unsplash.com/photo-1560932684-5e552e2894e6?auto=format&fit=crop&w=1000&q=85"
                  fallbackSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Mehndi_Front_Hands.jpg/800px-Mehndi_Front_Hands.jpg"
                  alt="Bridal mehndi artistry by Shreeji mehndi arts Indore"
                  className="w-full h-full"
                  category="Royal Bridal Art"
                />
                
                {/* Photo Overlay with Dark Stain Assurance */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E0B12] via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-[#2E0B12]/90 backdrop-blur-md border border-[#D4AF37]/40 z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white font-['Playfair_Display']">
                          Dark Stain Guarantee
                        </div>
                        <div className="text-xs text-neutral-300">
                          Fresh Organic Sojat Henna Cones
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                        48h Peak
                      </div>
                      <div className="text-[11px] text-neutral-400">Deep Burgundy</div>
                    </div>
                  </div>
                </div>

                {/* Top Corner Badge */}
                <div className="absolute top-4 left-4 bg-[#4A1521]/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#D4AF37]/40 flex items-center gap-1.5 text-xs text-[#F5E5A4] shadow-md z-10">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Grand Opening Booking Open</span>
                </div>
              </div>

              {/* Decorative Small Floating Accents */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-2 p-3 rounded-xl bg-[#380F17] border border-[#D4AF37]/40 shadow-xl z-20">
                <Heart className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                <span className="text-xs font-medium text-white">Bridal Portraits & Love Stories</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Wave Divider into Cream Background */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#FDFBF7] [clip-path:polygon(0_100%,100%_100%,100%_0,0_100%)] pointer-events-none" />
    </section>
  );
};

