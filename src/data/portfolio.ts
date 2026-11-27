export type ProjectCategory = 'All' | 'Cloud & IaC' | 'Kubernetes & CI/CD' | 'Security & Automation';

export interface Role {
  id: string;
  title: string;
  company: string;
  period: string;
  employmentType: string;
  current?: boolean;
  summary: string;
  details: string[];
  focusAreas: string[];
}

export interface PlatformItem {
  id: string;
  name: string;
  url: string;
  displayUrl: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  accentTone: 'cobalt' | 'teal';
}

export interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  context: string;
  stack: string[];
  problem: string;
  approach: string;
  result: string;
  repoUrl?: string;
}

export interface CapabilityDomain {
  id: string;
  category: string;
  summary: string;
  tools: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
}

export interface ServiceScope {
  id: string;
  name: string;
  scope: string;
  bestFor: string;
  deliverables: string[];
}

export interface ClientReference {
  name: string;
  type: string;
  url: string;
  displayUrl: string;
  cloud: string;
  summary: string;
  details: string[];
}

export interface ArticleItem {
  id: string;
  title: string;
  summary: string;
  href: string;
  topic: string;
  date: string;
  readTime: string;
  takeaways: string[];
}

export const HERO_VISUAL = {
  src: '/src/assets/images/hero_devops_datacenter_arch_1795774559797.jpg',
  alt: 'Enterprise cloud data center infrastructure corridor with precision slate server racks and subtle royal cobalt structural beams',
};

export const profile = {
  name: 'Ayush Trivedi',
  role: 'DevOps & Platform Engineer',
  location: 'India',
  tel: '+91-7987788900',
  telHref: '+917987788900',
  email: 'ayushtrivedi11jan@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/ayush-trivedi-in/',
    github: 'https://github.com/trivediayush',
    medium: 'https://medium.com/@ayushtrivedi11jan',
  },
  kicker: 'DevOps & Cloud Infrastructure Engineering',
  headline: 'Resilient cloud foundations. Repeatable delivery.',
  abstract:
    'DevOps and Platform Engineer focused on multi-cloud infrastructure, Kubernetes operations, Infrastructure as Code, and shift-left DevSecOps. I build standardized environments and automated release workflows engineered for operational clarity and auditability.',
  facts: [
    {
      label: 'Current Role',
      value: 'DevOps & Cloud Engineer',
      subvalue: 'System Level Solutions (SLS)',
    },
    {
      label: 'Cloud Footprint',
      value: 'AWS · Azure · GCP',
      subvalue: 'Multi-region HA, DR & FinOps',
    },
    {
      label: 'Core Tooling',
      value: 'Kubernetes · Terraform',
      subvalue: 'Ansible · Jenkins · DevSecOps',
    },
    {
      label: 'Built Platforms',
      value: '2 Engineering Portals',
      subvalue: 'devops & practice.atrivedi.online',
    },
  ],
};

export const navLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#platforms', label: 'Platforms' },
  { href: '#work', label: 'Work' },
  { href: '#capabilities', label: 'Skills' },
  { href: '#writing', label: 'Writing' },
];

export const roles: Role[] = [
  {
    id: 'sls',
    title: 'DevOps & Cloud Engineer',
    company: 'System Level Solutions (SLS)',
    period: 'Apr 2026 — Present',
    employmentType: 'Full-time',
    current: true,
    summary:
      'Operating hybrid cloud and on-premises infrastructure, CI/CD delivery automation, multi-region disaster recovery, and FinOps cost governance.',
    details: [
      'Develop and maintain Jenkins CI/CD pipelines supporting on-premises infrastructure and EV engineering workloads.',
      'Provision and manage AWS and Google Cloud environments using modular Terraform configurations.',
      'Standardize server configuration and operational workflows across environments using Ansible.',
      'Designed and provisioned multi-region GCP environments covering development, high availability, and disaster recovery.',
      'Apply FinOps practices across AWS workloads to identify idle capacity and reduce recurring cloud spend.',
    ],
    focusAreas: ['AWS', 'Google Cloud', 'Terraform', 'Ansible', 'Jenkins', 'FinOps'],
  },
  {
    id: 'aviasole',
    title: 'DevOps Engineer',
    company: 'Aviasole Technologies',
    period: 'Nov 2025 — Apr 2026',
    employmentType: 'Full-time',
    summary:
      'Operated Azure Kubernetes Service clusters supporting 23+ microservices and embedded automated DevSecOps controls into release pipelines.',
    details: [
      'Built and maintained automated CI/CD pipelines using GitHub Actions and Azure DevOps.',
      'Integrated shift-left DevSecOps validation with SonarQube, Trivy, and Snyk prior to deployment.',
      'Managed Azure Kubernetes Service (AKS) environments hosting 23+ containerized microservices.',
      'Provisioned and maintained Azure cloud infrastructure across application environments.',
      'Supported day-to-day Kubernetes release operations, troubleshooting, and workload stability.',
    ],
    focusAreas: ['Microsoft Azure', 'AKS', 'GitHub Actions', 'Azure DevOps', 'SonarQube', 'Trivy'],
  },
  {
    id: 'vkaps',
    title: 'DevOps Engineer Intern',
    company: 'VKAPS IT Solutions Pvt. Ltd.',
    period: 'Jun 2025 — Oct 2025',
    employmentType: 'Engineering Internship',
    summary:
      'Maintained Jenkins deployment pipelines, Linux server reliability, and cross-stack operational diagnostics.',
    details: [
      'Developed and maintained Jenkins pipelines automating repeatable application deployment workflows.',
      'Maintained and troubleshot server infrastructure supporting active application environments.',
      'Investigated database-related operational issues across application and infrastructure layers.',
      'Supported CI/CD release coordination across development and operational environments.',
    ],
    focusAreas: ['Jenkins', 'Linux', 'CI/CD', 'Server Operations', 'Database Diagnostics'],
  },
  {
    id: 'pearlthoughts',
    title: 'DevOps Intern',
    company: 'PearlThoughts',
    period: 'May 2025',
    employmentType: 'Engineering Internship',
    summary:
      'Streamlined cloud deployment workflows and authored standardized operational runbooks for containerized services.',
    details: [
      'Designed deployment automation workflows that reduced manual release steps by 60%.',
      'Documented CI/CD architecture and operational recovery procedures through standardized runbooks.',
      'Worked across containerized workloads and cloud provisioning in production-oriented setups.',
    ],
    focusAreas: ['Deployment Automation', 'Docker', 'Runbooks', 'Cloud Workflows'],
  },
];

export const builtPlatforms: PlatformItem[] = [
  {
    id: 'devops-reference',
    name: 'DevOps Cheatsheets & Reference',
    url: 'https://devops.atrivedi.online/',
    displayUrl: 'devops.atrivedi.online',
    category: 'Technical Reference Platform',
    tagline: 'Structured operational documentation for modern DevOps tooling and cloud workflows.',
    description:
      'Designed and built an organized reference hub for engineers working across Linux, Docker, Kubernetes, Terraform, CI/CD, and cloud platforms—consolidating production-relevant commands, architecture patterns, and configuration fundamentals in one clean interface.',
    highlights: [
      'Curated command references for Kubernetes, Terraform, Docker, and Git',
      'Structured for rapid lookup during daily operations and incident triage',
      'Built, deployed, and maintained independently as a public engineering resource',
    ],
    image: '/src/assets/images/platform_devops_reference_v2_1795774557589.jpg',
    imageAlt: 'Modular anodized sapphire and matte graphite cloud compute server blades arranged in a structured cluster grid',
    accentTone: 'cobalt',
  },
  {
    id: 'devops-practice',
    name: 'DevOps Scenario Practice Handbook',
    url: 'https://practice.atrivedi.online/',
    displayUrl: 'practice.atrivedi.online',
    category: 'Interactive Practice Platform',
    tagline: 'Scenario-based DevOps and SRE troubleshooting drills modeled on real operational challenges.',
    description:
      'Created an interactive scenario handbook helping engineers practice structured reasoning across deployment failures, cluster debugging, infrastructure state drift, and CI/CD security trade-offs—moving beyond rote definitions toward practical systems thinking.',
    highlights: [
      'Scenario-driven problem prompts across Kubernetes, IaC, CI/CD, and cloud networking',
      'Encourages root-cause methodology, rollback hygiene, and architecture trade-off analysis',
      'Engineered and hosted end-to-end for continuous community and peer practice',
    ],
    image: '/src/assets/images/platform_devops_practice_v2_1795774558895.jpg',
    imageAlt: 'Interlocking brushed titanium, deep ceramic teal, and matte slate CI/CD delivery stages from Source to Monitor',
    accentTone: 'teal',
  },
];

export const projectCategories: ProjectCategory[] = [
  'All',
  'Cloud & IaC',
  'Kubernetes & CI/CD',
  'Security & Automation',
];

export const projects: ProjectItem[] = [
  {
    id: 'golden-ami',
    title: 'Golden AMI Pipeline Pattern',
    category: 'Security & Automation',
    context: 'Engineering Pattern · Immutable Infrastructure',
    stack: ['AWS', 'EC2 Image Builder', 'EventBridge', 'Trivy', 'Terraform'],
    problem:
      'Manually hardened compute instances accumulate configuration drift over time and make baseline security compliance difficult to audit across environments.',
    approach:
      'Architected an immutable-image pipeline applying scheduled security patches and a defined CIS Level 1 hardening subset, installing baseline monitoring agents, running automated vulnerability validation with Trivy, and rolling validated AMIs to Auto Scaling Groups via controlled Instance Refresh.',
    result:
      'Established a repeatable, auditable workflow for producing hardened cloud base images instead of patching and mutating servers post-launch.',
    repoUrl: 'https://github.com/trivediayush/golden-ami',
  },
  {
    id: 'gcp-ha-dr',
    title: 'GCP High Availability & Disaster Recovery Infrastructure',
    category: 'Cloud & IaC',
    context: 'Production Engineering · Multi-Region Topology',
    stack: ['Google Cloud', 'Terraform', 'Ansible'],
    problem:
      'Development, high-availability, and disaster-recovery environments require strict parity and repeatable provisioning so failover topology never diverges from production.',
    approach:
      'Designed and provisioned multi-region Google Cloud environments declaratively with Terraform, paired with Ansible playbooks governing consistent server configuration and operational readiness.',
    result:
      'Infrastructure is version-controlled as code, allowing regional environments to be provisioned, updated, and audited through a single repeatable workflow.',
  },
  {
    id: 'k8s-microservices',
    title: 'Kubernetes Microservices Delivery Platform',
    category: 'Kubernetes & CI/CD',
    context: 'Production Operations · 23+ Microservices',
    stack: ['Microsoft Azure', 'AKS', 'Azure DevOps', 'Helm', 'Docker'],
    problem:
      'Operating more than twenty interconnected microservices requires standardized packaging, predictable rollout mechanics, and minimal manual intervention during releases.',
    approach:
      'Maintained Azure Kubernetes Service workloads, Helm-backed release workflows, and multi-stage Azure DevOps pipelines supporting automated validation and deployment across 23+ services.',
    result:
      'Delivered a consistent, production-oriented Kubernetes release workflow that improved deployment reliability and lowered day-to-day operational friction.',
  },
  {
    id: 'devsecops-pipeline',
    title: 'DevSecOps Shift-Left CI/CD Pipeline',
    category: 'Security & Automation',
    context: 'Delivery Governance · Automated Controls',
    stack: ['GitHub Actions', 'SonarQube', 'Trivy', 'Snyk', 'Gitleaks'],
    problem:
      'Code quality regressions, exposed credentials, vulnerable dependencies, and insecure container layers are costly to remediate once artifacts reach staging or production.',
    approach:
      'Embedded automated static analysis, secret scanning, dependency auditing, and container vulnerability gates directly inside pull-request and build stages.',
    result:
      'Security and quality findings surface immediately during developer feedback loops, preventing vulnerable artifacts from advancing downstream.',
    repoUrl: 'https://github.com/trivediayush/devsecops-ci-pipeline',
  },
];

export interface SkillItem {
  id:
    | 'aws'
    | 'azure'
    | 'gcp'
    | 'azure-devops'
    | 'kubernetes'
    | 'helm'
    | 'argocd'
    | 'docker'
    | 'jenkins'
    | 'github-actions'
    | 'gitlab-ci'
    | 'terraform'
    | 'ansible'
    | 'grafana'
    | 'prometheus'
    | 'opentelemetry'
    | 'elk'
    | 'sonarqube'
    | 'trivy'
    | 'snyk'
    | 'python'
    | 'bash'
    | 'git'
    | 'linux';
  name: string;
}

export const skills: SkillItem[] = [
  { id: 'aws', name: 'AWS' },
  { id: 'azure', name: 'Microsoft Azure' },
  { id: 'gcp', name: 'Google Cloud' },
  { id: 'azure-devops', name: 'Azure DevOps' },
  { id: 'kubernetes', name: 'Kubernetes' },
  { id: 'docker', name: 'Docker' },
  { id: 'helm', name: 'Helm' },
  { id: 'argocd', name: 'ArgoCD' },
  { id: 'terraform', name: 'Terraform' },
  { id: 'ansible', name: 'Ansible' },
  { id: 'jenkins', name: 'Jenkins' },
  { id: 'github-actions', name: 'GitHub Actions' },
  { id: 'gitlab-ci', name: 'GitLab CI' },
  { id: 'grafana', name: 'Grafana' },
  { id: 'prometheus', name: 'Prometheus' },
  { id: 'opentelemetry', name: 'OpenTelemetry' },
  { id: 'elk', name: 'ELK Stack' },
  { id: 'sonarqube', name: 'SonarQube' },
  { id: 'trivy', name: 'Trivy' },
  { id: 'snyk', name: 'Snyk' },
  { id: 'linux', name: 'Linux' },
  { id: 'python', name: 'Python' },
  { id: 'bash', name: 'Bash' },
  { id: 'git', name: 'Git' },
];

export const certifications: CertificationItem[] = [
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified DevOps Professional',
    issuer: 'Oracle',
    year: '2025',
  },
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified Architect Associate',
    issuer: 'Oracle',
    year: '2025',
  },
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    issuer: 'Oracle',
    year: '2025',
  },
];

export const education = {
  degree: 'Bachelor of Technology (B.Tech), Computer Science',
  institution: 'Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore',
  period: 'Jul 2021 — Jul 2025',
  note: 'Computer science fundamentals applied directly toward cloud infrastructure, Linux systems, automation, and software delivery.',
};

export const clientWork: ClientReference = {
  name: 'Jashoda Jewels',
  type: 'Freelance Client · Live on AWS',
  url: 'https://www.jashodajewels.com/',
  displayUrl: 'jashodajewels.com',
  cloud: 'Amazon Web Services (AWS)',
  summary:
    'Hosted and configured the live production web presence for Jashoda Jewels on AWS, ensuring dependable cloud delivery and clean operational handover.',
  details: [
    'Architected and hosted the production website on Amazon Web Services (AWS), live at jashodajewels.com.',
    'Configured cloud hosting, domain routing, HTTPS security, and repeatable deployment workflows for reliable uptime.',
    'Delivered practical operational documentation and remains available as a reference for independent AWS infrastructure work.',
  ],
};

export const serviceScopes: ServiceScope[] = [
  {
    id: 'cloud-setup',
    name: 'Cloud & Infrastructure Setup',
    scope:
      'Clean, reproducible AWS or Azure environments for teams transitioning away from manually configured servers.',
    bestFor: 'New products, scaling teams, or workloads requiring structured IaC foundations',
    deliverables: [
      'Modular Terraform definitions for core cloud resources',
      'Networking, compute, storage, and least-privilege access setup',
      'Automated deployment workflow and operational documentation',
      'Clear handover notes so internal teams retain full maintainability',
    ],
  },
  {
    id: 'cicd-automation',
    name: 'CI/CD & Delivery Automation',
    scope:
      'Design and refine multi-stage delivery pipelines so software releases become repeatable, verifiable, and safe to roll back.',
    bestFor: 'Engineering teams eliminating manual deployments or fragile release scripts',
    deliverables: [
      'End-to-end CI/CD pipeline architecture and implementation',
      'Automated build, test, security scanning, and promotion stages',
      'Environment parity improvements across staging and production',
      'Standardized deployment and rollback operational runbooks',
    ],
  },
  {
    id: 'infra-review',
    name: 'Infrastructure & FinOps Review',
    scope:
      'An independent technical audit of an existing cloud or DevOps environment focused on reliability, security posture, and cloud cost hygiene.',
    bestFor: 'Teams with live infrastructure seeking an objective remediation roadmap',
    deliverables: [
      'Prioritized technical findings ranked by operational risk',
      'CI/CD workflow and IAM access-hygiene assessment',
      'Cloud spend and unused resource optimization observations',
      'Actionable, phased remediation plan',
    ],
  },
];

export const articles: ArticleItem[] = [
  {
    id: 'aks-guide',
    title: 'Getting Started with Kubernetes on Azure',
    summary: 'A practical walkthrough of standing up and operating an AKS environment with production discipline.',
    href: 'https://medium.com/@ayushtrivedi11jan',
    topic: 'Kubernetes',
    date: '2026',
    readTime: '8 min read',
    takeaways: [
      'Cluster sizing and node-pool decisions that are costly to change after launch',
      'Ingress routing, DNS management, and TLS certificate automation',
      'Baseline metrics and alerts required before onboarding production workloads',
    ],
  },
  {
    id: 'terraform-lessons',
    title: 'Terraform Best Practices I Learned the Hard Way',
    summary: 'Field-tested lessons around remote state management, module boundaries, naming conventions, and maintainable IaC.',
    href: 'https://medium.com/@ayushtrivedi11jan',
    topic: 'Infrastructure as Code',
    date: '2026',
    readTime: '6 min read',
    takeaways: [
      'Structuring remote state and environment boundaries so blast radius stays contained',
      'Recognizing when a Terraform module reduces complexity versus adding indirection',
      'Enforcing consistent resource naming and FinOps tagging conventions',
    ],
  },
  {
    id: 'azure-devops-cicd',
    title: 'Building CI/CD Pipelines with Azure DevOps',
    summary: 'Structuring multi-stage delivery workflows that balance release velocity with safe environment promotion.',
    href: 'https://medium.com/@ayushtrivedi11jan',
    topic: 'CI/CD Engineering',
    date: '2025',
    readTime: '7 min read',
    takeaways: [
      'Decoupling build verification from environment-specific deployment responsibilities',
      'Designing approval gates that protect production without bottlenecking engineers',
      'Promoting identical immutable artifacts cleanly across environments',
    ],
  },
];
