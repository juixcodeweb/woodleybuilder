import React from 'react';
import { ArrowRight, Phone, ShieldCheck, CheckCircle2, Award, Calendar, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '../../data/woodleyData';

interface HeroSectionProps {
  onNavigate: (path: string) => void;
  onRequestQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onRequestQuote }) => {
  return (
    <div className="relative bg-[#111812] text-white overflow-hidden">
      {/* Background Image Container with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/projects/extension-6-scaled.jpg"
          alt="Completed Woodley Builders Home Extension in Surrey"
          className="w-full h-full object-cover object-center filter brightness-[0.45] scale-[1.02]"
        />
        {/* Subtle Brand Green Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1710] via-[#0e1710]/70 to-[#0e1710]/40" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0e1710]/40 to-[#0e1710]/80" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-3xl space-y-6">
          {/* Unboxed Kicker / Trust Indicator (Zero-Pill Discipline) */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#F2961C] uppercase">
            <span>Guildford & Surrey Specialists</span>
            <span aria-hidden="true">·</span>
            <span>Est. Over 30 Years</span>
            <span aria-hidden="true">·</span>
            <span>Family Heritage</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-[1.12] text-balance">
            Exceptional Building, Home Extensions & Renovations in Guildford.
          </h1>

          {/* Body Copy Preserved from Original Website */}
          <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl text-pretty">
            Woodley Builders are long-established and preferred building modernisation experts based in Guildford, Surrey. With over 30 years personal experience in building houses, extensions, kitchens and bathrooms, Laurence Woodley guarantees a trouble-free, clean and tidy job where the price quoted is the price you pay.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <button
              onClick={onRequestQuote}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#F2961C] hover:bg-[#e08512] active:scale-[0.98] text-white text-sm sm:text-base font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              <span>Request a Guaranteed Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('/home-extensions')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white text-sm sm:text-base font-medium border border-white/20 backdrop-blur-sm transition-all"
            >
              <span>Explore Our Services</span>
            </button>

            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg text-slate-300 hover:text-white text-xs sm:text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-[#F2961C]" />
              <span>Or call {COMPANY_DETAILS.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 4-Column Proof & Trust Strip Below Hero */}
      <div className="relative z-10 bg-[#162217]/95 border-t border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="flex items-center gap-3.5 pt-4 md:pt-0">
              <div className="w-10 h-10 rounded-lg bg-[#3E6838]/40 border border-[#3E6838]/60 flex items-center justify-center text-[#F2961C] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-lg font-bold text-white font-display tabular-nums">
                  30+ Years
                </span>
                <span className="text-xs text-slate-300">
                  Building trade experience
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-4 md:pt-0 md:pl-6">
              <div className="w-10 h-10 rounded-lg bg-[#3E6838]/40 border border-[#3E6838]/60 flex items-center justify-center text-[#F2961C] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-lg font-bold text-white font-display">
                  Guaranteed Price
                </span>
                <span className="text-xs text-slate-300">
                  Price quoted is price paid
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-4 md:pt-0 md:pl-6">
              <div className="w-10 h-10 rounded-lg bg-[#3E6838]/40 border border-[#3E6838]/60 flex items-center justify-center text-[#F2961C] shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-lg font-bold text-white font-display">
                  Clean & Tidy Job
                </span>
                <span className="text-xs text-slate-300">
                  Minimal life disruption
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-4 md:pt-0 md:pl-6">
              <div className="w-10 h-10 rounded-lg bg-[#3E6838]/40 border border-[#3E6838]/60 flex items-center justify-center text-[#F2961C] shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-lg font-bold text-white font-display tabular-nums">
                  60+ Years
                </span>
                <span className="text-xs text-slate-300">
                  Surrey family tradition
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
