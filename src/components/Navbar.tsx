import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'motion/react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { navLinks, profile } from '../data/portfolio';
import type { ThemeMode } from '../utils/portfolioFilters';
import { EASE_EDITORIAL } from './MotionPrimitives';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      if (window.scrollY < 240) {
        setActiveSection('');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace('#', ''));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0 || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: '-28% 0px -58% 0px', threshold: [0.1, 0.35, 0.6] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'border-b border-slate-200/90 bg-[#F8FAFC]/92 backdrop-blur-md dark:border-slate-800/90 dark:bg-[#080C14]/92'
          : 'border-b border-transparent bg-[#F8FAFC]/85 backdrop-blur-sm dark:bg-[#080C14]/85'
      }`}
    >
      {/* Subtle top reading progress line */}
      {!prefersReducedMotion && (
        <motion.div
          aria-hidden="true"
          style={{ scaleX }}
          className="fixed top-0 right-0 left-0 z-50 h-[2px] origin-left bg-[#1D4ED8] dark:bg-[#3B82F6]"
        />
      )}

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="font-editorial text-xl font-semibold tracking-tight text-[#0B1220] whitespace-nowrap shrink-0 transition-colors hover:text-[#1D4ED8] dark:text-[#F1F5F9] dark:hover:text-[#60A5FA]"
        >
          {profile.name}
        </a>

        {/* Zone 2: 5 Concise Single-Line Text Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {navLinks.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'location' : undefined}
                className={`group relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                  isActive
                    ? 'text-[#0B1220] dark:text-white'
                    : 'text-slate-600 hover:text-[#0B1220] dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                {item.label}
                {isActive ? (
                  <motion.span
                    layoutId="nav-active-underline"
                    transition={
                      prefersReducedMotion
                        ? { duration: 0 }
                        : { type: 'spring', stiffness: 380, damping: 32 }
                    }
                    aria-hidden="true"
                    className="absolute right-0 bottom-0 left-0 h-[1.5px] bg-[#1D4ED8] dark:bg-[#60A5FA]"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="absolute right-0 bottom-0 left-0 h-[1.5px] origin-left scale-x-0 bg-[#1D4ED8] transition-transform duration-200 ease-out group-hover:scale-x-100 dark:bg-[#60A5FA]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Accessible Theme Toggle + Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={theme === 'dark'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors duration-150 hover:border-slate-300 hover:bg-slate-50 hover:text-[#0B1220] dark:border-slate-800 dark:bg-[#101726] dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-[#162033] dark:hover:text-white"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={prefersReducedMotion ? false : { rotate: -35, opacity: 0, scale: 0.85 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={prefersReducedMotion ? undefined : { rotate: 35, opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.18, ease: EASE_EDITORIAL }}
                className="inline-flex items-center justify-center"
              >
                {theme === 'dark' ? (
                  <Sun className="h-[18px] w-[18px] text-[#F59E0B]" aria-hidden="true" />
                ) : (
                  <Moon className="h-[18px] w-[18px] text-[#1D4ED8]" aria-hidden="true" />
                )}
              </motion.span>
            </AnimatePresence>
          </button>

          <a
            href="#contact"
            className="hidden h-10 items-center justify-center rounded-lg bg-[#1D4ED8] px-5 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#1E40AF] dark:bg-[#2563EB] dark:hover:bg-[#3B82F6] sm:inline-flex"
          >
            Contact
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-[#101726] dark:text-slate-200 dark:hover:bg-[#162033] md:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-nav-drawer"
            aria-label="Mobile navigation"
            initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: EASE_EDITORIAL }}
            className="border-t border-slate-200 bg-[#F8FAFC] px-6 py-5 shadow-lg dark:border-slate-800 dark:bg-[#0B111E] md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-[#0B1220] dark:text-slate-200 dark:hover:bg-slate-800/70 dark:hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 flex min-h-[44px] items-center justify-center rounded-lg bg-[#1D4ED8] px-4 text-sm font-medium text-white transition-colors hover:bg-[#1E40AF] dark:bg-[#2563EB] dark:hover:bg-[#3B82F6]"
              >
                Contact
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
