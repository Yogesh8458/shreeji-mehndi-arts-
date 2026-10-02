import React from 'react';
import { Star, Sparkles, MapPin, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/mehndiData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F9F5EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#7A2832]">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Love From Our Brides</span>
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          </div>
          
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A1521] tracking-tight">
            Words of Happiness
          </h2>
          
          <p className="text-base text-neutral-600 font-light leading-relaxed">
            Read real stories from Indore brides and celebratory families who trusted Shreeji mehndi arts for their most cherished occasions.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto pt-1" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/25 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Top Row: Stars and Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#D4AF37]/20" />
                </div>

                {/* Comment */}
                <p className="text-sm text-neutral-700 leading-relaxed font-light italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <h4 className="font-['Playfair_Display'] text-base font-bold text-[#4A1521]">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{item.location}</span>
                    <span>·</span>
                    <span className="text-[#7A2832] font-medium">{item.role}</span>
                  </div>
                </div>

                <span className="text-[11px] text-neutral-400 font-medium">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
