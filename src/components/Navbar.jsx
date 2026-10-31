import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activeSection, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'studio', label: 'Studio' },
    { id: 'work', label: 'Work' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-md bg-[#F7F5F0]/95 hairline-b py-3 sm:py-3.5 shadow-subtle'
            : 'bg-[#F7F5F0]/85 backdrop-blur-sm py-3.5 sm:py-5 hairline-b'
        }`}
      >
        <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between">
          {/* Brand Wordmark */}
          <button
            onClick={() => handleLinkClick('home')}
            className="group text-left flex items-center gap-3 focus:outline-none"
            aria-label="EKAI Architecture Home"
          >
            <span className="text-xl sm:text-2xl lg:text-3xl tracking-[0.25em] sm:tracking-[0.3em] font-light text-[#1C1B1A] group-hover:text-[#6D8496] transition-colors duration-300">
              EKAI
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-10 xl:gap-12" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 text-xs uppercase tracking-micro transition-colors duration-300 focus:outline-none font-normal ${
                    isActive ? 'text-[#1C1B1A] font-medium' : 'text-[#6E6A63] hover:text-[#1C1B1A]'
                  }`}
                >
                  {link.label}
                  {/* Subtle Steel Blue Underline Transition */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#8FA3B3] transition-all duration-300 ease-out ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 -mr-1 text-[#1C1B1A] hover:text-[#8FA3B3] transition-colors focus:outline-none active:scale-95"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#F7F5F0] pt-24 px-6 sm:px-8 pb-10 flex flex-col justify-between lg:hidden overflow-y-auto">
          <div className="space-y-6 pt-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#8FA3B3] block">
              Menu Navigation
            </span>
            <div className="flex flex-col">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`flex items-center justify-between text-left py-4 border-b border-[#DCD7CD]/60 text-lg sm:text-xl font-light tracking-wide transition-colors ${
                      isActive ? 'text-[#1C1B1A] font-medium pl-2 border-[#8FA3B3]' : 'text-[#6E6A63] hover:text-[#1C1B1A]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs text-[#8FA3B3]">
                      0{idx + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-8 mt-6 border-t border-[#DCD7CD] space-y-2 text-xs font-mono text-[#6E6A63]">
            <p className="text-[10px] uppercase tracking-widest text-[#8FA3B3]">Atelier</p>
            <p className="text-[#1C1B1A]">CHANDIGARH / NEW DELHI</p>
            <a href="mailto:vandanababbar@gmail.com" className="text-[#8FA3B3] hover:text-[#1C1B1A] block pt-1">
              vandanababbar@gmail.com
            </a>
            <a href="tel:+919815300103" className="hover:text-[#1C1B1A] block">
              +91-9815300103
            </a>
          </div>
        </div>
      )}
    </>
  );
}
