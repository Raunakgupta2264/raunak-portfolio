import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, FileText, Send, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import OrbitalDisplay from './OrbitalDisplay';
import StatPills from './StatPills';

export default function Hero({ onOpenResume }) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & Profile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-6 w-fit backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Main Greeting and Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-white leading-[1.08] mb-4">
              Hi, I'm{' '}
              <span className="text-gradient block sm:inline">
                {personalInfo.name}
              </span>
            </h1>

            {/* University & Degree Subheading */}
            <p className="text-lg sm:text-xl font-heading font-semibold text-slate-300 mb-4 flex items-center gap-2">
              <span className="text-cyanAccent">{personalInfo.degree}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">{personalInfo.university}</span>
            </p>

            {/* Bio summary */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              Passionate developer specializing in <span className="text-slate-200 font-medium">full-stack web architecture</span>, <span className="text-slate-200 font-medium">machine learning systems</span>, and <span className="text-slate-200 font-medium">crash-consistent low-level engineering</span>. Maintaining an academic excellence record with a <span className="text-primary-light font-semibold">9.49 CGPA</span>.
            </p>

            {/* Call to Actions & Social Links */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-2">
              <a
                href="#projects"
                className="btn-primary group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="btn-secondary group"
              >
                <Send className="w-4 h-4 text-cyanAccent" />
                <span>Get In Touch</span>
              </a>

              <button
                onClick={onOpenResume}
                className="btn-secondary group"
                aria-label="View Resume Modal"
              >
                <FileText className="w-4 h-4 text-primary-light" />
                <span>Resume</span>
              </button>

              {/* Social icons */}
              <div className="flex items-center gap-2 sm:ml-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200 shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyanAccent hover:bg-white/10 hover:border-cyanAccent/40 transition-all duration-200 shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Orbital Interactive Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <OrbitalDisplay />
          </motion.div>
        </div>

        {/* Bottom Stat Strip */}
        <StatPills />
      </div>
    </section>
  );
}
