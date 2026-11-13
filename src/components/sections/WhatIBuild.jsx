import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { whatIBuild } from '../../data/portfolioData';
import { Code, Brain, Server, Check, ArrowRight } from 'lucide-react';

const iconMap = {
  code: Code,
  brain: Brain,
  server: Server,
};

export default function WhatIBuild() {
  return (
    <section id="what-i-build" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="// 02. CORE PILLARS"
          title="What I Build & Engineer"
          subtitle="Three core domains forming the foundation of my technical projects and software engineering journey."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {whatIBuild.map((item, index) => {
            const Icon = iconMap[item.icon] || Code;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="card-glass card-shimmer p-7 sm:p-8 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-cyanAccent/10 border border-primary/30 flex items-center justify-center mb-6 shadow-glow-sm group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary-light group-hover:text-cyanAccent transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-primary-light transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-6 border-t border-white/10">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-3 block">
                    Key Capabilities
                  </span>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyanAccent shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
