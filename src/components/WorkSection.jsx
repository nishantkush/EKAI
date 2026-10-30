import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, List, ArrowUpRight } from 'lucide-react';
import { PROJECTS, DISCIPLINES, TYPOLOGIES } from '../data/projects';

export default function WorkSection({ onSelectProject }) {
  const [selectedDiscipline, setSelectedDiscipline] = useState('All');
  const [selectedTypology, setSelectedTypology] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((proj) => {
      const matchDiscipline =
        selectedDiscipline === 'All' ||
        proj.discipline.toLowerCase() === selectedDiscipline.toLowerCase();
      const matchTypology =
        selectedTypology === 'All' ||
        proj.typology.toLowerCase() === selectedTypology.toLowerCase();
      return matchDiscipline && matchTypology;
    });
  }, [selectedDiscipline, selectedTypology]);

  return (
    <section id="work" className="relative py-28 sm:py-36 bg-[#F7F5F0] hairline-t">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl uppercase font-normal tracking-widest text-[#8FA3B3]">
            Works Directory
          </h2>

          {/* Minimal View Toggle */}
          <div className="flex border border-[#DCD7CD] p-0.5 bg-[#EBE7DF]/40">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 transition-colors ${
                viewMode === 'grid' ? 'bg-[#1C1B1A] text-[#F7F5F0]' : 'text-[#6E6A63] hover:text-[#1C1B1A]'
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 transition-colors ${
                viewMode === 'list' ? 'bg-[#1C1B1A] text-[#F7F5F0]' : 'text-[#6E6A63] hover:text-[#1C1B1A]'
              }`}
              title="Index List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* --- MINIMAL TWO-TIER FILTER BARS --- */}
        <div className="border border-[#DCD7CD] bg-[#EBE7DF]/30 p-6 mb-12 space-y-4">
          {/* Tier 1: Disciplines */}
          <div className="flex flex-wrap items-center gap-2 pb-4 hairline-b">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#8FA3B3] mr-2">
              Discipline:
            </span>
            {DISCIPLINES.map((d) => {
              const active = selectedDiscipline === d;
              return (
                <button
                  key={d}
                  onClick={() => setSelectedDiscipline(d)}
                  className={`px-3 py-1 text-xs uppercase font-mono tracking-widest transition-colors ${
                    active
                      ? 'bg-[#1C1B1A] text-[#F7F5F0]'
                      : 'text-[#6E6A63] hover:text-[#1C1B1A]'
                  }`}
                >
                  {d}
                </button>
              );
            })}
          </div>

          {/* Tier 2: Typologies */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#8FA3B3] mr-2">
              Typology:
            </span>
            {TYPOLOGIES.map((t) => {
              const active = selectedTypology === t;
              return (
                <button
                  key={t}
                  onClick={() => setSelectedTypology(t)}
                  className={`px-3 py-1 text-xs uppercase font-mono tracking-widest transition-colors ${
                    active
                      ? 'border border-[#8FA3B3] text-[#1C1B1A] font-medium bg-[#8FA3B3]/15'
                      : 'text-[#6E6A63] hover:text-[#1C1B1A]'
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        {/* Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-[#6E6A63] mb-8 pb-3 hairline-b">
          <span>
            <span className="text-[#8FA3B3] font-semibold">{String(filteredProjects.length).padStart(2, '0')}</span> WORKS
          </span>
          {(selectedDiscipline !== 'All' || selectedTypology !== 'All') && (
            <button
              onClick={() => {
                setSelectedDiscipline('All');
                setSelectedTypology('All');
              }}
              className="text-[#8FA3B3] hover:text-[#6D8496] uppercase tracking-widest text-[10px]"
            >
              Reset
            </button>
          )}
        </div>

        {/* --- VIEW MODE 1: VISUAL EDITORIAL GRID (CLUTTER-FREE) --- */}
        {viewMode === 'grid' && (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          >
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  onClick={() => onSelectProject(project)}
                  className="group cursor-pointer bg-[#EBE7DF]/30 border border-[#DCD7CD] hover:border-[#8FA3B3] transition-all duration-500 overflow-hidden"
                >
                  {/* Clean Photography Frame */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#EBE7DF]">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Minimal pill tag */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-[10px] font-mono uppercase tracking-widest bg-[#1C1B1A]/80 backdrop-blur-md text-[#F7F5F0] px-2.5 py-1 border border-white/10">
                        {project.typology}
                      </span>
                    </div>
                  </div>

                  {/* Clean Project Info — Pure Class, No Walls of Text */}
                  <div className="p-6 flex items-baseline justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-light text-[#1C1B1A] group-hover:text-[#6D8496] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-[#6E6A63] mt-1 tracking-wide">
                        {project.location} · {project.year}
                      </p>
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-[#8FA3B3] group-hover:text-[#1C1B1A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-none ml-4" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* --- VIEW MODE 2: ARCHITECTURAL INDEX LIST --- */}
        {viewMode === 'list' && (
          <div className="border border-[#DCD7CD] bg-[#F7F5F0] overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#DCD7CD] bg-[#EBE7DF]/60 font-mono text-[10px] uppercase tracking-widest text-[#6E6A63]">
                  <th className="py-4 px-6 font-normal w-16">No.</th>
                  <th className="py-4 px-6 font-normal">Project</th>
                  <th className="py-4 px-6 font-normal">Typology</th>
                  <th className="py-4 px-6 font-normal">Location</th>
                  <th className="py-4 px-6 font-normal">Area</th>
                  <th className="py-4 px-6 font-normal">Year</th>
                  <th className="py-4 px-6 font-normal text-right">View</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DCD7CD] text-sm">
                {filteredProjects.map((project, idx) => (
                  <tr
                    key={project.id}
                    onClick={() => onSelectProject(project)}
                    className="group cursor-pointer hover:bg-[#EBE7DF]/40 transition-colors"
                  >
                    <td className="py-4 px-6 font-mono text-xs text-[#8FA3B3]">
                      {project.stripIndex || String(idx + 1).padStart(2, '0')}
                    </td>
                    <td className="py-4 px-6 text-[#1C1B1A] font-medium group-hover:text-[#6D8496] transition-colors">
                      {project.title}
                    </td>
                    <td className="py-4 px-6 font-mono text-xs text-[#6E6A63] uppercase">
                      {project.typology}
                    </td>
                    <td className="py-4 px-6 text-xs text-[#6E6A63]">
                      {project.location}
                    </td>
                    <td className="py-4 px-6 font-mono text-xs text-[#6E6A63]">
                      {project.area}
                    </td>
                    <td className="py-4 px-6 font-mono text-xs text-[#1C1B1A]">
                      {project.year}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <ArrowUpRight className="w-4 h-4 text-[#8FA3B3] inline group-hover:text-[#1C1B1A] transition-colors" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
}
