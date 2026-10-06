import * as si from "simple-icons";

type IconDef = { path: string; hex: string };

/** Custom marks for tools simple-icons does not ship (trademark removals). */
const custom = {
  azure: {
    hex: "0078D4",
    path: "M8.94 2.72h5.35L8.72 19.2a1.1 1.1 0 0 1-1.04.75H3.52a1.1 1.1 0 0 1-1.04-1.45L7.9 3.47a1.1 1.1 0 0 1 1.04-.75zm7.6 5.6 3.34 9.68a1.1 1.1 0 0 1-1.04 1.45H9.02l6.3-2.06-2.3-6.62 3.52-2.45z",
  },
  aws: {
    hex: "FF9900",
    path: "M6.76 10.4c0 .34.04.61.1.81.08.2.18.42.32.66.05.08.07.16.07.23 0 .1-.06.2-.19.29l-.6.4a.46.46 0 0 1-.25.09c-.1 0-.19-.05-.28-.14a2.9 2.9 0 0 1-.53-.79 4.1 4.1 0 0 1-1.7 1.05 3.2 3.2 0 0 1-1 .15c-.7 0-1.26-.2-1.67-.6-.4-.4-.61-.94-.61-1.6 0-.71.25-1.29.76-1.72.5-.44 1.18-.66 2.03-.66.28 0 .57.03.87.07.3.05.6.12.92.2v-.6c0-.62-.13-1.06-.39-1.31-.26-.26-.7-.39-1.34-.39-.29 0-.59.04-.9.11-.3.07-.6.16-.89.28a2.4 2.4 0 0 1-.29.11.5.5 0 0 1-.13.02c-.11 0-.17-.08-.17-.25v-.4c0-.13.02-.22.05-.28a.6.6 0 0 1 .21-.17c.29-.15.63-.28 1.03-.38.4-.1.83-.16 1.28-.16.98 0 1.69.22 2.15.67.45.44.68 1.12.68 2.03v2.64zm-3.5 1.31c.27 0 .55-.05.85-.15.3-.1.56-.28.78-.53.14-.16.24-.34.3-.55.05-.2.09-.45.09-.74v-.36a6.4 6.4 0 0 0-1.48-.19c-.53 0-.92.1-1.18.32-.26.2-.39.5-.39.9 0 .37.1.65.29.84.19.2.47.29.83.29l-.09.17zm6.94.93c-.15 0-.25-.02-.32-.08-.06-.05-.12-.16-.17-.32L7.4 5.5a1.4 1.4 0 0 1-.07-.33c0-.13.06-.2.19-.2h.94c.16 0 .27.03.33.08.07.06.12.17.16.33l1.48 5.85 1.38-5.85c.03-.16.08-.27.15-.33.07-.05.18-.08.33-.08h.77c.16 0 .27.03.34.08.06.06.11.17.14.33l1.4 5.92 1.53-5.92c.04-.16.1-.27.16-.33.07-.05.18-.08.33-.08h.9c.12 0 .19.06.19.2 0 .04 0 .09-.02.14a1.3 1.3 0 0 1-.06.22l-2.31 7.42c-.05.16-.1.27-.17.32-.07.06-.18.08-.32.08h-.83c-.16 0-.27-.03-.34-.09-.06-.06-.12-.17-.15-.33l-1.38-6.06-1.36 6.05c-.04.17-.09.28-.15.34-.07.06-.18.09-.34.09h-.83zm11.1.26c-.42 0-.85-.05-1.26-.15-.41-.1-.73-.2-.95-.33a.6.6 0 0 1-.23-.2.5.5 0 0 1-.04-.2v-.42c0-.17.06-.25.18-.25.05 0 .1.01.15.03l.2.09c.27.12.56.21.87.28.32.06.63.1.95.1.5 0 .89-.09 1.16-.26.27-.18.4-.43.4-.75a.7.7 0 0 0-.2-.5c-.13-.15-.38-.28-.74-.4l-1.06-.34c-.53-.17-.92-.42-1.17-.75a1.75 1.75 0 0 1-.37-1.07c0-.32.07-.6.21-.85.14-.25.33-.46.56-.63.24-.17.5-.3.82-.39.31-.09.64-.13.98-.13.18 0 .36.01.54.04.19.02.36.05.53.09l.47.13c.14.05.25.1.33.15a.68.68 0 0 1 .23.2.42.42 0 0 1 .07.25v.39c0 .17-.06.26-.19.26a.85.85 0 0 1-.31-.1 3.75 3.75 0 0 0-1.57-.32c-.45 0-.8.07-1.05.22-.25.15-.37.38-.37.7 0 .2.07.37.22.51.14.15.41.29.8.42l1.03.33c.52.17.9.4 1.14.71.23.3.35.65.35 1.04 0 .33-.07.63-.2.89-.14.26-.33.49-.57.67-.24.19-.53.33-.86.42-.35.1-.71.15-1.1.15zM22.2 17.5c-2.68 1.98-6.57 3.03-9.92 3.03-4.7 0-8.93-1.74-12.13-4.62-.25-.23-.03-.54.28-.36 3.45 2 7.72 3.22 12.13 3.22 3.34 0 7.01-.7 10.39-2.13.5-.22.93.33.44.7l.81.16zm1.1-1.26c-.34-.44-2.27-.21-3.13-.1-.26.03-.3-.2-.07-.36 1.53-1.08 4.16-.77 4.47-.4.31.37-.08 3.02-1.52 4.28-.22.2-.43.09-.33-.16.32-.83 1.04-2.7.7-3.14l-.12-.12z",
  },
} satisfies Record<string, IconDef>;

const map: Record<string, IconDef | undefined> = {
  "Microsoft Azure": custom.azure,
  "Google Cloud": si.siGooglecloud,
  Oracle: si.siOracle,
  AWS: custom.aws,
  "Azure DevOps": si.siAzuredevops ?? custom.azure,
  "Azure Monitor": custom.azure,
  "Log Analytics": custom.azure,
  "Key Vault": si.siVault,
  "External Secrets": si.siKubernetes,
  Snyk: si.siSnyk,
  Gitleaks: si.siGitleaks,
  Docker: si.siDocker,
  Kubernetes: si.siKubernetes,
  Helm: si.siHelm,
  "GitHub Actions": si.siGithubactions,
  Jenkins: si.siJenkins,
  "GitLab CI": si.siGitlab,
  Terraform: si.siTerraform,
  Ansible: si.siAnsible,
  CloudFormation: custom.aws,
  Grafana: si.siGrafana,
  "ELK Stack": si.siElasticstack,
  Lens: si.siLens,
  SonarQube: si.siSonar,
  Trivy: si.siTrivy,
  Python: si.siPython,
  Bash: si.siGnubash,
  Git: si.siGit,
  Linux: si.siLinux,
  Windows: si.siGitforwindows,
  ArgoCD: si.siArgo,
  Prometheus: si.siPrometheus,
  OpenTelemetry: undefined,
};

export function ToolIcon({ name, className = "" }: { name: string; className?: string }) {
  const icon = map[name];

  if (!icon) {
    return (
      <span
        aria-hidden="true"
        className={"font-mono text-[0.65rem] tracking-tight " + className}
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      style={{ ["--brand" as string]: `#${icon.hex}` }}
    >
      <path d={icon.path} />
    </svg>
  );
}

export function brandHex(name: string) {
  return map[name]?.hex;
}
