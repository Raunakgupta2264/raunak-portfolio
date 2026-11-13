import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { educationTimeline, personalInfo } from '../../data/portfolioData';
import { GraduationCap, BookOpen, Award, CheckCircle2 } from 'lucide-react';

export default function Journey() {
  return (
    <section id="journey" className="py-20 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="// 04. ACADEMIC ROADMAP"
          title="Educational Journey & Milestones"
          subtitle="Continuous commitment to computational excellence, theoretical depth, and specialized coursework."
        />

        <div className="relative border-l border-primary/30 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {educationTimeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-cosmic-950 border-2 border-primary group-hover:border-cyanAccent shadow-glow-sm transition-colors duration-300 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-light" />
              </div>

              {/* Timeline Card */}
              <div className="card-glass p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-cyanAccent bg-cyanAccent/10 border border-cyanAccent/20">
                    {item.year}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-heading font-semibold text-primary-light bg-primary/10 border border-primary/20">
                    {item.score}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-1">
                  {item.title}
                </h3>

                <p className="text-sm font-medium text-slate-300 mb-3 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-primary-light" />
                  <span>{item.institution}</span>
                </p>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
