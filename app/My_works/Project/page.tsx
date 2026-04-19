// components/Projects.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { projects, type Project } from "@/data/projects";

const FILTERS = [
  { label: "All",        value: "all"        },
  { label: "DevOps",     value: "devops"     },
  { label: "Cloud",      value: "cloud"      },
  { label: "Automation", value: "automation" },
  { label: "IaC",        value: "iac"        },
] as const;

const statusColor: Record<Project["status"], string> = {
  live:     "bg-green-500",
  wip:      "bg-amber-400",
  archived: "bg-gray-400",
};

export default function Projects() {
  const [active, setActive] = useState("all");

  const filtered = projects.filter(
    (p) => active === "all" || p.category === active
  );

  return (
    <section id="projects" className="py-24 px-6">
      {/* Back to Home */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
        
        </Link>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">
          Portfolio
        </p>
        <h2 className="text-3xl font-bold mb-3">Things I've built</h2>
        <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed">
          DevOps, cloud infrastructure, and automation projects — from CI/CD
          pipelines to Kubernetes deployments.
        </p>
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`text-xs px-4 py-1.5 rounded-full border transition-colors ${
              active === f.value
                ? "bg-black text-white border-black"
                : "border-gray-200 text-gray-500 hover:bg-gray-50"
            }`}
          >
            {f.label}
            {f.value === "all" && (
              <span className="ml-1.5 opacity-50">{projects.length}</span>
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {filtered.map((p, i) => (
          <div
            key={p.title}
            className={`flex flex-col rounded-xl overflow-hidden border transition-colors hover:border-gray-300 ${
              p.featured ? "border-blue-300 border-2" : "border-gray-200"
            }`}
          >
            {/* Banner */}
            <div
              className={`h-20 flex items-center justify-center relative ${p.accentColor}`}
              style={{
                backgroundImage:
                  "linear-gradient(#e5e7eb 1px,transparent 1px),linear-gradient(90deg,#e5e7eb 1px,transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            >
              {/* swap for a real icon per project */}
              <div className="relative w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-sm font-medium text-gray-500">
                {p.title[0]}
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-2 p-4 flex-1 bg-white">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold text-gray-900">{p.title}</h3>
                {p.featured && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 whitespace-nowrap">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500 leading-relaxed flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 rounded bg-gray-100 text-gray-400 border border-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${statusColor[p.status]}`}
                />
                <span className="text-[11px] text-gray-400">{p.statusLabel}</span>
              </div>
            </div>

            {/* Footer */}
            <div className="flex gap-2 px-4 py-2.5 border-t border-gray-100 bg-white">
              {p.demoUrl && (
                <a
                  href={p.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] px-2.5 py-1 rounded border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  Live demo ↗
                </a>
              )}
              {p.repoUrl && (
                <a
                  href={p.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] px-2.5 py-1 rounded border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}