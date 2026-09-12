export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="pt-8 border-b border-gray-200/70 relative pb-12 scroll-mt-24"
    >
      {/* Top Section Header & Hand-drawn WIP Doodle */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10 relative">
        <div className="space-y-3 max-w-xl">
          {/* Muted uppercase label with doodle slashes */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono tracking-[0.2em] font-semibold text-gray-400 uppercase">
              MY TOOLKIT
            </span>
            <span className="text-indigo-500 font-bold text-lg select-none font-handwriting tracking-widest">
              //
            </span>
          </div>

          {/* Main Title with warm yellow highlighter underline effect */}
          <div className="relative inline-block">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-950 tracking-tight relative z-10">
              Skills
            </h2>
            <span className="absolute bottom-1 left-0 w-full h-4 bg-amber-200/80 -z-0 rounded-xs -rotate-1 transform"></span>
          </div>

          {/* Subtitle description */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed pt-1">
            A mix of technical skills, creative tools, and human strengths that help me build, learn, and create meaningful things.
          </p>
        </div>

        {/* Right side hand-drawn doodle: Always a Work in Progress + mini chart */}
        <div className="relative flex items-center gap-3 font-handwriting text-gray-700 select-none doodle-wobble cursor-default shrink-0 self-end md:self-auto">
          <div className="text-right rotate-[-4deg]">
            <span className="text-2xl sm:text-3xl text-gray-800 leading-tight block">
              Always<br />a Work in<br />Progress
            </span>
          </div>
          {/* Curved hand-drawn arrow pointing to chart */}
          <svg
            className="w-8 h-8 text-gray-500 -rotate-12 transform"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 19c6-2 11-8 14-14m0 0h-6m6 0v6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {/* Mini bar chart sketch with sparkles and smiley */}
          <div className="flex flex-col items-center pl-1">
            <div className="relative flex items-end gap-1 h-8 mb-1">
              <span className="absolute -top-3 right-0 text-yellow-500 font-bold text-xs">✦</span>
              <span className="w-2 h-4 bg-purple-300 rounded-xs border border-purple-400"></span>
              <span className="w-2 h-6 bg-purple-400 rounded-xs border border-purple-500"></span>
              <span className="w-2 h-8 bg-purple-600 rounded-xs border border-purple-700"></span>
            </div>
            <span className="text-xs text-gray-500 italic rotate-2">
              Better than yesterday! :)
            </span>
          </div>
        </div>
      </div>

      {/* 3 Distinct Skills Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* CARD 1: Vibe Coding & Logic */}
        <article className="bg-white p-6 sm:p-7 rounded-3xl border border-indigo-100 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-visible">
          <div>
            {/* Header Row: Icon + Title + Doodle in corner */}
            <div className="flex items-start justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shrink-0 shadow-xs">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-950 leading-snug group-hover:text-indigo-600 transition-colors">
                    Vibe Coding &amp; Logic
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">Turning ideas into working things.</p>
                </div>
              </div>

              {/* Top Right Handwritten Doodle: Code Create Repeat */}
              <div className="font-handwriting text-xs sm:text-sm text-indigo-600 text-right rotate-6 select-none shrink-0 leading-tight border-b-2 border-indigo-300 pb-0.5">
                Code<br />Create<br />Repeat
              </div>
            </div>

            {/* Skills Pills / Tags */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {[
                'Vibe Coding',
                'DSA Foundations',
                'Python',
                'Rapid Prototyping',
                'C',
                'HTML / CSS',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full border border-indigo-100/80 transition-all duration-200 hover:scale-105 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Hand-drawn Note with Arrow */}
          <div className="pt-8 mt-4 flex items-center gap-2 font-handwriting text-lg text-gray-700 select-none doodle-wobble cursor-default">
            <svg className="w-6 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 20">
              <path d="M2 2c4 8 10 12 18 10m-3-4l3 4-4 2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="relative inline-block">
              <span className="relative z-10">Ideas into reality</span>
              <span className="absolute bottom-0.5 left-0 w-full h-2 bg-amber-200/80 -z-0 rounded-xs -rotate-1"></span>
            </span>
          </div>
        </article>

        {/* CARD 2: Tools & Technologies */}
        <article className="bg-white p-6 sm:p-7 rounded-3xl border-2 border-amber-200/70 shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-amber-300 transition-all duration-300 flex flex-col justify-between group relative overflow-visible">
          <div>
            {/* Header Row: Icon + Title + Doodle in corner */}
            <div className="flex items-start justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100/80 border border-amber-200/70 flex items-center justify-center text-amber-900 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shrink-0 shadow-xs">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-950 leading-snug group-hover:text-amber-900 transition-colors">
                    Tools &amp; Technologies
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">The building blocks I work with.</p>
                </div>
              </div>

              {/* Top Right Handwritten Doodle: Good Tools Better Ideas with rays */}
              <div className="font-handwriting text-xs sm:text-sm text-amber-900 text-right -rotate-3 select-none shrink-0 leading-tight">
                Good<br />Tools<br />
                <span className="relative inline-block">
                  Better Ideas
                  <span className="text-yellow-500 font-bold text-xs ml-1">✦</span>
                </span>
              </div>
            </div>

            {/* Skills Pills / Tags */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {[
                'OpenAI API',
                'LangChain',
                'Python',
                'Prompt Eng',
                'Git',
                'VS Code',
                'Video Production',
                'Gemini Integration',
                'Antigravity',
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-3.5 py-1.5 bg-amber-100/70 hover:bg-amber-100 text-amber-900 text-xs font-semibold rounded-full border border-amber-200/60 transition-all duration-200 hover:scale-105 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Hand-drawn Note with Arrow */}
          <div className="pt-8 mt-4 flex items-center gap-2 font-handwriting text-lg text-gray-700 select-none doodle-wobble cursor-default">
            <svg className="w-6 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 20">
              <path d="M2 2c4 8 10 12 18 10m-3-4l3 4-4 2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="relative inline-block">
              <span className="relative z-10">Powering what's next</span>
              <span className="absolute bottom-0.5 left-0 w-full h-2 bg-amber-200/80 -z-0 rounded-xs -rotate-1"></span>
            </span>
          </div>
        </article>

        {/* CARD 3: Interests & Strengths */}
        <article className="bg-white p-6 sm:p-7 rounded-3xl border border-purple-200/70 shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-purple-300 transition-all duration-300 flex flex-col justify-between group relative overflow-visible">
          <div>
            {/* Header Row: Icon + Title + Doodle in corner */}
            <div className="flex items-start justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-100/70 border border-purple-200/70 flex items-center justify-center text-purple-700 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shrink-0 shadow-xs">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-950 leading-snug group-hover:text-purple-700 transition-colors">
                    Interests &amp; Strengths
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">What keeps me curious and going.</p>
                </div>
              </div>

              {/* Top Right Handwritten Doodle: People Ideas Impact */}
              <div className="font-handwriting text-xs sm:text-sm text-purple-700 text-right rotate-3 select-none shrink-0 leading-tight border-b-2 border-purple-300 pb-0.5">
                People<br />Ideas ♡<br />Impact
              </div>
            </div>

            {/* Skills Pills / Tags */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {[
                'AI Automation',
                'Social Media Growth',
                'Community Building',
                'Prompt Engineering',
                'Problem Solving',
                'Content Creation',
              ].map((interest) => (
                <span
                  key={interest}
                  className="px-3.5 py-1.5 bg-purple-100/70 hover:bg-purple-100 text-purple-900 text-xs font-semibold rounded-full border border-purple-200/60 transition-all duration-200 hover:scale-105 cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Hand-drawn Note with Arrow */}
          <div className="pt-8 mt-4 flex items-center gap-2 font-handwriting text-lg text-gray-700 select-none doodle-wobble cursor-default">
            <svg className="w-6 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 20">
              <path d="M2 2c4 8 10 12 18 10m-3-4l3 4-4 2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="relative inline-block">
              <span className="relative z-10">Curiosity compounds</span>
              <span className="absolute bottom-0.5 left-0 w-full h-2 bg-amber-200/80 -z-0 rounded-xs -rotate-1"></span>
            </span>
          </div>
        </article>
      </div>

      {/* Bottom Section Accent Doodles: Small Steps Big Things & Keep Building */}
      <div className="pt-8 mt-2 flex items-center justify-between text-gray-600 select-none">
        {/* Left bottom doodle: Small Steps Big Things ♡ */}
        <div className="flex items-center gap-1.5 font-handwriting text-base sm:text-lg -rotate-6 doodle-wobble cursor-default text-gray-600">
          <span>Small Steps<br />Big Things</span>
          <span className="text-rose-500 text-lg">♡</span>
        </div>

        {/* Right bottom doodle: dashed trail arrow to Keep Building */}
        <div className="flex items-center gap-2 font-handwriting text-base sm:text-lg rotate-2 doodle-wobble cursor-default text-gray-700">
          <svg
            className="w-16 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeDasharray="3 3"
            strokeWidth="1.8"
            viewBox="0 0 70 24"
          >
            <path d="M2 20 C 25 18, 45 4, 68 8" strokeLinecap="round" />
            <path d="M60 4 L68 8 L64 15" strokeDasharray="0" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-bold">Keep<br />Building</span>
          <span className="text-xl">↗</span>
        </div>
      </div>
    </section>
  );
}
