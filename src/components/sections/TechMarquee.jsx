import React from 'react';
import { technicalInterests } from '../../data/portfolioData';
import { Sparkles } from 'lucide-react';

export default function TechMarquee() {
  // Duplicate array to achieve an unbroken infinite continuous scroll loop
  const marqueeItems = [...technicalInterests, ...technicalInterests, ...technicalInterests];

  return (
    <div className="relative w-full py-6 border-y border-white/10 bg-[#040118]/70 backdrop-blur-md overflow-hidden select-none">
      {/* Edge gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cosmic-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cosmic-950 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-8">
        {marqueeItems.map((interest, index) => (
          <div
            key={`${interest}-${index}`}
            className="flex items-center gap-4 text-slate-300 font-mono text-sm tracking-wide transition-colors hover:text-white"
          >
            <span className="font-heading font-medium tracking-tight text-base sm:text-lg">
              {interest}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-primary-light/60" />
          </div>
        ))}
      </div>
    </div>
  );
}
