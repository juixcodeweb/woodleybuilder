import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck, ChevronDown, Clock } from 'lucide-react';
import { COMPANY_DETAILS, SERVICES } from '../data/woodleyData';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onRequestQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onRequestQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Extensions', path: '/home-extensions' },
    { label: 'Kitchens', path: '/kitchens' },
    { label: 'Bathrooms', path: '/bathrooms' },
    { label: 'Maintenance', path: '/house-maintenance' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact-us' }
  ];

  return (
    <>
      {/* Top Notification / Trust Bar */}
      <div className="bg-[#1A251C] text-white/90 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-white/80">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F2961C]" />
              Over 30 Years Experience in Guildford & Surrey
            </span>
            <span className="text-white/40">·</span>
            <span className="flex items-center gap-1.5 text-white/80">
              <Clock className="w-3.5 h-3.5 text-[#F2961C]" />
              Mon–Fri 8am–6pm · Sat 8:30am–1pm
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="text-white/70">Need urgent advice or repairs?</span>
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="text-[#F2961C] hover:text-white transition-colors flex items-center gap-1 font-semibold"
            >
              <Phone className="w-3 h-3" />
              {COMPANY_DETAILS.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-2.5' : 'bg-white py-3 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Brand Zone */}
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-3.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F2961C] rounded-lg shrink-0"
            aria-label="Woodley Builders Homepage"
          >
            <img
              src="/src/assets/woodley-builders-logo.jpg"
              alt="Woodley Builders"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
            <div className="hidden xl:flex flex-col">
              <span className="font-display font-bold text-lg leading-tight tracking-tight text-slate-900">
                Woodley Builders
              </span>
              <span className="text-[11px] font-medium text-[#3E6838] tracking-wide uppercase">
                Guildford, Surrey
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-700">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => onNavigate(link.path)}
                  className={`relative py-1 transition-colors whitespace-nowrap text-sm font-medium ${
                    isActive
                      ? 'text-[#3E6838] font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3E6838] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Zone: Phone + Request Quote Button */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-2 text-xs xl:text-sm font-semibold text-slate-800 hover:text-[#3E6838] px-3 py-2 rounded-lg transition-colors border border-slate-200 hover:border-slate-300"
              title="Call Laurence Woodley"
            >
              <Phone className="w-3.5 h-3.5 text-[#3E6838]" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>

            <button
              onClick={onRequestQuote}
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#F2961C] hover:bg-[#e08512] active:scale-[0.98] transition-all rounded-lg shadow-sm whitespace-nowrap"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 hidden sm:inline-block" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-xl z-50 p-5 space-y-4 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => {
                  onNavigate(link.path);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  currentPath === link.path
                    ? 'bg-[#3E6838]/10 text-[#3E6838] font-semibold'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-3">
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-slate-100 text-slate-900 font-semibold text-sm hover:bg-slate-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#3E6838]" />
              <span>Call: {COMPANY_DETAILS.phone}</span>
            </a>
            <button
              onClick={() => {
                onRequestQuote();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-[#F2961C] text-white font-semibold text-sm hover:bg-[#e08512] transition-colors shadow-sm"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
