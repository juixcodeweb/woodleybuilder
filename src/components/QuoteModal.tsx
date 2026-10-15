import React, { useState } from 'react';
import { X, CheckCircle, Phone, Mail, MapPin, Calendar, Clock, AlertCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/woodleyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService
}) => {
  const [formData, setFormData] = useState({
    service: preselectedService || 'Home Extension',
    location: '',
    timeframe: 'Next 1–3 months',
    name: '',
    phone: '',
    email: '',
    description: '',
    agreePrivacy: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMsg('Please complete all required fields (Name, Phone, and Email).');
      return;
    }
    if (!formData.phone.replace(/\D/g, '').length || formData.phone.length < 8) {
      setErrorMsg('Please enter a valid telephone number.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const serviceOptions = [
    'Home Extension',
    'Kitchen Renovation',
    'Bathroom Renovation',
    'House Maintenance / Repairs',
    'Roofing & Guttering',
    'Multiple / Full Refurbishment'
  ];

  const timeframeOptions = [
    'Urgent / Emergency repair',
    'Next 1–3 months',
    'Next 3–6 months',
    'Planning stage / Feasibility'
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-[#1D2B1F] text-white p-6 sm:p-7 flex items-start justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#F2961C] font-semibold block mb-1">
              Guaranteed Quotation Request
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Plan Your Project with Laurence Woodley
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Serving Guildford, Farnham, Godalming, Cranleigh, and across Surrey.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-14 h-14 bg-[#3E6838]/10 text-[#3E6838] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold font-display text-slate-900">
                  Thank You, {formData.name}!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your quote enquiry for <strong>{formData.service}</strong> in {formData.location || 'Surrey'} has been received. Laurence Woodley will review your requirements and reach out on <strong>{formData.phone}</strong> to arrange a convenient site visit.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs text-slate-600 space-y-1.5 max-w-md mx-auto">
                <p className="font-semibold text-slate-800">Our Pricing Promise:</p>
                <p>• The price quoted at the start is the price you pay unless unforeseen structural problems arise.</p>
                <p>• Clean, tidy, and trouble-free workmanship throughout.</p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold"
                >
                  <Phone className="w-4 h-4 text-[#F2961C]" />
                  <span>Call Now: {COMPANY_DETAILS.phone}</span>
                </a>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
                  Project Type *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {serviceOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setFormData({ ...formData, service: opt })}
                      className={`py-2 px-3 text-xs font-medium rounded-lg border text-left transition-all ${
                        formData.service === opt
                          ? 'border-[#3E6838] bg-[#3E6838]/10 text-[#2B4B27] font-semibold'
                          : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-white'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location & Timeframe in 2 cols */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Property Location / Postcode
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      placeholder="e.g. Guildford, GU1 or Farnham"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E6838] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Desired Timeframe
                  </label>
                  <select
                    value={formData.timeframe}
                    onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E6838] focus:border-transparent bg-white"
                  >
                    {timeframeOptions.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Brief */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
                  Brief Project Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your home, any ideas you have, or specific dimensions/requirements..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E6838] focus:border-transparent"
                />
              </div>

              {/* Personal Details */}
              <div className="pt-2 border-t border-slate-200">
                <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                  Your Contact Details
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E6838] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Telephone *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E6838] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E6838] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Privacy agreement */}
              <div className="flex items-center gap-2 pt-1 text-xs text-slate-500">
                <input
                  type="checkbox"
                  id="agreePrivacy"
                  checked={formData.agreePrivacy}
                  onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                  className="rounded border-slate-300 text-[#3E6838] focus:ring-[#3E6838]"
                />
                <label htmlFor="agreePrivacy">
                  I agree to Woodley Builders contacting me regarding this project enquiry in line with the Privacy Policy.
                </label>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-400">
                  Or call Laurence directly: <strong className="text-slate-700">{COMPANY_DETAILS.phone}</strong>
                </span>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-1/2 sm:w-auto px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 sm:w-auto px-6 py-2.5 rounded-lg bg-[#F2961C] hover:bg-[#e08512] active:scale-[0.98] text-white text-xs font-semibold transition-all shadow-sm"
                  >
                    Submit Request
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
