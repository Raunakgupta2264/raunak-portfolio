import React from 'react';

export default function MeshBackground() {
  return (
    <div className="mesh-container" aria-hidden="true">
      <div className="mesh-blob-1" />
      <div className="mesh-blob-2" />
      <div className="mesh-blob-3" />
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  );
}
