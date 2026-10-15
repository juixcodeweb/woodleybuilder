import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: {
    src: string;
    title: string;
    category?: string;
    location?: string;
    description?: string;
  }[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNext,
  onPrev
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 md:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between text-white pb-3 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-wider text-[#F2961C] font-semibold">
            {current.category || 'Woodley Builders Project'}
          </span>
          <span className="text-white/40">·</span>
          <span className="text-xs text-white/70">
            {currentIndex + 1} of {images.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close image preview"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Area with Nav Controls */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        {images.length > 1 && (
          <button
            onClick={onPrev}
            className="absolute left-2 md:left-6 z-10 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/10 transition-all focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        <img
          src={current.src}
          alt={current.title}
          className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl transition-all"
        />

        {images.length > 1 && (
          <button
            onClick={onNext}
            className="absolute right-2 md:right-6 z-10 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/10 transition-all focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Image Caption Footer */}
      <div className="max-w-2xl mx-auto text-center space-y-1 text-white pt-2">
        <h4 className="text-base font-semibold text-white font-display">
          {current.title}
        </h4>
        {current.location && (
          <p className="text-xs text-white/70 flex items-center justify-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#F2961C]" />
            {current.location}
          </p>
        )}
        {current.description && (
          <p className="text-xs text-slate-300 max-w-xl mx-auto leading-relaxed pt-1">
            {current.description}
          </p>
        )}
      </div>
    </div>
  );
};
