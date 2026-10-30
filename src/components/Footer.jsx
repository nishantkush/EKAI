import React from 'react';
import { ArrowUp, Instagram, Facebook } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1B1A] text-[#F7F5F0] pt-20 pb-12 hairline-t border-white/10">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10 items-start">
          {/* Col 1-6: Brand */}
          <div className="md:col-span-6 space-y-4">
            <span className="text-3xl sm:text-4xl tracking-[0.3em] font-light block text-[#F7F5F0]">
              EKAI
            </span>
            <p className="text-sm text-[#F7F5F0]/60 max-w-sm font-light">
              Architecture &amp; Spatial Practice grounded in quiet permanence, raw materiality, and unhurried negative space.
            </p>
          </div>

          {/* Col 7-9: Navigation */}
          <div className="md:col-span-3 space-y-2 font-mono text-xs">
            <span className="text-[10px] uppercase tracking-widest text-[#8FA3B3] block mb-3">
              Index
            </span>
            <div className="flex flex-col space-y-2 text-[#F7F5F0]/70">
              <button onClick={() => onNavigate('home')} className="text-left hover:text-white transition-colors uppercase">Home</button>
              <button onClick={() => onNavigate('studio')} className="text-left hover:text-white transition-colors uppercase">Studio</button>
              <button onClick={() => onNavigate('work')} className="text-left hover:text-white transition-colors uppercase">Work</button>
              <button onClick={() => onNavigate('process')} className="text-left hover:text-white transition-colors uppercase">Process</button>
              <button onClick={() => onNavigate('contact')} className="text-left hover:text-white transition-colors uppercase">Contact</button>
            </div>
          </div>

          {/* Col 10-12: Social Media */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-[10px] uppercase tracking-widest text-[#8FA3B3] block mb-3">
              Social Media
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/studio.ekai?utm_source=ig_web_button_share_sheet&rpxt=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center border border-white/15 text-[#F7F5F0]/70 hover:text-white hover:border-[#8FA3B3] transition-colors"
                title="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#facebook"
                aria-label="Facebook"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 flex items-center justify-center border border-white/15 text-[#F7F5F0]/70 hover:text-white hover:border-[#8FA3B3] transition-colors"
                title="Facebook link coming soon"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#F7F5F0]/50">
          <div>
            &copy; {new Date().getFullYear()} Ekai Architects.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#8FA3B3] hover:text-white transition-colors"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
