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
  title: "Django CI/CD Pipeline",
  description:
    "Automated CI/CD pipeline for Django applications using GitHub Actions, Docker, and Nginx. Includes automated testing, build, and zero-downtime deployment to production.",
  tags: ["Django", "Jenkins", "Docker", "Nginx", "CI/CD"],
  category: "devops",
  status: "live",
  statusLabel: "Live · Stable deployments",
  featured: true,
  accentColor: "bg-green-50",
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
  title: "Node.js Application Deployment on Kubernetes (3-Node Cluster)",
  description:
    "Deployed and orchestrated a Node.js application on a 3-node Kubernetes cluster with automated scaling, rolling updates, and self-healing. Includes Ingress routing, ConfigMaps, Secrets management, and horizontal pod autoscaling for high availability and fault tolerance.",
  tags: ["Kubernetes", "Node.js", "Docker", "AWS EKS", "HPA", "CI/CD"],
  category: "cloud",
  status: "live",
  statusLabel: "Live · Multi-node production cluster",
  accentColor: "bg-blue-50",
  repoUrl: "#",
},
 {
  title: "Ansible Incident Automation & Runbook Orchestration",
  description:
    "Automated incident response system built with Ansible to execute runbooks across multiple servers. Integrates with Slack and PagerDuty to triage alerts, trigger remediation playbooks, restart services, collect logs, and auto-create Jira tickets, reducing MTTR significantly.",
  tags: ["Ansible", "Slack API", "PagerDuty", "Jira", "Automation", "DevOps"],
  category: "automation",
  status: "live",
  statusLabel: "Active · Incident response automation",
  accentColor: "bg-amber-50",
  demoUrl: "#",
  repoUrl: "#",
},
  {
  title: "Node.js DevOps Pipeline with SonarQube",
  description:
    "End-to-end DevOps pipeline for a Node.js application featuring CI/CD automation, SonarQube code quality analysis, unit testing, and Docker-based deployment. Ensures code quality gates, security checks, and maintainable production releases.",
  tags: ["Node.js", "SonarQube", "CI/CD", "Docker", "Jenkins", "Testing"],
  category: "devops",
  status: "live",
  statusLabel: "Quality gated · SonarQube verified",
  accentColor: "bg-blue-50",
  repoUrl: "#",
},
{
  title: "Ansible Multi-Node Automation for Django & Node.js",
  description:
    "Infrastructure automation using Ansible to provision and configure multiple Ubuntu servers. Automatically deploys Django and Node.js applications across different nodes with Nginx setup, system dependencies, security hardening, and zero-touch provisioning.",
  tags: ["Ansible", "Django", "Node.js", "Ubuntu", "Nginx", "Automation"],
  category: "automation",
  status: "live",
  statusLabel: "Live · Multi-node orchestration",
  accentColor: "bg-green-50",
  demoUrl: "#",
  repoUrl: "#",
}
];