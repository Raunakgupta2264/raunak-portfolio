import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle, Code2, Layers, Cpu } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md">
        {/* Backdrop click dismiss */}
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#090422] border border-primary/30 p-6 sm:p-8 shadow-2xl card-glass"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="badge-primary text-xs">
                  {project.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {project.category}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                {project.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Technical Overview
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Architecture Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <h4 className="text-xs font-mono uppercase tracking-wider text-primary-light mb-3">
                  Architecture & Implementation Highlights
                </h4>
                <ul className="space-y-2.5">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyanAccent shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono text-slate-200 bg-primary/10 border border-primary/25"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <Github className="w-4 h-4" />
                <span>View Repository on GitHub</span>
              </a>

              <button
                onClick={onClose}
                className="btn-secondary text-xs"
              >
                Close Window
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
