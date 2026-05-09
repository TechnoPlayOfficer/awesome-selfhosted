"use client";

import React from 'react';

export default function CinematicBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <iframe
        src="/spot1.html"
        className="w-full h-full border-none pointer-events-none"
        style={{ 
          filter: 'brightness(0.6) contrast(1.1)',
          pointerEvents: 'none'
        }}
        title="ACCET Cinematic Background"
      />
      {/* Cinematic Vignette Overlay to blend with the app UI */}
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-background-dark opacity-80" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-background-dark/90" />
    </div>
  );
}
