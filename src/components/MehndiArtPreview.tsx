import React from 'react';
import { Sparkles, Heart, Crown, Calendar, Feather } from 'lucide-react';

interface MehndiArtPreviewProps {
  type: string;
  title: string;
  className?: string;
  customText?: string;
}

export const MehndiArtPreview: React.FC<MehndiArtPreviewProps> = ({
  type,
  title,
  className = '',
  customText,
}) => {
  return (
    <div className={`relative w-full h-full bg-gradient-to-br from-[#2E0B12] via-[#4A1521] to-[#1E070B] text-white flex flex-col items-center justify-between p-6 overflow-hidden select-none ${className}`}>
      
      {/* Decorative Traditional Jaali Background Pattern */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-30 pointer-events-none" />

      {/* Top Header Badge */}
      <div className="relative z-10 w-full flex items-center justify-between text-[11px] text-[#D4AF37] font-semibold tracking-wider uppercase border-b border-[#D4AF37]/20 pb-2">
        <span className="flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-[#F5E5A4]" />
          <span>Shreeji Signature Art</span>
        </span>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#F5E5A4] border border-[#D4AF37]/40">
          LIG Atal Dwar
        </span>
      </div>

      {/* Center Motif Artwork based on type */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center space-y-3 max-w-xs py-4">
        
        {/* Motif Icon Graphic */}
        {type === 'portrait' ? (
          /* Dulha-Dulhan Varmala Motif */
          <div className="relative">
            <div className="w-20 h-20 rounded-full border-2 border-[#D4AF37] p-1 flex items-center justify-center bg-[#2E0B12]/80 shadow-xl shadow-black/40">
              <div className="w-full h-full rounded-full border border-dashed border-[#F5E5A4]/60 flex items-center justify-center text-[#F5E5A4]">
                <Crown className="w-9 h-9 text-[#D4AF37]" />
              </div>
            </div>
            <div className="absolute -bottom-2 inset-x-0 flex justify-center">
              <span className="bg-[#4A1521] border border-[#D4AF37] text-[10px] px-2 py-0.5 rounded-full text-[#F5E5A4] font-medium flex items-center gap-1 shadow-md">
                <Heart className="w-3 h-3 text-rose-400 fill-rose-400" /> Dulha-Dulhan Varmala
              </span>
            </div>
          </div>
        ) : type === 'names' ? (
          /* Couple Names Motif */
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-2 border-[#D4AF37] bg-gradient-to-tr from-[#380F17] to-[#5C1D24] p-2 flex flex-col items-center justify-center shadow-xl">
              <Heart className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37] mb-1" />
              <span className="font-['Cinzel'] text-xs font-bold tracking-wider text-[#F5E5A4]">
                {customText || 'Lokes & Sangi'}
              </span>
              <span className="text-[9px] text-[#D4AF37]/80">Love Story Jaal</span>
            </div>
          </div>
        ) : type === 'rajwada' ? (
          /* Rajwada Mor & Haathi Motif */
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl border-2 border-[#D4AF37] bg-[#2E0B12]/90 flex flex-col items-center justify-center p-2 shadow-xl">
              <Feather className="w-8 h-8 text-[#D4AF37] mb-0.5" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#F5E5A4]">
                Mor & Haathi
              </span>
            </div>
          </div>
        ) : type === 'hathphool' ? (
          /* Hathphool Jewel Lace Motif */
          <div className="relative">
            <div className="w-20 h-20 rounded-full border-2 border-[#D4AF37] bg-[#380F17] flex flex-col items-center justify-center shadow-xl">
              <Sparkles className="w-8 h-8 text-[#D4AF37]" />
              <span className="text-[9px] font-semibold text-[#F5E5A4] uppercase mt-1">Jewel Glove</span>
            </div>
          </div>
        ) : (
          /* Traditional Lotus Mandala */
          <div className="relative">
            <div className="w-20 h-20 rounded-full border-2 border-[#D4AF37] bg-[#2E0B12]/80 flex items-center justify-center shadow-xl">
              <svg viewBox="0 0 100 100" className="w-14 h-14 text-[#D4AF37]">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="50" cy="50" r="14" fill="currentColor" fillOpacity="0.4" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                  <path
                    key={deg}
                    d="M50 20 C55 35, 55 45, 50 50 C45 45, 45 35, 50 20"
                    fill="currentColor"
                    fillOpacity="0.8"
                    transform={`rotate(${deg} 50 50)`}
                  />
                ))}
              </svg>
            </div>
          </div>
        )}

        {/* Title */}
        <h4 className="font-['Playfair_Display'] text-base sm:text-lg font-bold text-white leading-snug">
          {title}
        </h4>

        {/* Description / Subtext */}
        <p className="text-xs text-neutral-300 font-light max-w-[240px] leading-relaxed">
          {type === 'portrait'
            ? 'Handcrafted bride & groom sketches with wedding date cartouche & ring emblems.'
            : type === 'names'
            ? 'Intricate lotus jaal with customized bride & groom names inscribed inside sacred medallions.'
            : type === 'rajwada'
            ? 'Royal palace jharokha with majestic peacock crests and caparisoned elephant motifs.'
            : type === 'hathphool'
            ? 'Delicate hanging pearl chains and floral medallions styled as royal jewelry.'
            : 'Traditional 100% natural Sojat henna with guaranteed deep mahogany-burgundy stain.'}
        </p>
      </div>

      {/* Bottom Footer Note */}
      <div className="relative z-10 w-full pt-2 border-t border-[#D4AF37]/20 flex items-center justify-between text-[10px] text-neutral-400">
        <span className="text-[#F5E5A4] font-medium">100% Organic Henna</span>
        <span>Dark Stain Guaranteed</span>
      </div>

    </div>
  );
};
