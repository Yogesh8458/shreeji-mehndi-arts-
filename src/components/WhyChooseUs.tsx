import React, { useState } from 'react';
import { Leaf, ShieldCheck, Home, Award, Sparkles, CheckCircle2, Flame, Droplets, Heart } from 'lucide-react';
import { STAIN_TIPS, FAQS, BUSINESS_INFO } from '../data/mehndiData';

export const WhyChooseUs: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const pillars = [
    {
      icon: Leaf,
      title: "100% Chemical-Free Organic Henna",
      subtitle: "Pure Sojat Henna Leaves & Natural Essential Oils",
      description: "We never compromise on safety. Our paste is handcrafted in small batches using triple-filtered henna leaves from Sojat (Rajasthan), pure eucalyptus oil, cajeput oil, clove oil, and organic lemon juice. Strictly zero PPD, zero synthetic dyes, and completely hypoallergenic for delicate skin."
    },
    {
      icon: ShieldCheck,
      title: "Guaranteed Rich Dark Stain",
      subtitle: "Mahogany-Burgundy Color That Lasts",
      description: "Thanks to our high lawsone content natural henna and complimentary sealing balms, our designs achieve a rich reddish-brown tone on day one that deepens into a magnificent dark burgundy-mahogany by day two, lasting brilliantly for 2 to 3 weeks."
    },
    {
      icon: Home,
      title: "Doorstep Home & Venue Service",
      subtitle: "Available Everywhere in Indore",
      description: "Relax in the comfort of your own home or wedding banquet. We arrive fully equipped at your doorstep across Indore (LIG Colony, Vijay Nagar, Palasia, Super Corridor, Bhawar Kuan, Rajendra Nagar, and destination venues) with punctual, courteous artists."
    },
    {
      icon: Award,
      title: "5+ Years of Proven Artistry",
      subtitle: "Over 1,500 Delighted Brides & Families",
      description: "With half a decade of dedicated professional experience, our artists balance razor-sharp symmetrical speed with personalized creativity. Whether you want custom love-story portraits, matching groom wrists, or traditional royal jaal, we execute it flawlessly."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#7A2832]">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>The Shreeji Promise</span>
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          </div>
          
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A1521] tracking-tight">
            Why Discerning Brides Choose Us
          </h2>
          
          <p className="text-base text-neutral-600 font-light leading-relaxed">
            Your wedding or festive celebration is an emotional milestone. We combine traditional auspicious rituals with modern artistic excellence.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto pt-1" />
        </div>

        {/* 4 Key Highlight Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-[#D4AF37]/30 shadow-sm hover:shadow-lg transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#4A1521]/10 text-[#4A1521] flex items-center justify-center border border-[#D4AF37]/40 group-hover:bg-[#4A1521] group-hover:text-[#F5E5A4] transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  <div>
                    <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold text-[#4A1521]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mt-1">
                      {pillar.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-neutral-600 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center gap-2 text-xs font-medium text-[#7A2832]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Verified Shreeji Quality Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dark Stain Care Guide Section */}
        <div id="stain-guide" className="rounded-3xl bg-gradient-to-br from-[#4A1521] via-[#380F17] to-[#2E0B12] text-white p-8 sm:p-12 border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-mandala-pattern opacity-20 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center space-y-3 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#F5E5A4]">
                <Flame className="w-4 h-4 text-[#D4AF37]" />
                <span>The Secret to Rich Color</span>
                <Flame className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl sm:text-4xl font-bold text-white">
                How to Achieve That Midnight-Burgundy Stain
              </h3>
              <p className="text-sm text-neutral-300 font-light max-w-2xl mx-auto">
                Organic henna is an oxidized natural dye that continues to darken for up to 48 hours. Follow these simple steps recommended by our artists.
              </p>
            </div>

            {/* 6 Step Sequence */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {STAIN_TIPS.map((tip, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 backdrop-blur-sm transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-['Cinzel'] text-2xl font-bold text-[#D4AF37]">
                      {tip.step}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">
                      Step {idx + 1}
                    </span>
                  </div>
                  <h4 className="font-['Playfair_Display'] text-base font-bold text-white">
                    {tip.title}
                  </h4>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Natural Ingredients Banner */}
            <div className="mt-10 p-5 rounded-2xl bg-black/30 border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Droplets className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Our 100% Herbal Recipe</div>
                  <div className="text-xs text-neutral-300">Sojat Henna Leaf Powder + Tea Tree & Nilgiri Oil + Clove Essence + Raw Sugar</div>
                </div>
              </div>
              <div className="text-xs text-[#F5E5A4] font-medium uppercase tracking-wider">
                0% PPD · 0% Ammonia · 0% Chemicals
              </div>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="mt-20 max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2 mb-8">
            <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-[#4A1521]">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600">
              Clear answers to help you plan your booking with Shreeji mehndi arts.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, fIdx) => {
              const isOpen = activeFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className="rounded-xl border border-neutral-200 bg-white overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : fIdx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50 transition-colors"
                  >
                    <span className="font-['Playfair_Display'] text-sm sm:text-base font-semibold text-[#4A1521]">
                      {faq.question}
                    </span>
                    <span className="text-base text-[#D4AF37] font-bold">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed border-t border-neutral-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
