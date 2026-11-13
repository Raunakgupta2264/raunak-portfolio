import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { techStackCategories } from '../../data/portfolioData';
import { Code2, Layout, Server, Database, Brain, Cpu, Wrench } from 'lucide-react';

const categoryIcons = {
  'Programming Languages': Code2,
  Frontend: Layout,
  Backend: Server,
  Databases: Database,
  'AI & Machine Learning': Brain,
  Systems: Cpu,
  Tools: Wrench,
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="// 06. TECHNICAL EXPERTISE"
          title="Skills & Technologies"
          subtitle="A comprehensive toolkit developed through hands-on full-stack development, artificial intelligence systems, and crash-consistent low-level engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {techStackCategories.map((category, index) => {
            const Icon = categoryIcons[category.name] || Code2;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="card-glass p-6 sm:p-7 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-primary-light group-hover:text-cyanAccent transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-primary-light transition-colors">
                        {category.name}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {category.skills.length} Technologies
                      </span>
                    </div>
                  </div>

                  {/* Clean Technology Badge Pills (Without arbitrary rating labels) */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium text-slate-300 bg-white/[0.04] border border-white/10 hover:border-primary/40 hover:bg-white/[0.08] hover:text-white transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
