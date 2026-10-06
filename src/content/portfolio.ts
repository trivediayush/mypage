export type Role = {
  title: string;
  company: string;
  period: string;
  current?: boolean;
  summary: string;
  details: string[];
};

export type Project = {
  title: string;
  stack: string;
  status?: string;
  problem: string;
  approach: string;
  result: string;
  href?: string;
};

export type ClientWork = {
  name: string;
  type: string;
  summary: string;
  details: string[];
};

export type Service = {
  name: string;
  scope: string;
  bestFor: string;
  deliverables: string[];
};

export type Article = {
  title: string;
  summary: string;
  href: string;
  topic: string;
  date: string;
  readTime: string;
  takeaways: string[];
};

export const profile = {
  name: "Ayush Trivedi",
  role: "DevOps Engineer",
  location: "Indore, India",
  email: "ayushtrivedi11jan@gmail.com",
  phones: ["+91-7987788900", "+91-7240890038"],
  links: {
    linkedin: "https://www.linkedin.com/in/ayush-trivediin",
    github: "https://github.com/trivediayush",
    medium: "https://medium.com/@ayushtrivedi11jan",
  },
  headline: "Cloud infrastructure, delivery automation, and Kubernetes.",
  abstract:
    "I work across cloud infrastructure, CI/CD, Kubernetes, Infrastructure as Code, and DevSecOps. My focus is making environments and delivery workflows easier to operate, reproduce, and maintain.",
  facts: [
    { label: "Current", value: "DevOps & Cloud Engineer — System Level Solutions" },
    { label: "Cloud", value: "AWS · Azure · Google Cloud" },
    { label: "Core", value: "Kubernetes · Terraform · CI/CD · Ansible" },
    { label: "Freelance", value: "Selected infrastructure & DevOps engagements" },
  ],
};

export const sections = [
  { id: "intro", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "expertise", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "clients", label: "Clients" },
  { id: "credentials", label: "Credentials" },
  { id: "services", label: "Freelance" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

export const roles: Role[] = [
  {
    title: "DevOps & Cloud Engineer",
    company: "System Level Solutions (SLS)",
    period: "Apr 2026 — Present",
    current: true,
    summary:
      "Working across cloud and on-premises infrastructure, delivery automation, and environment management.",
    details: [
      "Develop and maintain Jenkins CI/CD pipelines for on-premises infrastructure and EV projects.",
      "Provision and manage AWS and Google Cloud infrastructure using Terraform.",
      "Configure and manage servers with Ansible as part of infrastructure and deployment workflows.",
      "Designed and provisioned GCP environments for development, high availability, and disaster recovery across regions.",
      "Apply FinOps practices to AWS infrastructure to identify and reduce unnecessary cloud spend.",
    ],
  },
  {
    title: "DevOps Engineer",
    company: "Aviasole Technologies",
    period: "Nov 2025 — Apr 2026",
    summary:
      "Supported a Kubernetes-based microservices environment and automated software delivery on Azure.",
    details: [
      "Developed and maintained CI/CD pipelines using GitHub Actions and Azure DevOps.",
      "Implemented DevSecOps checks using SonarQube, Trivy, and Snyk.",
      "Managed Azure Kubernetes Service environments supporting 23+ microservices.",
      "Provisioned and maintained Azure infrastructure for application environments.",
      "Supported Kubernetes deployments and day-to-day infrastructure operations.",
    ],
  },
  {
    title: "DevOps Engineer",
    company: "VKAPS IT Solutions Pvt. Ltd.",
    period: "Jun 2025 — Oct 2025",
    summary:
      "Worked on CI/CD infrastructure, server operations, deployments, and application support.",
    details: [
      "Developed and maintained Jenkins pipelines for application deployment workflows.",
      "Maintained and troubleshot server infrastructure supporting application environments.",
      "Investigated database-related issues across application and infrastructure operations.",
      "Supported CI/CD infrastructure and deployment processes across development and operational environments.",
    ],
  },
  {
    title: "DevOps Intern",
    company: "PearlThoughts",
    period: "May 2025",
    summary:
      "Worked on deployment automation and documentation in a cloud and containerized environment.",
    details: [
      "Designed automation workflows that reduced manual deployment steps by 60%.",
      "Documented CI/CD processes and deployment procedures through standardized runbooks.",
      "Gained practical exposure to cloud infrastructure, automation, and containerization in production environments.",
    ],
  },
  {
    title: "Industrial Training",
    company: "Allsoft Solutions and Services Pvt. Ltd.",
    period: "Aug 2024 — Sep 2024",
    summary:
      "Built foundational hands-on experience across cloud, DevOps, containers, and automation.",
    details: [
      "Worked with Jenkins and GitLab CI, AWS and Azure, Docker and Kubernetes.",
      "Used Bash and Python for automation and scripting.",
      "Learned infrastructure as code, deployment automation, and practical DevOps workflows.",
    ],
  },
];

export const expertise: { category: string; tools: string[] }[] = [
  { category: "Cloud", tools: ["AWS", "Microsoft Azure"] },
  { category: "Kubernetes", tools: ["Kubernetes", "Helm", "ArgoCD", "Docker"] },
  { category: "CI/CD", tools: ["Jenkins", "GitHub Actions", "Azure DevOps", "GitLab CI"] },
  { category: "Infrastructure", tools: ["Terraform", "Ansible"] },
  { category: "Observability", tools: ["Grafana", "Prometheus", "OpenTelemetry", "ELK Stack"] },
  { category: "Security", tools: ["SonarQube", "Trivy", "Key Vault", "External Secrets"] },
  { category: "Systems & scripting", tools: ["Python", "Bash", "Git", "Linux"] },
];

export const projects: Project[] = [
  {
    title: "GCP High Availability & Disaster Recovery Infrastructure",
    stack: "Google Cloud · Terraform · Ansible",
    status: "Professional work",
    problem:
      "Development, high-availability, and disaster-recovery environments need consistent infrastructure and repeatable provisioning.",
    approach:
      "Designed and provisioned GCP infrastructure across regions using Terraform, with Ansible supporting server configuration and operational workflows.",
    result:
      "Infrastructure is represented as code and environments can be managed through a consistent provisioning and configuration workflow.",
  },
  {
    title: "Kubernetes Microservices Delivery Platform",
    stack: "Azure · AKS · Azure DevOps · Helm",
    status: "Professional work",
    problem:
      "A large microservices environment requires repeatable deployments and dependable release workflows across services.",
    approach:
      "Worked with AKS, CI/CD pipelines, containerized workloads, and deployment tooling while supporting 23+ microservices.",
    result:
      "A practical production-oriented workflow for building, validating, and deploying Kubernetes workloads with less manual intervention.",
  },
  {
    title: "DevSecOps CI/CD Pipeline",
    stack: "GitHub Actions · SonarQube · Trivy · Snyk · Gitleaks",
    status: "Professional / engineering work",
    problem:
      "Security and code-quality checks are more useful when they run as part of the normal development workflow rather than after deployment.",
    approach:
      "Integrated automated code-quality, secret, dependency, and container-security checks into CI workflows.",
    result:
      "Security and quality feedback becomes part of the pull-request and build workflow, with failures visible before release.",
  },
  {
    title: "Golden AMI Pipeline Pattern",
    stack: "AWS · EC2 Image Builder · EventBridge · Inspector · Terraform",
    status: "Engineering project",
    problem:
      "Manually hardened servers create configuration drift and make it difficult to maintain a consistent baseline.",
    approach:
      "Built an immutable-image pattern around scheduled image builds, patching, hardening, validation, and controlled AMI distribution.",
    result:
      "A reusable approach to producing standardized cloud base images instead of repeatedly configuring servers after launch.",
  },
];

export const clientWork: ClientWork[] = [
  {
    name: "Jashoda Jewels",
    type: "Freelance client",
    summary:
      "Selected freelance DevOps and infrastructure work for a client application environment.",
    details: [
      "Client engagement included practical infrastructure and deployment support.",
      "Work is kept intentionally high-level here; implementation details can be discussed when appropriate.",
      "Available as a reference for freelance infrastructure and delivery work.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Technology (B.Tech), Computer Science",
  institution: "Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore",
  period: "Jul 2021 — Jul 2025",
  note: "Built a foundation in computer science with a practical focus on cloud, automation, infrastructure, and software delivery.",
};

export const certifications = [
  { name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate", issuer: "Oracle" },
  { name: "AWS APAC — Solutions Architecture Job Simulation", issuer: "AWS" },
  { name: "Google Cloud Computing Foundation", issuer: "Google Cloud" },
  { name: "Microservices Architecture and Implementation", issuer: "Certification" },
  { name: "Cloud Application Developer", issuer: "Certification" },
];

export const services: Service[] = [
  {
    name: "Cloud & infrastructure setup",
    scope:
      "Practical AWS or Azure infrastructure for teams that want a cleaner starting point or are moving away from manually managed environments.",
    bestFor: "New products, growing teams, or workloads outgrowing manual server setup",
    deliverables: [
      "Infrastructure defined with Terraform where appropriate",
      "Networking, compute, storage, and access configuration",
      "Deployment workflow and operational documentation",
      "Handover notes so the environment remains maintainable after delivery",
    ],
  },
  {
    name: "CI/CD & deployment automation",
    scope:
      "Build or improve delivery pipelines so application releases are repeatable, observable, and easier for engineering teams to operate.",
    bestFor: "Teams with manual releases, fragile pipelines, or inconsistent environments",
    deliverables: [
      "CI/CD pipeline design and implementation",
      "Build, test, security, and deployment stages",
      "Environment and release workflow improvements",
      "Runbook for common deployment and rollback operations",
    ],
  },
  {
    name: "Infrastructure review",
    scope:
      "A practical review of an existing cloud or DevOps setup with focus on reliability, security, maintainability, and unnecessary cost.",
    bestFor: "Teams that have infrastructure in place but want an independent technical review",
    deliverables: [
      "Prioritized technical findings",
      "Infrastructure and deployment workflow review",
      "Cost and resource hygiene observations",
      "Actionable remediation plan",
    ],
  },
];

export const articles: Article[] = [
  {
    title: "Getting Started with Kubernetes on Azure",
    summary: "A practical walkthrough of standing up and operating an AKS environment.",
    href: "https://medium.com/@ayushtrivedi11jan",
    topic: "Kubernetes",
    date: "2026",
    readTime: "8 min read",
    takeaways: [
      "Cluster sizing decisions that are difficult to change later",
      "Ingress, DNS, and TLS considerations",
      "What to monitor before running production workloads",
    ],
  },
  {
    title: "Terraform Best Practices I Learned the Hard Way",
    summary: "Practical lessons around state, modules, naming, and maintainable infrastructure code.",
    href: "https://medium.com/@ayushtrivedi11jan",
    topic: "Infrastructure as code",
    date: "2026",
    readTime: "6 min read",
    takeaways: [
      "Keeping state and environments understandable",
      "Knowing when a module adds value",
      "Naming and tagging infrastructure consistently",
    ],
  },
  {
    title: "Building CI/CD Pipelines with Azure DevOps",
    summary: "A practical look at structuring multi-stage delivery workflows.",
    href: "https://medium.com/@ayushtrivedi11jan",
    topic: "CI/CD",
    date: "2025",
    readTime: "7 min read",
    takeaways: [
      "Separating build and deployment responsibilities",
      "Using approvals without making delivery unnecessarily slow",
      "Promoting the same artifact across environments",
    ],
  },
];
