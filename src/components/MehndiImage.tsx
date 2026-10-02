import React, { useState, useEffect } from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';
import { MehndiArtPreview } from './MehndiArtPreview';

interface MehndiImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  category?: string;
  artType?: string;
  storageKey?: string;
  customText?: string;
}

export const MehndiImage: React.FC<MehndiImageProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc,
  category = 'Bridal Mehndi',
  artType = 'mandala',
  storageKey,
  customText,
}) => {
  const [localPhoto, setLocalPhoto] = useState<string | null>(null);
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check if the salon owner has uploaded a real photo from their phone for this card
  useEffect(() => {
    if (storageKey) {
      const saved = localStorage.getItem(`shreeji_img_${storageKey}`);
      if (saved) {
        setLocalPhoto(saved);
        setCurrentSrc(saved);
        setHasError(false);
        setIsLoading(false);
      }
    }
  }, [storageKey]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      if (base64) {
        setLocalPhoto(base64);
        setCurrentSrc(base64);
        setHasError(false);
        setIsLoading(false);
        if (storageKey) {
          try {
            localStorage.setItem(`shreeji_img_${storageKey}`, base64);
          } catch (err) {
            console.warn('Storage limit reached, keeping in session', err);
          }
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
      setIsLoading(false);
    }
  };

  if (hasError && !localPhoto) {
    // Beautiful handcrafted SVG Mehndi artwork fallback matching the exact motif
    return (
      <div className={`relative ${className}`}>
        <MehndiArtPreview
          type={artType}
          title={alt}
          customText={customText}
          className="w-full h-full"
        />

        {/* Upload Button Overlay to replace with real photo from mobile */}
        <label
          className="absolute bottom-3 right-3 z-20 p-2 rounded-full bg-black/70 hover:bg-black/90 text-[#F5E5A4] border border-[#D4AF37]/50 shadow-lg cursor-pointer transition-transform hover:scale-110 flex items-center justify-center"
          title="Upload your own photo for this design"
        >
          <Camera className="w-4 h-4" />
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="hidden"
          />
        </label>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#2E0B12] group/img ${className}`}>
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-[#380F17] flex items-center justify-center z-10">
          <div className="w-8 h-8 rounded-full border-2 border-[#D4AF37]/30 border-t-[#D4AF37] animate-spin" />
        </div>
      )}

      <img
        src={localPhoto || currentSrc}
        alt={alt}
        referrerPolicy="no-referrer"
        crossOrigin="anonymous"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={handleError}
        className={`w-full h-full object-cover transition-all duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Floating Photo Upload Action (Salon Owner Tool) */}
      <label
        className="absolute bottom-3 right-3 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 text-[#F5E5A4] border border-white/20 hover:border-[#D4AF37] shadow-lg cursor-pointer opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center"
        title="Upload your actual photo for this design"
      >
        <Camera className="w-3.5 h-3.5" />
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
          className="hidden"
        />
      </label>
    </div>
  );
};
