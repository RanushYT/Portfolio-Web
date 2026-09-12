import { useState, type MouseEvent } from 'react';
import type { ContactChannel } from '../types';

interface ContactSectionProps {
  onOpenMessageModal: () => void;
}

const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: 'email',
    name: 'Email',
    value: 'ranushasa05@gmail.com',
    href: 'mailto:ranushasa05@gmail.com',
    icon: 'mail',
    bgClass: 'bg-purple-100 text-purple-700',
    borderHover: 'hover:border-purple-300',
    textHover: 'group-hover:text-purple-700',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    value: 'linkedin.com/in/ranusha-sathsara',
    href: 'https://linkedin.com/in/ranusha-sathsara',
    icon: 'linkedin',
    bgClass: 'bg-sky-100/70 text-sky-900',
    borderHover: 'hover:border-sky-300',
    textHover: 'group-hover:text-sky-900',
  },
  {
    id: 'github',
    name: 'GitHub',
    value: 'github.com/RanushYT',
    href: 'https://github.com/RanushYT',
    icon: 'github',
    bgClass: 'bg-slate-100 text-gray-900',
    borderHover: 'hover:border-gray-400',
    textHover: 'group-hover:text-black',
  },
  {
    id: 'phone',
    name: 'Phone',
    value: '+94 76 181 0307',
    href: 'tel:+94761810307',
    icon: 'phone',
    bgClass: 'bg-emerald-100/70 text-emerald-800',
    borderHover: 'hover:border-emerald-300',
    textHover: 'group-hover:text-emerald-800',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    value: 'instagram.com/ranush.sa',
    href: 'https://instagram.com/ranush.sa',
    icon: 'instagram',
    bgClass: 'bg-pink-100 text-pink-700',
    borderHover: 'hover:border-pink-300',
    textHover: 'group-hover:text-pink-700',
  },
];

export default function ContactSection({ onOpenMessageModal }: ContactSectionProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string, e: MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section
      id="contact"
      className="pt-8 pb-12 relative scroll-mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
        {/* Left Side: Header, Copy & Smiley Doodle */}
        <div className="lg:col-span-5 space-y-6 relative">
          {/* Doodled Tag at top */}
          <div className="font-handwriting text-2xl text-purple-400 -rotate-6 select-none doodle-wobble cursor-default inline-flex items-center gap-1.5">
            <span>Say Hello!</span>
            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 7l4 2M4 12h5M5 17l4-2" strokeLinecap="round" />
            </svg>
          </div>

          {/* Main Title with highlighter accent under Connect */}
          <div className="relative">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-950 tracking-tight relative inline-block">
              Let's
              <span className="relative inline-block ml-2">
                Connect
                <span className="absolute bottom-1 left-0 w-full h-3.5 bg-yellow-200/90 -z-10 rounded-xs -rotate-1"></span>
              </span>
            </h2>
            <span className="absolute -top-2 left-64 text-purple-400 font-bold text-lg select-none hidden sm:inline-block rotate-12">
              彡
            </span>
          </div>

          {/* Description Text */}
          <div className="space-y-4 text-gray-600 text-base leading-relaxed">
            <p>
              I'm always open to discussing new opportunities, collaborating on interesting projects, or just having a chat about technology, design, or football!
            </p>
            <p className="text-sm sm:text-base text-gray-500">
              Feel free to reach out through any of the channels below.
            </p>
          </div>

          {/* Hand-drawn Doodle Note: Good Conversations Lead to Great Things + Smiley */}
          <div className="pt-6 flex items-center gap-4 font-handwriting text-2xl sm:text-3xl text-gray-800 rotate-[-3deg] select-none doodle-wobble cursor-default">
            <div className="leading-tight">
              <span>Good<br />Conversations<br />Lead to<br />Great Things</span>
              <div className="w-16 h-1 bg-purple-300/80 rounded-full mt-1 -rotate-2"></div>
            </div>

            <div className="relative flex items-center justify-center">
              <span className="absolute -top-3 -right-2 text-purple-400 text-xs select-none">✦</span>
              <div className="w-12 h-12 border-2 border-gray-900 rounded-full flex flex-col items-center justify-center -rotate-6 transition-transform duration-300 hover:rotate-12 bg-white/40 shadow-xs">
                <div className="flex gap-2 mb-1">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                </div>
                <svg className="w-5 h-2.5 text-gray-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 20 10">
                  <path d="M2 2c4 6 12 6 16 0" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: 2-Column Contact Cards, Send Button & Doodles */}
        <div className="lg:col-span-7 space-y-6 relative pt-4 lg:pt-0">
          {/* 2-Column Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            {CONTACT_CHANNELS.map((channel) => (
              <div
                key={channel.id}
                className={`relative flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white border border-gray-200/80 shadow-xs transition-all duration-300 group ${channel.borderHover} hover:shadow-md hover:-translate-y-0.5`}
              >
                <a
                  href={channel.href}
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                  rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3.5 overflow-hidden flex-1"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform ${channel.bgClass}`}>
                    {channel.icon === 'mail' && (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect height="14" rx="2" width="18" x="3" y="5" />
                        <path d="M3 7l9 6 9-6" />
                      </svg>
                    )}
                    {channel.icon === 'linkedin' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                    )}
                    {channel.icon === 'github' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd" />
                      </svg>
                    )}
                    {channel.icon === 'phone' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {channel.icon === 'instagram' && (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    )}
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-sm font-bold text-gray-950 block leading-tight">
                      {channel.name}
                    </span>
                    <span className={`text-xs text-gray-500 font-normal truncate block mt-0.5 transition-colors ${channel.textHover}`}>
                      {channel.value}
                    </span>
                  </div>
                </a>

                {/* Copy helper button */}
                <div className="flex items-center gap-1 shrink-0 ml-2">
                  <button
                    type="button"
                    title={`Copy ${channel.name}`}
                    onClick={(e) => handleCopy(channel.id, channel.value, e)}
                    className="p-1 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    {copiedId === channel.id ? (
                      <span className="text-[10px] font-bold text-emerald-600">Copied!</span>
                    ) : (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect height="13" rx="2" width="13" x="9" y="9" />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                    )}
                  </button>
                  <a
                    href={channel.href}
                    target={channel.href.startsWith('http') ? '_blank' : undefined}
                    rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-1"
                  >
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Send a Message CTA Button & Lower Right Doodle */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6 relative">
            <button
              type="button"
              onClick={onOpenMessageModal}
              className="inline-flex items-center justify-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white font-medium px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-95 group cursor-pointer"
            >
              <span>Send a Message</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Lower Right Doodle: Reach out anytime + curved arrow */}
            <div className="font-handwriting text-xl text-purple-400 select-none doodle-wobble cursor-default flex items-center gap-2 rotate-[-6deg] ml-auto pr-6 hidden md:flex">
              <svg className="w-8 h-8 text-purple-400 -rotate-12" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M4 18 C 8 10, 14 6, 20 6 M15 3 L20 6 L16 11" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="leading-tight">Reach out<br />anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
