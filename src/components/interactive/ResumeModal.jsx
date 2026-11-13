import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, Printer, Award, GraduationCap, Code2, Briefcase } from 'lucide-react';
import { personalInfo, projects, certifications, technicalInterests, techStackCategories } from '../../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    // Direct download link or prompt
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = `Raunak_Gupta_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 w-full max-w-4xl h-[90vh] rounded-3xl bg-[#090422] border border-primary/30 shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header Bar */}
          <div className="px-6 py-4 bg-white/[0.04] border-b border-white/10 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg sm:text-xl font-heading font-bold text-white">
                Curriculum Vitae — {personalInfo.name}
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                {personalInfo.degree} • {personalInfo.university}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                className="btn-primary py-2 px-4 text-xs font-mono"
                title="Download PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </button>

              <button
                onClick={handlePrint}
                className="hidden sm:inline-flex p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                title="Print Resume"
              >
                <Printer className="w-4 h-4" />
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable / Clean Resume Preview Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-[#070319] text-slate-200 space-y-8 font-sans">
            {/* Top Contact Header */}
            <div className="border-b border-white/10 pb-6">
              <h1 className="text-3xl font-heading font-extrabold text-white mb-1">
                {personalInfo.name}
              </h1>
              <p className="text-sm text-cyanAccent font-mono mb-3">
                {personalInfo.role} • B.Tech CSE (Class of {personalInfo.graduation})
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-slate-400 font-mono">
                <span>Email: {personalInfo.email}</span>
                <span>•</span>
                <span>GitHub: github.com/raunakgupta2264</span>
                <span>•</span>
                <span>LinkedIn: linkedin.com/in/raunakgupta-devmode</span>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-primary-light mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </h3>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="font-heading font-bold text-white text-base">
                    {personalInfo.university}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {personalInfo.degree}
                  </p>
                </div>
                <div className="sm:text-right font-mono text-xs">
                  <div className="text-cyanAccent font-semibold">9.49 CGPA</div>
                  <div className="text-slate-500">Graduation: {personalInfo.graduation}</div>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-primary-light mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                <span>Technical Skills</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {techStackCategories.map(cat => (
                  <div key={cat.name} className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                    <span className="font-mono text-slate-400 block mb-1">{cat.name}:</span>
                    <span className="text-slate-200">{cat.skills.join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Major Projects */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-primary-light mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>Major Projects</span>
              </h3>
              <div className="space-y-4">
                {projects.map(proj => (
                  <div key={proj.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <h4 className="font-heading font-bold text-white text-sm sm:text-base">
                        {proj.title}
                      </h4>
                      <span className="text-[11px] font-mono text-cyanAccent">{proj.category}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed mb-2">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.technologies.map(t => (
                        <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Certifications */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-primary-light mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Verified Certifications</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {certifications.map(cert => (
                  <div key={cert.id} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                    <h5 className="font-semibold text-white mb-0.5">{cert.title}</h5>
                    <p className="text-[11px] font-mono text-primary-light">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
