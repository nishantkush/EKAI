import React from 'react';
import { ArrowUp, Instagram, Facebook } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1B1A] text-[#F7F5F0] pt-14 sm:pt-20 pb-10 sm:pb-12 hairline-t border-white/10">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-16">

        {/* Main Footer Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-12 pb-12 sm:pb-16 border-b border-white/10 items-start">
          {/* Col 1-6: Brand */}
          <div className="sm:col-span-2 md:col-span-6 space-y-3 sm:space-y-4">
            <span className="text-2xl sm:text-3xl tracking-[0.25em] sm:tracking-[0.3em] font-light block text-[#F7F5F0]">
              EKAI
            </span>
            <p className="text-xs sm:text-sm text-[#F7F5F0]/60 max-w-sm font-light leading-relaxed">
              Architecture &amp; Spatial Practice grounded in quiet permanence, raw materiality, and unhurried negative space.
            </p>
          </div>

          {/* Col 7-9: Navigation */}
          <div className="md:col-span-3 space-y-2 font-mono text-xs">
            <span className="text-[10px] uppercase tracking-widest text-[#8FA3B3] block mb-2 sm:mb-3">
              Index
            </span>
            <div className="flex flex-col space-y-2 text-[#F7F5F0]/70">
              <button onClick={() => onNavigate('home')} className="text-left hover:text-white transition-colors uppercase py-0.5">Home</button>
              <button onClick={() => onNavigate('studio')} className="text-left hover:text-white transition-colors uppercase py-0.5">Studio</button>
              <button onClick={() => onNavigate('work')} className="text-left hover:text-white transition-colors uppercase py-0.5">Work</button>
              <button onClick={() => onNavigate('process')} className="text-left hover:text-white transition-colors uppercase py-0.5">Process</button>
              <button onClick={() => onNavigate('contact')} className="text-left hover:text-white transition-colors uppercase py-0.5">Contact</button>
            </div>
          </div>

          {/* Col 10-12: Social Media */}
          <div className="md:col-span-3 space-y-2 font-mono text-xs">
            <span className="text-[10px] uppercase tracking-widest text-[#8FA3B3] block mb-2 sm:mb-3">
              Social Media
            </span>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.instagram.com/studio.ekai?utm_source=ig_web_button_share_sheet&rpxt=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-white/15 text-[#F7F5F0]/70 hover:text-white hover:border-[#8FA3B3] transition-colors active:scale-95"
                title="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#facebook"
                aria-label="Facebook"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-white/15 text-[#F7F5F0]/70 hover:text-white hover:border-[#8FA3B3] transition-colors active:scale-95"
                title="Facebook link coming soon"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#F7F5F0]/50 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} Ekai Architects. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#8FA3B3] hover:text-white transition-colors py-1"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
