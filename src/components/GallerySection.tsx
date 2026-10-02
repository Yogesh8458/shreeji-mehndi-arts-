import React, { useState, useEffect } from 'react';
import { Sparkles, ZoomIn, X, ChevronLeft, ChevronRight, MessageCircle, Heart, ShieldCheck, Camera, UploadCloud, RefreshCw } from 'lucide-react';
import { GALLERY_DATA, GalleryItem, BUSINESS_INFO } from '../data/mehndiData';
import { MehndiImage } from './MehndiImage';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [uploadSuccessCount, setUploadSuccessCount] = useState<number>(0);

  const filterTabs = [
    { key: 'all', label: 'All 12 Real Samples' },
    { key: 'bridal', label: 'Bridal & Love Story' },
    { key: 'arabic', label: 'Arabic & Indo-Western' },
    { key: 'festive', label: 'Festive & Sangeet' },
    { key: 'groom_engagement', label: 'Engagement & Hathphool' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeFilter);

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((i) => i.id === item.id);
    setCurrentIndex(idx !== -1 ? idx : 0);
    setSelectedItem(item);
  };

  const handleNext = () => {
    if (filteredItems.length === 0) return;
    const nextIdx = (currentIndex + 1) % filteredItems.length;
    setCurrentIndex(nextIdx);
    setSelectedItem(filteredItems[nextIdx]);
  };

  const handlePrev = () => {
    if (filteredItems.length === 0) return;
    const prevIdx = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentIndex(prevIdx);
    setSelectedItem(filteredItems[prevIdx]);
  };

  // Bulk uploader for salon owner
  const handleBulkUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    let count = 0;
    Array.from(files).forEach((file, index) => {
      if (index < GALLERY_DATA.length) {
        const item = GALLERY_DATA[index];
        const reader = new FileReader();
        reader.onload = (event) => {
          const base64 = event.target?.result as string;
          if (base64) {
            try {
              localStorage.setItem(`shreeji_img_${item.storageKey}`, base64);
              count++;
              setUploadSuccessCount(count);
            } catch (err) {
              console.warn('Storage limit reached', err);
            }
          }
        };
        reader.readAsDataURL(file);
      }
    });

    setTimeout(() => {
      window.location.reload();
    }, 1200);
  };

  const handleResetPhotos = () => {
    GALLERY_DATA.forEach((item) => {
      localStorage.removeItem(`shreeji_img_${item.storageKey}`);
    });
    window.location.reload();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === 'Escape') setSelectedItem(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, currentIndex, filteredItems]);

  return (
    <section id="gallery" className="py-20 bg-[#F9F5EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#7A2832]">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Real Salon Portfolio</span>
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          </div>
          
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A1521] tracking-tight">
            Our 12 Signature Masterpieces
          </h2>
          
          <p className="text-base text-neutral-600 font-light leading-relaxed">
            Real designs handcrafted by Shreeji mehndi arts. Featuring custom Varmala portraits, couple names in lotus jaal, Rajwada peacocks & elephants, and hathphool jewel lace.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto pt-1" />
        </div>

        {/* Salon Owner Quick Upload Banner */}
        <div className="mb-10 max-w-3xl mx-auto p-4 rounded-2xl bg-white border border-[#D4AF37]/35 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#4A1521]/10 text-[#4A1521] flex items-center justify-center shrink-0">
              <Camera className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#4A1521] uppercase tracking-wider">
                Shreeji Salon Photo Sync
              </div>
              <p className="text-[11px] text-neutral-500">
                You can upload your phone's WhatsApp photos directly to update these cards instantly.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <label className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#4A1521] text-[#F5E5A4] hover:bg-[#5C1D24] transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm">
              <UploadCloud className="w-3.5 h-3.5" />
              <span>Upload Photos</span>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleBulkUpload}
                className="hidden"
              />
            </label>

            <button
              onClick={handleResetPhotos}
              className="p-2 rounded-xl border border-neutral-200 text-neutral-500 hover:text-neutral-800 text-xs"
              title="Reset to default artwork"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Filter Tabs (Interactive Segmented Control) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#4A1521] text-[#F5E5A4] shadow-md shadow-[#4A1521]/20'
                    : 'bg-white text-neutral-600 hover:text-[#4A1521] border border-neutral-200 hover:border-[#D4AF37]/50'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#D4AF37]/25 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                <MehndiImage
                  src={item.image}
                  fallbackSrc={item.fallbackImage}
                  alt={item.title}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  category={item.categoryLabel}
                  artType={item.artType}
                  customText={item.customText}
                  storageKey={item.storageKey}
                />

                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-60 group-hover:opacity-85 transition-opacity pointer-events-none" />

                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3 bg-[#4A1521]/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase text-[#F5E5A4] border border-[#D4AF37]/30 z-10">
                  {item.categoryLabel}
                </div>

                {/* Zoom Icon Button */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Bottom Overlay Text */}
                <div className="absolute bottom-0 inset-x-0 p-4 space-y-1 text-white z-10">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#D4AF37] font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Stain Result: {item.stainDepth}</span>
                  </div>
                  <h3 className="font-['Playfair_Display'] text-lg font-bold text-white group-hover:text-[#F5E5A4] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-2 font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedItem(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-20"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          {filteredItems.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer z-20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer z-20"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Lightbox Content Container */}
          <div
            className="relative max-w-4xl w-full bg-[#2E0B12] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Preview */}
            <div className="relative md:w-3/5 bg-black flex items-center justify-center min-h-[300px] max-h-[55vh] md:max-h-none overflow-hidden">
              <MehndiImage
                src={selectedItem.image}
                fallbackSrc={selectedItem.fallbackImage}
                alt={selectedItem.title}
                className="w-full h-full object-contain max-h-[75vh]"
                category={selectedItem.categoryLabel}
                artType={selectedItem.artType}
                customText={selectedItem.customText}
                storageKey={selectedItem.storageKey}
              />
            </div>

            {/* Information & Action Sidebar */}
            <div className="p-6 md:w-2/5 flex flex-col justify-between space-y-6 text-white overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#D4AF37]">
                  <span className="uppercase tracking-widest font-semibold">
                    {selectedItem.categoryLabel}
                  </span>
                  <span>
                    {currentIndex + 1} of {filteredItems.length}
                  </span>
                </div>

                <h3 className="font-['Playfair_Display'] text-2xl font-bold leading-tight">
                  {selectedItem.title}
                </h3>

                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  {selectedItem.description}
                </p>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1 text-xs">
                  <div className="text-[#F5E5A4] font-medium flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                    <span>Expected Stain Result</span>
                  </div>
                  <p className="text-neutral-300">
                    {selectedItem.stainDepth} with our organic Sojat cones and clove fumigation care.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(
                    `Hello Shreeji mehndi arts, I really love this design from your gallery: "${selectedItem.title}" (${selectedItem.categoryLabel}). Can you do this design for my event in Indore?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl text-xs uppercase font-bold tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire This Design on WhatsApp</span>
                </a>

                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-medium text-neutral-300 hover:text-white bg-white/10 hover:bg-white/15 transition-colors cursor-pointer"
                >
                  Back to Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

