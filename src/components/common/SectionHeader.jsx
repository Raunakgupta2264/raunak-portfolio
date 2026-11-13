import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ badge, title, subtitle, align = 'center', className = '' }) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}
    >
      {badge && (
        <div className={`mb-3 inline-flex ${isCenter ? 'justify-center' : 'justify-start'}`}>
          <span className="badge-primary">
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
