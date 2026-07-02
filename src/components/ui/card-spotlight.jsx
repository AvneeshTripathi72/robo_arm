import React, { useRef, useState } from "react";
import { cn } from "../../lib/utils";

export const CardSpotlight = ({ children, className, color = "rgba(255,255,255,0.25)", ...props }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn("group relative overflow-hidden rounded-xl bg-black/[0.96]", className)}
      {...props}
    >
      {/* Spotlight layer */}
      <div
        className="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, ${color}, transparent 40%)`,
        }}
      />
      {/* Content layer */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};
