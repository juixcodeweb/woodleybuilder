import React, { useState } from 'react';
import { Eye, MapPin, ArrowRight, Phone } from 'lucide-react';
import { GALLERY_PROJECTS, ProjectItem, COMPANY_DETAILS } from '../data/woodleyData';

interface ProjectsPageProps {
  onOpenLightbox: (index: number, projectList?: ProjectItem[]) => void;
  onRequestQuote: () => void;
  onNavigate: (path: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onOpenLightbox,
  onRequestQuote,
  onNavigate
}) => {
  const [filter, setFilter] = useState<'all' | 'extensions' | 'kitchens' | 'bathrooms' | 'maintenance'>('all');

  const filteredProjects = filter === 'all'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter((p) => p.category === filter);

  const filterTabs = [
    { label: 'All Projects', value: 'all', count: GALLERY_PROJECTS.length },
    { label: 'Extensions', value: 'extensions', count: GALLERY_PROJECTS.filter(p => p.category === 'extensions').length },
    { label: 'Kitchens', value: 'kitchens', count: GALLERY_PROJECTS.filter(p => p.category === 'kitchens').length },
    { label: 'Bathrooms', value: 'bathrooms', count: GALLERY_PROJECTS.filter(p => p.category === 'bathrooms').length },
    { label: 'Maintenance & Roofs', value: 'maintenance', count: GALLERY_PROJECTS.filter(p => p.category === 'maintenance').length }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F5]">
      {/* Page Header */}
      <div className="bg-[#111812] text-white py-16 md:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-wider text-[#F2961C] font-semibold block">
            Authentic Woodley Builders Photography
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            Our Completed Projects
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Every photograph presented here is a real project completed by Laurence Woodley in Guildford and surrounding Surrey towns. We take pride in clean lines, structural integrity, and flawless finishes.
          </p>
        </div>
      </div>

      {/* Main Content & Filter Toolbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Filter Bar (Segmented button control compliant with frontend-design skill) */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex items-center gap-1.5 p-1.5 bg-white border border-slate-200 rounded-xl shadow-xs">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value as any)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                  filter === tab.value
                    ? 'bg-[#3E6838] text-white shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => {
                const globalIdx = GALLERY_PROJECTS.findIndex((p) => p.id === project.id);
                onOpenLightbox(globalIdx >= 0 ? globalIdx : 0, GALLERY_PROJECTS);
              }}
              className="group cursor-pointer bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-slate-900 text-xs font-semibold px-3.5 py-2 rounded-lg shadow-md flex items-center gap-2">
                    <Eye className="w-4 h-4 text-[#F2961C]" />
                    <span>View High Resolution</span>
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-2.5">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="capitalize text-[#3E6838] font-bold tracking-wide">
                    {project.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#F2961C]" />
                    {project.location}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-slate-900 group-hover:text-[#3E6838] transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Callout Banner */}
        <div className="mt-16 bg-[#1D2B1F] text-white rounded-2xl p-8 sm:p-10 border border-[#3E6838]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold font-display text-white">
              Inspired by one of our Surrey projects?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Laurence Woodley can visit your home to inspect the space, discuss style options, and provide a fixed, guaranteed quotation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-colors border border-white/20"
            >
              <Phone className="w-4 h-4 text-[#F2961C]" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
            <button
              onClick={onRequestQuote}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#F2961C] hover:bg-[#e08512] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
