import { useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Layers } from 'lucide-react';

export const EASE_EDITORIAL: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}

export function Reveal({ children, delay = 0, className = '', y = 16 }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.52, delay, ease: EASE_EDITORIAL }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface SectionHeadingProps {
  index: string;
  title: string;
  subtitle: string;
  id?: string;
}

export function SectionHeading({ index, title, subtitle, id }: SectionHeadingProps) {
  return (
    <div className="mb-12 grid grid-cols-1 gap-4 border-b border-slate-200/90 pb-8 dark:border-slate-800/90 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-5">
        <p className="font-mono text-xs font-medium tracking-wider text-[#1D4ED8] tabular-nums dark:text-[#60A5FA]">
          {index}
        </p>
        <h2
          id={id}
          className="mt-2 font-editorial text-3xl font-medium tracking-tight text-[#0B1220] sm:text-4xl dark:text-[#F1F5F9]"
        >
          {title}
        </h2>
      </div>
      <p className="max-w-2xl text-[15px] leading-relaxed text-slate-600 dark:text-slate-400 lg:col-span-7 lg:justify-self-end lg:text-right">
        {subtitle}
      </p>
    </div>
  );
}

interface ResilientImageProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
  containerClassName?: string;
}

export function ResilientImage({
  src,
  alt,
  fallbackTitle,
  className = 'h-full w-full object-cover',
  containerClassName = 'relative overflow-hidden bg-slate-100 dark:bg-slate-900',
}: ResilientImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={containerClassName}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={() => setFailed(true)}
          className={className}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full min-h-[14rem] w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50/70 p-6 text-center dark:from-[#0F1624] dark:via-[#121B2E] dark:to-[#13213C]"
        >
          <Layers className="h-7 w-7 text-[#1D4ED8] dark:text-[#60A5FA]" aria-hidden="true" />
          <span className="font-editorial text-base font-medium text-slate-800 dark:text-slate-200">
            {fallbackTitle}
          </span>
        </div>
      )}
    </div>
  );
}
