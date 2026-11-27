import test from 'node:test';
import assert from 'node:assert/strict';
import { projects, skills } from '../data/portfolio';
import {
  countUniqueSkills,
  filterProjectsByCategory,
  formatInlineMetadata,
  getNextTheme,
  resolveInitialTheme,
} from './portfolioFilters';

test('resolveInitialTheme honors explicit stored preference over system preference', () => {
  assert.equal(resolveInitialTheme('dark', false), 'dark');
  assert.equal(resolveInitialTheme('light', true), 'light');
  assert.equal(resolveInitialTheme(null, true), 'dark');
  assert.equal(resolveInitialTheme(undefined, false), 'light');
  assert.equal(resolveInitialTheme('invalid', false), 'light');
});

test('getNextTheme toggles deterministically between light and dark', () => {
  assert.equal(getNextTheme('light'), 'dark');
  assert.equal(getNextTheme('dark'), 'light');
});

test('filterProjectsByCategory returns all items or exact category matches', () => {
  assert.equal(filterProjectsByCategory(projects, 'All').length, projects.length);

  const cloudProjects = filterProjectsByCategory(projects, 'Cloud & IaC');
  assert.equal(cloudProjects.length, 1);
  assert.equal(cloudProjects[0].id, 'gcp-ha-dr');

  const secProjects = filterProjectsByCategory(projects, 'Security & Automation');
  assert.equal(secProjects.length, 2);
  assert.deepEqual(
    secProjects.map((p) => p.id),
    ['golden-ami', 'devsecops-pipeline']
  );

  const k8sProjects = filterProjectsByCategory(projects, 'Kubernetes & CI/CD');
  assert.equal(k8sProjects.length, 1);
  assert.equal(k8sProjects[0].id, 'k8s-microservices');
});

test('countUniqueSkills verifies unified uncategorized skill inventory has no duplicates', () => {
  const uniqueCount = countUniqueSkills(skills);
  assert.equal(uniqueCount, skills.length);
  assert.equal(uniqueCount, 24);
});

test('formatInlineMetadata joins non-empty items with middot separators', () => {
  assert.equal(formatInlineMetadata(['AWS', 'Terraform', '', null, 'Ansible']), 'AWS · Terraform · Ansible');
  assert.equal(formatInlineMetadata(['Kubernetes', '2026', '8 min read']), 'Kubernetes · 2026 · 8 min read');
});
