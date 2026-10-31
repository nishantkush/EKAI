import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-36 bg-[#F7F5F0] hairline-t">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl uppercase font-normal tracking-widest text-[#8FA3B3]">
            Contact
          </h2>
        </div>

        {/* 3 Crisp Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#DCD7CD] bg-[#EBE7DF]/30">
          
          {/* Column 1: Name, Contact Number, Email ID */}
          <div className="p-6 sm:p-8 lg:p-10 border-b md:border-b-0 md:border-r border-[#DCD7CD] space-y-3 sm:space-y-4">
            <h3 className="text-xl sm:text-2xl font-normal text-[#1C1B1A] tracking-tight">
              Vandana Babbar
            </h3>

            <div className="space-y-1.5">
              <a
                href="tel:+919815300103"
                className="text-xs sm:text-sm font-mono text-[#6E6A63] hover:text-[#1C1B1A] block transition-colors tracking-wide"
              >
                +91-9815300103
              </a>
              <a
                href="mailto:vandanababbar@gmail.com"
                className="text-xs sm:text-sm font-mono text-[#6E6A63] hover:text-[#1C1B1A] block transition-colors tracking-wide break-all"
              >
                vandanababbar@gmail.com
              </a>
            </div>
          </div>

          {/* Column 2: Address and Working Hours */}
          <div className="p-6 sm:p-8 lg:p-10 border-b md:border-b-0 md:border-r border-[#DCD7CD] space-y-5 sm:space-y-6">
            <div className="space-y-1.5">
              <h3 className="text-xl sm:text-2xl font-normal text-[#1C1B1A] tracking-tight">
                Address
              </h3>
              <a
                href="https://maps.app.goo.gl/65JyBWpGG92KyC999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-[#6E6A63] hover:text-[#1C1B1A] font-light leading-relaxed block transition-colors"
              >
                Maitri Farms, IT Park Road<br />
                Adarsh Nagar, Chandigarh 160101
              </a>
            </div>

            <div className="space-y-0.5">
              <span className="text-[#8FA3B3] font-mono text-[10px] uppercase tracking-widest block">
                Working Hours
              </span>
              <p className="text-xs sm:text-sm font-light text-[#1C1B1A]">
                10:00 AM to 05:00 PM
              </p>
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
              className="w-full h-full min-h-[260px] grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
