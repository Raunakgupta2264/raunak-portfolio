import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/portfolioData';

const categories = ['All', 'AI & Machine Learning', 'Systems & Core', 'Full-Stack Web'];

export default function Projects({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => {
        if (activeCategory === 'Full-Stack Web') {
          return p.category === 'Full-Stack Web' || p.category === 'Generative AI';
        }
        return p.category === activeCategory;
      });

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="// 03. FEATURED WORK"
          title="Major Engineering Projects"
          subtitle="Production-focused architectures and algorithmic systems spanning cybersecurity, crash-resilient filesystems, machine learning, and full-stack platforms."
        />

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 relative ${
                  isActive
                    ? 'text-white bg-primary shadow-glow-sm'
                    : 'text-slate-400 hover:text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={onSelectProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
