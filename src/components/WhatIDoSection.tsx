export default function WhatIDoSection() {
  return (
    <section
      id="works"
      className="pt-8 border-b border-gray-200/70 relative pb-12 scroll-mt-24"
    >
      {/* Section Title, Pill Badge & Hand-drawn Doodle Notes */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4 relative">
        <div className="flex items-center flex-wrap gap-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            <span className="marker-highlight cursor-default">What I Do</span>
          </h2>
        </div>

        {/* Middle Card Doodle Arrow Note (Center Focus) */}
        <div className="hidden lg:flex items-center gap-2 absolute left-[45%] top-1 -translate-y-2 font-handwriting text-xl sm:text-2xl text-indigo-700 select-none doodle-wobble cursor-default -rotate-3">
          <span>My Core Focus</span>
          <svg
            className="w-6 h-6 text-indigo-600 rotate-45 transform translate-y-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Top Right Handwritten Doodle: Ideas Skills Impact with Upward Arrow & Rays */}
        <div className="hidden md:flex items-center gap-3 font-handwriting text-2xl text-gray-700 select-none doodle-wobble cursor-default ml-auto">
          <span className="leading-none text-right">
            Ideas<br />Skills<br />Impact
          </span>
          <div className="relative flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gray-700 -rotate-45 transform hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="absolute -top-1 -right-1 text-yellow-500 font-bold text-xs select-none">
              ✦
            </span>
          </div>
        </div>
      </div>

      {/* 3 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* Card 1: AI Solutions & Automation */}
        <article className="bg-white p-7 sm:p-8 rounded-3xl border border-indigo-100 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative">
          <div>
            {/* Top Row: Icon + Slanted Doodle Note */}
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
                    <path
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="absolute -top-1.5 -right-1.5 text-xs text-indigo-400 font-handwriting select-none">
                  ✦
                </span>
              </div>
              <div className="font-handwriting text-right text-base sm:text-lg text-indigo-600/90 leading-tight rotate-3 select-none doodle-wobble">
                Automate<br />Solve<br />Create Impact
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-950 mt-5 mb-3 group-hover:text-indigo-600 transition-colors">
              AI Solutions &amp; Automation
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              I design and build efficient solutions for real-world problems using modern AI models, automating complex and time-consuming tasks.
            </p>
          </div>
          <div>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-indigo-50/90 text-indigo-700 text-xs font-semibold border border-indigo-100/80 transition-colors group-hover:bg-indigo-100">
              <span>AI</span>
              <span className="text-indigo-400">•</span>
              <span>Automation</span>
              <span className="text-indigo-400">•</span>
              <span>Real Impact</span>
            </span>
          </div>
        </article>

        {/* Card 2: Full-Stack & Systems (Core Focus Highlight) */}
        <article className="bg-white p-7 sm:p-8 rounded-3xl border-2 border-indigo-200/80 shadow-md shadow-indigo-500/5 hover:shadow-xl hover:-translate-y-1.5 hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between group relative">
          <div>
            {/* Top Row: Icon + Slanted Doodle Note */}
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-indigo-100/70 border border-indigo-200/80 flex items-center justify-center text-indigo-700 font-mono text-xl font-bold group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-300">
                  <span>&lt;/&gt;</span>
                </div>
                <span className="absolute -top-1.5 -right-1.5 text-xs text-indigo-500 font-handwriting select-none">
                  ✦
                </span>
              </div>
              <div className="font-handwriting text-right text-base sm:text-lg text-indigo-700 leading-tight -rotate-2 select-none doodle-wobble">
                Build<br />Optimize<br />
                <span className="border-b border-indigo-300 pb-0.5">Scale</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-950 mt-5 mb-3 group-hover:text-indigo-700 transition-colors">
              Full-Stack &amp; Systems
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Developing robust software, practical tools, and intelligent systems that optimize performance and eliminate manual overhead.
            </p>
          </div>
          <div>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-indigo-50/90 text-indigo-700 text-xs font-semibold border border-indigo-100/80 transition-colors group-hover:bg-indigo-100">
              <span>Web</span>
              <span className="text-indigo-400">•</span>
              <span>Systems</span>
              <span className="text-indigo-400">•</span>
              <span>Scalable Solutions</span>
            </span>
          </div>
        </article>

        {/* Card 3: Content Creation & Growth */}
        <article className="bg-white p-7 sm:p-8 rounded-3xl border border-pink-100 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative">
          <div>
            {/* Top Row: Icon + Slanted Doodle Note */}
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-600 group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
                    <path
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="absolute -top-1.5 -right-1.5 text-xs text-pink-400 font-handwriting select-none">
                  ✦
                </span>
              </div>
              <div className="font-handwriting text-right text-base sm:text-lg text-pink-600 leading-tight rotate-2 select-none doodle-wobble">
                Educate<br />Create<br />Grow Together
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-950 mt-5 mb-3 group-hover:text-pink-600 transition-colors">
              Content Creation &amp; Growth
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Managing and scaling engaged communities with 225K+ Facebook followers and 10K+ YouTube subscribers through valuable tech &amp; educational content.
            </p>
          </div>
          <div>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-pink-50/90 text-pink-700 text-xs font-semibold border border-pink-100 transition-colors group-hover:bg-pink-100">
              <span>Content</span>
              <span className="text-pink-400">•</span>
              <span>Community</span>
              <span className="text-pink-400">•</span>
              <span>Growth</span>
            </span>
          </div>

          {/* Bottom-right Outside Doodle Note */}
          <div className="absolute -right-4 -bottom-10 hidden xl:block font-handwriting text-2xl text-gray-700 rotate-12 select-none doodle-wobble cursor-default pointer-events-none">
            More<br />Than<br />Just<br />Code ✨
          </div>
        </article>
      </div>
    </section>
  );
}
