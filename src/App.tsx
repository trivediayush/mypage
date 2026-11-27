import { useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { PlatformsSection } from './components/PlatformsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { WritingSection } from './components/WritingSection';
import { ContactSection } from './components/ContactSection';
import { AmbientDevOpsBackdrop } from './components/AmbientDevOpsBackdrop';
import {
  getNextTheme,
  resolveInitialTheme,
  type ThemeMode,
} from './utils/portfolioFilters';

const THEME_STORAGE_KEY = 'at-theme';

function readInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'light';
  }
  let stored: string | null = null;
  try {
    stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    stored = null;
  }
  const prefersDark =
    window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  return resolveInitialTheme(stored, prefersDark);
}

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(readInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Storage may be unavailable in restricted contexts
    }
  }, [theme]);

  useEffect(() => {
    const origin = window.location.origin;
    const currentUrl = `${origin}${window.location.pathname}`;

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) {
      canonical.href = currentUrl;
    }

    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.content = currentUrl;
    }

    const ogImage = document.querySelector<HTMLMetaElement>('meta[property="og:image"]');
    if (ogImage && ogImage.getAttribute('content')?.startsWith('/')) {
      ogImage.content = `${origin}${ogImage.getAttribute('content')}`;
    }

    const twitterImage = document.querySelector<HTMLMetaElement>('meta[name="twitter:image"]');
    if (twitterImage && twitterImage.getAttribute('content')?.startsWith('/')) {
      twitterImage.content = `${origin}${twitterImage.getAttribute('content')}`;
    }
  }, []);

  const handleToggleTheme = () => {
    setTheme((current) => getNextTheme(current));
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#F8FAFC] text-[#0B1220] transition-colors duration-200 dark:bg-[#080C14] dark:text-[#F1F5F9]">
        <AmbientDevOpsBackdrop />

        <div className="relative z-10">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-[#1D4ED8] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
          >
            Skip to main content
          </a>

          <Navbar theme={theme} onToggleTheme={handleToggleTheme} />

          <main id="main-content">
            <Hero />
            <ExperienceSection />
            <PlatformsSection />
            <ProjectsSection />
            <CapabilitiesSection />
            <WritingSection />
            <ContactSection />
          </main>
        </div>
      </div>
    </MotionConfig>
  );
}
