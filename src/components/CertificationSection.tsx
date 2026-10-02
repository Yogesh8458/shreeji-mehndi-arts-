import React, { useState, useEffect } from 'react';
import { Award, ShieldCheck, CheckCircle2, Sparkles, Star, Camera, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mehndiData';

export const CertificationSection: React.FC = () => {
  const [certPhoto, setCertPhoto] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('shreeji_cert_photo');
    if (saved) {
      setCertPhoto(saved);
    }
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      if (base64) {
        setCertPhoto(base64);
        try {
          localStorage.setItem('shreeji_cert_photo', base64);
        } catch (err) {
          console.warn('Storage limit reached', err);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <section id="certification" className="py-20 bg-gradient-to-b from-[#F9F5EC] via-[#FDFBF7] to-[#F9F5EC] relative overflow-hidden border-t border-b border-[#D4AF37]/25">
      {/* Decorative Traditional Background Pattern */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#7A2832]">
            <Award className="w-4 h-4 text-[#D4AF37]" />
            <span>Certified & Recognized Excellence</span>
            <Award className="w-4 h-4 text-[#D4AF37]" />
          </div>
          
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A1521] tracking-tight">
            Certified Master Henna Artist
          </h2>
          
          <p className="text-base text-neutral-600 font-light leading-relaxed">
            Proudly trained and certified under celebrated National Mehndi Artist <strong>Anwar Patel</strong> and honored by <strong>Lions Club of Indore Ahilya</strong>.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto pt-1" />
        </div>

        {/* Certificate Feature Card */}
        <div className="bg-white rounded-3xl border-2 border-[#D4AF37]/40 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-w-5xl mx-auto">
          
          {/* Left Column: Certificate Photo Frame */}
          <div className="lg:col-span-5 relative bg-[#2E0B12] flex items-center justify-center min-h-[380px] p-6 overflow-hidden group">
            {/* Gold Frame Border */}
            <div className="absolute inset-4 rounded-2xl border border-[#D4AF37]/50 pointer-events-none z-10" />

            {certPhoto ? (
              <img
                src={certPhoto}
                alt="Shreeji Mehndi Arts Certificate Award with National Artist Anwar Patel"
                className="w-full h-full object-cover rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              /* Fallback Visual Presentation of the Award Ceremony */
              <div className="w-full h-full rounded-xl bg-gradient-to-b from-[#380F17] to-[#1E070B] p-6 flex flex-col justify-between items-center text-center text-white border border-[#D4AF37]/30">
                <div className="space-y-2">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mx-auto shadow-lg">
                    <Award className="w-8 h-8" />
                  </div>
                  <span className="font-['Cinzel'] text-xs font-bold uppercase tracking-widest text-[#F5E5A4] block">
                    National Certification
                  </span>
                </div>

                <div className="space-y-2 my-auto py-4">
                  <div className="font-['Playfair_Display'] text-xl font-bold text-white">
                    Anwar Patel Masterclass
                  </div>
                  <div className="text-xs text-[#D4AF37] font-semibold tracking-wider uppercase">
                    & Lions Club of Indore Ahilya
                  </div>
                  <p className="text-[11px] text-neutral-300 font-light leading-relaxed max-w-[220px] mx-auto">
                    Honored with the Prestigious Certificate of Completion & Memento for Professional Bridal Artistry.
                  </p>
                </div>

                <div className="w-full pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-neutral-400">
                  <span>Indore, MP</span>
                  <span className="text-[#F5E5A4] font-medium">Verified Artist</span>
                </div>
              </div>
            )}

            {/* Quick Upload Button on the Certificate Photo */}
            <label
              className="absolute bottom-6 right-6 z-20 px-3.5 py-1.5 rounded-full bg-[#4A1521]/90 hover:bg-[#4A1521] text-[#F5E5A4] border border-[#D4AF37] text-xs font-semibold shadow-xl cursor-pointer flex items-center gap-1.5 transition-all"
              title="Upload your certificate ceremony photo"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>{certPhoto ? 'Change Photo' : 'Upload Photo'}</span>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </label>

            {/* Top Corner Seal */}
            <div className="absolute top-6 left-6 z-20 bg-[#D4AF37] text-[#2E0B12] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>Verified Certificate</span>
            </div>
          </div>

          {/* Right Column: Credential Details & Trust Badges */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              
              <div>
                <span className="text-xs uppercase tracking-widest text-[#7A2832] font-bold">
                  Prestigious Credential
                </span>
                <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-[#4A1521] mt-1">
                  Master Bridal Artistry Certification
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-2 font-light leading-relaxed">
                  Every bride deserves an artist with certified expertise, flawless line precision, and authentic passion. Our lead artist was professionally mentored and certified in advanced bridal motifs.
                </p>
              </div>

              {/* 3 Key Authority Highlights */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F9F5EC] border border-[#D4AF37]/30">
                  <div className="w-8 h-8 rounded-xl bg-[#4A1521] text-[#F5E5A4] flex items-center justify-center shrink-0 mt-0.5">
                    <Star className="w-4 h-4 fill-[#F5E5A4]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#4A1521] uppercase tracking-wide">
                      Mentored by National Artist Anwar Patel
                    </h4>
                    <p className="text-[11px] text-neutral-600 font-light mt-0.5">
                      Intensive training in Rajputi Rajasthani architecture, custom Dulha-Dulhan portrait drawing, and micro-jaal shading.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F9F5EC] border border-[#D4AF37]/30">
                  <div className="w-8 h-8 rounded-xl bg-[#4A1521] text-[#F5E5A4] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#4A1521] uppercase tracking-wide">
                      Recognized by Lions Club of Indore Ahilya
                    </h4>
                    <p className="text-[11px] text-neutral-600 font-light mt-0.5">
                      Awarded the prestigious Certificate of Completion and Recognition Memento for outstanding artistry standards in Indore.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F9F5EC] border border-[#D4AF37]/30">
                  <div className="w-8 h-8 rounded-xl bg-[#4A1521] text-[#F5E5A4] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#4A1521] uppercase tracking-wide">
                      100% Skin Safety & Pure Organic Henna
                    </h4>
                    <p className="text-[11px] text-neutral-600 font-light mt-0.5">
                      Certified formulation knowledge ensuring triple-filtered Sojat henna, therapeutic pure essential oils, and zero chemicals.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Booking Guarantee */}
            <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-neutral-600">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Available at LIG Atal Dwar Studio & Home Visits</span>
              </div>

              <a
                href={`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(
                  "Hello Shreeji mehndi arts, I saw your National Artist certification and award! I would like to book an appointment with your certified artist in Indore."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs uppercase font-bold tracking-wider text-white bg-[#4A1521] hover:bg-[#5C1D24] shadow-md transition-all text-center"
              >
                Book Certified Artist
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
