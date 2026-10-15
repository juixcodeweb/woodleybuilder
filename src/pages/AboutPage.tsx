import React from 'react';
import { ArrowRight, Check, Award, ShieldCheck, Sparkles, Calendar, Phone, MapPin } from 'lucide-react';
import { COMPANY_DETAILS, TESTIMONIALS } from '../data/woodleyData';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onRequestQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onRequestQuote }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-[#111812] text-white py-16 md:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-wider text-[#F2961C] font-semibold block">
            The Company & History
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            About Woodley Builders
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Founded by Laurence Woodley, continuing a multi-generational family building heritage across Guildford and the Surrey area for over 60 years.
          </p>
        </div>
      </div>

      {/* Main Narrative Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Story */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#3E6838]">
              Guildford Builders
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight leading-tight">
              A Family Tradition Built on Cleanliness, Precision and Trust.
            </h2>

            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                Woodley Builders is owned and run by <strong>Laurence Woodley</strong>. A life-long Surrey resident, Laurence is continuing a family tradition in the building trade. Together, the family has had an active presence in Surrey for over 60 years.
              </p>
              <p>
                With over 30 years personal experience in building houses, house extensions, kitchens, bathrooms, and property maintenance, Laurence brings an unmatched depth of practical trade knowledge to every project.
              </p>
              <p>
                We are different to most other building businesses because we guarantee you a trouble-free, clean and tidy job. The price we quote at the start of the job is the price you pay unless unforeseen structural problems arise. We work around you and to your times so that your job causes as little disruption to your life as possible.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-slate-200/90 space-y-3">
              <h3 className="font-display font-bold text-slate-900 text-base">
                Our Core Working Principles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#3E6838] shrink-0" />
                  <span>Guaranteed quotations (no surprises)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#3E6838] shrink-0" />
                  <span>Daily cleanup & dust barrier seals</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#3E6838] shrink-0" />
                  <span>Personal supervision by Laurence Woodley</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#3E6838] shrink-0" />
                  <span>Certified gas & electrical partners</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onRequestQuote}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#F2961C] hover:bg-[#e08512] text-white text-sm font-semibold transition-all shadow-sm"
              >
                <span>Request a Free Site Survey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="text-sm font-semibold text-slate-800 hover:text-[#3E6838] transition-colors py-2"
              >
                Call: {COMPANY_DETAILS.phone}
              </a>
            </div>
          </div>

          {/* Photo Collage Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src="/src/assets/projects/extension-4-scaled.jpg"
                alt="Woodley Builders Home Extension in Surrey"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-slate-200 h-44">
                <img
                  src="/src/assets/projects/kitchen1-scaled.jpg"
                  alt="Kitchen Installation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-200 h-44">
                <img
                  src="/src/assets/projects/Bathroom-bath.jpg"
                  alt="Bathroom Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#F2961C]" />
                <span>Registered Office: 27 Warren Road, Guildford</span>
              </div>
              <span className="font-semibold text-[#3E6838]">Surrey GU1 2HG</span>
            </div>
          </div>
        </div>

        {/* 4 Stat Cards */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-slate-200 space-y-2">
            <Award className="w-6 h-6 text-[#F2961C]" />
            <h4 className="text-2xl font-bold font-display text-slate-900 tabular-nums">30+ Years</h4>
            <p className="text-xs text-slate-600">Personal building experience in Guildford & Surrey.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-slate-200 space-y-2">
            <Calendar className="w-6 h-6 text-[#3E6838]" />
            <h4 className="text-2xl font-bold font-display text-slate-900 tabular-nums">60+ Years</h4>
            <p className="text-xs text-slate-600">Family building trade presence across the county.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-slate-200 space-y-2">
            <ShieldCheck className="w-6 h-6 text-[#F2961C]" />
            <h4 className="text-2xl font-bold font-display text-slate-900">Fixed Quotes</h4>
            <p className="text-xs text-slate-600">The price quoted is the price you pay.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-slate-200 space-y-2">
            <Sparkles className="w-6 h-6 text-[#3E6838]" />
            <h4 className="text-2xl font-bold font-display text-slate-900">Clean & Tidy</h4>
            <p className="text-xs text-slate-600">Trouble-free building with daily protection.</p>
          </div>
        </div>

        {/* Authentic Customer Testimonials Highlight */}
        <div className="mt-20 pt-16 border-t border-slate-200 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#3E6838]">
              Verified Feedback
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              What Guildford Homeowners Say
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.slice(0, 2).map((t) => (
              <div key={t.id} className="p-7 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <strong className="text-slate-900 block">{t.author}</strong>
                    <span className="text-slate-500">{t.location} · {t.projectType}</span>
                  </div>
                  <span className="text-[#F2961C] font-semibold">5.0 / 5.0 Rating</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
