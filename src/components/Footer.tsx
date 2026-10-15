import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { COMPANY_DETAILS, SERVICES } from '../data/woodleyData';

interface FooterProps {
  onNavigate: (path: string) => void;
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestQuote }) => {
  return (
    <footer className="bg-[#141B15] text-slate-300 border-t border-slate-800">
      {/* Pre-footer Call to Action Banner */}
      <div className="bg-[#1D2B1F] border-b border-white/5 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#F2961C]">
              Start Your Surrey Building Project
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
              Ready to discuss your extension, kitchen or bathroom?
            </h2>
            <p className="text-slate-300 text-sm max-w-2xl">
              Contact Laurence Woodley for honest advice, a transparent site survey, and a guaranteed quotation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm font-semibold transition-colors border border-white/10"
            >
              <Phone className="w-4 h-4 text-[#F2961C]" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
            <button
              onClick={onRequestQuote}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#F2961C] hover:bg-[#e08512] text-white text-sm font-semibold transition-all shadow-md"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1: Brand & Credentials (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg inline-block">
                <img
                  src="/src/assets/woodley-builders-logo.jpg"
                  alt="Woodley Builders Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white block">
                  Woodley Builders
                </span>
                <span className="text-xs text-slate-400">
                  Guildford, Surrey · Est. 1990s
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Owned and run by Laurence Woodley, continuing a family building tradition in Surrey spanning over 60 years. Specialists in home extensions, bespoke kitchen renovations, luxury bathrooms, and property maintenance.
            </p>

            {/* Trade accreditations */}
            <div className="pt-2 flex items-center gap-4">
              <div className="bg-white/95 px-3 py-1.5 rounded border border-white/10 inline-flex items-center">
                <img
                  src="/src/assets/niceic-logo.jpg"
                  alt="NICEIC Approved Contractor"
                  className="h-7 w-auto object-contain"
                />
              </div>
              <div className="bg-white/95 px-3 py-1.5 rounded border border-white/10 inline-flex items-center">
                <img
                  src="/src/assets/corgi-gas.jpg"
                  alt="Gas Safe Registered Work"
                  className="h-7 w-auto object-contain"
                />
              </div>
              <span className="text-xs text-slate-400">
                Certified electrical & gas trade partners
              </span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white font-display">
              Building Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onNavigate(`/${s.slug}`)}
                    className="text-slate-400 hover:text-[#F2961C] transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('/gallery')}
                  className="text-slate-400 hover:text-[#F2961C] transition-colors text-left"
                >
                  Completed Projects
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white font-display">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="text-slate-400 hover:text-[#F2961C] transition-colors text-left"
                >
                  About Laurence Woodley
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/gallery')}
                  className="text-slate-400 hover:text-[#F2961C] transition-colors text-left"
                >
                  Project Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact-us')}
                  className="text-slate-400 hover:text-[#F2961C] transition-colors text-left"
                >
                  Request a Quotation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/home/privacy-policy')}
                  className="text-slate-400 hover:text-[#F2961C] transition-colors text-left"
                >
                  Privacy Policy (GDPR)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/home/terms-and-conditions')}
                  className="text-slate-400 hover:text-[#F2961C] transition-colors text-left"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white font-display">
              Contact & Hours
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F2961C] shrink-0 mt-0.5" />
                <span>
                  {COMPANY_DETAILS.address.line1}<br />
                  {COMPANY_DETAILS.address.town}, {COMPANY_DETAILS.address.county}<br />
                  {COMPANY_DETAILS.address.postcode}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F2961C] shrink-0" />
                <a
                  href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                  className="hover:text-white font-medium text-slate-200 transition-colors"
                >
                  {COMPANY_DETAILS.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F2961C] shrink-0" />
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="hover:text-white transition-colors truncate"
                >
                  {COMPANY_DETAILS.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300 font-medium">Mon–Fri: 8:00 AM – 6:00 PM</p>
                  <p>Saturday: 8:30 AM – 1:00 PM</p>
                  <p className="text-amber-400/90 mt-0.5">Emergency repairs: On-call</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Surrey Service Areas Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-400">
          <p className="font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
            Surrey Locations Served:
          </p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {COMPANY_DETAILS.serviceAreas.map((area, idx) => (
              <React.Fragment key={area.name}>
                <span className="text-slate-400 hover:text-white transition-colors cursor-default">
                  {area.name}
                </span>
                {idx < COMPANY_DETAILS.serviceAreas.length - 1 && (
                  <span className="text-slate-700" aria-hidden="true">·</span>
                )}
              </React.Fragment>
            ))}
            <span className="text-slate-700" aria-hidden="true">·</span>
            <span className="text-slate-400">and all surrounding Surrey villages</span>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © {new Date().getFullYear()} Woodley Builders. All rights reserved. Registered in England & Wales.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={() => onNavigate('/home/privacy-policy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => onNavigate('/home/terms-and-conditions')}
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
            <span className="text-slate-700">·</span>
            <span className="text-slate-400">VAT Exempt / Small Business</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
