import React from 'react';

export default function StudioSection() {
  const tenets = [
    { num: '01', title: 'Tectonic Truth', desc: 'Structure is never concealed. Every joint declares its purpose.' },
    { num: '02', title: 'Light as Material', desc: 'Mass is sculpted to capture the quiet luminescence of dawn and dusk.' },
    { num: '03', title: 'Contextual Patina', desc: 'Materials designed to weather gracefully across seasons and decades.' },
    { num: '04', title: 'Negative Space', desc: 'The void is not absence; it is the vessel of human contemplation.' },
  ];

  return (
    <section id="studio" className="relative py-28 sm:py-36 bg-[#F7F5F0] hairline-t">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Marker */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl uppercase font-normal tracking-widest text-[#8FA3B3]">
            Studio
          </h2>
        </div>

        {/* Studio Manifesto — Spacious & Minimalist */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start pb-24 hairline-b">
          <div className="lg:col-span-8 space-y-4">
            <p className="text-base sm:text-lg text-[#6E6A63] font-light leading-relaxed max-w-2xl">
              Operating between Chandigarh and New Delhi, EKAI creates monolithic architecture that endures. We work with site-cast concrete, hand-pressed brick, natural stone, and filtered daylight.
            </p>
            <p className="text-base sm:text-lg text-[#6E6A63] font-light leading-relaxed max-w-2xl">
              Each commission is grounded in an unhurried dialogue between local topography, climate, and honest materiality. By paring architecture down to its essential essence, we craft spaces that balance shadow, stillness, and human ritual. Our work stands as a timeless framework built to evolve with nature and endure across generations.
            </p>
          </div>

          {/* 3 Clean Minimal Figures */}
          <div className="lg:col-span-4 grid grid-cols-3 lg:grid-cols-1 gap-8 lg:border-l lg:border-[#DCD7CD] lg:pl-12">
            <div>
              <span className="text-3xl sm:text-4xl font-light text-[#1C1B1A] block">14+</span>
              <span className="text-[11px] uppercase font-mono tracking-widest text-[#6E6A63] mt-1 block">Years</span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-light text-[#1C1B1A] block">42+</span>
              <span className="text-[11px] uppercase font-mono tracking-widest text-[#6E6A63] mt-1 block">Built Works</span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-light text-[#1C1B1A] block">100%</span>
              <span className="text-[11px] uppercase font-mono tracking-widest text-[#6E6A63] mt-1 block">Raw Materials</span>
            </div>
          </div>
        </div>

        {/* 4 Minimalist Tenets */}
        <div className="py-20 hairline-b">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {tenets.map((item) => (
              <div key={item.title} className="space-y-2">
                <h3 className="text-lg font-normal text-[#1C1B1A] tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6E6A63] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder / Principal — Minimal Editorial Portrait */}
        <div className="pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Editorial Portrait Frame */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] bg-[#EBE7DF] overflow-hidden border border-[#DCD7CD] group">
                <img
                  src={`${import.meta.env.BASE_URL}images/vandana-babbar.png`}
                  alt="Vandana Babbar — Founder & Principal Architect"
                  className="w-full h-full object-cover object-top grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B1A]/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end text-white font-mono text-[10px] tracking-widest uppercase pointer-events-none">
                  <span>EKAI / ATELIER</span>
                  <span className="text-[#8FA3B3]">PRINCIPAL</span>
                </div>
              </div>
            </div>

            {/* Principal Bio — Minimal & Classy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] uppercase font-mono tracking-widest text-[#8FA3B3] block">
                Principal Architect
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1C1B1A] tracking-tight">
                Vandana Babbar
              </h3>
              <p className="font-mono text-xs text-[#6E6A63] tracking-widest uppercase">
                B.Arch (SPA, New Delhi • 1998) • Empanelled Architect • Chandigarh &amp; Panchkula
              </p>

              <blockquote className="text-lg sm:text-xl text-[#1C1B1A]/85 font-light leading-relaxed border-l-2 border-[#8FA3B3] pl-6 my-6 italic">
                "Architecture is an act of inter-connectedness—connecting people, nature, and cultural spaces through straight-lined discipline and understated luxury."
              </blockquote>

              <p className="text-sm text-[#6E6A63] font-light leading-relaxed max-w-xl">
                An alumnus of the School of Planning and Architecture (SPA), New Delhi (1998), Vandana Babbar is the founder and principal behind EKAI. Operating across Chandigarh and Panchkula as an empanelled architect under municipal self-certification, she steers the studio with an emphasis on straight-lined contemporary design, contextual adaptation, and understated luxury.
              </p>

              <p className="text-sm text-[#6E6A63] font-light leading-relaxed max-w-xl">
                Her diverse portfolio spans sensitive historical restorations—including an 80-year-old residence in Shimla and a 110-year-old heritage haveli in Punjab—alongside bespoke contemporary residences and contextual research collaborations.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
