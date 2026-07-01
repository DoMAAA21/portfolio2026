"use client";

import { motion, useReducedMotion } from "motion/react";

const RIBBONS = [
  {
    wrapper:
      "top-[12%] left-[-30%] h-[min(130px,16vh)] w-[min(1500px,190%)]",
    gradient:
      "bg-[linear-gradient(90deg,transparent_0%,rgba(52,211,153,0.2)_30%,rgba(134,239,172,0.18)_50%,rgba(52,211,153,0.2)_70%,transparent_100%)]",
    animate: {
      x: [0, 160, -90, 0],
      y: [0, -35, 25, 0],
      rotate: [-20, -12, -24, -20],
      scale: [1, 1.05, 0.98, 1],
    },
    duration: 17,
  },
  {
    wrapper:
      "top-[48%] right-[-30%] h-[min(110px,14vh)] w-[min(1300px,170%)]",
    gradient:
      "bg-[linear-gradient(90deg,transparent_0%,rgba(16,185,129,0.15)_35%,rgba(45,212,191,0.18)_50%,rgba(16,185,129,0.15)_65%,transparent_100%)]",
    animate: {
      x: [0, -130, 80, 0],
      y: [0, 30, -20, 0],
      rotate: [14, 22, 8, 14],
      scale: [1, 1.03, 0.97, 1],
    },
    duration: 20,
  },
  {
    wrapper:
      "bottom-[8%] left-[-15%] h-[min(90px,11vh)] w-[min(1200px,160%)]",
    gradient:
      "bg-[linear-gradient(90deg,transparent_0%,rgba(74,222,128,0.12)_40%,rgba(52,211,153,0.14)_55%,transparent_100%)]",
    animate: {
      x: [0, 100, -70, 0],
      y: [0, -20, 15, 0],
      rotate: [-10, -18, -6, -10],
      scale: [1, 1.04, 0.96, 1],
    },
    duration: 19,
  },
];

export function ContactRibbonBackground() {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = prefersReducedMotion !== true;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#00362c]"
    >
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
              className={`h-full w-full rounded-full blur-[72px] ${ribbon.gradient}`}
              style={{ transformOrigin: "center center" }}
              initial={initial}
              animate={shouldAnimate ? ribbon.animate : initial}
              transition={
                shouldAnimate
                  ? {
                      duration: ribbon.duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 1.2,
                    }
                  : undefined
              }
            />
          </div>
        );
      })}
    </div>
  );
}
