// components/Hero.tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";


const commands = [
  "kubectl get pods --all-namespaces",
  "terraform apply --auto-approve",
  "docker build -t app:latest .",
  "helm upgrade --install my-app ./chart",
  "aws ecs update-service --force-new-deployment",
  "ansible-playbook -i inventory deploy.yml",
  "jenkins-cli build my-pipeline",
  "ngrok http 3000",
];

const stack = [
  { name: "Linux", color: "#e5c432" },
  { name: "Kubernetes", color: "#326CE5" },
  { name: "AWS",        color: "#FF9900" },
  { name: "Terraform",  color: "#7B42BC" },
  { name: "Docker",     color: "#2496ED" },
  { name: "Nexus",  color: "#E24329" },
  { name: "Ansible",       color: "#0F1689" },
  { name: "Jenkins",     color: "#40AEF0" },
  { name: "Git",        color: "#F05032" },
  { name: "Ngrok",        color: "#F05032" },
  { name: "Postman",        color: "#F05032" },
  { name: "Nginx",        color: "#F05032" },

];

const stats = [
  { num: "99.9%", label: "Uptime delivered" },
  { num: "40+",   label: "Pipelines built"  },
  { num: "3×",    label: "Faster deploys"   },
  { num: "1yrs", label: "Cloud experience" },
];

export default function Hero() {
  const [cmdText, setCmdText] = useState("");
  const [cmdIndex, setCmdIndex] = useState(0);

  const handleNextCommand = () => {
    setCmdIndex((i) => (i + 1) % commands.length);
  };

  useEffect(() => {
    let charIndex = 0;
    setCmdText("");
    const iv = setInterval(() => {
      setCmdText(commands[cmdIndex].slice(0, ++charIndex));
      if (charIndex >= commands[cmdIndex].length) {
        clearInterval(iv);
        setTimeout(handleNextCommand, 2000);
      }
    }, 45);
    return () => clearInterval(iv);
  }, [cmdIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
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

      {/* Availability badge */}
      <div className="relative flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200 mb-6">
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <span className="w-1.5 h-1.5 rounded-full bg-green-500" aria-label="Online status" />
        {" "}
        Open to new opportunities
      </div>

      {/* Headline */}
      <h1 className="relative text-4xl md:text-5xl font-bold leading-tight max-w-2xl mb-4">
        Building reliable infrastructure{" "}
        <span className="text-blue-600">at cloud scale</span>
      </h1>

      {/* Subheading */}
      <p className="relative text-gray-500 max-w-lg text-base leading-relaxed mb-6">
        DevOps &amp; Cloud Engineer specializing in CI/CD pipelines, container
        orchestration, and infrastructure as code. I turn complex deployments
        into repeatable, automated workflows.
      </p>

      {/* Animated terminal */}
      <div className="relative flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 font-mono text-xs text-gray-500 mb-6 max-w-sm w-full">
        <span className="text-green-600">$</span>
        <span>{cmdText}</span>
        <span className="inline-block w-1.5 h-3.5 bg-gray-400 animate-pulse" />
      </div>

      {/* Tech stack chips */}
      <div className="relative flex flex-wrap justify-center gap-2 mb-7">
        {stack.map((s) => (
          <span
            key={s.name}
            className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-gray-500"
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: s.color }}
            />
            {s.name}
          </span>
        ))}
      </div>

      {/* CTA buttons */}
      <div className="relative flex gap-3 flex-wrap justify-center mb-10">
        <Link
          href="/My_works/Project"
          className="px-5 py-2.5 text-sm font-medium bg-black text-white rounded-lg hover:opacity-80 transition-opacity"
        >
          View my work
        </Link>
        <Link
          href="/My_works/Resume"
          className="px-5 py-2.5 text-sm font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          View resume
        </Link>
      </div>

      {/* Stats bar */}
      <div className="relative flex divide-x divide-gray-200 border border-gray-200 rounded-xl overflow-hidden bg-white">
        {stats.map((s) => (
          <div key={s.label} className="px-6 py-3 text-center">
            <p className="text-lg font-bold text-gray-900">{s.num}</p>
            <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}