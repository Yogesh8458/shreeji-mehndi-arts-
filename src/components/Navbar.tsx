import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Calendar, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mehndiData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'New Salon', href: '#salon', isSpecial: true },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#gallery' },
    { name: 'Award & Certificate', href: '#certification' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#380f17]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-[#D4AF37]/20 py-2.5'
            : 'bg-gradient-to-b from-[#23080e]/95 via-[#380f17]/80 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a href="#home" className="flex items-center gap-2.5 group text-left">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F5E5A4] flex items-center justify-center p-0.5 shadow-md shadow-[#D4AF37]/20 transition-transform group-hover:scale-105">
                <div className="w-full h-full rounded-full bg-[#4A1521] flex items-center justify-center text-[#D4AF37]">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-['Cinzel'] text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                  Shreeji
                </span>
                <span className="text-[10px] sm:text-xs font-['Montserrat'] tracking-[0.25em] uppercase text-[#D4AF37] -mt-0.5">
                  Mehndi Arts • Indore
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                    link.isSpecial
                      ? 'text-[#F5E5A4] px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 hover:bg-[#D4AF37]/30'
                      : 'text-neutral-200 hover:text-[#D4AF37] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-1.5 text-xs text-[#E6CA65] hover:text-white px-2.5 py-1.5 rounded border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all"
                title="Call Shreeji mehndi arts"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-medium tracking-wide">{BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold text-[#2E0B12] bg-gradient-to-r from-[#F5E5A4] via-[#D4AF37] to-[#B89628] hover:brightness-110 shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-3 py-1.5 rounded-full text-[11px] font-semibold text-[#2E0B12] bg-[#D4AF37] hover:bg-[#F5E5A4] transition-colors"
              >
                Book
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:text-[#D4AF37] rounded-md transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="fixed right-0 top-0 bottom-0 w-3/4 max-w-xs bg-[#2E0B12] border-l border-[#D4AF37]/30 shadow-2xl p-6 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#D4AF37]/20">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                  <span className="font-['Cinzel'] font-bold text-white text-lg">Shreeji mehndi</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-neutral-300 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col space-y-4 mt-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base text-neutral-200 hover:text-[#D4AF37] font-medium transition-colors py-1"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#D4AF37]/20 space-y-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-medium text-white bg-white/10 hover:bg-white/15 rounded-lg border border-[#D4AF37]/30"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call +91 9244796126</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-lg shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-[#2E0B12] bg-[#D4AF37] hover:bg-[#F5E5A4] rounded-lg shadow-md cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
