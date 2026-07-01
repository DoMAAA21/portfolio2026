"use client";

import { motion, useReducedMotion } from "motion/react";

type BlobConfig = {
  className: string;
  animate: {
    x: number[];
    y: number[];
    scale: number[];
  };
  duration: number;
};

const HERO_BLOBS: BlobConfig[] = [
  {
    className:
      "top-[-10%] right-[-5%] h-[min(620px,75vw)] w-[min(620px,75vw)] bg-sky-400/45",
    animate: {
      x: [0, 50, -25, 0],
      y: [0, -40, 30, 0],
      scale: [1, 1.1, 0.94, 1],
    },
    duration: 22,
  },
  {
    className:
      "bottom-[-15%] left-[-8%] h-[min(520px,65vw)] w-[min(520px,65vw)] bg-cyan-300/35",
    animate: {
      x: [0, -40, 30, 0],
      y: [0, 40, -25, 0],
      scale: [1, 0.9, 1.08, 1],
    },
    duration: 26,
  },
  {
    className:
      "top-[10%] left-[20%] h-[min(420px,50vw)] w-[min(420px,50vw)] bg-blue-500/30",
    animate: {
      x: [0, 30, -35, 0],
      y: [0, 25, -40, 0],
      scale: [1, 1.06, 0.97, 1],
    },
    duration: 20,
  },
  {
    className:
      "right-[5%] bottom-[5%] h-[min(360px,42vw)] w-[min(360px,42vw)] bg-violet-400/30",
    animate: {
      x: [0, -25, 35, 0],
      y: [0, -30, 20, 0],
      scale: [1, 1.04, 0.95, 1],
    },
    duration: 24,
  },
];

const PROJECTS_BLOBS: BlobConfig[] = [
  {
    className:
      "top-[-20%] left-[-5%] h-[min(500px,60vw)] w-[min(500px,60vw)] bg-indigo-400/35",
    animate: {
      x: [0, 35, -20, 0],
      y: [0, 30, -25, 0],
      scale: [1, 1.08, 0.96, 1],
    },
    duration: 24,
  },
  {
    className:
      "top-[30%] right-[-10%] h-[min(480px,55vw)] w-[min(480px,55vw)] bg-sky-400/30",
    animate: {
      x: [0, -45, 20, 0],
      y: [0, -20, 35, 0],
      scale: [1, 0.94, 1.06, 1],
    },
    duration: 28,
  },
  {
    className:
      "bottom-[-10%] left-[30%] h-[min(400px,48vw)] w-[min(400px,48vw)] bg-cyan-300/28",
    animate: {
      x: [0, 25, -30, 0],
      y: [0, -35, 15, 0],
      scale: [1, 1.05, 0.97, 1],
    },
    duration: 22,
  },
  {
    className:
      "right-[15%] bottom-[10%] h-[min(300px,35vw)] w-[min(300px,35vw)] bg-violet-400/25",
    animate: {
      x: [0, -20, 25, 0],
      y: [0, 20, -30, 0],
      scale: [1, 1.03, 0.95, 1],
    },
    duration: 26,
  },
];

const VARIANTS = {
  hero: {
    blobs: HERO_BLOBS,
    glows: [
      "bg-[radial-gradient(circle_at_70%_30%,rgba(56,189,248,0.12),transparent_45%)]",
      "bg-[radial-gradient(circle_at_20%_80%,rgba(34,211,238,0.1),transparent_40%)]",
    ],
  },
  projects: {
    blobs: PROJECTS_BLOBS,
    glows: [
      "bg-[radial-gradient(circle_at_15%_40%,rgba(99,102,241,0.1),transparent_45%)]",
      "bg-[radial-gradient(circle_at_85%_60%,rgba(56,189,248,0.1),transparent_40%)]",
    ],
  },
} as const;

type BlobVariant = keyof typeof VARIANTS;

export function AnimatedBlobBackground({
  variant = "hero",
}: {
  variant?: BlobVariant;
}) {
  const prefersReducedMotion = useReducedMotion();
  const { blobs, glows } = VARIANTS[variant];

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {blobs.map((blob, index) => (
        <motion.div
          key={blob.className}
          className={`absolute rounded-full blur-[100px] will-change-transform ${blob.className}`}
          animate={prefersReducedMotion ? undefined : blob.animate}
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: blob.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 1.2,
                }
          }
        />
      ))}

      {glows.map((glow) => (
        <div key={glow} className={`absolute inset-0 ${glow}`} />
      ))}
    </div>
  );
}
