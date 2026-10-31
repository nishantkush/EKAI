import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../data/projects';

export default function HeroStrip({ onSelectProject }) {
  const stripRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  // Signature 7 retail projects for the strip showcase
  const stripProjects = PROJECTS.slice(0, 7);

  const scrollByAmount = (direction) => {
    if (!stripRef.current) return;
    const scrollAmount = stripRef.current.clientWidth * 0.75;
    stripRef.current.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - stripRef.current.offsetLeft);
    setScrollLeftState(stripRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - stripRef.current.offsetLeft;
    const walk = (x - startX) * 1.6;
    stripRef.current.scrollLeft = scrollLeftState - walk;
  };

  return (
    <section
      id="home"
      className="relative min-h-[460px] h-[85vh] sm:h-screen flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 pb-4 sm:pb-6 lg:pb-8 bg-[#F7F5F0]"
    >
      {/* Top Bar: Navigation Arrows (Placed above pictures) */}
      <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-8 lg:px-16 mb-2 sm:mb-4 flex items-center justify-between flex-none">
        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#8FA3B3]">
          Featured Atelier Works
        </span>

        {/* Minimal Navigation Arrows */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => scrollByAmount('prev')}
            className="p-1.5 sm:p-2.5 border border-[#DCD7CD] hover:border-[#8FA3B3] text-[#1C1B1A] transition-colors focus:outline-none bg-[#F7F5F0] active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
          <button
            onClick={() => scrollByAmount('next')}
            className="p-1.5 sm:p-2.5 border border-[#DCD7CD] hover:border-[#8FA3B3] text-[#1C1B1A] transition-colors focus:outline-none bg-[#F7F5F0] active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      {/* Signature Horizontal Filmstrip Container (Pure Architectural Photography) */}
      <div className="relative w-full flex-1 min-h-0 flex items-center my-auto">
        <div
          ref={stripRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto no-scrollbar px-4 sm:px-8 lg:px-16 h-full py-1 select-none items-center ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {stripProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative flex-none h-[56vh] sm:h-[calc(100vh-200px)] max-h-[700px] min-h-[300px] aspect-[4/5] bg-[#EBE7DF] border border-[#DCD7CD] overflow-hidden transition-all duration-500 hover:border-[#8FA3B3] cursor-pointer"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Completely unobscured, pure high-resolution architectural photography */}
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
              />

              {/* Mobile Project Title Hint Pill */}
              <div className="absolute bottom-3 left-3 right-3 sm:hidden bg-[#1C1B1A]/75 backdrop-blur-sm px-3 py-1.5 flex justify-between items-center text-[#F7F5F0]">
                <span className="text-xs font-light truncate">{project.title}</span>
                <span className="text-[10px] font-mono text-[#8FA3B3] uppercase tracking-wider ml-2 flex-none">{project.typology}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
