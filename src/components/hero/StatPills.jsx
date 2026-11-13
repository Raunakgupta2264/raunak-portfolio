import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, FolderGit2, CheckCircle2 } from 'lucide-react';
import { personalInfo, projects, certifications } from '../../data/portfolioData';

export default function StatPills() {
  const stats = [
    {
      label: 'Academic Standing',
      value: `${personalInfo.cgpa} CGPA`,
      subtext: 'KL Deemed to be University',
      icon: Award,
      color: 'text-primary-light',
      borderColor: 'border-primary/20',
      glow: 'shadow-glow-sm',
    },
    {
      label: 'Graduation Year',
      value: personalInfo.graduation,
      subtext: 'B.Tech Computer Science',
      icon: GraduationCap,
      color: 'text-cyanAccent',
      borderColor: 'border-cyanAccent/20',
      glow: 'shadow-glow-cyan',
    },
    {
      label: 'Engineered Systems',
      value: `${projects.length} Major Projects`,
      subtext: 'AI, Systems & Full-Stack',
      icon: FolderGit2,
      color: 'text-emerald-400',
      borderColor: 'border-emerald-400/20',
      glow: '',
    },
    {
      label: 'Specializations',
      value: `${certifications.length} Certifications`,
      subtext: 'Stanford, DeepLearning.AI, BITS',
      icon: CheckCircle2,
      color: 'text-amber-400',
      borderColor: 'border-amber-400/20',
      glow: '',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-8 border-t border-white/10">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className={`p-3.5 sm:p-4 rounded-2xl bg-surface-glass backdrop-blur-md border ${stat.borderColor} hover:bg-white/[0.07] transition-all duration-300 group`}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <IconComponent className={`w-4 h-4 ${stat.color}`} />
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                {stat.label}
              </span>
            </div>
            <div className="text-lg sm:text-xl font-heading font-bold text-white group-hover:text-primary-light transition-colors">
              {stat.value}
            </div>
            <div className="text-[11px] text-slate-400 truncate mt-0.5">
              {stat.subtext}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
