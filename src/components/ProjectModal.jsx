import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { PROJECTS } from '../data/projects';

export default function ProjectModal({ project, onClose, onSelectProject }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project]);

  if (!project) return null;

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    onSelectProject(PROJECTS[prevIdx]);
  };
  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % PROJECTS.length;
    onSelectProject(PROJECTS[nextIdx]);
  };

  const allImages = [project.heroImage, ...(project.gallery || [])].filter(Boolean);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1C1B1A]/90 backdrop-blur-md">
        {/* Backdrop click to close */}
        <div className="fixed inset-0" onClick={onClose} aria-label="Close modal overlay" />

        <div className="min-h-full flex items-start justify-center p-0 sm:p-6 lg:p-10 py-0 sm:py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-[1400px] bg-[#F7F5F0] border border-[#DCD7CD] z-10 overflow-hidden flex flex-col shadow-modal my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Top Navigation Bar */}
            <div className="sticky top-0 z-30 flex items-center justify-end px-4 sm:px-8 lg:px-10 py-4 bg-[#F7F5F0]/95 backdrop-blur-md hairline-b shadow-sm gap-4">
              {/* Prev / Next & Close */}
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center border border-[#DCD7CD] bg-[#EBE7DF]/40">
                  <button
                    onClick={handlePrev}
                    className="p-2 text-[#1C1B1A] hover:text-[#8FA3B3] hover:bg-white transition-colors"
                    title="Previous Project"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="w-[1px] h-4 bg-[#DCD7CD]" />
                  <button
                    onClick={handleNext}
                    className="p-2 text-[#1C1B1A] hover:text-[#8FA3B3] hover:bg-white transition-colors"
                    title="Next Project"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 border border-[#DCD7CD] hover:border-[#8FA3B3] text-[#1C1B1A] hover:text-[#8FA3B3] transition-colors bg-[#F7F5F0]"
                  aria-label="Close"
                  title="Close (ESC)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Content — Two Column Architectural Split Layout */}
            <div className="p-6 sm:p-10 lg:p-12 space-y-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                
                {/* Left Column (Half Page): Project Name & Narrative */}
                <div className="lg:col-span-6 flex flex-col justify-start space-y-6">
                  {/* Category & Index Meta */}
                  <div className="flex items-center gap-2 text-xs font-mono text-[#8FA3B3]">
                    <span className="font-semibold">
                      {project.stripIndex || String(currentIndex + 1).padStart(2, '0')}
                    </span>
                    <span>·</span>
                    <span className="uppercase tracking-widest">{project.typology}</span>
                    <span>·</span>
                    <span>{project.year}</span>
                  </div>

                  {/* Project Name */}
                  <div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1C1B1A] tracking-tight">
                      {project.title}
                    </h1>
                    <p className="text-xs sm:text-sm font-mono text-[#6E6A63] mt-2">
                      {project.location}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-16 h-[1px] bg-[#8FA3B3]" />

                  {/* Project Description Narrative */}
                  <div className="space-y-4">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#8FA3B3] block">
                      Concept &amp; Description
                    </span>
                    <h3 className="text-xl sm:text-2xl font-light text-[#1C1B1A] leading-snug">
                      {project.shortDesc}
                    </h3>
                    <p className="text-sm sm:text-base text-[#6E6A63] font-light leading-relaxed">
                      {project.fullDesc}
                    </p>
                  </div>
                </div>

                {/* Right Column (Half Page): Project Showcase Image & Thumbnails */}
                <div className="lg:col-span-6 flex flex-col space-y-4">
                  {/* Primary Hero Showcase Image */}
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] bg-[#EBE7DF] border border-[#DCD7CD] overflow-hidden group shadow-sm">
                    <img
                      src={allImages[activeImageIndex] || project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-500"
                    />

                    {/* Image Counter Badge */}
                    <div className="absolute bottom-3 right-3 bg-[#1C1B1A]/80 backdrop-blur-sm text-[#F7F5F0] text-[10px] font-mono px-2 py-1">
                      {activeImageIndex + 1} / {allImages.length}
                    </div>
                  </div>

                  {/* Thumbnails Row */}
                  {allImages.length > 1 && (
                    <div className="flex gap-2.5 overflow-x-auto no-scrollbar py-1">
                      {allImages.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImageIndex(i)}
                          className={`relative w-20 sm:w-24 aspect-[4/3] flex-none border transition-all ${
                            activeImageIndex === i
                              ? 'border-[#8FA3B3] ring-1 ring-[#8FA3B3]'
                              : 'border-[#DCD7CD] opacity-60 hover:opacity-100 hover:border-[#8FA3B3]'
                          }`}
                        >
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

              </div>

              {/* Bottom Navigation & Close Bar */}
              <div className="pt-8 border-t border-[#DCD7CD] flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3.5 bg-[#1C1B1A] hover:bg-[#8FA3B3] text-[#F7F5F0] hover:text-[#1C1B1A] font-mono text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2.5 shadow-sm group"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  <span className="font-medium">Back to Website</span>
                </button>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <button
                    onClick={handlePrev}
                    className="flex-1 sm:flex-none px-4 py-3 border border-[#DCD7CD] hover:border-[#8FA3B3] text-[#1C1B1A] font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Prev Project</span>
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex-1 sm:flex-none px-4 py-3 border border-[#DCD7CD] hover:border-[#8FA3B3] text-[#1C1B1A] font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Next Project</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
