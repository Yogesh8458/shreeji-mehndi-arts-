import React, { useState } from 'react';
import { Calculator, Check, MessageCircle, Sparkles, HelpCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mehndiData';

interface PriceEstimatorProps {
  onPreFillBooking: (serviceName: string, notes: string) => void;
}

export const PriceEstimator: React.FC<PriceEstimatorProps> = ({ onPreFillBooking }) => {
  const [eventType, setEventType] = useState<'bridal' | 'engagement' | 'guest'>('bridal');
  const [armLength, setArmLength] = useState<'palms' | 'wrist' | 'elbow' | 'shoulder'>('elbow');
  const [includeFeet, setIncludeFeet] = useState<boolean>(true);
  const [includeCustomPortraits, setIncludeCustomPortraits] = useState<boolean>(true);
  const [guestCount, setGuestCount] = useState<number>(0);

  // Compute pricing
  let basePrice = 0;
  let estimatedHours = 0;

  if (eventType === 'bridal') {
    if (armLength === 'palms') { basePrice = 2500; estimatedHours = 2.5; }
    else if (armLength === 'wrist') { basePrice = 3800; estimatedHours = 3.5; }
    else if (armLength === 'elbow') { basePrice = 5500; estimatedHours = 4.5; }
    else if (armLength === 'shoulder') { basePrice = 7500; estimatedHours = 6; }

    if (includeFeet) { basePrice += 1800; estimatedHours += 1.5; }
    if (includeCustomPortraits) { basePrice += 1200; estimatedHours += 1; }
  } else if (eventType === 'engagement') {
    if (armLength === 'palms') { basePrice = 1200; estimatedHours = 1.5; }
    else if (armLength === 'wrist') { basePrice = 1800; estimatedHours = 2; }
    else { basePrice = 2800; estimatedHours = 3; }
    if (includeFeet) { basePrice += 1000; estimatedHours += 1; }
  } else {
    // Guest package
    basePrice = 1000;
    estimatedHours = 1;
  }

  const guestCost = guestCount * 450;
  const totalPrice = basePrice + guestCost;

  const getPackageDescription = () => {
    const parts = [
      eventType === 'bridal' ? 'Bridal Package' : eventType === 'engagement' ? 'Engagement Package' : 'Guest/Party Package',
      `Arms: ${armLength.toUpperCase()}`,
      includeFeet ? 'Includes Bridal Feet' : 'Hands Only',
      includeCustomPortraits && eventType === 'bridal' ? 'Custom Portraits (Bride & Groom)' : '',
      guestCount > 0 ? `+${guestCount} Family Guests` : '',
    ].filter(Boolean);
    return parts.join(' • ');
  };

  const handleSendToWhatsApp = () => {
    const text = `Hello Shreeji mehndi arts! I used your online price calculator for Indore:\n` +
      `• Event: ${eventType.toUpperCase()}\n` +
      `• Arm Coverage: ${armLength}\n` +
      `• Feet Design Included: ${includeFeet ? 'Yes' : 'No'}\n` +
      `• Custom Portraits/Motifs: ${includeCustomPortraits ? 'Yes' : 'No'}\n` +
      `• Additional Guests: ${guestCount}\n` +
      `• Estimated Price: ₹${totalPrice.toLocaleString('en-IN')}\n` +
      `• Estimated Time: ~${estimatedHours.toFixed(1)} hrs\n\n` +
      `Please let me know if this slot is available for my event!`;

    window.open(`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="pricing" className="py-20 bg-[#FDFBF7] border-t border-b border-[#D4AF37]/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#7A2832]">
            <Calculator className="w-4 h-4 text-[#D4AF37]" />
            <span>Interactive Cost Calculator</span>
          </div>
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#4A1521]">
            Estimate Your Mehndi Package
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-light">
            Customize coverage, guest additions, and get an instant transparent quote for home service in Indore.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="bg-white rounded-3xl border border-[#D4AF37]/30 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Controls Column */}
          <div className="p-6 sm:p-8 lg:col-span-7 space-y-6">
            
            {/* Step 1: Event Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#4A1521] mb-2">
                1. Select Occasion
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: 'bridal', label: 'Bridal' },
                  { key: 'engagement', label: 'Engagement / Groom' },
                  { key: 'guest', label: 'Party / Festival' },
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setEventType(item.key as any)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer text-center ${
                      eventType === item.key
                        ? 'bg-[#4A1521] text-[#F5E5A4] shadow-md'
                        : 'bg-neutral-50 text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Hand / Arm Length */}
            {eventType !== 'guest' && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4A1521] mb-2">
                  2. Hand & Arm Coverage
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { key: 'palms', label: 'Palms & Wrists' },
                    { key: 'wrist', label: 'Mid-Forearm' },
                    { key: 'elbow', label: 'Full Elbow (Classic)' },
                    { key: 'shoulder', label: 'Upper Arm / Shoulder' },
                  ].map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setArmLength(item.key as any)}
                      className={`py-2 px-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer text-center ${
                        armLength === item.key
                          ? 'bg-[#D4AF37] text-[#2E0B12] font-bold shadow-sm'
                          : 'bg-neutral-50 text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Add-ons Checkboxes */}
            <div className="space-y-3 pt-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#4A1521]">
                3. Add-on Customizations
              </label>

              <label className="flex items-center gap-3 p-3 rounded-xl border border-neutral-200 hover:border-[#D4AF37] transition-colors cursor-pointer bg-neutral-50/60">
                <input
                  type="checkbox"
                  checked={includeFeet}
                  onChange={(e) => setIncludeFeet(e.target.checked)}
                  className="w-4 h-4 text-[#4A1521] rounded accent-[#4A1521] cursor-pointer"
                />
                <div className="text-xs">
                  <span className="font-semibold text-neutral-800">Include Feet Mehndi (Ankles / Calves)</span>
                  <span className="text-neutral-500 block text-[11px]">Intricate bridal payal border & lotus motifs (+₹1,800)</span>
                </div>
              </label>

              {eventType === 'bridal' && (
                <label className="flex items-center gap-3 p-3 rounded-xl border border-neutral-200 hover:border-[#D4AF37] transition-colors cursor-pointer bg-neutral-50/60">
                  <input
                    type="checkbox"
                    checked={includeCustomPortraits}
                    onChange={(e) => setIncludeCustomPortraits(e.target.checked)}
                    className="w-4 h-4 text-[#4A1521] rounded accent-[#4A1521] cursor-pointer"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-neutral-800">Custom Love Story & Dulha-Dulhan Portraits</span>
                    <span className="text-neutral-500 block text-[11px]">Hand-drawn bride/groom faces, wedding date, baraat & varmala (+₹1,200)</span>
                  </div>
                </label>
              )}
            </div>

            {/* Step 4: Additional Guests */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#4A1521]">
                  4. Additional Family & Sangeet Guests
                </label>
                <span className="text-xs font-semibold text-[#7A2832]">
                  {guestCount} Guests (+₹{(guestCount * 450).toLocaleString('en-IN')})
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                step="1"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full accent-[#4A1521] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
                <span>Bride Only (0)</span>
                <span>5 Guests</span>
                <span>10 Guests</span>
                <span>20 Guests</span>
              </div>
            </div>

          </div>

          {/* Result / Summary Column */}
          <div className="p-6 sm:p-8 lg:col-span-5 bg-[#380F17] text-white flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Estimated Quotation</span>
              </div>

              <div>
                <div className="text-xs text-neutral-300">Estimated Total (Indore Home Service)</div>
                <div className="font-['Cinzel'] text-4xl sm:text-5xl font-bold text-[#F5E5A4] mt-1">
                  ₹{totalPrice.toLocaleString('en-IN')}
                </div>
                <div className="text-[11px] text-neutral-300 mt-1">
                  *Includes cones, herbal sealing balm & travel in Indore
                </div>
              </div>

              {/* Breakdown */}
              <div className="border-t border-white/10 pt-4 space-y-2 text-xs text-neutral-300">
                <div className="flex justify-between">
                  <span>Estimated Duration:</span>
                  <span className="font-semibold text-white">~{estimatedHours.toFixed(1)} to {(estimatedHours + 1).toFixed(1)} Hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Henna Formula:</span>
                  <span className="font-semibold text-[#D4AF37]">100% Organic Sojat</span>
                </div>
                <div className="flex justify-between">
                  <span>Artists Provided:</span>
                  <span className="font-semibold text-white">{guestCount > 8 ? '2 Artists' : '1 Senior Artist'}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-black/30 border border-white/10 text-xs text-neutral-300 space-y-1">
                <div className="font-medium text-[#F5E5A4]">Your Package Configuration:</div>
                <div className="text-[11px] line-clamp-3 leading-relaxed">{getPackageDescription()}</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2 pt-2">
              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-3.5 px-4 rounded-xl text-xs uppercase font-bold tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get This Quote on WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  onPreFillBooking(
                    eventType === 'bridal' ? 'Royal Bridal Mehndi' : eventType === 'engagement' ? 'Engagement & Groom Mehndi' : 'Festival / Party Mehndi',
                    `Estimated quote: ₹${totalPrice}. Details: ${getPackageDescription()}`
                  );
                }}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#2E0B12] bg-[#D4AF37] hover:bg-[#F5E5A4] transition-colors cursor-pointer"
              >
                Fill Booking Form With This
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
