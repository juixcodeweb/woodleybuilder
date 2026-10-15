import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS, SERVICES } from '../data/woodleyData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: 'Home Extensions',
    message: '',
    agreePrivacy: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5]">
      {/* Page Header */}
      <div className="bg-[#111812] text-white py-16 md:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-wider text-[#F2961C] font-semibold block">
            We’d Love to Hear From You
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            Contact Woodley Builders
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Get in touch directly with Laurence Woodley for project advice, site surveys, and guaranteed building quotations across Guildford and Surrey.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#3E6838]">
                Direct Contact Details
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 tracking-tight">
                Speak to Laurence Woodley
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether you are in the early planning stages or have full architectural drawings ready to build, we are happy to help.
              </p>
            </div>

            {/* Contact Channels */}
            <div className="space-y-4">
              {/* Telephone */}
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#3E6838]/60 transition-colors shadow-xs group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#3E6838]/10 text-[#3E6838] flex items-center justify-center shrink-0 group-hover:bg-[#3E6838] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">
                    Telephone (Direct)
                  </span>
                  <span className="text-base sm:text-lg font-bold font-display text-slate-900 group-hover:text-[#3E6838] transition-colors">
                    {COMPANY_DETAILS.phone}
                  </span>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    Click to call Laurence directly on mobile
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#3E6838]/60 transition-colors shadow-xs group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F2961C]/10 text-[#F2961C] flex items-center justify-center shrink-0 group-hover:bg-[#F2961C] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">
                    Email Enquiries
                  </span>
                  <span className="text-sm sm:text-base font-bold font-display text-slate-900 group-hover:text-[#F2961C] transition-colors break-all">
                    {COMPANY_DETAILS.email}
                  </span>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    Send drawings or project specifications
                  </span>
                </div>
              </a>

              {/* Office / Post */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">
                    Registered Office & Post
                  </span>
                  <p className="text-sm font-bold font-display text-slate-900 mt-0.5">
                    {COMPANY_DETAILS.name}<br />
                    {COMPANY_DETAILS.address.line1}<br />
                    {COMPANY_DETAILS.address.town}, {COMPANY_DETAILS.address.county}<br />
                    {COMPANY_DETAILS.address.postcode}
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-xs space-y-1">
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">
                    Working Hours
                  </span>
                  <p className="font-semibold text-slate-800">Monday – Friday: 8:00 AM – 6:00 PM</p>
                  <p className="text-slate-600">Saturday: 8:30 AM – 1:00 PM</p>
                  <p className="text-[#3E6838] font-medium pt-0.5">Emergency repairs: On-call across Surrey</p>
                </div>
              </div>
            </div>

            {/* Emergency Advice */}
            <div className="p-6 rounded-2xl bg-[#1D2B1F] text-white border border-[#3E6838]/40 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F2961C] block">
                Urgent Building Emergency?
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                If you have a leaking roof in stormy weather, burst pipes, or masonry damage, call Laurence Woodley immediately on <strong>07967 666 360</strong>.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 bg-[#3E6838]/10 text-[#3E6838] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold font-display text-slate-900">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. Laurence Woodley has received your enquiry regarding <strong>{formData.service}</strong>. We will review your message and phone you on <strong>{formData.phone}</strong> shortly.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          subject: '',
                          service: 'Home Extensions',
                          message: '',
                          agreePrivacy: true
                        });
                      }}
                      className="px-6 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-slate-100 pb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#3E6838] block mb-1">
                      Online Enquiry Form
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                      Request a Quotation or Consultation
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill in your details below and we will get back to you promptly.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E6838] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
                        Telephone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="07967 123 456"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E6838] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.co.uk"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E6838] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
                        Relevant Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E6838] focus:border-transparent bg-white"
                      >
                        <option value="Home Extensions">Home Extensions</option>
                        <option value="Kitchens">Kitchen Renovations</option>
                        <option value="Bathrooms">Bathroom Renovations</option>
                        <option value="House Maintenance">House Maintenance & Repairs</option>
                        <option value="Roofing & Guttering">Roofing & Guttering</option>
                        <option value="Other">Other Building Project</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
                      Subject / Property Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rear kitchen extension in Guildford GU1"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E6838] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
                      Your Message / Project Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please outline the work you require, any approximate dimensions, target start dates, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E6838] focus:border-transparent"
                    />
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-slate-500">
                    <input
                      type="checkbox"
                      id="contactPrivacy"
                      checked={formData.agreePrivacy}
                      onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                      className="mt-0.5 rounded border-slate-300 text-[#3E6838] focus:ring-[#3E6838]"
                    />
                    <label htmlFor="contactPrivacy">
                      I agree to Woodley Builders storing my contact details to reply to this enquiry in accordance with the Privacy Policy. We never sell your data.
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#F2961C] hover:bg-[#e08512] active:scale-[0.98] text-white text-sm font-semibold transition-all shadow-sm flex items-center justify-center gap-2"
                    >
                      <span>Submit Project Enquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
