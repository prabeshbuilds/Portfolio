// components/Community.tsx
"use client";
import Link from "next/link";

type BadgeVariant = "teal" | "purple" | "blue" | "amber" | "coral";

type CommunityEntry = {
  org: string;
  orgSub?: string;
  role: string;
  badge: BadgeVariant;
  dotColor: "green" | "amber" | "blue" | "orange";
  tenure: string;
  description: string;
  tags: string[];
  featured?: boolean;
};

type YearSection = {
  year: string;
  entries: CommunityEntry[];
};

const sections: YearSection[] = [
  {
    year: "2023",
    entries: [
      {
        org: "WordCamp",
        role: "Active participant",
        badge: "teal",
        dotColor: "green",
        tenure: "Full-year participation",
        description:
          "Actively engaged in WordCamp events throughout the year — attending sessions, contributing to discussions, and connecting with the wider WordPress and open-web community.",
        tags: ["WordPress", "Open source", "Community"],
      },
    ],
  },
  {
    year: "2024–25",
    entries: [
      {
        org: "Code for Change",
        orgSub: "Chitwan",
        role: "Secretary",
        badge: "purple",
        dotColor: "amber",
        tenure: "1 year · Full participation",
        description:
          "Served as Secretary of Code for Change Chitwan, handling organizational operations, coordination, and official communications for the full tenure.",
        tags: ["Civic tech", "Chitwan", "Leadership", "Operations"],
      },
      {
        org: "Code Fest 2025",
        role: "Organizer",
        badge: "amber",
        dotColor: "amber",
        tenure: "Code for Change Chitwan · Event lead",
        description:
          "Organized Code Fest 2025 under the Code for Change Chitwan umbrella — managing logistics, speaker coordination, and on-ground execution of the flagship coding event.",
        tags: ["Event management", "Code for Change", "Chitwan"],
      },
    ],
  },
  {
    year: "2026",
    entries: [
      {
        org: "Dev Community Nepal",
        role: "Program lead",
        badge: "blue",
        dotColor: "blue",
        tenure: "Event & program leadership",
        description:
          "Led programs and events for Dev Community Nepal, driving developer education, networking, and community-building initiatives across the Nepali tech ecosystem.",
        tags: ["Nepal tech", "Dev community", "Programs"],
      },
      {
        org: "Sunagava College IT Club",
        role: "President",
        badge: "purple",
        dotColor: "blue",
        tenure: "Tenure 2025–26",
        description:
          "Elected President of the Sunagava College IT Club for the 2025–26 tenure, overseeing club activities, technical workshops, and student developer initiatives.",
        tags: ["Student leadership", "IT club", "Sunagava College"],
      },
      {
        org: "AWS Cloud Club",
        role: "Member",
        badge: "amber",
        dotColor: "orange",
        tenure: "2026 · Active member",
        description:
          "Joined the AWS Cloud Club in 2026, participating in cloud computing workshops, AWS certifications study groups, and hands-on labs with fellow cloud enthusiasts.",
        tags: ["AWS", "Cloud computing", "2026"],
        featured: true,
      },
    ],
  },
];

const badgeStyles: Record<BadgeVariant, string> = {
  teal:   "bg-emerald-50 text-emerald-700 border border-emerald-200",
  purple: "bg-violet-50 text-violet-700 border border-violet-200",
  blue:   "bg-blue-50 text-blue-700 border border-blue-200",
  amber:  "bg-amber-50 text-amber-800 border border-amber-200",
  coral:  "bg-orange-50 text-orange-700 border border-orange-200",
};

const dotStyles: Record<CommunityEntry["dotColor"], string> = {
  green:  "bg-emerald-500",
  amber:  "bg-amber-400",
  blue:   "bg-blue-500",
  orange: "bg-orange-500",
};

function AWSIcon() {
  return (
    <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-amber-50 mr-1.5 flex-shrink-0">
      <svg
        viewBox="0 0 24 24"
        className="w-3.5 h-3.5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.76 13.38l-1.9.69C4.44 14.24 4 14.82 4 15.5c0 .97.89 1.7 1.85 1.49l.91-.2v-3.41zM17.24 13.38v3.41l.91.2c.96.21 1.85-.52 1.85-1.49 0-.68-.44-1.26-.86-1.43l-1.9-.69zM8.5 7.5C8.5 6.12 9.62 5 11 5h2c1.38 0 2.5 1.12 2.5 2.5v6c0 1.38-1.12 2.5-2.5 2.5h-2C9.62 16 8.5 14.88 8.5 13.5v-6z"
          fill="#d97706"
        />
        <path
          d="M9 19h6v.5a1.5 1.5 0 01-3 0V19"
          stroke="#d97706"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function EntryCard({ entry }: { entry: CommunityEntry }) {
  return (
    <div
      className={`flex flex-col gap-2 p-4 rounded-xl border bg-white transition-colors hover:border-gray-300 ${
        entry.featured
          ? "border-amber-300 border-2"
          : "border-gray-200"
      }`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-baseline gap-1 flex-wrap">
          <div className="flex items-center">
            {entry.org === "AWS Cloud Club" && <AWSIcon />}
            <h3 className="text-sm font-semibold text-gray-900">{entry.org}</h3>
          </div>
          {entry.orgSub && (
            <span className="text-[11px] text-gray-400">· {entry.orgSub}</span>
          )}
        </div>
        <span
          className={`text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap ${badgeStyles[entry.badge]}`}
        >
          {entry.role}
        </span>
      </div>

      {/* Tenure */}
      <div className="flex items-center gap-1.5">
        <span
          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotStyles[entry.dotColor]}`}
        />
        <span className="text-[11px] text-gray-400">{entry.tenure}</span>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-500 leading-relaxed">{entry.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1">
        {entry.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-2 py-0.5 rounded bg-gray-100 text-gray-400 border border-gray-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Community() {
  return (
    <section id="community" className="py-24 px-6">
      {/* Back to Home */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          ← Back
        </Link>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">
          Involvement
        </p>
        <h2 className="text-3xl font-bold mb-3">Community participation</h2>
        <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed">
          Open source, developer communities, and student leadership — from
          WordCamp to AWS Cloud Club.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        {sections.map((section) => (
          <div key={section.year} className="flex gap-6">
            {/* Year column */}
            <div className="flex flex-col items-center gap-0 w-14 flex-shrink-0">
              <span className="text-xs font-medium text-blue-600 bg-blue-50 rounded-full px-2.5 py-1 whitespace-nowrap border border-blue-100">
                {section.year}
              </span>
              <div className="flex-1 w-px bg-gray-100 mt-1.5" />
            </div>

            {/* Cards column */}
            <div className="flex flex-col gap-3 flex-1 pb-2">
              {section.entries.map((entry) => (
                <EntryCard key={`${entry.org}-${entry.role}`} entry={entry} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}