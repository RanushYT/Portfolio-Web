export default function AboutSection() {
  return (
    <section
      id="about"
      className="pt-8 border-b border-gray-200/70 pb-12 scroll-mt-24"
    >
      {/* Section Title with Marker */}
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          <span className="marker-highlight cursor-default">About Me</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Side: Narrative Biography */}
        <div className="lg:col-span-5 space-y-5 text-gray-600 leading-relaxed text-base sm:text-lg">
          <p>
            I'm a <strong className="text-gray-900 font-bold">Computer Engineering Student</strong> at the{' '}
            <strong className="text-gray-900 font-bold">University of Peradeniya</strong> who designs and develops{' '}
            <strong className="text-gray-900 font-bold">AI-driven solutions and automation workflows</strong>. I focus on engineering practical software and tools that solve high-impact problems and eliminate repetitive manual tasks.
          </p>
          <p>
            Alongside software engineering, I create digital media and educational tech content, cultivating a combined community of{' '}
            <strong className="text-gray-900 font-semibold">150K+ across Facebook and YouTube</strong>.
          </p>
          <div className="pt-4 font-handwriting text-2xl text-indigo-600 rotate-2 doodle-wobble cursor-default inline-block">
            Automate the Repetitive<br />&nbsp;&nbsp;Scale the Creative ✦
          </div>
        </div>

        {/* Right Side: 2x2 Highlights Grid + Quote */}
        <div className="lg:col-span-7 flex flex-col md:flex-row gap-6 items-center">
          {/* 2x2 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {/* Card 1: 2nd Year Student */}
            <div className="bg-purple-100/70 hover:bg-purple-100/95 p-5 rounded-2xl border border-purple-200/70 shadow-xs transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 hover:border-purple-300 group cursor-default">
              <div className="w-9 h-9 mb-3 flex items-center justify-center text-purple-900 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-base">2nd Year Student</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                University of Peradeniya • Comp Eng
              </p>
            </div>

            {/* Card 2: AI & Automation */}
            <div className="bg-amber-100/70 hover:bg-amber-100/95 p-5 rounded-2xl border border-amber-200/70 shadow-xs transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 hover:border-amber-300 group cursor-default">
              <div className="w-9 h-9 mb-3 flex items-center justify-center text-amber-900 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-base">AI &amp; Automation</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Building efficient solutions with LLMs &amp; intelligent agents
              </p>
            </div>

            {/* Card 3: Content Creator */}
            <div className="bg-yellow-100/70 hover:bg-yellow-100/95 p-5 rounded-2xl border border-yellow-200/70 shadow-xs transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 hover:border-yellow-300 group cursor-default">
              <div className="w-9 h-9 mb-3 flex items-center justify-center text-yellow-900 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-base">Content Creator</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                225K+ Facebook • 10K+ YouTube Subscribers
              </p>
            </div>

            {/* Card 4: Completed Projects */}
            <div className="bg-sky-100/70 hover:bg-sky-100/95 p-5 rounded-2xl border border-sky-200/70 shadow-xs transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 hover:border-sky-300 group cursor-default">
              <div className="w-9 h-9 mb-3 flex items-center justify-center text-sky-900 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 13l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-base">Completed Projects</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                5+ Completed Projects • AI, Robotics &amp; Full-Stack
              </p>
            </div>
          </div>

          {/* Handwritten Quote Aside */}
          <div className="w-full md:w-44 text-center md:text-left shrink-0 pl-2 doodle-wobble cursor-default">
            <blockquote className="font-handwriting text-2xl sm:text-3xl text-gray-800 leading-snug rotate-1">
              "Curious Minds Build Brighter Futures"
            </blockquote>
            <svg className="w-16 h-3 text-gray-400 mt-2 hidden md:block" fill="none" viewBox="0 0 100 12">
              <path d="M2 10 Q 50 -2, 98 8" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
