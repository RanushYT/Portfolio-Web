import { useEffect, useState, useRef } from 'react';

const SECTION_TEXTS: Record<string, string> = {
  home: 'Hello 👋',
  about: 'About Me 🚀',
  works: 'What I Do ⚡',
  projects: 'Projects 💡',
  skills: 'Skills 🛠️',
  contact: 'Say Hi! ✉️',
};

export default function CursorFollower() {
  const pillRef = useRef<HTMLDivElement | null>(null);
  const pillInnerRef = useRef<HTMLDivElement | null>(null);
  const pillTextRef = useRef<HTMLSpanElement | null>(null);

  const [text, setText] = useState('Hello 👋');
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let currentSection = 'home';
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let targetRotate = 0;
    let currentRotate = 0;
    let insideNav = false;
    let animId: number;

    const changeText = (newText: string) => {
      setText(newText);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      targetX = e.clientX + 22;
      targetY = e.clientY - 24;

      const deltaX = e.clientX - currentX;
      targetRotate = Math.max(Math.min(deltaX * 0.35, 15), -15);

      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (!el) return;

      const hoveredNav = el.closest('header, nav, #navbar-links');
      if (hoveredNav) {
        if (!insideNav) {
          insideNav = true;
          if (pillRef.current) {
            pillRef.current.style.opacity = '0';
          }
        }
        return;
      } else {
        if (insideNav) {
          insideNav = false;
          if (pillRef.current) {
            pillRef.current.style.opacity = '1';
          }
        }
      }

      const clickable = el.closest('a, button, input, textarea, [role="button"]');
      const isClickable = !!clickable;
      setIsHoveringInteractive(isClickable);

      const closestSection = el.closest('section[id]') || el.closest('footer');
      let newSectionKey = currentSection;

      if (closestSection) {
        if (closestSection.tagName.toLowerCase() === 'footer') {
          newSectionKey = 'contact';
        } else {
          const id = closestSection.getAttribute('id');
          if (id && SECTION_TEXTS[id]) {
            newSectionKey = id;
          }
        }
      }

      if (isClickable) {
        changeText('Click ✨');
      } else if (newSectionKey !== currentSection) {
        currentSection = newSectionKey;
        changeText(SECTION_TEXTS[newSectionKey] || 'Hello 👋');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    function loop() {
      const lerp = 0.16;
      currentX += (targetX - currentX) * lerp;
      currentY += (targetY - currentY) * lerp;
      currentRotate += (targetRotate - currentRotate) * 0.12;
      targetRotate *= 0.86;

      if (pillRef.current && !insideNav) {
        pillRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotate(${currentRotate}deg)`;
      }

      animId = requestAnimationFrame(loop);
    }

    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={pillRef}
      id="cursor-follower-pill"
      className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-200 will-change-transform ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transform: 'translate3d(-100px, -100px, 0)' }}
    >
      <div
        ref={pillInnerRef}
        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-white text-xs sm:text-sm font-medium shadow-xl border select-none whitespace-nowrap transition-all duration-200 ${
          isHoveringInteractive
            ? 'bg-[#1e1b4b] border-indigo-400/40 scale-105'
            : 'bg-black/90 backdrop-blur-md border-white/10 scale-100'
        }`}
      >
        <span ref={pillTextRef} className="inline-block transition-all duration-150">
          {text}
        </span>
      </div>
    </div>
  );
}
