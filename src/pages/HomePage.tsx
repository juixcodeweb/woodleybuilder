import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { AboutSnippet } from '../components/home/AboutSnippet';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { ServiceAreasSection } from '../components/home/ServiceAreasSection';
import { ProjectItem } from '../data/woodleyData';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onRequestQuote: () => void;
  onOpenLightbox: (index: number, projectList?: ProjectItem[]) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onRequestQuote,
  onOpenLightbox
}) => {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section with 4-Column Proof Strip */}
      <HeroSection onNavigate={onNavigate} onRequestQuote={onRequestQuote} />

      {/* 2. Services Bento Grid Overview */}
      <ServicesOverview onNavigate={onNavigate} onRequestQuote={onRequestQuote} />

      {/* 3. Why Choose Woodley Builders (Values & Standards) */}
      <WhyChooseUs onNavigate={onNavigate} onRequestQuote={onRequestQuote} />

      {/* 4. Featured Projects with Live Category Filter & Lightbox */}
      <FeaturedProjects onOpenLightbox={onOpenLightbox} onNavigate={onNavigate} />

      {/* 5. About the Company / Laurence Woodley Story */}
      <AboutSnippet onNavigate={onNavigate} onRequestQuote={onRequestQuote} />

      {/* 6. Authentic Testimonials Section */}
      <TestimonialsSection />

      {/* 7. Surrey Service Areas & Location Coverage */}
      <ServiceAreasSection onNavigate={onNavigate} onRequestQuote={onRequestQuote} />
    </div>
  );
};
