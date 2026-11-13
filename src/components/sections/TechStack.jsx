import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { techStackCategories } from '../../data/portfolioData';
import { Code2, Layout, Brain, Cpu, Wrench } from 'lucide-react';

const categoryIcons = {
  Languages: Code2,
  'Frontend & Web': Layout,
  'AI & Machine Learning': Brain,
  'Systems & Core': Cpu,
  'Tools & Environments': Wrench,
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="// 06. TOOLKIT & PROFICIENCY"
          title="Technical Skills & Technologies"
          subtitle="Proficiency across programming languages, systems engineering, machine learning frameworks, and modern web tooling."
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-glass p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-white">
                        {category.name}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {category.skills.length} Technologies
                      </span>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-primary/30 transition-colors"
                      >
                        <span className="text-sm font-medium text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-mono text-primary-light px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                          {skill.level}
                        </span>
                      </div>
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
