import React from 'react';
import { ArrowRight, Check, ShieldCheck, MapPin, Phone, Eye, Calendar, Sparkles } from 'lucide-react';
import { ServiceItem, SERVICES, COMPANY_DETAILS, ProjectItem } from '../data/woodleyData';

interface ServiceDetailPageProps {
  service: ServiceItem;
  onNavigate: (path: string) => void;
  onRequestQuote: () => void;
  onOpenLightbox: (index: number, projectList?: ProjectItem[]) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onNavigate,
  onRequestQuote,
  onOpenLightbox
}) => {
  // Convert service gallery images to project items format for lightbox
  const galleryItems: ProjectItem[] = service.galleryImages.map((img, i) => ({
    id: `${service.id}-gallery-${i}`,
    title: `${service.title} - Project Example ${i + 1}`,
    category: service.id as any,
    location: 'Surrey, UK',
    image: img,
    description: `High-quality ${service.title.toLowerCase()} installation carried out by Woodley Builders.`
  }));

  const otherServices = SERVICES.filter((s) => s.id !== service.id);

  return (
    <div className="min-h-screen bg-white">
      {/* Service Hero Banner */}
      <div className="relative bg-[#111812] text-white overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover filter brightness-[0.38]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1710] via-[#0e1710]/70 to-[#0e1710]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-300 mb-6 font-medium">
            <button
              onClick={() => onNavigate('/')}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <span className="text-white/40">/</span>
            <button
              onClick={() => onNavigate('/services')}
              className="hover:text-white transition-colors"
            >
              Services
            </button>
            <span className="text-white/40">/</span>
            <span className="text-[#F2961C] font-semibold">{service.title}</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-wider text-[#F2961C] font-semibold">
              Woodley Builders · Guildford & Surrey
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight leading-tight text-balance">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed text-pretty">
              {service.subtitle}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onRequestQuote}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#F2961C] hover:bg-[#e08512] text-white text-sm font-semibold transition-all shadow-md"
              >
                <span>Request a Quote for {service.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium border border-white/20 transition-all"
              >
                <Phone className="w-4 h-4 text-[#F2961C]" />
                <span>Call {COMPANY_DETAILS.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout (2-column on desktop) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Preserved Authentic Detailed Content */}
            {service.detailedContent.map((block, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 tracking-tight">
                  {block.heading}
                </h2>
                <div className="space-y-3.5 text-slate-600 text-base leading-relaxed">
                  {block.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Core Features Box */}
            <div className="bg-[#FAF9F5] rounded-2xl p-7 border border-slate-200/90 space-y-4">
              <h3 className="text-lg font-bold font-display text-slate-900">
                What's Included in Our {service.title} Service
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-[#3E6838] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Delivery Process */}
            <div className="space-y-6 pt-4">
              <h3 className="text-2xl font-bold font-display text-slate-900 tracking-tight">
                How Laurence Delivers Your Project
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-2">
                  <span className="text-xs font-bold text-[#F2961C] uppercase tracking-wider block">
                    Step 1
                  </span>
                  <h4 className="text-base font-bold font-display text-slate-900">
                    Initial Site Survey & Consultation
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Laurence visits your property in person, reviews your ideas, examines architectural plans if available, and assesses practical limitations.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-2">
                  <span className="text-xs font-bold text-[#F2961C] uppercase tracking-wider block">
                    Step 2
                  </span>
                  <h4 className="text-base font-bold font-display text-slate-900">
                    Guaranteed Quotation
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A clear, transparent price is submitted. The price we quote at the start of the job is the price you pay unless unforeseen structural problems arise.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-2">
                  <span className="text-xs font-bold text-[#F2961C] uppercase tracking-wider block">
                    Step 3
                  </span>
                  <h4 className="text-base font-bold font-display text-slate-900">
                    Trouble-Free, Clean Build
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Work proceeds on schedule. We protect floors, isolate dust, and work around your life so your project causes minimal disruption.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-2">
                  <span className="text-xs font-bold text-[#F2961C] uppercase tracking-wider block">
                    Step 4
                  </span>
                  <h4 className="text-base font-bold font-display text-slate-900">
                    Final Commissioning & Handover
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Full testing of plumbing, heating, and electrics, immaculate clean-down, and a finished room you can be genuinely proud of.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Photo Gallery */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold font-display text-slate-900 tracking-tight">
                    {service.title} Project Gallery
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Click any photo to enlarge and view details
                  </p>
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  {service.galleryImages.length} Photographs
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {service.galleryImages.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => onOpenLightbox(i, galleryItems)}
                    className="group cursor-pointer relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs hover:shadow-md transition-all"
                  >
                    <img
                      src={img}
                      alt={`${service.title} example ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-white/90 text-slate-900 shadow-md">
                        <Eye className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Quote Card */}
            <div className="bg-[#1D2B1F] text-white p-7 rounded-2xl shadow-lg border border-[#3E6838]/40 space-y-5">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#F2961C] font-semibold block mb-1">
                  Free Site Survey
                </span>
                <h3 className="text-xl font-bold font-display text-white">
                  Request a Quote for {service.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Discuss your project directly with Laurence Woodley. Guaranteed quotations with no pressure or obligation.
                </p>
              </div>

              <button
                onClick={onRequestQuote}
                className="w-full py-3 px-4 rounded-lg bg-[#F2961C] hover:bg-[#e08512] active:scale-[0.98] text-white font-semibold text-sm transition-all text-center shadow-sm"
              >
                Request a Free Quote
              </button>

              <div className="pt-2 border-t border-white/10 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#F2961C]" />
                  <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="hover:text-white font-medium">
                    {COMPANY_DETAILS.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#F2961C]" />
                  <span>27 Warren Road, Guildford GU1 2HG</span>
                </div>
              </div>
            </div>

            {/* Specifications / Key Facts Table */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs">
              <h4 className="font-bold font-display text-slate-900 text-base border-b border-slate-100 pb-3">
                Service Specifications
              </h4>
              <div className="space-y-3 text-xs">
                {service.specifications.map((spec) => (
                  <div key={spec.label} className="flex items-start justify-between gap-3 border-b border-slate-50 pb-2">
                    <span className="text-slate-500 font-medium">{spec.label}</span>
                    <span className="text-slate-800 font-semibold text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Services Navigation */}
            <div className="bg-[#FAF9F5] rounded-2xl border border-slate-200 p-6 space-y-4">
              <h4 className="font-bold font-display text-slate-900 text-sm uppercase tracking-wider">
                Related Building Services
              </h4>
              <ul className="space-y-2.5 text-sm">
                {otherServices.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => onNavigate(`/${s.slug}`)}
                      className="text-left text-slate-700 hover:text-[#3E6838] font-medium transition-colors flex items-center justify-between w-full group py-1"
                    >
                      <span>{s.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#3E6838] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
