import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../../data/woodleyData';

interface ServicesOverviewProps {
  onNavigate: (path: string) => void;
  onRequestQuote: () => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onNavigate, onRequestQuote }) => {
  return (
    <section className="py-20 md:py-28 bg-[#FAF9F5] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#3E6838]">
              What Can We Do For You?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
              Specialist Building & Home Improvement Services
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Whether you’re choosing to extend your house, create new living space in a bespoke kitchen, or commission a luxury bathroom, you can be assured that Laurence Woodley will achieve the finish you expect.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onNavigate('/gallery')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#3E6838] hover:text-[#284624] transition-colors group"
            >
              <span>View All Completed Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const isLarge = index === 0; // First service (Extensions) gets special prominence
            return (
              <div
                key={service.id}
                className={`group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                  isLarge ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Service Image with subtle zoom on hover */}
                  <div className="relative h-60 sm:h-72 overflow-hidden bg-slate-100">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5 text-white">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#F2961C] block mb-1">
                        0{index + 1}. Service Discipline
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Feature bullet list */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {service.features.slice(0, isLarge ? 5 : 4).map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-[#3E6838] shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 sm:px-7 pt-0 flex items-center justify-between border-t border-slate-50 mt-4">
                  <button
                    onClick={() => onNavigate(`/${service.slug}`)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#3E6838] group-hover:text-[#F2961C] transition-colors"
                  >
                    <span>Explore {service.title}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={onRequestQuote}
                    className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    Get a Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
