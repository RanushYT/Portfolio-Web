import { useState } from 'react';
import GuitarStringCanvas from './components/GuitarStringCanvas';
import CursorFollower from './components/CursorFollower';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import RibbonSection from './components/RibbonSection';
import AboutSection from './components/AboutSection';
import WhatIDoSection from './components/WhatIDoSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ContactModal from './components/ContactModal';
import type { ProjectItem } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen font-sans text-gray-800 antialiased selection:bg-yellow-200 selection:text-black">
      {/* 1. Liquid Interactive Grid Canvas (Guitar String Harmonics) */}
      <GuitarStringCanvas />

      {/* 2. Dynamic Global Cursor Follower Pill */}
      <CursorFollower />

      {/* 3. Main Content Container (z-10 above canvas) */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top Navigation */}
        <Navigation />

        {/* Main Content Sections */}
        <main className="max-w-6xl mx-auto px-4 sm:px-8 space-y-6 pb-8 flex-1 w-full">
          <HeroSection onConnectClick={() => setIsContactModalOpen(true)} />
          <RibbonSection />
          <AboutSection />
          <WhatIDoSection />
          <ProjectsSection onOpenProjectModal={(project) => setSelectedProject(project)} />
          <SkillsSection />
          <ContactSection onOpenMessageModal={() => setIsContactModalOpen(true)} />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
