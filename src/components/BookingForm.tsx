import React, { useState, useEffect } from 'react';
import { Calendar, Phone, User, MessageCircle, MapPin, Sparkles, CheckCircle2, Copy, Check, Send } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/mehndiData';

interface BookingFormProps {
  initialService?: string;
  initialNotes?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ initialService, initialNotes }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [serviceType, setServiceType] = useState('Royal Bridal Mehndi');
  const [indoreArea, setIndoreArea] = useState('LIG Colony');
  const [guestCount, setGuestCount] = useState('1');
  const [specialNotes, setSpecialNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialService) {
      setServiceType(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    if (initialNotes) {
      setSpecialNotes(initialNotes);
    }
  }, [initialNotes]);

  // Construct WhatsApp formatted message
  const getWhatsAppMessage = () => {
    return `🌸 *Mehndi Booking Inquiry - Shreeji mehndi arts* 🌸\n\n` +
      `👤 *Name:* ${fullName.trim() || 'Guest'}\n` +
      `📞 *Phone:* ${phoneNumber.trim() || 'Not specified'}\n` +
      `📅 *Event Date:* ${eventDate || 'To be decided'}\n` +
      `✨ *Service:* ${serviceType}\n` +
      `📍 *Location in Indore:* ${indoreArea}\n` +
      `👥 *Number of Persons:* ${guestCount}\n` +
      (specialNotes ? `📝 *Notes / Custom Request:* ${specialNotes}\n` : '') +
      `\nPlease let me know your availability and confirmation process!`;
  };

  const handleOpenWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const encoded = encodeURIComponent(getWhatsAppMessage());
    window.open(`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encoded}`, '_blank');
  };

  const handleInAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNumber || !eventDate) {
      alert('Please fill in your name, phone number, and event date.');
      return;
    }
    setIsSubmitted(true);
  };

  const handleCopyDetails = () => {
    navigator.clipboard.writeText(getWhatsAppMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="book" className="py-20 bg-[#FDFBF7] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#7A2832]">
            <Calendar className="w-4 h-4 text-[#D4AF37]" />
            <span>Reserve Your Date</span>
            <Calendar className="w-4 h-4 text-[#D4AF37]" />
          </div>
          
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#4A1521] tracking-tight">
            Book Your Appointment
          </h2>
          
          <p className="text-sm text-neutral-600 font-light leading-relaxed">
            Fill out the form below to receive a personalized quote or send an instant booking inquiry directly to our artists on WhatsApp.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto pt-1" />
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/35 shadow-xl relative overflow-hidden">
          
          {/* Decorative Corner Mandala */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

          {isSubmitted ? (
            /* Success Confirmation State */
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#1B4332]/10 text-[#1B4332] flex items-center justify-center mx-auto border-2 border-[#1B4332]/20">
                <CheckCircle2 className="w-8 h-8 text-[#1B4332]" />
              </div>

              <div className="space-y-2">
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#4A1521]">
                  Inquiry Prepared Successfully!
                </h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-neutral-900">{fullName}</span>. You can now send this ready-formatted message directly to our WhatsApp for immediate confirmation.
                </p>
              </div>

              {/* Summary Box */}
              <div className="bg-[#F9F5EC] rounded-2xl p-5 border border-[#D4AF37]/30 text-left max-w-lg mx-auto space-y-2 text-xs text-neutral-700">
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <span className="text-neutral-500">Service:</span>
                  <span className="font-bold text-[#4A1521]">{serviceType}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <span className="text-neutral-500">Event Date:</span>
                  <span className="font-semibold">{eventDate}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <span className="text-neutral-500">Location:</span>
                  <span className="font-semibold">{indoreArea}, Indore</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Phone:</span>
                  <span className="font-semibold">{phoneNumber}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => handleOpenWhatsApp()}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send On WhatsApp Now</span>
                </button>

                <button
                  onClick={handleCopyDetails}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl border border-neutral-300 hover:bg-neutral-50 text-xs font-semibold text-neutral-700 flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-neutral-500" />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Inquiry Text'}</span>
                </button>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-neutral-500 hover:text-neutral-800 underline py-2 cursor-pointer"
                >
                  Edit Information
                </button>
              </div>
            </div>
          ) : (
            /* Main Form */
            <form onSubmit={handleInAppSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Your Full Name <span className="text-[#9B3340]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Priya Patel"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 focus:border-[#4A1521] focus:ring-1 focus:ring-[#4A1521] text-sm text-neutral-800 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    WhatsApp / Phone Number <span className="text-[#9B3340]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 focus:border-[#4A1521] focus:ring-1 focus:ring-[#4A1521] text-sm text-neutral-800 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Event Date */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Event Date <span className="text-[#9B3340]">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      required
                      value={eventDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 focus:border-[#4A1521] focus:ring-1 focus:ring-[#4A1521] text-sm text-neutral-800 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Service Required <span className="text-[#9B3340]">*</span>
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:border-[#4A1521] focus:ring-1 focus:ring-[#4A1521] text-sm text-neutral-800 outline-none transition-all bg-white"
                  >
                    <option value="Royal Bridal Mehndi">Royal Bridal Mehndi (Portraits & Love Story)</option>
                    <option value="Engagement & Groom Mehndi">Engagement & Groom Mehndi</option>
                    <option value="Traditional Arabic & Indo-Western">Traditional Arabic & Indo-Western</option>
                    <option value="Festival & Party Family Packages">Festival / Party Family Packages (Karwa Chauth, Teej)</option>
                    <option value="Custom Sangeet / Group Package">Large Wedding Sangeet Corner (Multiple Artists)</option>
                  </select>
                </div>

                {/* Indore Area / Venue */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Indore Area / Landmark
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={indoreArea}
                      onChange={(e) => setIndoreArea(e.target.value)}
                      placeholder="e.g. LIG Atal Dwar, Vijay Nagar, Palasia..."
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 focus:border-[#4A1521] focus:ring-1 focus:ring-[#4A1521] text-sm text-neutral-800 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Guest / Hand Count */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Number of Persons
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:border-[#4A1521] focus:ring-1 focus:ring-[#4A1521] text-sm text-neutral-800 outline-none transition-all bg-white"
                  >
                    <option value="1 (Bride/Individual)">1 Person (Bride or Individual)</option>
                    <option value="2-4 Persons">2 - 4 Persons (Bride + Close Family)</option>
                    <option value="5-10 Persons">5 - 10 Persons (Family Gathering)</option>
                    <option value="10+ Sangeet Guests">10+ Guests (Sangeet Ceremony)</option>
                  </select>
                </div>

              </div>

              {/* Special Notes / Requests */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                  Special Custom Requests (Love story elements, hashtags, wedding venue, etc.)
                </label>
                <textarea
                  rows={3}
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  placeholder="Share any special motifs you want included (e.g. groom's name in jaal, bride & groom sketches, specific ceremony times, etc.)"
                  className="w-full p-3.5 rounded-xl border border-neutral-300 focus:border-[#4A1521] focus:ring-1 focus:ring-[#4A1521] text-sm text-neutral-800 outline-none transition-all"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl text-xs uppercase font-bold tracking-wider text-white bg-[#4A1521] hover:bg-[#5C1D24] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#D4AF37]" />
                  <span>Submit Booking Request</span>
                </button>

                <button
                  type="button"
                  onClick={handleOpenWhatsApp}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl text-xs uppercase font-bold tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Direct via WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-neutral-500 font-light">
                *We respond within 30 minutes on WhatsApp. No advance payment required for date availability inquiry.
              </p>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
