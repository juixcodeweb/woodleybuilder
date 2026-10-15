import React from 'react';
import { MapPin, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../../data/woodleyData';

interface ServiceAreasSectionProps {
  onNavigate: (path: string) => void;
  onRequestQuote: () => void;
}

export const ServiceAreasSection: React.FC<ServiceAreasSectionProps> = ({ onNavigate, onRequestQuote }) => {
  return (
    <section className="py-20 md:py-28 bg-[#FAF9F5] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Info & Details */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#3E6838]">
              Geographical Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight leading-tight">
              Proudly Serving Guildford and the Surrounding Surrey Towns.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Based at 27 Warren Road in central Guildford, Woodley Builders covers all towns and surrounding villages across Surrey. With decades of local knowledge, we understand the varied architectural styles, conservation area requirements, and ground conditions across the county.
            </p>

            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <MapPin className="w-4 h-4 text-[#F2961C]" />
                <span>Operating from Guildford (GU1 2HG)</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Prompt initial site visits, reliable trade deliveries, and fast emergency response across South-West London border and Surrey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
              <button
                onClick={onRequestQuote}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#F2961C] hover:bg-[#e08512] text-white text-sm font-semibold transition-all shadow-sm"
              >
                <span>Check Your Postcode</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#3E6838] transition-colors py-2 px-3"
              >
                Or Call {COMPANY_DETAILS.phone}
              </a>
            </div>
          </div>

          {/* Right Column: Grid of Service Towns */}
          <div className="lg:col-span-7">
            <div className="bg-white p-7 sm:p-9 rounded-2xl border border-slate-200/90 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Key Surrey Towns & Locations
                </h3>
                <span className="text-xs font-medium text-[#3E6838] bg-[#3E6838]/10 px-2.5 py-1 rounded-md">
                  Active Trade Radius
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {COMPANY_DETAILS.serviceAreas.map((area) => (
                  <div
                    key={area.name}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#3E6838]/40 hover:bg-white transition-all space-y-1"
                  >
                    <div className="flex items-center gap-1.5 text-sm font-bold font-display text-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3E6838] shrink-0" />
                      <span>{area.name}</span>
                    </div>
                    <span className="text-[11px] text-slate-500 block pl-5">
                      {area.distance}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <p>
                  Don't see your specific Surrey village? We cover all neighbouring areas.
                </p>
                <button
                  onClick={() => onNavigate('/contact-us')}
                  className="text-xs font-semibold text-[#3E6838] hover:text-[#F2961C] transition-colors whitespace-nowrap"
                >
                  Contact Us to Confirm →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
