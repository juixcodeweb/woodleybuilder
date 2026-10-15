import React, { useState } from 'react';
import { ShieldCheck, FileText, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import { TERMS_AND_CONDITIONS, PRIVACY_POLICY, COMPANY_DETAILS } from '../data/woodleyData';

interface LegalPageProps {
  initialTab?: 'terms' | 'privacy';
  onNavigate: (path: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ initialTab = 'terms', onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>(initialTab);

  return (
    <div className="min-h-screen bg-[#FAF9F5] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Back & Header */}
        <div className="space-y-4">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3E6838] hover:text-[#264223] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#F2961C] font-semibold block mb-1">
                Woodley Builders · Legal Information
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
                {activeTab === 'terms' ? 'Terms & Conditions' : 'Privacy Policy (GDPR)'}
              </h1>
            </div>

            {/* Tab Switcher */}
            <div className="flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-xl shadow-xs self-start sm:self-auto">
              <button
                onClick={() => setActiveTab('terms')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'terms'
                    ? 'bg-[#3E6838] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Terms & Conditions
              </button>
              <button
                onClick={() => setActiveTab('privacy')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'privacy'
                    ? 'bg-[#3E6838] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8">
          {activeTab === 'terms' ? (
            <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
              {/* General Terms */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold font-display text-slate-900">
                  General Terms & Contract Basis
                </h2>
                {TERMS_AND_CONDITIONS.generalTerms.map((p, idx) => (
                  <p key={idx} className="text-slate-600">
                    {p}
                  </p>
                ))}
              </div>

              {/* Sections */}
              {TERMS_AND_CONDITIONS.sections.map((section, idx) => (
                <div key={idx} className="space-y-3 pt-4 border-t border-slate-100">
                  <h3 className="text-lg font-bold font-display text-slate-900">
                    {section.title}
                  </h3>
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-slate-600">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
              {/* Intro */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold font-display text-slate-900">
                  Privacy Policy & Introduction
                </h2>
                <p className="text-slate-600">
                  {PRIVACY_POLICY.intro}
                </p>
              </div>

              {/* Privacy Promise 3-Column */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {PRIVACY_POLICY.promises.map((prom) => (
                  <div key={prom.label} className="p-4 rounded-xl bg-[#FAF9F5] border border-slate-200 space-y-1.5">
                    <span className="text-xs font-bold text-[#3E6838] uppercase tracking-wider block">
                      {prom.label}
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {prom.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Privacy Sections */}
              {PRIVACY_POLICY.sections.map((section, idx) => (
                <div key={idx} className="space-y-3 pt-4 border-t border-slate-100">
                  <h3 className="text-lg font-bold font-display text-slate-900">
                    {section.title}
                  </h3>
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-slate-600">
                      {p}
                    </p>
                  ))}
                </div>
              ))}

              {/* Data Controller Contact Card */}
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs text-slate-700">
                <h4 className="font-bold font-display text-slate-900 text-sm">
                  Data Protection Officer & Data Controller Details
                </h4>
                <p>
                  By Post: Data Controller, Woodley Builders, {COMPANY_DETAILS.address.line1}, {COMPANY_DETAILS.address.town}, {COMPANY_DETAILS.address.county}, {COMPANY_DETAILS.address.postcode}.
                </p>
                <p>
                  By Telephone: {COMPANY_DETAILS.phone} · By Email: {COMPANY_DETAILS.dataEmail}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
