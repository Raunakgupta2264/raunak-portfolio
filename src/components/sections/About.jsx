import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { personalInfo } from '../../data/portfolioData';
import { GraduationCap, Award, MapPin, Compass, BookOpen, Terminal, CheckCircle } from 'lucide-react';

export default function About() {
  const academicHighlights = [
    { label: 'Institution', value: personalInfo.university, icon: GraduationCap },
    { label: 'Degree', value: personalInfo.degree, icon: BookOpen },
    { label: 'Graduation', value: `Class of ${personalInfo.graduation}`, icon: Compass },
    { label: 'Academic Standing', value: `${personalInfo.cgpa} / 10.0 CGPA`, icon: Award },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="// 01. PROFILE & BACKGROUND"
          title="Bridging High-Level Systems with Deep Theory"
          subtitle="An engineering approach rooted in strong computational foundations, academic excellence, and modern full-stack development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="card-glass p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-4">
                Software Engineering & Applied Artificial Intelligence
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4 text-base">
                I am a Computer Science and Engineering student at <span className="text-white font-semibold">{personalInfo.university}</span>. With an unwavering focus on engineering rigor, I have maintained an outstanding academic record of <span className="text-primary-light font-bold">{personalInfo.cgpa} CGPA</span>.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4 text-sm sm:text-base">
                My objective is to architect resilient software that operates reliably across all layers of the modern computing stack. Rather than viewing software development in isolation, I connect the fundamentals—such as <span className="text-slate-200">Operating System kernel semantics</span>, <span className="text-slate-200">crash-consistent filesystems</span>, and <span className="text-slate-200">advanced algorithms</span>—with modern web applications and cutting-edge machine learning pipelines.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                Whether forecasting network attack vectors with anomaly detection algorithms in <span className="text-cyanAccent font-medium">NeuroShield</span>, writing atomic journaling protocols for <span className="text-primary-light font-medium">JournaFS</span>, or building fluid web platforms in React, I prioritize code clarity, performance, and structural integrity.
              </p>

              {/* Core Strengths Pills */}
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                {[
                  'Operating Systems Principles',
                  'Crash Consistency & File Systems',
                  'Full-Stack Architecture',
                  'Predictive Machine Learning',
                  'Algorithmic Problem Solving'
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-slate-300 bg-white/5 border border-white/10"
                  >
                    <CheckCircle className="w-3 h-3 text-cyanAccent" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Academic Credential Cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="card-glass p-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-5 flex items-center justify-between">
                <span>Academic Credentials</span>
                <span className="text-primary-light">Verified Record</span>
              </h4>

              <div className="space-y-4">
                {academicHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-4 transition-colors hover:bg-white/[0.06]"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary-light" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-slate-400 font-mono">
                          {item.label}
                        </div>
                        <div className="text-base font-heading font-semibold text-white truncate mt-0.5">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Status / Philosophy Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/15 via-transparent to-cyanAccent/10 border border-primary/20 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-2 text-primary-light font-mono text-xs uppercase tracking-wider">
                <Terminal className="w-3.5 h-3.5 text-primary-light" />
                <span>Engineering Philosophy</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                "Writing clean, predictable code that respects the operating system underneath, scales gracefully in production, and leverages data intelligently."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
