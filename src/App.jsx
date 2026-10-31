import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroStrip from './components/HeroStrip';
import StudioSection from './components/StudioSection';
import WorkSection from './components/WorkSection';
import ProcessSection from './components/ProcessSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  // Intersection Observer to update active navigation item
  useEffect(() => {
    const sections = ['home', 'studio', 'work', 'process', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-[#F7F5F0] text-[#1C1B1A] font-sans selection:bg-[#8FA3B3]/25 selection:text-[#1C1B1A]">
      {/* Global Minimalist Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main>
        {/* A/B. Home — Architectural Image Strip */}
        <HeroStrip onSelectProject={(project) => setSelectedProject(project)} />

        {/* C. Practice / Profile / Studio / About */}
        <StudioSection />

        {/* D. Projects / Work Directory (Two-Tier Filtering + Retail Projects) */}
        <WorkSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* E. Process (5-Step Architectural Timeline) */}
        <ProcessSection />

        {/* F. Contact Us (Crisp Grid Cells + Location Map + Commission Form) */}
        <ContactSection />
      </main>

      {/* Footer Colophon */}
      <Footer onNavigate={handleNavigate} />

      {/* Full-Screen Project Case Study View / Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(p) => setSelectedProject(p)}
        />
      )}
    </div>
  );
}
