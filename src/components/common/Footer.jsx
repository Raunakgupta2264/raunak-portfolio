import React from 'react';
import { Github, Linkedin, ArrowUp, Heart, Code2 } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#02000c] pt-16 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-primary/10 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand & Bio */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-primary-dark to-cyanAccent flex items-center justify-center font-heading font-extrabold text-base text-white shadow-glow-sm">
                RG
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white">
                  {personalInfo.name}
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  {personalInfo.university} • B.Tech CSE '29
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Passionate Computer Science undergraduate focused on high-performance full-stack architectures, machine learning models, and crash-consistent low-level systems.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 hover:border-primary/40 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyanAccent hover:bg-white/10 hover:border-cyanAccent/40 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#about" className="hover:text-primary-light transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#what-i-build" className="hover:text-primary-light transition-colors">
                  Engineering Focus
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary-light transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-primary-light transition-colors">
                  Academic Journey
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-primary-light transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#tech-stack" className="hover:text-primary-light transition-colors">
                  Skills & Tools
                </a>
              </li>
            </ul>
          </div>

          {/* Academic Profile */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
              Academic Record
            </h4>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-slate-400">Current CGPA</div>
                <div className="text-xl font-bold font-heading text-gradient">
                  {personalInfo.cgpa} / 10.0
                </div>
              </div>
              <p className="text-xs text-slate-400 pt-1 leading-relaxed">
                KL Deemed to be University • Bachelor of Technology in Computer Science & Engineering
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span>Built with React, Vite & Tailwind CSS</span>
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
