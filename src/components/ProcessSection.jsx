import React from 'react';

export default function ProcessSection() {
  const stages = [
    {
      num: '01',
      title: 'Context & Site',
      desc: 'Mapping solar paths, wind vectors, and local memory before any line is drawn.'
    },
    {
      num: '02',
      title: 'Spatial Massing',
      desc: 'Sculpting voids and light apertures through physical basswood and cast plaster models.'
    },
    {
      num: '03',
      title: 'Material Tectonics',
      desc: '1:1 joinery mockups, slaked lime formulations, and raw unembellished stone.'
    },
    {
      num: '04',
      title: 'Site Execution',
      desc: 'Rigorous on-site atelier oversight in direct collaboration with master craftsmen.'
    },
    {
      num: '05',
      title: 'Atmospheric Curation',
      desc: 'Tuning light, natural ventilation, and acoustic stillness for handover.'
    }
  ];

  return (
    <section id="process" className="relative py-28 sm:py-36 bg-[#F7F5F0] hairline-t">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl uppercase font-normal tracking-widest text-[#8FA3B3]">
            Process
          </h2>
        </div>

        {/* 5-Stage Minimal Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 border border-[#DCD7CD] bg-[#EBE7DF]/30">
          {stages.map((stage, idx) => (
            <div
              key={stage.num}
              className={`p-8 space-y-4 ${
                idx !== 0 ? 'md:border-l md:border-[#DCD7CD] border-t md:border-t-0 border-[#DCD7CD]' : ''
              }`}
            >
              <span className="font-mono text-2xl font-light text-[#8FA3B3] block">
                {stage.num}
              </span>
              <h3 className="text-lg font-medium text-[#1C1B1A] tracking-wide">
                {stage.title}
              </h3>
              <p className="text-xs text-[#6E6A63] font-light leading-relaxed">
                {stage.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
