import React from 'react';
import { Check, Clock, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/mehndiData';
import { MehndiImage } from './MehndiImage';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 bg-[#FDFBF7] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#7A2832]">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Artistry & Offerings</span>
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          </div>
          
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A1521] tracking-tight">
            Curated Henna Services
          </h2>
          
          <p className="text-base text-neutral-600 font-light leading-relaxed">
            Every occasion deserves an unforgettable pattern. From royal bridal narratives to delicate festival mandalas, discover our specialized mehndi collections crafted with pure organic henna cones.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto pt-1" />
        </div>

        {/* Services Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#D4AF37]/25 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Image Section with Robust MehndiImage */}
              <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
                <MehndiImage
                  src={service.image}
                  fallbackSrc={service.fallbackImage}
                  alt={service.title}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  category={service.tag}
                />
                
                {/* Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

                {/* Tag Kicker */}
                <div className="absolute top-4 left-4 bg-[#4A1521]/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase text-[#F5E5A4] border border-[#D4AF37]/30 shadow-md z-10">
                  {service.tag}
                </div>

                {/* Price and Duration Floating Pill */}
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg text-right border border-white/20 z-10">
                  <span className="text-[11px] text-neutral-300 block">Starting from</span>
                  <span className="text-sm font-bold text-[#F5E5A4]">{service.startingPrice}</span>
                </div>

                {/* Card Title on Image */}
                <div className="absolute bottom-3 left-4 right-28 z-10">
                  <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold text-white leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#D4AF37] font-medium tracking-wide">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <p className="text-sm text-neutral-600 leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Estimated Time Strip */}
                  <div className="flex items-center gap-2 text-xs text-neutral-500 border-y border-neutral-100 py-2.5">
                    <Clock className="w-4 h-4 text-[#7A2832]" />
                    <span className="font-medium text-neutral-700">Estimated Duration:</span>
                    <span>{service.estimatedTime}</span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#4A1521]">
                      Package Inclusions:
                    </span>
                    <ul className="grid grid-cols-1 gap-1.5 pt-1">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                          <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full sm:flex-1 py-3 px-4 rounded-xl text-xs uppercase font-bold tracking-wider text-white bg-[#4A1521] hover:bg-[#5C1D24] transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow group/btn cursor-pointer"
                  >
                    <span>Book This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(
                      `Hello Shreeji mehndi arts, I would like to inquire about your ${service.title} (${service.subtitle}). Please share available dates and portfolio samples.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto p-3 rounded-xl border border-[#25D366]/40 hover:bg-[#25D366]/10 text-[#1B8743] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    title="Inquire on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span className="sm:hidden">Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Group & Custom Note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F9F5EC] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-['Playfair_Display'] text-lg font-bold text-[#4A1521]">
              Need a Custom Group or Sangeet Corner in Indore?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600">
              We provide teams of 2 to 5 skilled artists for large weddings, baby showers, and festive corporate events.
            </p>
          </div>
          <button
            onClick={() => onSelectService('Custom Sangeet / Group Package')}
            className="shrink-0 px-6 py-2.5 rounded-full text-xs uppercase font-bold tracking-wider text-[#2E0B12] bg-[#D4AF37] hover:bg-[#E6CA65] transition-colors cursor-pointer"
          >
            Request Group Quote
          </button>
        </div>

      </div>
    </section>
  );
};
