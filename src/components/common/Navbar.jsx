import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, FileText, Send, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'What I Build', href: '#what-i-build' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Skills', href: '#tech-stack' },
];

export default function Navbar({ onOpenTerminal, onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-2xl bg-[#030014]/85 border-surface-border shadow-2xl py-2.5'
            : 'backdrop-blur-xl bg-surface-glass border-surface-border py-3 shadow-lg'
        } border rounded-full px-4 md:px-6`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, '#')}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary via-primary-dark to-cyanAccent flex items-center justify-center font-heading font-extrabold text-sm md:text-base text-white shadow-glow-sm group-hover:scale-105 transition-transform duration-300">
              RG
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-heading font-bold text-sm text-slate-100 group-hover:text-primary-light transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider">
                CSE • KL UNIVERSITY
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-primary/20 border border-primary/40 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Terminal CLI Trigger */}
            <button
              onClick={onOpenTerminal}
              title="Open Developer Terminal"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-slate-300 bg-white/5 hover:bg-white/10 hover:text-cyanAccent border border-white/10 rounded-full transition-all duration-200 hover:border-cyanAccent/40"
            >
              <Terminal className="w-3.5 h-3.5 text-cyanAccent" />
              <span>CLI</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-200 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 rounded-full transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5 text-primary-light" />
              <span className="hidden xs:inline">Resume</span>
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-heading font-semibold text-white bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary rounded-full shadow-glow-sm hover:shadow-glow-md transition-all duration-200"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-4 right-4 z-40 p-6 rounded-3xl bg-[#07031e]/95 backdrop-blur-2xl border border-surface-border shadow-2xl lg:hidden flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1 border-b border-white/10 pb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="w-full py-2.5 px-4 rounded-xl text-sm font-mono text-cyanAccent bg-cyanAccent/10 border border-cyanAccent/20 flex items-center justify-center gap-2"
              >
                <Terminal className="w-4 h-4" />
                <span>Open Terminal CLI</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 px-4 rounded-xl text-sm font-medium text-slate-200 bg-white/5 border border-white/10 flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-primary-light" />
                <span>View & Download Resume</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center gap-2 shadow-glow-sm"
              >
                <Send className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
