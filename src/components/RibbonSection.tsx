export default function RibbonSection() {
  const items = [
    '🧩 Problem Solver',
    'Gamer',
    'AI/ML Enthusiast',
    'Tech Enthusiast',
    'Builder & Maker',
    'Curious Learner',
    'Creative Thinker',
  ];

  return (
    <section
      aria-label="Personal attributes ticker"
      className="relative w-full overflow-hidden border-y border-gray-200/90 bg-white/70 backdrop-blur-sm select-none marquee-container transition-colors duration-300 hover:bg-white/95 my-4 py-3"
    >
      <div className="marquee-track flex items-center gap-0 text-slate-600 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
        {/* Loop 1 */}
        <div className="flex items-center shrink-0">
          {items.map((item, idx) => (
            <div key={`loop1-${idx}`} className="flex items-center shrink-0">
              <span className="px-4 sm:px-5 hover:text-gray-950 transition-colors">
                {item}
              </span>
              <svg
                className="w-3.5 h-3.5 text-slate-400 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
              </svg>
            </div>
          ))}
        </div>

        {/* Loop 2 for infinite scroll */}
        <div aria-hidden="true" className="flex items-center shrink-0">
          {items.map((item, idx) => (
            <div key={`loop2-${idx}`} className="flex items-center shrink-0">
              <span className="px-4 sm:px-5 hover:text-gray-950 transition-colors">
                {item}
              </span>
              <svg
                className="w-3.5 h-3.5 text-slate-400 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
