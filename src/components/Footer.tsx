export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white/60 backdrop-blur-sm px-4 sm:px-8 text-xs text-gray-600 font-medium py-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Attribution */}
        <div className="flex items-center flex-wrap justify-center gap-2">
          <span className="font-bold text-gray-900 transition-colors hover:text-indigo-600 cursor-default">
            Ranusha
          </span>
          <span>✦</span>
          <span>Computer Engineering &amp; AI Automation Creator</span>
          <span>✦</span>
          <span>University of Peradeniya</span>
        </div>

        {/* Right Inspiration Tagline */}
        <div className="flex items-center flex-wrap justify-center gap-2">
          <span className="hover:text-gray-950 transition-colors cursor-default">
            Build
          </span>
          <span>✦</span>
          <span className="hover:text-gray-950 transition-colors cursor-default">
            Learn
          </span>
          <span>✦</span>
          <span className="hover:text-gray-950 transition-colors cursor-default">
            Create
          </span>
          <span>✦</span>
          <span className="hover:text-gray-950 transition-colors cursor-default">
            Make an Impact
          </span>
          <span className="text-rose-500 transition-transform duration-300 hover:scale-125 cursor-default inline-block">
            ♡
          </span>
        </div>
      </div>
    </footer>
  );
}
