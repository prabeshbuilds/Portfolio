// components/Resume.tsx
"use client";

const contact = {
  name: "Your Name",
  title: "DevOps & Cloud Engineer",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Kathmandu, Nepal",
  linkedin: "linkedin.com/in/yourprofile",
  github: "github.com/yourusername",
};

const summary = "DevOps & Cloud Engineer with 5+ years of experience designing and operating cloud-native infrastructure. Specializing in CI/CD automation, container orchestration, and infrastructure as code — turning complex deployments into reliable, repeatable workflows.";

const experience = [
  {
    role: "Senior DevOps Engineer",
    company: "Acme Cloud Solutions",
    period: "2022 — Present",
    desc: "Led Kubernetes migration for 20+ microservices, reduced deploy time by 3×. Implemented GitOps with ArgoCD, automated CI/CD pipelines with GitLab CI, and maintained 99.9% uptime SLA.",
  },
  {
    role: "Cloud Engineer",
    company: "TechNova Pvt Ltd",
    period: "2020 — 2022",
    desc: "Built AWS infrastructure with Terraform, set up monitoring with Prometheus/Grafana, and containerized applications with Docker. Reduced operational overhead by 40%.",
  },
  {
    role: "Junior DevOps Engineer",
    company: "Startup Hub Nepal",
    period: "2019 — 2020",
    desc: "Set up CI/CD pipelines with GitLab CI, containerized legacy apps with Docker, and managed cloud deployments on AWS. Improved deployment frequency from weekly to daily.",
  },
];

const skills = [
  "Kubernetes", "AWS", "Terraform", "Docker", "GitLab CI", "Helm", "ArgoCD", "Git", "GCP", "Azure",
  "Python", "Bash", "Jenkins", "Prometheus", "Grafana", "Ansible", "Linux", "Networking"
];

const education = [
  { degree: "B.E. Computer Engineering", institution: "Tribhuvan University, Kathmandu", year: "2019" },
];

const certifications = [
  { title: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
  { title: "Certified Kubernetes Administrator (CKA)", issuer: "CNCF", year: "2022" },
];

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative min-h-screen px-6 py-20 flex flex-col items-center overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative w-full max-w-4xl bg-white border border-gray-200 rounded-xl p-8 shadow-sm">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{contact.name}</h1>
          <p className="text-lg text-blue-600 mb-4">{contact.title}</p>
          <div className="text-sm text-gray-500 space-y-1">
            <p>{contact.email} | {contact.phone}</p>
            <p>{contact.location}</p>
            <p>{contact.linkedin} | {contact.github}</p>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Professional Summary</h2>
          <p className="text-sm text-gray-600 leading-relaxed">{summary}</p>
        </div>

        {/* Experience */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={`${exp.role}-${exp.company}`} className="border-l-2 border-blue-200 pl-4">
                <h3 className="text-lg font-medium text-gray-900">{exp.role}</h3>
                <p className="text-blue-600 text-sm mb-1">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Education</h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.degree}>
                  <h3 className="text-sm font-medium text-gray-900">{edu.degree}</h3>
                  <p className="text-blue-600 text-sm">{edu.institution}</p>
                  <p className="text-gray-400 text-sm">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Certifications</h2>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert.title}>
                  <h3 className="text-sm font-medium text-gray-900">{cert.title}</h3>
                  <p className="text-blue-600 text-sm">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download PDF */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <a
            href="/Prabesh-CV.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Download PDF Resume
          </a>
        </div>
      </div>
    </section>
  );
}