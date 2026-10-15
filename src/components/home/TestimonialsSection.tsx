import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../../data/woodleyData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#1B271D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#F2961C]">
            Client Endorsements & Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Trusted by Surrey Homeowners for Decades
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Read genuine feedback from homeowners in Guildford, Farnham, and Cranleigh who entrusted their kitchens, extensions, and bathrooms to Laurence Woodley.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#243326] border border-white/10 rounded-2xl p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm hover:border-[#F2961C]/40 transition-colors"
            >
              <div className="space-y-4">
                {/* Star rating & project kicker */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F2961C] text-[#F2961C]" />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-white/60 tracking-wide">
                    {t.projectType}
                  </span>
                </div>

                {/* Quote body */}
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold font-display text-white">
                    {t.author}
                  </h4>
                  <p className="text-xs text-white/60">
                    {t.location}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#F2961C] font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust note */}
        <div className="mt-12 text-center text-xs text-white/50">
          <p>
            References and viewing of completed local building projects available upon request during your quotation consultation.
          </p>
        </div>
      </div>
    </section>
  );
};
