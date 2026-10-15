import React, { useState } from 'react';
import { ArrowRight, Eye, MapPin } from 'lucide-react';
import { GALLERY_PROJECTS, ProjectItem } from '../../data/woodleyData';

interface FeaturedProjectsProps {
  onOpenLightbox: (index: number, projectList?: ProjectItem[]) => void;
  onNavigate: (path: string) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onOpenLightbox, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'extensions' | 'kitchens' | 'bathrooms'>('all');

  const filtered = activeCategory === 'all'
    ? GALLERY_PROJECTS.slice(0, 6)
    : GALLERY_PROJECTS.filter((p) => p.category === activeCategory).slice(0, 6);

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Extensions', value: 'extensions' },
    { label: 'Kitchens', value: 'kitchens' },
    { label: 'Bathrooms', value: 'bathrooms' }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF9F5] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#3E6838]">
              Portfolio of Craftsmanship
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
              Recent Building & Renovation Projects
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore authentic completed home extensions, open-plan kitchen refits, and luxury bathrooms completed by Laurence Woodley for Surrey homeowners.
            </p>
          </div>

          {/* Interactive Category Segmented Control (Allowed functional buttons as per frontend-design skill) */}
          <div className="flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-xl shrink-0 self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((c) => (
              <button
                key={c.value}
                onClick={() => setActiveCategory(c.value as any)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                  activeCategory === c.value
                    ? 'bg-[#3E6838] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => {
                const globalIndex = GALLERY_PROJECTS.findIndex((p) => p.id === project.id);
                onOpenLightbox(globalIndex >= 0 ? globalIndex : 0, GALLERY_PROJECTS);
              }}
              className="group cursor-pointer bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-slate-900 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    View Photo
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="capitalize text-[#3E6838] font-semibold tracking-wide">
                    {project.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#F2961C]" />
                    {project.location}
                  </span>
                </div>

                <h3 className="text-base font-bold font-display text-slate-900 group-hover:text-[#3E6838] transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('/gallery')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-slate-800 text-sm font-semibold transition-all shadow-xs"
          >
            <span>Explore All 20+ Completed Projects in Gallery</span>
            <ArrowRight className="w-4 h-4 text-[#F2961C]" />
          </button>
        </div>
      </div>
    </section>
  );
};
