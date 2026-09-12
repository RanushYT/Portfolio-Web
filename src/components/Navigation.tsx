import { useEffect, useState, type MouseEvent } from 'react';
import type { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Works', href: '#works' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 140;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="site-header"
      className="w-full pt-6 pb-4 px-4 sm:px-8 max-w-6xl mx-auto relative flex items-center justify-center sticky top-0 z-50 backdrop-blur-[3px]"
    >
      {/* Center Floating Pill Menu */}
      <nav
        id="navbar-links"
        aria-label="Main Navigation"
        className="flex items-center bg-white/95 backdrop-blur-md px-2 sm:px-3 py-1.5 rounded-full border border-gray-200/80 shadow-sm text-xs sm:text-sm font-medium text-gray-600 gap-0.5 sm:gap-1 transition-shadow duration-200 hover:shadow-md max-w-full overflow-x-auto"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`nav-link px-3 sm:px-4 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${
                isActive
                  ? 'bg-slate-100 text-gray-900 font-semibold shadow-xs scale-100'
                  : 'text-gray-600 hover:text-black hover:bg-slate-100 hover:scale-105'
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
