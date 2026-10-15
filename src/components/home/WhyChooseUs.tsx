import React from 'react';
import { Shield, Sparkles, Clock, CheckCircle2, UserCheck, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../../data/woodleyData';

interface WhyChooseUsProps {
  onNavigate: (path: string) => void;
  onRequestQuote: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onNavigate, onRequestQuote }) => {
  const pillars = [
    {
      title: "Clean & Tidy Guarantee",
      subtitle: "Trouble-Free Building",
      icon: Sparkles,
      description:
        "We are different to most other building businesses as we guarantee you a trouble-free, clean and tidy job. We protect your home with floor coverings and dust seals, cleaning down daily."
    },
    {
      title: "Guaranteed Quotations",
      subtitle: "The Price You Are Quoted",
      icon: Shield,
      description:
        "The price we quote at the start of the job is the price you pay unless unforeseen problems arise. We submit itemised, transparent costings with no sudden price jumps."
    },
    {
      title: "Working Around Your Life",
      subtitle: "Minimising Disruption",
      icon: Clock,
      description:
        "We work to your times and needs to ensure as little disruption to your life as possible. We coordinate schedules, keep noise contained, and respect your family home."
    },
    {
      title: "60+ Years Family Tradition",
      subtitle: "Deep Surrey Roots",
      icon: UserCheck,
      description:
        "Woodley Builders is owned and run by Laurence Woodley. A life-long Surrey resident, Laurence continues an active 60+ year family building tradition in Guildford."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#3E6838]">
              Why Choose Woodley Builders
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight leading-tight text-balance">
              The Finish You Expect, with a Builder You Can Depend On.
            </h2>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Whether you’re choosing to extend your house, create new living space in a kitchen, or commission a new bathroom, you can be assured that we will achieve the finish you expect.
              </p>
              <p>
                We believe that your input and ideas are paramount in achieving desired results. We work with you at every stage, turning your dream into reality without the chaos, broken schedules, or hidden costs that all too often taint domestic building work.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onRequestQuote}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#3E6838] hover:bg-[#2d4d29] text-white text-sm font-semibold transition-all shadow-sm"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('/about')}
                className="text-sm font-medium text-slate-700 hover:text-[#3E6838] transition-colors"
              >
                Read Laurence's Story →
              </button>
            </div>
          </div>

          {/* Right Column: 4 Core Pillars Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-6 rounded-2xl bg-[#FAF9F5] border border-slate-200/80 hover:border-[#3E6838]/40 transition-colors space-y-3"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#3E6838] shadow-xs">
                      <IconComponent className="w-5 h-5 text-[#3E6838]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-[#F2961C] uppercase tracking-wider block">
                        {pillar.subtitle}
                      </span>
                      <h3 className="text-lg font-bold font-display text-slate-900 mt-0.5">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
