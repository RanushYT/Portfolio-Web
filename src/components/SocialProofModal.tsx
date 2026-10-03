import { useState, useEffect } from 'react';

interface SocialProofModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SocialProofModal({ isOpen, onClose }: SocialProofModalProps) {
  const [activeTab, setActiveTab] = useState<'views' | 'engagement' | 'messaging' | 'playbook'>('views');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="proof-modal-title"
      className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-zinc-950 text-gray-100 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-zinc-800 shadow-2xl p-5 sm:p-8 relative space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-zinc-800 hover:bg-zinc-700 text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Header Section */}
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600/20 text-blue-400 border border-blue-500/30">
              VERIFIED META INSIGHTS
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              Sep 5 – Oct 2 (28 Days)
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/20 text-pink-400 border border-pink-500/30">
              2 Videos / Day Consistency
            </span>
          </div>

          <h2 id="proof-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Facebook Growth Case Study: 61,687,682 Views &amp; 225K+ Followers
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2 leading-relaxed max-w-3xl">
            Real analytics from Meta Creator Studio showing explosive organic growth generated through high-retention engaging content and strict posting consistency of <strong className="text-white font-semibold">2 videos every single day for 28 straight days</strong>.
          </p>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4">
            <div className="text-gray-400 text-[11px] uppercase font-mono tracking-wider">Total Views</div>
            <div className="text-2xl sm:text-3xl font-black text-white mt-1">61.68M</div>
            <div className="text-[10px] text-emerald-400 font-medium mt-0.5">+1,542,191% vs prev</div>
          </div>

          <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4">
            <div className="text-gray-400 text-[11px] uppercase font-mono tracking-wider">Unique Viewers</div>
            <div className="text-2xl sm:text-3xl font-black text-blue-400 mt-1">32.72M</div>
            <div className="text-[10px] text-gray-400 font-medium mt-0.5">32,723,376 people</div>
          </div>

          <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4">
            <div className="text-gray-400 text-[11px] uppercase font-mono tracking-wider">Total Engagement</div>
            <div className="text-2xl sm:text-3xl font-black text-pink-400 mt-1">780,881</div>
            <div className="text-[10px] text-gray-400 font-medium mt-0.5">542K+ Reactions • 32K Shares</div>
          </div>

          <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4">
            <div className="text-gray-400 text-[11px] uppercase font-mono tracking-wider">Posting Cadence</div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400 mt-1">2 / Day</div>
            <div className="text-[10px] text-amber-300/80 font-medium mt-0.5">28 Days Consistency</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-zinc-800 pb-3">
          <button
            type="button"
            onClick={() => setActiveTab('views')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'views'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-zinc-900 text-gray-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            📊 Views &amp; Viewers (61.6M)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('engagement')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'engagement'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-zinc-900 text-gray-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            💬 Engagement (780K)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('messaging')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'messaging'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-zinc-900 text-gray-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            ✉️ Inbound Messages (2,640)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('playbook')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'playbook'
                ? 'bg-pink-600 text-white shadow-md'
                : 'bg-zinc-900 text-gray-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            💡 My Execution Strategy
          </button>
        </div>

        {/* TAB 1: Views Dashboard Replica (Screenshot 1) */}
        {activeTab === 'views' && (
          <div className="bg-[#18191a] border border-zinc-800 rounded-2xl p-5 sm:p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-4">
              <div>
                <span className="text-xs font-mono text-gray-400 bg-zinc-800 px-2.5 py-1 rounded-md">
                  Last 28 days: Sep 5 - Oct 2
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  61,687,682 Views
                </div>
                <div className="text-xs text-emerald-400 font-mono mt-0.5">
                  +1,542,191,950.0% from previous 28 days
                </div>
              </div>

              <div className="flex items-center gap-2 bg-zinc-800/80 px-3 py-1.5 rounded-full text-xs font-medium text-gray-300">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
                <span>Publishing activity: <strong>2 Videos / Day</strong></span>
              </div>
            </div>

            {/* Simulated Chart Container */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-gray-400 font-mono">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-0.5 bg-blue-500 inline-block"></span>
                    <span>Daily Views</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-0.5 bg-pink-500 inline-block"></span>
                    <span>Publishing Activity (2/day)</span>
                  </span>
                </div>
                <span className="text-pink-400 font-semibold">Peak Day: 3,571,081 Views / 2 Videos</span>
              </div>

              {/* Chart SVG */}
              <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/80 relative">
                <svg className="w-full h-36" viewBox="0 0 500 130" fill="none">
                  {/* Grid lines */}
                  <line x1="0" y1="20" x2="500" y2="20" stroke="#27272a" strokeDasharray="3 3" />
                  <line x1="0" y1="65" x2="500" y2="65" stroke="#27272a" strokeDasharray="3 3" />
                  <line x1="0" y1="110" x2="500" y2="110" stroke="#27272a" />

                  {/* Views Area & Line (Blue) */}
                  <path
                    d="M 10 110 L 80 110 L 120 90 L 150 102 L 180 15 L 210 50 L 250 100 L 320 95 L 380 75 L 430 85 L 470 105 L 490 108"
                    stroke="#1877f2"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 10 110 L 80 110 L 120 90 L 150 102 L 180 15 L 210 50 L 250 100 L 320 95 L 380 75 L 430 85 L 470 105 L 490 108 L 490 110 L 10 110 Z"
                    fill="rgba(24, 119, 242, 0.12)"
                  />

                  {/* Publishing Cadence Line (Pink - steady 2 per day with spikes) */}
                  <path
                    d="M 10 110 L 80 110 L 100 25 L 120 85 L 140 60 L 160 70 L 180 70 L 200 90 L 220 90 L 240 70 L 260 90 L 280 70 L 300 70 L 320 90 L 340 70 L 360 70 L 380 85 L 400 70 L 420 35 L 440 85 L 460 70 L 480 70 L 495 90"
                    stroke="#ec4899"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  {/* Highlight Tooltip Pin at Sep 26 */}
                  <circle cx="380" cy="75" r="4" fill="#1877f2" stroke="white" strokeWidth="2" />
                  <circle cx="380" cy="85" r="4" fill="#ec4899" stroke="white" strokeWidth="2" />
                </svg>

                <div className="flex justify-between text-[11px] font-mono text-gray-500 mt-2">
                  <span>Sep 5</span>
                  <span>Sep 10</span>
                  <span>Sep 15</span>
                  <span>Sep 20</span>
                  <span>Sep 25</span>
                  <span>Sep 30</span>
                </div>
              </div>
            </div>

            {/* Bottom 3 Detailed Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                <div className="text-gray-400 text-xs flex items-center gap-1.5">
                  <span>👤</span>
                  <span>Viewers (Unique Reach)</span>
                </div>
                <div className="text-2xl font-bold text-white mt-1">32,723,376</div>
                <div className="text-[11px] text-gray-500 mt-0.5">Individual Facebook Users</div>
              </div>

              <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                <div className="text-gray-400 text-xs flex items-center gap-1.5">
                  <span>▶</span>
                  <span>3-second views</span>
                </div>
                <div className="text-2xl font-bold text-emerald-400 mt-1">22,261,352</div>
                <div className="text-[11px] text-gray-500 mt-0.5">High hook conversion rate</div>
              </div>

              <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                <div className="text-gray-400 text-xs flex items-center gap-1.5">
                  <span>⏱</span>
                  <span>1-minute views</span>
                </div>
                <div className="text-2xl font-bold text-zinc-400 mt-1">0</div>
                <div className="text-[11px] text-pink-400 font-medium mt-0.5">100% Short-Form Reels Strategy</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Engagement Overview Replica (Screenshot 2) */}
        {activeTab === 'engagement' && (
          <div className="bg-[#18191a] border border-zinc-800 rounded-2xl p-5 sm:p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-4">
              <div>
                <span className="text-xs font-mono text-gray-400 bg-zinc-800 px-2.5 py-1 rounded-md">
                  Last 28 days: Sep 5 - Oct 2
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  780,881 Engagement
                </div>
                <div className="text-xs text-emerald-400 font-mono mt-0.5">
                  +100.0% from previous 28 days
                </div>
              </div>

              <div className="bg-zinc-800/80 px-3 py-1.5 rounded-full text-xs font-medium text-emerald-400">
                ✓ 100% Organic Non-Paid Audience
              </div>
            </div>

            {/* Engagement 3 Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                <div className="text-gray-400 text-xs flex items-center gap-1.5">
                  <span>👍</span>
                  <span>Reactions</span>
                </div>
                <div className="text-2xl font-bold text-white mt-1">542,695</div>
                <div className="text-[11px] text-gray-400 mt-0.5">Likes, Loves &amp; Laughs</div>
              </div>

              <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                <div className="text-gray-400 text-xs flex items-center gap-1.5">
                  <span>💬</span>
                  <span>Comments</span>
                </div>
                <div className="text-2xl font-bold text-blue-400 mt-1">6,448</div>
                <div className="text-[11px] text-gray-400 mt-0.5">Discussions &amp; Community replies</div>
              </div>

              <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                <div className="text-gray-400 text-xs flex items-center gap-1.5">
                  <span>↗</span>
                  <span>Shares</span>
                </div>
                <div className="text-2xl font-bold text-pink-400 mt-1">32,251</div>
                <div className="text-[11px] text-pink-300/80 mt-0.5">Direct peer-to-peer virality</div>
              </div>
            </div>

            {/* Content Type Breakdown */}
            <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/80 space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold text-gray-300">
                <span>By Content Type</span>
                <span className="text-blue-400 font-mono">Reel: 100%</span>
              </div>
              <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full w-full rounded-full"></div>
              </div>
              <p className="text-[11px] text-gray-400 pt-1">
                All 56 pieces of content published over the 28 days were vertical short-form Reels, capturing 100% of Facebook's algorithmic recommendation distribution.
              </p>
            </div>
          </div>
        )}

        {/* TAB 3: Messaging Conversations (Screenshot 3) */}
        {activeTab === 'messaging' && (
          <div className="bg-[#18191a] border border-zinc-800 rounded-2xl p-5 sm:p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-4">
              <div>
                <span className="text-xs font-mono text-gray-400 bg-zinc-800 px-2.5 py-1 rounded-md">
                  Last 28 days: Sep 5 - Oct 2
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  2,640 Messaging conversations started
                </div>
                <div className="text-xs text-emerald-400 font-mono mt-0.5">
                  +100.0% from previous 28 days
                </div>
              </div>

              <div className="bg-zinc-800/80 px-3 py-1.5 rounded-full text-xs font-medium text-blue-400">
                ✉️ Direct Community Inbound
              </div>
            </div>

            {/* Messaging Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                <div className="text-gray-400 text-xs">Messaging Contacts</div>
                <div className="text-2xl font-bold text-white mt-1">2,616</div>
                <div className="text-[11px] text-gray-500 mt-0.5">Unique individuals</div>
              </div>

              <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                <div className="text-gray-400 text-xs">New Contacts</div>
                <div className="text-2xl font-bold text-emerald-400 mt-1">2,640</div>
                <div className="text-[11px] text-gray-500 mt-0.5">100% brand new audience</div>
              </div>

              <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                <div className="text-gray-400 text-xs">Returning Contacts</div>
                <div className="text-2xl font-bold text-gray-400 mt-1">0</div>
                <div className="text-[11px] text-gray-500 mt-0.5">Fresh inbound growth</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/40 text-xs text-blue-300 leading-relaxed">
              <strong>Massive Audience Direct Connection:</strong> Over 2,640 prospective fans and viewers directly initiated conversations with the page inbox through viral CTA overlays in Reels during the 28-day campaign.
            </div>
          </div>
        )}

        {/* TAB 4: My Execution Strategy */}
        {activeTab === 'playbook' && (
          <div className="space-y-4">
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-5 sm:p-6 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-pink-500"></span>
                The 2 Core Pillars Behind 61.6M+ Views in 28 Days
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="bg-zinc-950 p-4 rounded-xl border border-pink-900/40">
                  <div className="text-pink-400 font-bold text-sm mb-1">
                    1. Relentless Posting Consistency: 2 Videos / Day
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Maintained an unbroken posting rhythm of <strong>exactly 2 videos every single day for 28 consecutive days</strong> (56 videos in total). This daily cadence trained the Meta algorithm to expect and reward steady viewer retention signals without audience fatigue.
                  </p>
                </div>

                <div className="bg-zinc-950 p-4 rounded-xl border border-blue-900/40">
                  <div className="text-blue-400 font-bold text-sm mb-1">
                    2. High-Retention Engaging Content Engineering
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Crafted rapid 3-second visual hooks that eliminated viewer drop-off (producing <strong>22.2M+ 3-second views</strong>), combined with fast-paced loop transitions that prompted re-watches and drove <strong>32,251 shares</strong>.
                  </p>
                </div>
              </div>

              {/* Strategic takeaways list */}
              <div className="space-y-2 pt-2 text-xs text-gray-300">
                <div className="flex items-start gap-2 bg-zinc-950/70 p-3 rounded-xl border border-zinc-800/80">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>Zero Paid Ad Spend ($0):</strong> 100% organic recommendation via Reels feed distribution.</span>
                </div>
                <div className="flex items-start gap-2 bg-zinc-950/70 p-3 rounded-xl border border-zinc-800/80">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>32,723,376 Viewers Reached:</strong> Over 32 million unique people watched the content.</span>
                </div>
                <div className="flex items-start gap-2 bg-zinc-950/70 p-3 rounded-xl border border-zinc-800/80">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>780,881 Engagements:</strong> Deep community interaction proving audience resonance, not just passive scrolling.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-zinc-800">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-full transition-all text-sm shadow-md"
          >
            <span>Visit Facebook Page</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-gray-200 font-medium text-sm transition-colors cursor-pointer"
          >
            Close Breakdown
          </button>
        </div>
      </div>
    </div>
  );
}
