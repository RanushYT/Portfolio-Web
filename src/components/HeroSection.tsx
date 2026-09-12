import type { MouseEvent } from 'react';

interface HeroSectionProps {
  onConnectClick?: () => void;
}

export default function HeroSection({ onConnectClick }: HeroSectionProps) {
  const scrollToContact = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onConnectClick) {
      e.preventDefault();
      onConnectClick();
      return;
    }
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex flex-col lg:flex-row items-center justify-between border-gray-200/70 pt-4 sm:pt-6 pb-6 gap-8 scroll-mt-24"
    >
      {/* Left Column: Hero Text Content */}
      <div className="w-full lg:w-1/2 z-10 space-y-6 text-left">
        <div className="space-y-2">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-950">
            Hi, I'm <br />
            <span className="relative inline-block mt-1 transition-transform duration-300 hover:scale-[1.02] cursor-default">
              Ranusha.
              {/* Subtle artistic paint stroke line behind name */}
              <span className="absolute bottom-2 left-0 w-full h-3 bg-purple-200/70 -z-10 rounded-full transform -rotate-1 transition-transform duration-300 hover:rotate-0 hover:scale-105"></span>
            </span>
          </h1>
        </div>

        <div className="space-y-4 max-w-md text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
          <p>
            I build <strong className="font-bold text-gray-950">efficient solutions</strong> for real-world problems using <strong className="font-bold text-gray-950">AI</strong>. I leverage modern AI models and automation to build and manage systems that save countless hours.
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            I also create and manage digital content, reaching an audience of <strong className="font-semibold text-gray-900">40K+ on Facebook</strong> and <strong className="font-semibold text-gray-900">10K+ subscribers on YouTube</strong>.
          </p>
        </div>

        {/* CTA & Hand-drawn Arrow Note */}
        <div className="pt-2 flex items-center gap-6">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-95 group"
          >
            <span>Let's Connect</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M14 5l7 7m0 0l-7 7m7-7H3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </a>

          {/* Hand-drawn Doodle Note: Ideas to Impact */}
          <div className="relative flex items-center gap-1 font-handwriting text-2xl text-gray-700 -rotate-6 select-none doodle-wobble cursor-default">
            <span>
              Ideas<br />&nbsp;&nbsp;to Impact
            </span>
            <svg
              className="w-6 h-6 text-gray-700 transform rotate-12 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M5 12h14M13 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Right Column: Illustrated Hero Cutout */}
      <div className="w-full lg:w-1/2 flex justify-center items-center relative">
        <div className="relative w-full max-w-[500px] flex justify-center items-center">
          {/* Main Cutout Image with ambient floating animation */}
          <img
            alt="Ranusha - Computer Engineering Student illustrated portrait"
            className="w-full h-auto object-contain drop-shadow-xl animate-float-portrait hover:scale-[1.02] transition-transform duration-500 select-none"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA65ZlMkbcp-ugUivn6Ui5lAuMPh2HowGfcKUVeNprXENKrj1dWwOJY3P4o5woh6DeF4JMKDZG7kv4KFmBAFKFp6_QRF7BpQz3K_1mu_XrWO8HEg4nvM3JfwVp0Fqwl83P9pmODce14gm1fxzkBCRdzGDbh2lcd6CBSeowaTxUXszGG3HCG080MZg9WpR0hTpNgy7OFug938fJuK-DReinQQilzxE828h6l-9o8_JiemnDNnyT5HjPZCK4dvCzVtTCB8g"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
