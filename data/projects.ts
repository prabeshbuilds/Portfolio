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
  title: "Java CI/CD Pipeline",
  description:
    "Built and automated a CI/CD pipeline for a Java application using Jenkins, GitHub, Docker, and Nginx. Integrated GitHub webhooks for automated build, testing, Docker image creation, and deployment on AWS EC2 instances with zero-downtime deployment support.",
  tags: ["Java", "Jenkins","Github", "Docker", "CI/CD", "AWS"],
  category: "devops",
  status: "live",
  statusLabel: "Live · Stable deployments",
  featured: true,
  accentColor: "bg-green-50",
  demoUrl: "#",
  repoUrl: "https://github.com/prabeshbuilds/Student_ManagementSystem-Devops",
},
{
  title: "AWS Multi-Region Infrastructure with Terraform",
  description:
    "Provisioned scalable AWS infrastructure using Terraform across multiple regions. The setup includes VPC, public and private subnets, route tables, internet gateway, load balancer, EC2 instances, and auto scaling groups. This project demonstrates Infrastructure as Code (IaC) practices for highly available, fault-tolerant, and production-ready cloud architecture on AWS.",
  tags: [
    "Terraform",
    "AWS",
    "EC2",
    "VPC",
    "Subnet",
    "Load Balancer",
    "Auto Scaling",
    "Route Table",
    "Internet Gateway"
  ],
  category: "iac",
  status: "live",
  statusLabel: "Production · Multi-region HA",
  accentColor: "bg-purple-50",
  repoUrl: "https://github.com/prabeshbuilds/terraform-aws-vpc-ec2",
},
  {
  title: "Node.js Application Deployment on Kubernetes (3-Node Cluster)",
  description:
    "Deployed and managed Next.js personal website and Java Student Management applications on a Kubernetes cluster with 3 replica sets for high availability and zero-downtime deployment. Configured Ingress routing, Persistent Volume Claims (PVC), ConfigMaps, Secrets, and Horizontal Pod Autoscaling (HPA) to ensure scalability, fault tolerance, and reliable production deployment.",
  tags: ["Kubernetes", "Next.js","Java", "Docker","Minikube", "AWS EKS", "HPA", "Ingress"],
  category: "cloud",
  status: "live",
  statusLabel: "Live · Multi-node production cluster",
  accentColor: "bg-blue-50",
  repoUrl: "https://github.com/prabeshbuilds/-Kubernetes-Nodejs-projects",
},
 {
  title: "Ansible Incident Automation & Runbook Orchestration",
  description:
    "Automated Ubuntu server provisioning using Ansible, including installation and configuration of Docker and Docker Compose. The playbooks handle application code deployment to the remote server and orchestrate a Docker Compose stack to launch a fully functional demo environmen",
  tags: ["Ansible", "EC2-Server", "Bash-Scripting", "Automation"],
  category: "automation",
  status: "live",
  statusLabel: "Active · Incident response automation",
  accentColor: "bg-amber-50",
  demoUrl: "#",
  repoUrl: "https://github.com/prabeshbuilds/Anisible-Devops-Setup-on-Server",
},
  {
 title: "QuickCart – Next.js DevOps CI/CD Pipeline with Monitoring",
description:
  "QuickCart is a full-stack e-commerce application built with Next.js and deployed using a complete DevOps CI/CD pipeline. It integrates Jenkins for automation, SonarQube for code quality analysis, and Docker for containerized deployments. The system also includes Grafana-based monitoring to track application uptime, CPU usage, and system performance in real time, ensuring production-ready reliability and maintainability.",
tags: [
  "Next.js",
  "DevOps",
  "CI/CD",
  "Jenkins",
  "SonarQube",
  "Docker",
  "Grafana",
  "Monitoring"
],
category: "devops",
status: "live",
statusLabel: "Production Ready · CI/CD + Monitoring Enabled",
accentColor: "bg-blue-50",
repoUrl: "https://github.com/prabeshbuilds/QuickCart_Project",
},
{
  title: "Monitoring the Node.js Application with Prometheus & Grafana",
  description:
    "Built Grafana dashboards integrated with Prometheus to monitor system and application metrics in real time with alerting On Slack & Discord",
  tags: ["Node.js", "Prometheus", "Grafana", "Ubuntu", "Slack", "Discord", "Automation"],
  category: "automation",
  status: "live",
  statusLabel: "Live · Real-time monitoring",
  accentColor: "bg-green-50",
  demoUrl: "#",
  repoUrl: "https://github.com/prabeshbuilds/Monitoring-Setup",
}
];