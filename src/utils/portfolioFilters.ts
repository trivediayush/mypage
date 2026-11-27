import type { ProjectCategory, ProjectItem, SkillItem } from '../data/portfolio';

export type ThemeMode = 'light' | 'dark';

export function resolveInitialTheme(
  storedTheme: string | null | undefined,
  systemPrefersDark: boolean
): ThemeMode {
  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme;
  }
  return systemPrefersDark ? 'dark' : 'light';
}

export function getNextTheme(current: ThemeMode): ThemeMode {
  return current === 'dark' ? 'light' : 'dark';
}

export function filterProjectsByCategory(
  items: ProjectItem[],
  category: ProjectCategory
): ProjectItem[] {
  if (category === 'All') {
    return items;
  }
  return items.filter((item) => item.category === category);
}

export function countUniqueSkills(items: SkillItem[]): number {
  const unique = new Set<string>();
  for (const skill of items) {
    unique.add(skill.id.trim().toLowerCase());
  }
  return unique.size;
}

export function formatInlineMetadata(parts: Array<string | undefined | null>): string {
  return parts
    .map((part) => (part ?? '').trim())
    .filter((part) => part.length > 0)
    .join(' · ');
}
