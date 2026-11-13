import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Sparkles, Brain, Layers, Database } from 'lucide-react';

export default function OrbitalDisplay() {
  const orbitingBadges = [
    {
      name: 'Python',
      icon: Terminal,
      color: 'text-yellow-400',
      bg: 'bg-yellow-400/10 border-yellow-400/20',
      position: 'top-4 right-10',
      floatAnim: { y: [0, -10, 0], x: [0, 5, 0], transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }
    },
    {
      name: 'React.js',
      icon: Layers,
      color: 'text-cyan-400',
      bg: 'bg-cyan-400/10 border-cyan-400/20',
      position: 'bottom-16 right-0',
      floatAnim: { y: [0, 12, 0], x: [0, -6, 0], transition: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 } }
    },
    {
      name: 'AI / ML',
      icon: Brain,
      color: 'text-purple-400',
      bg: 'bg-purple-400/10 border-purple-400/20',
      position: 'top-20 left-2',
      floatAnim: { y: [0, -12, 0], x: [0, 8, 0], transition: { duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 } }
    },
    {
      name: 'C / C++',
      icon: Cpu,
      color: 'text-blue-400',
      bg: 'bg-blue-400/10 border-blue-400/20',
      position: 'bottom-8 left-10',
      floatAnim: { y: [0, 10, 0], x: [0, -5, 0], transition: { duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 } }
    },
    {
      name: 'Systems',
      icon: Database,
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10 border-emerald-400/20',
      position: 'top-1/2 -right-6',
      floatAnim: { y: [0, -8, 0], x: [0, -6, 0], transition: { duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 2 } }
    }
  ];

  return (
    <div className="relative w-full max-w-[500px] h-[460px] md:h-[520px] mx-auto flex items-center justify-center select-none">
      {/* Central Ambient Glow */}
      <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-primary/30 to-cyanAccent/20 blur-[80px] pointer-events-none animate-pulse-glow" />

      {/* Outer Dashed Orbit Circle */}
      <div 
        className="absolute w-[380px] sm:w-[440px] md:w-[480px] h-[380px] sm:h-[440px] md:h-[480px] rounded-full border border-dashed border-primary/25 pointer-events-none animate-rotate-slow" 
      />

      {/* Middle Orbit Circle */}
      <div 
        className="absolute w-[290px] sm:w-[340px] md:w-[370px] h-[290px] sm:h-[340px] md:h-[370px] rounded-full border border-primary/20 pointer-events-none animate-rotate-reverse" 
      />

      {/* Inner Orbit Circle */}
      <div 
        className="absolute w-[200px] sm:w-[240px] md:w-[260px] h-[200px] sm:h-[240px] md:h-[260px] rounded-full border border-primary/35 pointer-events-none" 
      />

      {/* Central Core Element */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 rounded-3xl p-1 bg-gradient-to-br from-primary via-primary-dark to-cyanAccent shadow-glow-lg flex items-center justify-center group"
      >
        <div className="w-full h-full rounded-[22px] bg-[#07031e]/90 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center border border-white/20 transition-transform duration-500 group-hover:scale-[0.98]">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary/30 to-cyanAccent/20 flex items-center justify-center mb-2 border border-primary/40 shadow-glow-sm">
            <Sparkles className="w-6 h-6 text-primary-light" />
          </div>
          <span className="font-heading font-extrabold text-lg sm:text-xl text-white tracking-tight">
            Raunak Gupta
          </span>
          <span className="text-[11px] font-mono text-cyanAccent tracking-wider uppercase mt-1">
            KL University
          </span>
          <span className="text-[10px] text-slate-400 font-mono mt-0.5">
            B.Tech CSE '29
          </span>
        </div>
      </motion.div>

      {/* Orbiting Floating Badges */}
      {orbitingBadges.map((badge, idx) => {
        const IconComponent = badge.icon;
        return (
          <motion.div
            key={badge.name}
            animate={badge.floatAnim}
            className={`absolute z-20 ${badge.position}`}
          >
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-xl border ${badge.bg} shadow-lg transition-transform duration-300 hover:scale-110 cursor-default`}>
              <IconComponent className={`w-3.5 h-3.5 ${badge.color}`} />
              <span className="text-xs font-mono font-medium text-slate-200">
                {badge.name}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
