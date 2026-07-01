"use client";

import { motion, useReducedMotion } from "motion/react";

const RIBBONS = [
  {
    wrapper:
      "top-[0%] left-[-20%] h-[min(340px,42vh)] w-[min(1150px,150%)]",
    gradient:
      "bg-[linear-gradient(100deg,rgba(37,99,235,0.9),rgba(124,58,237,0.8),rgba(34,211,238,0.7))]",
    animate: {
      x: [0, 160, -90, 0],
      y: [0, -70, 80, 0],
      rotate: [-32, -18, -38, -32],
      scale: [1, 1.12, 0.94, 1],
    },
    duration: 14,
  },
  {
    wrapper:
      "top-[30%] right-[-25%] h-[min(300px,38vh)] w-[min(1050px,140%)]",
    gradient:
      "bg-[linear-gradient(80deg,rgba(16,185,129,0.75),rgba(59,130,246,0.7),rgba(168,85,247,0.65))]",
    animate: {
      x: [0, -140, 100, 0],
      y: [0, 60, -70, 0],
      rotate: [18, 30, 12, 18],
      scale: [1, 0.92, 1.08, 1],
    },
    duration: 16,
  },
  {
    wrapper:
      "bottom-[-8%] left-[5%] h-[min(280px,34vh)] w-[min(950px,125%)]",
    gradient:
      "bg-[linear-gradient(110deg,rgba(99,102,241,0.75),rgba(14,165,233,0.7),rgba(52,211,153,0.6),rgba(250,204,21,0.4))]",
    animate: {
      x: [0, 110, -130, 0],
      y: [0, -50, 40, 0],
      rotate: [-14, -26, -8, -14],
      scale: [1, 1.06, 0.96, 1],
    },
    duration: 15,
  },
  {
    wrapper:
      "top-[50%] left-[20%] h-[min(220px,28vh)] w-[min(750px,95%)]",
    gradient:
      "bg-[linear-gradient(90deg,rgba(56,189,248,0.6),rgba(139,92,246,0.55),rgba(34,197,94,0.5))]",
    animate: {
      x: [0, -80, 90, 0],
      y: [0, 55, -35, 0],
      rotate: [38, 48, 30, 38],
      scale: [1, 1.1, 0.93, 1],
    },
    duration: 13,
  },
];

export function AboutRibbonBackground() {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = prefersReducedMotion !== true;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-3xl"
    >
      <div className="absolute inset-0 bg-black" />

      <div className="absolute inset-0">
        {RIBBONS.map((ribbon, index) => {
          const initial = {
            x: ribbon.animate.x[0],
            y: ribbon.animate.y[0],
            rotate: ribbon.animate.rotate[0],
            scale: ribbon.animate.scale[0],
          };

          return (
            <div key={ribbon.wrapper} className={`absolute ${ribbon.wrapper}`}>
              <motion.div
                className={`h-full w-full rounded-[100%] blur-[100px] mix-blend-screen ${ribbon.gradient}`}
                style={{ transformOrigin: "center center" }}
                initial={initial}
                animate={shouldAnimate ? ribbon.animate : initial}
                transition={
                  shouldAnimate
                    ? {
                        duration: ribbon.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.8,
                      }
                    : undefined
                }
              />
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_15%,rgba(0,0,0,0.5)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
    </div>
  );
}
