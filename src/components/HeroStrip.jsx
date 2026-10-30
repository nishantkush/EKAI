import React, { useRef, useState, useEffect } from 'react';
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
    const scrollAmount = 520;
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
      className="relative h-screen min-h-[550px] flex flex-col justify-between pt-24 sm:pt-28 pb-6 sm:pb-8 bg-[#F7F5F0] overflow-hidden"
    >
      {/* Top Bar: Navigation Arrows (Placed above pictures) */}
      <div className="max-w-[1720px] w-full mx-auto px-6 sm:px-10 lg:px-16 mb-3 sm:mb-4 flex items-center justify-end flex-none">
        {/* Minimal Navigation Arrows */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => scrollByAmount('prev')}
            className="p-2 sm:p-2.5 border border-[#DCD7CD] hover:border-[#8FA3B3] text-[#1C1B1A] transition-colors focus:outline-none bg-[#F7F5F0]"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollByAmount('next')}
            className="p-2 sm:p-2.5 border border-[#DCD7CD] hover:border-[#8FA3B3] text-[#1C1B1A] transition-colors focus:outline-none bg-[#F7F5F0]"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
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
          className={`flex gap-6 sm:gap-8 overflow-x-auto no-scrollbar px-6 sm:px-10 lg:px-16 h-full py-1 select-none items-center ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{ scrollSnapType: 'x proximity' }}
        >
          {stripProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative flex-none h-[calc(100vh-180px)] max-h-[720px] min-h-[380px] aspect-[4/5] bg-[#EBE7DF] border border-[#DCD7CD] overflow-hidden transition-all duration-500 hover:border-[#8FA3B3] cursor-pointer"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Completely unobscured, pure high-resolution architectural photography */}
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
