import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="card-glass card-shimmer p-6 sm:p-7 flex flex-col justify-between group"
    >
      <div>
        {/* Top Meta: Badge & Category */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="badge-primary text-[10px]">
            {project.badge}
          </span>
          <span className="text-[11px] font-mono text-slate-400">
            {project.category}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-3 group-hover:text-primary-light transition-colors line-clamp-2">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>
      </div>

      <div>
        {/* Technology Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-white/5 border border-white/10 group-hover:border-primary/20 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 rounded-md text-[11px] font-mono text-slate-500 bg-white/5 border border-white/10">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Actions bar with separate GitHub & Live Demo links */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2.5">
          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold font-heading text-primary-light hover:text-white transition-colors group/btn py-1"
          >
            <span>Deep Dive</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </button>

          <div className="flex items-center gap-2">
            {/* Live Demo Button - only rendered if verified deployment URL exists */}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary to-cyanAccent text-white text-xs font-semibold hover:shadow-glow-cyan hover:scale-105 transition-all duration-200 shadow-sm"
                title="Open Live Deployment"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}

            {/* GitHub Source Button */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all duration-200 text-xs font-medium"
                title="View Repository on GitHub"
                aria-label={`GitHub Repository for ${project.title}`}
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
