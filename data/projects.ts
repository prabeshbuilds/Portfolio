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
    title: "AWS Multi-region IaC",
    description:
      "Provisioned AWS infrastructure using Terraform, including VPC, public subnet, route table, internet gateway, and EC2 instances. Automated infrastructure deployment and configured secure CLI connectivity to AWS resources using Terraform and AWS CL",
    tags: ["Terraform", "AWS", "EC2","VPC", "Subnet", "EKS"],
    category: "iac",
    status: "live",
    statusLabel: "Production · 3 regions",
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
  title: "Node.js DevOps Pipeline with SonarQube",
  description:
    "End-to-end DevOps pipeline for a Node.js application featuring CI/CD automation, SonarQube code quality analysis, unit testing, and Docker-based deployment. Ensures code quality gates, security checks, and maintainable production releases.",
  tags: ["Node.js", "SonarQube", "CI/CD", "Docker", "Jenkins", "Testing"],
  category: "devops",
  status: "live",
  statusLabel: "Quality gated · SonarQube verified",
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