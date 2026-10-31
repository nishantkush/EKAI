import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-[#F7F5F0] hairline-t">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl uppercase font-normal tracking-widest text-[#8FA3B3]">
            Contact
          </h2>
        </div>

        {/* 3 Crisp Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#DCD7CD] bg-[#EBE7DF]/30">
          {/* Column 1: Name, Contact Number, Email ID */}
          <div className="p-8 border-b md:border-b-0 md:border-r border-[#DCD7CD] flex flex-col justify-between space-y-6">
            {/* Name */}
            <div className="space-y-1">
              <h3 className="text-lg font-normal text-[#1C1B1A]">Name</h3>
              <p className="text-xs text-[#6E6A63] font-light">
                Vandana Babbar
              </p>
            </div>

            {/* Contact Number */}
            <div className="pt-4 border-t border-[#DCD7CD]/60 space-y-1">
              <h3 className="text-lg font-normal text-[#1C1B1A]">Contact Number</h3>
              <a
                href="tel:+919815300103"
                className="text-xs font-mono text-[#6E6A63] hover:text-[#1C1B1A] block transition-colors"
              >
                +91-9815300103
              </a>
            </div>

            {/* Email ID */}
            <div className="pt-4 border-t border-[#DCD7CD]/60 space-y-1">
              <h3 className="text-lg font-normal text-[#1C1B1A]">Email ID</h3>
              <a
                href="mailto:vandanababbar@gmail.com"
                className="text-xs font-mono text-[#6E6A63] hover:text-[#1C1B1A] block transition-colors"
              >
                vandanababbar@gmail.com
              </a>
            </div>
          </div>

          {/* Column 2: Address and Working Hours */}
          <div className="p-8 border-b md:border-b-0 md:border-r border-[#DCD7CD] flex flex-col justify-between space-y-6">
            {/* Address */}
            <div className="space-y-2">
              <h3 className="text-lg font-normal text-[#1C1B1A]">Address</h3>
              <a
                href="https://maps.app.goo.gl/65JyBWpGG92KyC999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#6E6A63] hover:text-[#1C1B1A] font-light leading-relaxed block transition-colors"
              >
                Maitri Farms, IT Park Road<br />
                Adarsh Nagar, Chandigarh 160101
              </a>
            </div>

            {/* Working Hours */}
            <div className="pt-4 border-t border-[#DCD7CD]/60 space-y-1">
              <span className="text-[#8FA3B3] font-mono text-[11px] uppercase tracking-wider block">
                Working Hours
              </span>
              <span className="text-[#1C1B1A] font-light text-xs block">
                10:00 AM to 05:00 PM
              </span>
            </div>
          </div>

          {/* Column 3: Google Map */}
          <div className="relative min-h-[260px] md:min-h-0 h-full overflow-hidden bg-[#EBE7DF]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.8732!2d76.8246551!3d30.7251663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f935ad69dec7f%3A0xe4a6846763c5a7a5!2sC%20Studios!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google Maps Location"
              className="w-full h-[calc(100%+36px)] min-h-[260px] -mb-[36px] grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
