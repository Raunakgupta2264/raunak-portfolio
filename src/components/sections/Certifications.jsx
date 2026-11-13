import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { certifications } from '../../data/portfolioData';
import { Award, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="// 05. CREDENTIALS"
          title="Verified Specializations & Certifications"
          subtitle="Rigorous academic certifications across Machine Learning, Operating Systems, Linear Algebra, and Advanced Algorithms."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glass card-shimmer p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Header badge & verification mark */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="badge-primary text-[10px]">
                    {cert.badge}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-primary-light transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-xs font-medium text-cyanAccent mb-3 font-mono">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Covered Skills */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-2.5 block">
                  Core Topics
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-slate-300 bg-white/5 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
