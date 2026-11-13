import React, { useState } from 'react';
import MeshBackground from './components/common/MeshBackground';
import CustomCursor from './components/common/CustomCursor';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

import Hero from './components/hero/Hero';
import TechMarquee from './components/sections/TechMarquee';
import About from './components/sections/About';
import WhatIBuild from './components/sections/WhatIBuild';
import Projects from './components/sections/Projects';
import Journey from './components/sections/Journey';
import Certifications from './components/sections/Certifications';
import TechStack from './components/sections/TechStack';
import Contact from './components/sections/Contact';

import TerminalWidget from './components/interactive/TerminalWidget';
import ProjectModal from './components/interactive/ProjectModal';
import ResumeModal from './components/interactive/ResumeModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-primary-soft selection:text-primary-light">
      {/* Background Animated Blobs */}
      <MeshBackground />

      {/* Trailing Custom Cursor */}
      <CustomCursor />

      {/* Floating Pill Navigation */}
      <Navbar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <TechMarquee />
        <About />
        <WhatIBuild />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Journey />
        <Certifications />
        <TechStack />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Terminal Widget (Floating bottom-right button & drawer) */}
      <TerminalWidget
        isOpen={isTerminalOpen}
        onOpen={() => setIsTerminalOpen(true)}
        onClose={() => setIsTerminalOpen(false)}
      />

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Resume Viewer & Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
