import { useState, type FormEvent } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DESTINATION_EMAIL = 'ranushasa05@gmail.com';

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('AI Automation');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const mailSubject = `[Portfolio Inquiry] ${topic} - from ${name || 'Website Visitor'}`;
  const mailBody = `Hi Ranusha,\n\nName: ${name}\nEmail: ${email}\nTopic: ${topic}\n\nMessage:\n${message}\n\n---\nSent via Ranusha's Portfolio Website to ${DESTINATION_EMAIL}`;

  const mailtoUrl = `mailto:${DESTINATION_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${DESTINATION_EMAIL}&su=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Automatically trigger mailto link to route directly to ranushasa05@gmail.com
    try {
      const link = document.createElement('a');
      link.href = mailtoUrl;
      link.click();
    } catch {
      window.location.href = mailtoUrl;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleCopyBody = () => {
    navigator.clipboard.writeText(`To: ${DESTINATION_EMAIL}\nSubject: ${mailSubject}\n\n${mailBody}`);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitted(false);
    setIsCopied(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-gray-200 shadow-2xl p-6 sm:p-8 relative space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {isSubmitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl shadow-inner">
              ✓
            </div>

            <div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Routed to {DESTINATION_EMAIL}
              </span>
              <h3 className="text-2xl font-bold text-gray-950 mt-2">Message Ready &amp; Routed!</h3>
              <p className="text-sm text-gray-600 max-w-sm mx-auto mt-1 leading-relaxed">
                Your message has been addressed to <strong className="text-gray-900 font-semibold">{DESTINATION_EMAIL}</strong>. Your mail app was opened with everything pre-filled.
              </p>
            </div>

            {/* Quick action buttons */}
            <div className="bg-gray-50 border border-gray-200/80 rounded-2xl p-4 text-left space-y-3 max-w-md mx-auto">
              <div className="text-[11px] font-bold text-gray-700 uppercase tracking-wider">
                Select your preferred way to send:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href={gmailWebUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-xs"
                >
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                  </svg>
                  <span>Open in Gmail Web</span>
                </a>

                <a
                  href={mailtoUrl}
                  className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-xs"
                >
                  <span>Default Mail App</span>
                </a>
              </div>

              <button
                type="button"
                onClick={handleCopyBody}
                className="w-full text-center text-xs font-medium text-gray-600 hover:text-gray-900 py-1 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {isCopied ? (
                  <span className="text-emerald-600 font-bold">✓ Copied text to clipboard!</span>
                ) : (
                  <span>📋 Or copy text to paste manually</span>
                )}
              </button>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold px-6 py-2 rounded-full transition-all cursor-pointer"
              >
                Done / Close
              </button>
            </div>
          </div>
        ) : (
          <>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-purple-600 uppercase tracking-widest block">
                  Say Hello!
                </span>
                <span className="text-[11px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-100">
                  To: {DESTINATION_EMAIL}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-950">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Have an idea, project, or question? Submitting will automatically route your email to <strong className="text-gray-800 font-semibold">{DESTINATION_EMAIL}</strong>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1" htmlFor="sender-name">
                  Your Name
                </label>
                <input
                  id="sender-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Rivera"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1" htmlFor="sender-email">
                  Your Email
                </label>
                <input
                  id="sender-email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Topic of Interest
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    'AI Automation',
                    'Full-Stack Project',
                    'Content & Video',
                    'University Chat',
                    'Other',
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setTopic(item)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                        topic === item
                          ? 'bg-zinc-900 text-white shadow-xs'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1" htmlFor="sender-msg">
                  Message
                </label>
                <textarea
                  id="sender-msg"
                  required
                  rows={4}
                  placeholder="Tell me about your idea or question..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-[11px] text-gray-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Routes directly to: <strong>{DESTINATION_EMAIL}</strong></span>
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 bg-zinc-950 hover:bg-zinc-800 disabled:bg-gray-400 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <span>Routing email...</span>
                  ) : (
                    <>
                      <span>Send to {DESTINATION_EMAIL}</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
