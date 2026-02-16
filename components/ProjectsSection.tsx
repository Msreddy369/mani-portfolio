"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const BRAND_GREEN = "#6ADA44";

type Project = {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  thumbnail: string;
  href?: string;
  repo?: string;
};

const projects: Project[] = [
  {
    title: "FarmFresh Delivery System",
    description:
      "A full-stack grocery ordering experience with smooth UI, modern browsing, and a clean checkout flow.",
    tech: ["React", "Next.js", "Tailwind", "UI/UX"],
    highlights: [
      "Product browsing + cart UX tuned for speed",
      "Clean component structure + reusable UI blocks",
      "Responsive layout with smooth interactions",
    ],
    thumbnail: "/projects/farmfresh.png",
    href: "#",
    repo: "#",
  },
  {
    title: "AI Autopilot (AutoTriage LLM App)",
    description:
      "Automates workflows with smart routing, structured outputs, and reliable fallbacks for real usage.",
    tech: ["Python", "FastAPI", "RAG"],
    highlights: [
      "Tool-based workflow orchestration + safe fallbacks",
      "Audit-friendly outputs + structured responses",
      "Latency optimizations with async + caching",
    ],
    thumbnail: "/projects/ai-autopilot.png",
    href: "#",
    repo: "https://github.com/Msreddy369/autotriage-llm-app",
  },
  {
    title: "ROW.KOO (Netflix Replica)",
    description:
      "A Netflix-style browsing experience with rows, previews, and fast navigation that feels snappy.",
    tech: ["Next.js", "TypeScript", "UI"],
    highlights: [
      "Row-based UI + clean content discovery layout",
      "Performance-first rendering + smooth transitions",
      "Responsive UI without layout jumps",
    ],
    thumbnail: "/projects/rowkoo.png",
    href: "https://rowkoo.ccbp.tech/",
    repo: "#",
  },
];

function TechPill({ label }: { label: string }) {
  return (
    <span className="text-xs font-semibold px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/80">
      {label}
    </span>
  );
}

/* Reveal-once hook (same as About/Contact) */
function useRevealOnce<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // reveal only once
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export default function ProjectsSection() {
  const { ref, visible } = useRevealOnce<HTMLElement>();

  return (
    <section
      id="projects"
      ref={ref}
      className="scroll-mt-32 relative bg-black text-white pt-20 pb-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* align with your HeroTitle / TechMarquee */}
        <div className="pl-22">
          {/* ✅ reveal wrapper */}
          <div
            className={[
              "transition-all duration-[900ms] ease-out",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            ].join(" ")}
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles size={18} style={{ color: BRAND_GREEN }} />
              <p className="uppercase tracking-[0.3em] text-sm text-gray-400">
                Projects
              </p>
            </div>

            <h2
              className="text-[clamp(28px,3.2vw,44px)] font-semibold leading-tight max-w-3xl"
              style={{ textShadow: "0 10px 40px rgba(0,0,0,0.6)" }}
            >
              Things I’ve built that are clean, fast, and actually ship.
            </h2>

            <p className="mt-4 text-gray-400 text-lg max-w-3xl leading-relaxed">
              A few highlights from work that blends backend stability with frontend polish —
              and the occasional battle against “it worked on my machine.”
            </p>

            {/* Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.map((p) => (
                <div
                  key={p.title}
                  className="
                    group relative overflow-hidden rounded-2xl
                    border border-white/10 bg-white/[0.03]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[rgba(106,218,68,0.35)]
                    hover:shadow-[0_0_0_1px_rgba(106,218,68,0.22),0_0_45px_rgba(106,218,68,0.18)]
                  "
                >
                  {/* subtle glow wash */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "radial-gradient(900px circle at 30% 20%, rgba(106,218,68,0.14), transparent 55%)",
                    }}
                  />

                  {/* Thumbnail */}
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <Image
                      src={p.thumbnail}
                      alt={p.title + " thumbnail"}
                      fill
                      priority={false}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* icon buttons */}
                    <div className="absolute right-3 top-3 flex items-center gap-2">
                      {p.repo ? (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="
                            inline-flex items-center justify-center
                            w-10 h-10 rounded-xl
                            border border-white/10 bg-black/40 backdrop-blur
                            transition-all duration-300
                            hover:border-[rgba(106,218,68,0.35)]
                            hover:shadow-[0_0_0_1px_rgba(106,218,68,0.25),0_0_28px_rgba(106,218,68,0.18)]
                          "
                          aria-label="GitHub Repo"
                          title="GitHub"
                        >
                          <Github size={18} style={{ color: BRAND_GREEN }} />
                        </a>
                      ) : null}

                      {p.href ? (
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noreferrer"
                          className="
                            inline-flex items-center justify-center
                            w-10 h-10 rounded-xl
                            border border-white/10 bg-black/40 backdrop-blur
                            transition-all duration-300
                            hover:border-[rgba(106,218,68,0.35)]
                            hover:shadow-[0_0_0_1px_rgba(106,218,68,0.25),0_0_28px_rgba(106,218,68,0.18)]
                          "
                          aria-label="Live Link"
                          title="Live"
                        >
                          <ExternalLink size={18} style={{ color: BRAND_GREEN }} />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <div className="relative p-6 flex flex-col h-full">
                    <h3 className="text-xl font-semibold text-white leading-snug">
                      {p.title}
                    </h3>

                    <p className="mt-3 text-gray-400 leading-relaxed">
                      {p.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <TechPill key={t} label={t} />
                      ))}
                    </div>

                    <div className="mt-5 pt-5 border-t border-white/10">
                      <ul className="space-y-2 text-white/85">
                        {p.highlights.map((h) => (
                          <li key={h} className="flex gap-2">
                            <span style={{ color: BRAND_GREEN }}>•</span>
                            <span className="text-sm leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* background fade */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 opacity-30"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(106,218,68,0.08))",
        }}
      />
    </section>
  );
}
