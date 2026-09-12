import { useState } from 'react';
import type { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onOpenProjectModal: (project: ProjectItem) => void;
}

const LINE_FOLLOWER_PROJECT: ProjectItem = {
  id: 'line-follower',
  category: 'university',
  title: 'Line Following Robot',
  description:
    'Designed and engineered an autonomous line follower robot built collaboratively with a 5-member engineering team, featuring precise sensor calibration and motor control logic.',
  tags: ['Robotics', 'Arduino / C++', 'Sensors', 'Team Project'],
  metaInfo: {
    team: 'Team of 5',
    focus: 'Autonomous Systems',
  },
  imageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAiMWxzstpOCd-uGM9koB6PgCK57UKqQ04NFZj7HR6M8LvMyYmXtii9NA4mfFDKv8FZjJsiPBrvGa5b1F8jIS9n2nxa1nIM1PYR4nzeRyYooKdMl_txryJ8n3u7dvYPjkvbPSydY82wcSpaUjcuSapoS0ZNPtKgRx3-Dl3p0El9P624vztM_O-k3rilL1oO_dYt5xXYeJT_ZNXImd8IAOefla8KwshiaK966SSAwfPurmrAq26v18ZLfE_o3CGVajFdmT0Er5_ZzW2hUA',
  doodleCaption: 'Small Robots\nBig Possibilities ~',
  linkText: 'View Project Details',
  linkUrl: 'https://github.com/RanushYT/THE-LINE-FOLLOWING-CAR',
  details: {
    fullDescription:
      'The autonomous Line Following Robot was engineered at the University of Peradeniya as a team hardware-software initiative. It integrates custom IR sensor arrays with tuned PID control algorithms for rapid, high-speed line tracking across varying surface conditions.',
    keyFeatures: [
      'Multi-channel analog IR reflective sensor calibration',
      'Dual H-Bridge motor driver synchronization with PWM curve shaping',
      'PID tracking algorithm preventing overshoot at 90-degree junctions',
      'Fail-safe track re-acquisition routine',
    ],
    technologies: ['C++', 'Arduino Uno / Nano', 'TCRT5000 IR Sensors', 'L298N Motor Driver'],
    role: 'Sensor calibration algorithms, PID controller tuning, and chassis assembly',
    impact: 'Achieved sub-15ms loop reaction time with high track stability',
  },
};

const SMART_CLASSROOM_PROJECT: ProjectItem = {
  id: 'smart-classroom',
  category: 'university',
  title: 'Smart Classroom System',
  description:
    'An integrated smart IoT classroom powered by ESP32 that automates attendance tracking and teaching hours for students and lecturers. Features auto-adjusting smart lighting, fire detection & alarm systems, and automated servo door access control.',
  tags: ['ESP32', 'IoT Systems', 'RFID & Sensors', 'Automation', 'C++'],
  metaInfo: {
    team: 'IoT & Automation',
    focus: 'ESP32 System',
  },
  imageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB3W1l_g6H7bmY8yiXSny6oUSGNlWwgNGjZVPt3wGqnNjCnTd--2opQqBnwgRE24KIbOtWjWVHGR-o8WHczuU_7SHh5Huhm5Sd6jCmXxyPrWeQeGG_77dJbKqw8Ubq1E2MR4A5_d2pys0CgVvqB517OR1739RiocCcjbtNJFQ3zPfkcSSwbElrSzanwPb9JGeFVSIcKyzUsz_sIbDR5bL1DK7w-jvE2Xvk510UfuM2nnJl3Bj0dOo6bLI5fJrRU97x0iXlkpukZ8xDngA',
  doodleCaption: 'Smarter Classrooms\nHappier People',
  linkText: 'View Project Details',
  details: {
    fullDescription:
      'The Smart Classroom System modernizes educational environments by automating daily administrative and environmental routines. Driven by high-performance ESP32 microcontrollers, the system automates student/lecturer card scans, dynamic lighting levels based on ambient Lux, and emergency safety protocols.',
    keyFeatures: [
      'Contactless RFID attendance logging with time-stamped cloud sync',
      'Automated servo-driven access control for authorized personnel',
      'LDR-based adaptive classroom illumination reducing power consumption',
      'Multi-sensor fire and gas hazard monitoring with auto-siren trip',
    ],
    technologies: ['ESP32', 'C++', 'FreeRTOS', 'RFID RC522', 'MQ-2 Gas Sensor', 'MQTT'],
    role: 'Microcontroller firmware, RFID reader pipeline, and actuator integration',
    impact: 'Eliminated manual paper attendance and reduced classroom energy waste',
  },
};

export default function ProjectsSection({ onOpenProjectModal }: ProjectsSectionProps) {
  // Interactive Expense Tracker Preview State for WhatsApp Card
  const [expenses, setExpenses] = useState<Array<{ name: string; cost: number; cat: string }>>([
    { name: 'Lunch @ Starbucks', cost: 6.5, cat: 'Food & Dining' },
  ]);
  const [selectedQuickItem, setSelectedQuickItem] = useState<string | null>(null);

  const handleQuickAdd = (name: string, cost: number, cat: string) => {
    setSelectedQuickItem(name);
    setExpenses((prev) => [...prev.slice(-2), { name, cost, cat }]);
  };

  const totalLogged = expenses.reduce((acc, curr) => acc + curr.cost, 0);

  return (
    <section
      id="projects"
      className="pt-8 border-b border-gray-200/70 relative pb-12 scroll-mt-24"
    >
      {/* Section Header with Playful Handwritten Doodles */}
      <div className="relative mb-12">
        {/* Top Left Spark Tag */}
        <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-500 tracking-wider uppercase mb-2">
          <span>Turn Ideas Into Impact</span>
          <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 3v3m0 12v3M3 12h3m12 0h3m-3.5-6.5l-2 2m-7 7l-2 2m0-11l2 2m7 7l2 2" />
          </svg>
        </div>

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 tracking-tight relative inline-block">
              Featured Projects
              {/* Playful yellow highlighter brush stroke underline */}
              <span className="absolute -bottom-1 left-0 w-full h-4 bg-amber-200/80 -z-10 rounded-xs -rotate-1"></span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mt-3">
              A collection of things I've built, from academic engineering projects to AI experiments and viral content. Different ideas, same goal — solve real problems and create impact.
            </p>
          </div>

          {/* Handwritten notes and sticky note */}
          <div className="relative hidden md:flex items-start gap-6 shrink-0 pt-2">
            {/* Build Improve Repeat with arrow */}
            <div className="font-handwriting text-2xl text-gray-700 select-none doodle-wobble cursor-default -rotate-6 pt-2">
              <span>
                Build<br />&nbsp;&nbsp;Improve<br />&nbsp;&nbsp;&nbsp;&nbsp;Repeat
              </span>
              <svg className="w-7 h-7 text-indigo-500 inline-block ml-1 -rotate-12" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H9M17 7V15" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Post-it Sticky Note */}
            <div className="bg-yellow-100/95 border border-yellow-200/90 shadow-md p-3.5 rounded-lg rotate-3 font-handwriting text-lg text-gray-800 relative w-36 select-none hover:rotate-0 transition-transform duration-300">
              <div className="absolute -top-2 right-4 w-4 h-4 border-2 border-gray-400 rounded-full bg-white/80 shadow-xs"></div>
              <p className="leading-snug">
                Better<br />Ideas<br />Brighter<br />Tomorrows :)
              </p>
            </div>
          </div>
        </div>

        {/* Sub-doodle arrow pointing to University Projects */}
        <div className="hidden lg:flex items-center gap-2 font-handwriting text-sm text-gray-500 absolute right-8 -bottom-7 select-none doodle-wobble cursor-default">
          <span>
            Engineering today<br />for a smarter tomorrow.
          </span>
          <svg className="w-5 h-5 text-gray-400 rotate-45 transform translate-y-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Showcase Content Container */}
      <div className="space-y-12">
        {/* ==================== CATEGORY 1: University Projects ==================== */}
        <div className="space-y-5">
          {/* Category Title Bar */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 shadow-xs">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-950">University Projects</h3>
            <span className="px-3 py-0.5 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold">
              Academic
            </span>
          </div>

          {/* 2 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1: Line Following Robot */}
            <article className="bg-white rounded-3xl border border-gray-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden">
              <div>
                {/* Top Meta Row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-2xl bg-purple-100/70 text-purple-700 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect height="16" rx="2" width="16" x="4" y="4" />
                      <circle cx="9" cy="9" r="1.5" />
                      <circle cx="15" cy="9" r="1.5" />
                      <path d="M9 15h6" />
                      <path d="M12 2v2" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Team of 5
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-gray-500 font-medium">
                      <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Autonomous Systems
                    </span>
                  </div>
                </div>

                {/* Content & Graphic Section */}
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                  <div className="space-y-3 flex-1">
                    <h4 className="text-2xl font-bold text-gray-950 group-hover:text-purple-700 transition-colors">
                      Line Following Robot
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Designed and engineered an autonomous line follower robot built collaboratively with a 5-member engineering team, featuring precise sensor calibration and motor control logic.
                    </p>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="px-3 py-1 bg-purple-100/70 text-purple-700 text-xs font-semibold rounded-full">
                        Robotics
                      </span>
                      <span className="px-3 py-1 bg-purple-100/70 text-purple-700 text-xs font-semibold rounded-full">
                        Arduino / C++
                      </span>
                      <span className="px-3 py-1 bg-purple-100/70 text-purple-700 text-xs font-semibold rounded-full">
                        Sensors
                      </span>
                      <span className="px-3 py-1 bg-purple-100/70 text-purple-700 text-xs font-semibold rounded-full">
                        Team Project
                      </span>
                    </div>
                  </div>

                  {/* Right Illustration Card */}
                  <div className="relative w-36 h-36 shrink-0 flex flex-col items-center justify-center self-center sm:self-auto">
                    <div className="w-28 h-28 rounded-2xl overflow-hidden relative shadow-xs border border-purple-200/80 bg-gray-50 flex items-center justify-center">
                      <img
                        alt="Line Following Robot prototype"
                        className="w-full h-full object-cover rounded-2xl shadow-xs border border-gray-200/80 hover:scale-105 transition-transform duration-300"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiMWxzstpOCd-uGM9koB6PgCK57UKqQ04NFZj7HR6M8LvMyYmXtii9NA4mfFDKv8FZjJsiPBrvGa5b1F8jIS9n2nxa1nIM1PYR4nzeRyYooKdMl_txryJ8n3u7dvYPjkvbPSydY82wcSpaUjcuSapoS0ZNPtKgRx3-Dl3p0El9P624vztM_O-k3rilL1oO_dYt5xXYeJT_ZNXImd8IAOefla8KwshiaK966SSAwfPurmrAq26v18ZLfE_o3CGVajFdmT0Er5_ZzW2hUA"
                      />
                    </div>
                    <span className="font-handwriting text-xs text-purple-700 text-center mt-1 -rotate-6 select-none">
                      Small Robots<br />Big Possibilities ~
                    </span>
                  </div>
                </div>
              </div>

              {/* Action link */}
              <div className="pt-5 mt-6 border-t border-gray-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onOpenProjectModal(LINE_FOLLOWER_PROJECT)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 group-hover:text-purple-700 transition-colors cursor-pointer"
                >
                  View Project Details <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </button>
                <a
                  href="https://github.com/RanushYT/THE-LINE-FOLLOWING-CAR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 hover:text-gray-700 underline"
                >
                  GitHub Repo
                </a>
              </div>
            </article>

            {/* Project 2: Smart Classroom System */}
            <article className="bg-white rounded-3xl border border-gray-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden">
              <div>
                {/* Top Meta Row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100/70 text-emerald-600 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect height="16" rx="2" width="16" x="4" y="4" />
                      <path d="M9 9h6v6H9z" />
                      <path d="M9 1v3m6-3v3m-6 16v3m6-3v3M1 9h3m-3 6h3m16-6h3m-3 6h3" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      IoT &amp; Automation
                    </span>
                    <span className="text-xs text-gray-500 font-medium font-mono">
                      ESP32 System
                    </span>
                  </div>
                </div>

                {/* Content & Graphic Section */}
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                  <div className="space-y-3 flex-1">
                    <h4 className="text-2xl font-bold text-gray-950 group-hover:text-emerald-700 transition-colors">
                      Smart Classroom System
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      An integrated smart IoT classroom powered by ESP32 that automates attendance tracking and teaching hours for students and lecturers. Features auto-adjusting smart lighting, fire detection &amp; alarm systems, and automated servo door access control.
                    </p>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-100">
                        ESP32
                      </span>
                      <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-100">
                        IoT Systems
                      </span>
                      <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-100">
                        RFID &amp; Sensors
                      </span>
                      <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-100">
                        Automation
                      </span>
                      <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-100">
                        C++
                      </span>
                    </div>
                  </div>

                  {/* Right Graphic */}
                  <div className="relative w-36 h-36 shrink-0 flex flex-col items-center justify-center self-center sm:self-auto">
                    <div className="w-28 h-28 rounded-2xl overflow-hidden relative shadow-xs border border-purple-200/80 bg-gray-50 flex items-center justify-center">
                      <img
                        alt="Smart Classroom System hardware"
                        className="w-full h-full object-cover rounded-2xl shadow-xs border border-gray-200/80 hover:scale-105 transition-transform duration-300"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3W1l_g6H7bmY8yiXSny6oUSGNlWwgNGjZVPt3wGqnNjCnTd--2opQqBnwgRE24KIbOtWjWVHGR-o8WHczuU_7SHh5Huhm5Sd6jCmXxyPrWeQeGG_77dJbKqw8Ubq1E2MR4A5_d2pys0CgVvqB517OR1739RiocCcjbtNJFQ3zPfkcSSwbElrSzanwPb9JGeFVSIcKyzUsz_sIbDR5bL1DK7w-jvE2Xvk510UfuM2nnJl3Bj0dOo6bLI5fJrRU97x0iXlkpukZ8xDngA"
                      />
                    </div>
                    <span className="font-handwriting text-xs text-gray-700 text-center mt-1 rotate-3 select-none leading-none">
                      Smarter Classrooms<br />Happier People
                    </span>
                  </div>
                </div>
              </div>

              {/* Action link */}
              <div className="pt-5 mt-6 border-t border-gray-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onOpenProjectModal(SMART_CLASSROOM_PROJECT)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  View Project Details <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </button>
                <span className="text-xs text-emerald-600 font-medium">IoT Prototype</span>
              </div>
            </article>
          </div>
        </div>

        {/* ==================== CATEGORY 2: Fun & Experimental AI Projects ==================== */}
        <div className="space-y-5 relative">
          {/* Category Title Bar & Doodle */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100/80 flex items-center justify-center text-amber-900 shadow-xs">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-950">Fun &amp; Experimental AI Projects</h3>
              <span className="px-3 py-0.5 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
                LLM &amp; Bots
              </span>
            </div>

            {/* Handwritten note */}
            <div className="font-handwriting text-lg text-gray-700 -rotate-3 select-none doodle-wobble cursor-default flex items-center gap-1">
              <span>Play&nbsp;&nbsp;Experiment<br />&nbsp;&nbsp;Learn&nbsp;&nbsp;Repeat</span>
              <svg className="w-6 h-6 text-indigo-500 rotate-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Large Spotlight Card */}
          <article className="bg-white rounded-3xl border border-gray-200/90 shadow-xs hover:shadow-xl transition-all duration-300 p-6 sm:p-9 group relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: Phone Chat Mockup Container with Interactive Features */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="w-full max-w-sm bg-indigo-50/40 p-4 rounded-3xl border border-indigo-100/80 shadow-inner relative flex gap-3 items-center">
                  {/* Smartphone frame */}
                  <div className="w-3/5 bg-white rounded-2xl border-2 border-slate-900 shadow-lg overflow-hidden flex flex-col text-left">
                    {/* Phone Top Speaker & Camera */}
                    <div className="h-4 bg-slate-900 flex justify-center items-center">
                      <div className="w-8 h-1 bg-slate-700 rounded-full"></div>
                    </div>

                    {/* Chat App Header */}
                    <div className="bg-emerald-600 text-white p-2 flex items-center justify-between text-xs font-semibold">
                      <div className="flex items-center gap-1.5">
                        <span className="w-4 h-4 rounded-full bg-white text-emerald-600 flex items-center justify-center text-[10px] font-bold">
                          W
                        </span>
                        <span>WhatsApp</span>
                      </div>
                      <span className="text-[10px] text-emerald-100 font-normal">Online</span>
                    </div>

                    {/* Chat Body */}
                    <div className="p-2.5 space-y-2 bg-[#efeae2] text-[11px] font-sans min-h-[160px] max-h-[220px] overflow-y-auto">
                      {expenses.map((item, idx) => (
                        <div key={idx} className="space-y-1.5 animate-fade-in">
                          {/* Sent message */}
                          <div className="bg-[#d9fdd3] p-1.5 rounded-lg shadow-xs self-end ml-2 text-gray-800">
                            <p className="leading-tight">Here's my receipt! 📄</p>
                          </div>
                          {/* Receipt slip */}
                          <div className="bg-white border border-gray-200 p-1.5 rounded-md shadow-xs text-gray-700 text-[10px]">
                            <div className="font-bold text-gray-900 border-b border-gray-200 pb-0.5">
                              {item.name}
                            </div>
                            <div className="text-emerald-600 font-bold mt-0.5">
                              ${item.cost.toFixed(2)}
                            </div>
                          </div>
                          {/* Bot auto-log confirmation */}
                          <div className="bg-white p-1.5 rounded-lg shadow-xs text-gray-800 border-l-2 border-emerald-500">
                            <div className="font-bold text-emerald-600 flex items-center gap-1">
                              ✓ Logged!
                            </div>
                            <p className="text-[10px] text-gray-600">{item.cat} • ${item.cost.toFixed(2)}</p>
                            <p className="text-[10px] text-indigo-600 font-medium">Keep it up! 🎯</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Phone footer total */}
                    <div className="bg-gray-100 px-2.5 py-1 text-[10px] flex justify-between items-center border-t border-gray-200">
                      <span className="text-gray-500">Total logged</span>
                      <span className="font-bold text-emerald-700">${totalLogged.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Side Feature Buttons / Interactive simulation list */}
                  <div className="flex-1 flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => handleQuickAdd('Coffee @ BlueTokai', 4.5, 'Food & Drinks')}
                      className={`px-2.5 py-1.5 bg-white rounded-xl shadow-xs border text-left flex items-center gap-1.5 text-xs font-medium transition-all ${
                        selectedQuickItem === 'Coffee @ BlueTokai'
                          ? 'border-emerald-500 bg-emerald-50/50 scale-102'
                          : 'border-gray-200/80 hover:border-emerald-400'
                      }`}
                    >
                      <span className="text-emerald-500 text-sm">📊</span>
                      <span className="truncate text-[11px]">Track Expenses</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleQuickAdd('Uber Ride to Lab', 11.2, 'Transport')}
                      className={`px-2.5 py-1.5 bg-white rounded-xl shadow-xs border text-left flex items-center gap-1.5 text-xs font-medium transition-all ${
                        selectedQuickItem === 'Uber Ride to Lab'
                          ? 'border-amber-500 bg-amber-50/50 scale-102'
                          : 'border-gray-200/80 hover:border-amber-400'
                      }`}
                    >
                      <span className="text-amber-500 text-sm">🏷️</span>
                      <span className="truncate text-[11px]">Smart Categories</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleQuickAdd('AWS Server Bill', 18.0, 'Cloud & Utilities')}
                      className={`px-2.5 py-1.5 bg-white rounded-xl shadow-xs border text-left flex items-center gap-1.5 text-xs font-medium transition-all ${
                        selectedQuickItem === 'AWS Server Bill'
                          ? 'border-purple-500 bg-purple-50/50 scale-102'
                          : 'border-gray-200/80 hover:border-purple-400'
                      }`}
                    >
                      <span className="text-purple-500 text-sm">⏱️</span>
                      <span className="truncate text-[11px]">Budget Insights</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleQuickAdd('Weekend Cinema', 8.5, 'Entertainment')}
                      className={`px-2.5 py-1.5 bg-white rounded-xl shadow-xs border text-left flex items-center gap-1.5 text-xs font-medium transition-all ${
                        selectedQuickItem === 'Weekend Cinema'
                          ? 'border-yellow-500 bg-yellow-50/50 scale-102'
                          : 'border-gray-200/80 hover:border-yellow-400'
                      }`}
                    >
                      <span className="text-yellow-500 text-sm">🏆</span>
                      <span className="truncate text-[11px]">Fun Challenges</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right: Content & Action Section */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 text-xs font-semibold border border-amber-200/70">
                    <svg className="w-3.5 h-3.5 text-amber-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Featured AI Experiment
                  </span>
                  <span className="text-xs text-gray-400 font-mono flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect height="14" rx="2" width="20" x="2" y="3" />
                      <line x1="8" x2="16" y1="21" y2="21" />
                      <line x1="12" x2="12" y1="17" y2="21" />
                    </svg>
                    Multi-Platform Bot
                  </span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-extrabold text-gray-950 group-hover:text-amber-900 transition-colors">
                  Leakage AI — Smart Expense Tracker
                </h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  An intuitive conversational AI platform that tracks and categorizes expensess effortlessly. Simply send a quick message or receipt via WhatsApp or Telegram, and Leakage AI automatically categorizes transactions, monitors budget leaks, and powers interactive spending challenges and games with friends.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-3 py-1 bg-amber-100/70 text-amber-900 text-xs font-semibold rounded-full border border-amber-200/60">
                    AI / LLM
                  </span>
                  <span className="px-3 py-1 bg-amber-100/70 text-amber-900 text-xs font-semibold rounded-full border border-amber-200/60">
                    WhatsApp &amp; Telegram Bot
                  </span>
                  <span className="px-3 py-1 bg-amber-100/70 text-amber-900 text-xs font-semibold rounded-full border border-amber-200/60">
                    Automated Expense Tracking
                  </span>
                  <span className="px-3 py-1 bg-amber-100/70 text-amber-900 text-xs font-semibold rounded-full border border-amber-200/60">
                    Python / Node.js
                  </span>
                </div>

                {/* Action Button and Hand-drawn Notes */}
                <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <a
                    className="inline-flex items-center justify-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-95 group/btn w-fit"
                    href="https://github.com/RanushYT/leakage-tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Explore Leakage AI</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </a>

                  {/* Bottom Right Doodle note */}
                  <div className="flex items-center gap-2 font-handwriting text-lg text-indigo-700 select-none doodle-wobble cursor-default">
                    <span className="-rotate-6">
                      Turn Spending<br />Into Progress ~
                    </span>
                    {/* Tiny bar chart doodle */}
                    <div className="flex items-end gap-1 h-6">
                      <span className="w-1.5 h-3 bg-purple-300 rounded-xs"></span>
                      <span className="w-1.5 h-5 bg-purple-400 rounded-xs"></span>
                      <span className="w-1.5 h-7 bg-purple-600 rounded-xs"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* ==================== CATEGORY 3: Social Media & Viral Growth ==================== */}
        <div className="space-y-5 relative">
          {/* Category Title Bar & Doodle */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600 shadow-xs">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-950">Social Media &amp; Viral Growth</h3>
              <span className="px-3 py-0.5 rounded-full bg-pink-100 text-pink-600 text-xs font-semibold">
                Audience Scale
              </span>
            </div>

            {/* Handwritten note */}
            <div className="font-handwriting text-lg text-gray-700 -rotate-2 select-none doodle-wobble cursor-default flex items-center gap-1.5">
              <span>Good Content<br />Creates Opportunities</span>
              <span className="text-rose-500 text-xl">♡</span>
            </div>
          </div>

          {/* Large Viral Growth Spotlight Card */}
          <article className="bg-white rounded-3xl border border-gray-200/90 shadow-xs hover:shadow-xl transition-all duration-300 p-6 sm:p-9 group relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: Facebook Analytics Dashboard Graphic */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="w-full max-w-sm bg-pink-50/40 p-5 rounded-3xl border border-pink-100 shadow-inner relative space-y-4">
                  {/* Facebook Page Header */}
                  <div className="bg-white rounded-2xl p-3 border border-gray-200 shadow-xs flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                      f
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-gray-900 leading-none">Entertainment</h5>
                      <span className="text-xs text-gray-500 font-medium mt-0.5 block">40K followers</span>
                    </div>
                  </div>

                  {/* Growth Line Chart */}
                  <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-xs relative overflow-hidden">
                    {/* Pin highlight bubble */}
                    <div className="absolute top-2 right-4 bg-pink-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                      40K+ Followers
                    </div>
                    {/* Simulated graph SVG */}
                    <svg className="w-full h-20 overflow-visible" fill="none" viewBox="0 0 200 70">
                      <path d="M 10 60 Q 70 55, 110 40 T 190 10" stroke="#ec4899" strokeLinecap="round" strokeWidth="3" />
                      <circle cx="190" cy="10" fill="#ec4899" r="4" stroke="white" strokeWidth="2" />
                      <path d="M 10 60 Q 70 55, 110 40 T 190 10 L 190 70 L 10 70 Z" fill="rgba(236, 72, 153, 0.08)" />
                    </svg>
                    <div className="flex justify-between text-[10px] font-mono text-gray-400 mt-2">
                      <span>Day 0</span>
                      <span>Day 1</span>
                      <span>Day 2</span>
                      <span>Day 3</span>
                    </div>
                  </div>

                  {/* Highlights side-by-side pills */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-emerald-50 border border-emerald-200/80 rounded-xl p-2 flex items-center gap-1.5">
                      <span className="text-emerald-600 font-bold text-sm">▶</span>
                      <div>
                        <div className="text-xs font-bold text-emerald-800 leading-none">5.5M+</div>
                        <span className="text-[10px] text-emerald-600">Video Views</span>
                      </div>
                    </div>
                    <div className="bg-pink-50 border border-pink-200/80 rounded-xl p-2 flex items-center gap-1.5">
                      <span className="text-pink-600 font-bold text-sm">👥</span>
                      <div>
                        <div className="text-xs font-bold text-pink-800 leading-none">40K+</div>
                        <span className="text-[10px] text-pink-600">in 3 Days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Content & Action Section */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold border border-pink-200/60">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    40K+ Followers in 3 Days
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200/60">
                    ▶ 5.5M+ Video Views
                  </span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-extrabold text-gray-950 group-hover:text-pink-700 transition-colors">
                  Viral Facebook Community &amp; Content
                </h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Founded and scaled a high-impact Facebook entertainment page from zero to 40,000+ engaged followers in just 72 hours, generating over 5.5 Million organic views through viral content strategies, audience retention hooks, and data-driven posting.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-3 py-1 bg-pink-50 text-pink-700 text-xs font-semibold rounded-full border border-pink-100">
                    Viral Growth
                  </span>
                  <span className="px-3 py-1 bg-pink-50 text-pink-700 text-xs font-semibold rounded-full border border-pink-100">
                    5.5M+ Views
                  </span>
                  <span className="px-3 py-1 bg-pink-50 text-pink-700 text-xs font-semibold rounded-full border border-pink-100">
                    40K Followers in 3 Days
                  </span>
                  <span className="px-3 py-1 bg-pink-50 text-pink-700 text-xs font-semibold rounded-full border border-pink-100">
                    Content Strategy
                  </span>
                  <span className="px-3 py-1 bg-pink-50 text-pink-700 text-xs font-semibold rounded-full border border-pink-100">
                    Audience Engagement
                  </span>
                </div>

                {/* Action Button and Hand-drawn Notes */}
                <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <a
                    className="inline-flex items-center justify-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-95 group/btn w-fit"
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Visit Page</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </a>

                  {/* Bottom Right Doodle note */}
                  <div className="font-handwriting text-lg text-gray-700 select-none doodle-wobble cursor-default rotate-2 text-right">
                    <span>
                      Same Policy:<br />More Good Content :)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Bottom Section Divider & Footnote */}
      <div className="pt-12 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200/60">
        <div className="flex items-center gap-2 font-handwriting text-xl text-gray-600 select-none doodle-wobble cursor-default">
          <span className="text-indigo-400">✦</span>
          <span>Ideas</span>
          <span>➔</span>
          <span>Projects</span>
          <span>➔</span>
          <span>Impact</span>
          <span className="text-yellow-500 font-bold">♡</span>
        </div>
        <div className="text-right text-[10px] tracking-widest text-gray-400 font-mono uppercase">
          <div>BUILT TO LEARN.</div>
          <div>BUILT TO MAKE A DIFFERENCE.</div>
        </div>
      </div>
    </section>
  );
}
