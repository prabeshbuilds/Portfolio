// data/projects.ts
export type Project = {
  title: string;
  description: string;
  tags: string[];
  category: "devops" | "cloud" | "automation" | "iac";
  status: "live" | "wip" | "archived";
  statusLabel: string;
  featured?: boolean;
  demoUrl?: string;
  repoUrl?: string;
  accentColor: string; // tailwind bg class for banner
};

export const projects: Project[] = [
  {
    title: "GitOps CI/CD Platform",
    description:
      "End-to-end GitOps pipeline using ArgoCD, GitHub Actions, and Helm. Zero-downtime deployments with automated rollback on failure.",
    tags: ["ArgoCD", "GitHub Actions", "Helm", "K8s"],
    category: "devops",
    status: "live",
    statusLabel: "Live · 99.98% uptime",
    featured: true,
    accentColor: "bg-blue-50",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "AWS Multi-region IaC",
    description:
      "Terraform modules for provisioning AWS infrastructure across 3 regions. Includes VPC, EKS, RDS, and S3 with state locking via DynamoDB.",
    tags: ["Terraform", "AWS", "EKS", "RDS"],
    category: "iac",
    status: "live",
    statusLabel: "Production · 3 regions",
    accentColor: "bg-purple-50",
    repoUrl: "#",
  },
  {
    title: "Kubernetes cost optimizer",
    description:
      "Automated pod right-sizing and node autoscaling that reduced cloud spend by 38% across a 200-node EKS cluster.",
    tags: ["Kubernetes", "AWS EKS", "Python"],
    category: "cloud",
    status: "live",
    statusLabel: "Saved $14k/mo",
    accentColor: "bg-teal-50",
    repoUrl: "#",
  },
  {
    title: "Incident automation bot",
    description:
      "Slack bot that auto-triages PagerDuty alerts, creates Jira tickets, and runs runbooks. Reduced MTTR by 60%.",
    tags: ["Python", "Slack API", "PagerDuty"],
    category: "automation",
    status: "live",
    statusLabel: "In use · 12 teams",
    accentColor: "bg-amber-50",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Security scanning pipeline",
    description:
      "Unified Docker image scanning with Trivy, Snyk, and OWASP ZAP — Slack notifications and SBOM export included.",
    tags: ["Trivy", "Snyk", "Docker", "CI"],
    category: "devops",
    status: "live",
    statusLabel: "Active · 0 CVEs shipped",
    accentColor: "bg-red-50",
    repoUrl: "#",
  },
  {
    title: "Observability stack",
    description:
      "Full observability platform with Prometheus, Grafana, Loki, and Tempo. Unified dashboards for metrics, logs, and traces.",
    tags: ["Prometheus", "Grafana", "Loki", "Tempo"],
    category: "automation",
    status: "live",
    statusLabel: "Live · 500+ dashboards",
    accentColor: "bg-gray-50",
    demoUrl: "#",
    repoUrl: "#",
  },
];