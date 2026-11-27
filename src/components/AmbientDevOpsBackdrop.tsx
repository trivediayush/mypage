import { motion, useReducedMotion } from 'motion/react';

export function AmbientDevOpsBackdrop() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      data-testid="ambient-backdrop"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Subtle architectural coordinate grid */}
      <div className="architectural-grid absolute inset-0 opacity-60 dark:opacity-55" />

      {/* Soft slow-moving cobalt atmospheric field (top-right) */}
      <motion.div
        initial={false}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: ['0%', '-4%', '2%', '0%'],
                y: ['0%', '3%', '-2%', '0%'],
                scale: [1, 1.05, 0.98, 1],
              }
        }
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 right-[-8%] h-[34rem] w-[34rem] rounded-full bg-[#1D4ED8]/[0.065] blur-[110px] dark:bg-[#2563EB]/[0.11]"
      />

      {/* Soft slow-moving deep teal atmospheric field (bottom-left) */}
      <motion.div
        initial={false}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: ['0%', '4%', '-2%', '0%'],
                y: ['0%', '-3%', '2%', '0%'],
                scale: [1, 0.97, 1.04, 1],
              }
        }
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[-14rem] left-[-10%] h-[32rem] w-[32rem] rounded-full bg-[#0F766E]/[0.055] blur-[115px] dark:bg-[#14B8A6]/[0.085]"
      />

      {/* Whisper-subtle slow-gliding DevOps topology trace lines */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            initial={{ x: '-30%', opacity: 0 }}
            animate={{ x: '130%', opacity: [0, 0.65, 0.65, 0] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'linear',
              repeatDelay: 4,
            }}
            className="absolute top-[28%] left-0 h-px w-64 bg-gradient-to-r from-transparent via-[#1D4ED8]/30 to-transparent dark:via-[#60A5FA]/35"
          />

          <motion.div
            initial={{ x: '120%', opacity: 0 }}
            animate={{ x: '-35%', opacity: [0, 0.55, 0.55, 0] }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: 'linear',
              delay: 7,
              repeatDelay: 5,
            }}
            className="absolute top-[68%] left-0 h-px w-72 bg-gradient-to-r from-transparent via-[#0F766E]/28 to-transparent dark:via-[#14B8A6]/32"
          />
        </>
      )}
    </div>
  );
}
