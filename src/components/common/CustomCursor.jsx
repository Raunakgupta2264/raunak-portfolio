import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on devices with mouse/fine pointer
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsPointerFine(mediaQuery.matches);

    const handleMediaChange = (e) => setIsPointerFine(e.matches);
    mediaQuery.addEventListener('change', handleMediaChange);

    if (!mediaQuery.matches) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Check if hovering over clickable elements
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, select, [data-interactive="true"]');
      setIsHovered(!!isInteractive);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  // Smooth trailing physics for the outer ring
  useEffect(() => {
    if (!isPointerFine) return;
    let animationFrameId;

    const animateTrail = () => {
      setTrailingPos((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18,
        };
      });
      animationFrameId = requestAnimationFrame(animateTrail);
    };

    animationFrameId = requestAnimationFrame(animateTrail);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isPointerFine]);

  if (!isPointerFine || !isVisible) return null;

  return (
    <>
      {/* Inner precise dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
      {/* Outer reactive ring */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color,background-color] duration-200 ease-out ${
          isHovered
            ? 'w-12 h-12 border border-primary/80 bg-primary/10 backdrop-blur-[1px]'
            : 'w-8 h-8 border border-primary/40 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </>
  );
}
