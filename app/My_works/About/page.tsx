// components/About.tsx
"use client";

const skills = [
  { name: "Kubernetes", color: "#326CE5" },
  { name: "AWS",        color: "#FF9900" },
  { name: "Terraform",  color: "#7B42BC" },
  { name: "Docker",     color: "#2496ED" },
  { name: "GitLab CI",  color: "#E24329" },
  { name: "Helm",       color: "#0F1689" },
  { name: "ArgoCD",     color: "#40AEF0" },
  { name: "Git",        color: "#F05032" },
  { name: "GCP",        color: "#4285F4" },
  { name: "Azure",      color: "#0089D6" },
];

const stats = [
  { num: "99.9%", label: "Uptime delivered" },
  { num: "40+",   label: "Pipelines built"  },
  { num: "3×",    label: "Faster deploys"   },
  { num: "5 yrs", label: "Cloud experience" },
];

const timeline = [
  {
    role: "Senior DevOps Engineer",
    company: "Acme Cloud Solutions",
    period: "2022 — Present",
    desc: "Led Kubernetes migration for 20+ microservices, reduced deploy time by 3×.",
    current: true,
  },
  {
    role: "Cloud Engineer",
    company: "TechNova Pvt Ltd",
    period: "2020 — 2022",
    desc: "Built AWS infrastructure with Terraform, maintained 99.9% uptime SLA.",
    current: false,
  },
  {
    role: "Junior DevOps Engineer",
    company: "Startup Hub Nepal",
    period: "2019 — 2020",
    desc: "Set up CI/CD pipelines with GitLab CI, containerized legacy apps with Docker.",
    current: false,
  },
];

const values = [
  {
    icon: "⚙️",
    title: "Automation first",
    desc: "If it runs more than once, it should be automated — pipelines, provisioning, monitoring.",
  },
  {
    icon: "🔒",
    title: "Security baked in",
    desc: "Security isn't an afterthought — it's woven into every pipeline and access policy.",
  },
  {
    icon: "📈",
    title: "Observable systems",
    desc: "Every system ships with logging, metrics, and alerting — silent failures aren't acceptable.",
  },
];

const certs = [
  { title: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
  { title: "Certified Kubernetes Administrator (CKA)", issuer: "CNCF", year: "2022" },
  { title: "B.E. Computer Engineering", issuer: "Tribhuvan University, Kathmandu", year: "2019" },
];

export default function About() {
  return (
    <section
      id="about"
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

      <div className="relative w-full max-w-2xl">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-medium tracking-widest uppercase text-gray-400">
            About me
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Intro */}
        <div className="flex items-start justify-between gap-8 mb-8">
          <div className="flex-1">
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Open to new opportunities
            </div>

            <h2 className="text-2xl font-bold leading-snug text-gray-900 mb-3">
              DevOps &amp; Cloud Engineer<br />
              building{" "}
              <span className="text-blue-600">infrastructure at scale</span>
            </h2>

            <p className="text-sm text-gray-500 leading-relaxed mb-3">
              I&apos;m a DevOps and Cloud Engineer with 5+ years of experience designing and
              operating cloud-native infrastructure. I specialize in CI/CD automation, container
              orchestration, and infrastructure as code — turning complex deployments into
              reliable, repeatable workflows.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Based in Kathmandu, I&apos;ve worked across fast-moving teams to deliver
              high-availability systems on AWS, streamline release cycles, and reduce operational
              overhead through thoughtful automation.
            </p>
          </div>

          {/* Avatar */}
          <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-2xl font-bold text-blue-600">
            YN
          </div>
        </div>

        {/* Stats bar */}
        <div className="flex divide-x divide-gray-200 border border-gray-200 rounded-xl overflow-hidden bg-white mb-8">
          {stats.map((s) => (
            <div key={s.label} className="flex-1 px-4 py-3 text-center">
              <p className="text-lg font-bold text-gray-900">{s.num}</p>
              <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Skills + Timeline */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {/* Skills */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="text-xs font-medium text-gray-900 mb-4">Core skills</h3>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((s) => (
                <span
                  key={s.name}
                  className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-200 text-gray-500"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: s.color }}
                  />
                  {s.name}
                </span>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="text-xs font-medium text-gray-900 mb-4">Experience</h3>
            <div className="flex flex-col">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-3 pb-4 last:pb-0">
                  <div className="flex flex-col items-center flex-shrink-0 w-4">
                    <div
                      className="w-2 h-2 rounded-full mt-1 flex-shrink-0"
                      style={{ background: item.current ? "#2563eb" : "#d1d5db" }}
                    />
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-gray-200 mt-1" />
                    )}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-900">{item.role}</p>
                    <p className="text-xs text-blue-600 mt-0.5">{item.company}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.period}</p>
                    <p className="text-xs text-gray-400 leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white border border-gray-200 rounded-xl p-4"
            >
              <div className="text-base mb-2">{v.icon}</div>
              <p className="text-xs font-medium text-gray-900 mb-1">{v.title}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-6" />

        {/* Education & Certs */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium tracking-widest uppercase text-gray-400">
              Education &amp; certifications
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="flex flex-col gap-2.5">
            {certs.map((c) => (
              <div
                key={c.title}
                className="flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-lg"
              >
                <div>
                  <p className="text-xs font-medium text-gray-900">{c.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{c.issuer}</p>
                </div>
                <span className="text-xs text-gray-400">{c.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        {/* <div className="flex gap-2.5 flex-wrap">
          <a
            href="/My_works/Project"
            className="px-5 py-2.5 text-sm font-medium bg-black text-white rounded-lg hover:opacity-80 transition-opacity"
          >
            View my work
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-5 py-2.5 text-sm font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Download resume
          </a>
          <a
            href="mailto:hello@yourname.com"
            className="px-5 py-2.5 text-sm font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Get in touch
          </a>
        </div> */}

      </div>
    </section>
  );
}