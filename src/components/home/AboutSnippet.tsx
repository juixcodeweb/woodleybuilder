import React from 'react';
import { ArrowRight, ShieldCheck, Check, HeartHandshake } from 'lucide-react';
import { COMPANY_DETAILS } from '../../data/woodleyData';

interface AboutSnippetProps {
  onNavigate: (path: string) => void;
  onRequestQuote: () => void;
}

export const AboutSnippet: React.FC<AboutSnippetProps> = ({ onNavigate, onRequestQuote }) => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <img
                src="/src/assets/projects/kitchen1-scaled.jpg"
                alt="Woodley Builders Craftsmanship in Surrey"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200/80 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#3E6838] block">
                      Local Guildford Builder
                    </span>
                    <span className="text-sm font-bold font-display text-slate-900">
                      Laurence Woodley & Family Heritage
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#F2961C] tabular-nums">
                    Est. 30+ Years
                  </span>
                </div>
              </div>
            </div>

            {/* Small 2-image grid below */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-slate-200 h-40">
                <img
                  src="/src/assets/projects/Bathroom-bath.jpg"
                  alt="Bathroom Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-200 h-40">
                <img
                  src="/src/assets/projects/extension-2.jpg"
                  alt="House Extension Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#3E6838]">
              About Woodley Builders
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight leading-tight">
              Continuing a 60-Year Family Building Tradition in Surrey.
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Woodley Builders is owned and run by Laurence Woodley. A life-long Surrey resident, Laurence is continuing a family tradition in the building trade. Together, the family has had an active presence in Surrey for over 60 years.
              </p>
              <p>
                Laurence brings all of that combined experience into his work: trustworthy, clean and reliable. Unlike many building outfits who subcontract everything to strangers, Laurence maintains close personal involvement on every job from initial survey to final finish.
              </p>
              <p>
                We believe building work should be an exciting improvement to your family life, not an endurance test. That is why our clean and tidy guarantee and fixed pricing promise are central to everything we do.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                <Check className="w-4 h-4 text-[#3E6838] shrink-0" />
                <span>Life-long Surrey resident with extensive local planning insight</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                <Check className="w-4 h-4 text-[#3E6838] shrink-0" />
                <span>Complete trade management: bricklaying, structural steel, plumbing, electrics, tiling</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                <Check className="w-4 h-4 text-[#3E6838] shrink-0" />
                <span>Clean, tidy sites protected with dust barriers every single day</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={() => onNavigate('/about')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#3E6838] hover:bg-[#2e4f2a] text-white text-sm font-semibold transition-all shadow-sm"
              >
                <span>Read Full Company Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onRequestQuote}
                className="text-sm font-semibold text-[#F2961C] hover:text-[#d67e11] transition-colors"
              >
                Request a Free Quote →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
