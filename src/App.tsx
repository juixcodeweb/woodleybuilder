import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ImageLightbox } from './components/ImageLightbox';
import { HomePage } from './pages/HomePage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { SERVICES, ProjectItem, GALLERY_PROJECTS } from './data/woodleyData';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.replace(/\/$/, '') || '/';
      return path;
    }
    return '/';
  });

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteServicePreselect, setQuoteServicePreselect] = useState<string>('Home Extension');

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<{
    src: string;
    title: string;
    category?: string;
    location?: string;
    description?: string;
  }[]>([]);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/\/$/, '') || '/';
      setCurrentPath(path);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    const cleanPath = path.replace(/\/$/, '') || '/';
    setCurrentPath(cleanPath);
    if (window.location.pathname !== cleanPath) {
      window.history.pushState({}, '', cleanPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) setQuoteServicePreselect(serviceName);
    setQuoteModalOpen(true);
  };

  const handleOpenLightbox = (index: number, projectList?: ProjectItem[]) => {
    const list = projectList || GALLERY_PROJECTS;
    const formatted = list.map((p) => ({
      src: p.image,
      title: p.title,
      category: p.category,
      location: p.location,
      description: p.description
    }));
    setLightboxImages(formatted);
    setLightboxIndex(index >= 0 && index < formatted.length ? index : 0);
    setLightboxOpen(true);
  };

  // Determine current view component
  const renderCurrentView = () => {
    // Check service pages
    const matchingService = SERVICES.find(
      (s) => `/${s.slug}` === currentPath || (s.slug === 'home-extensions' && currentPath === '/extensions')
    );
    if (matchingService) {
      return (
        <ServiceDetailPage
          service={matchingService}
          onNavigate={navigate}
          onRequestQuote={() => handleOpenQuote(matchingService.title)}
          onOpenLightbox={handleOpenLightbox}
        />
      );
    }

    if (currentPath === '/gallery' || currentPath === '/projects') {
      return (
        <ProjectsPage
          onOpenLightbox={handleOpenLightbox}
          onRequestQuote={() => handleOpenQuote()}
          onNavigate={navigate}
        />
      );
    }

    if (currentPath === '/about') {
      return (
        <AboutPage
          onNavigate={navigate}
          onRequestQuote={() => handleOpenQuote()}
        />
      );
    }

    if (currentPath === '/contact-us' || currentPath === '/contact') {
      return <ContactPage />;
    }

    if (
      currentPath === '/privacy-policy' ||
      currentPath === '/home/privacy-policy'
    ) {
      return <LegalPage initialTab="privacy" onNavigate={navigate} />;
    }

    if (
      currentPath === '/terms-and-conditions' ||
      currentPath === '/home/terms-and-conditions'
    ) {
      return <LegalPage initialTab="terms" onNavigate={navigate} />;
    }

    // Default to Home Page
    return (
      <HomePage
        onNavigate={navigate}
        onRequestQuote={() => handleOpenQuote()}
        onOpenLightbox={handleOpenLightbox}
      />
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans selection:bg-[#F2961C]/25 selection:text-slate-900">
      {/* Universal Responsive Navbar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        onRequestQuote={() => handleOpenQuote()}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {renderCurrentView()}
      </main>

      {/* Universal Footer */}
      <Footer
        onNavigate={navigate}
        onRequestQuote={() => handleOpenQuote()}
      />

      {/* Interactive Quotation Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedService={quoteServicePreselect}
      />

      {/* High-Resolution Image Lightbox */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % lightboxImages.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length)}
      />
    </div>
  );
}
