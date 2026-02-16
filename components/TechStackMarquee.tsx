"use client";

import React from "react";

type Tech = {
  name: string;
  slug: string;
};

const techStack: Tech[] = [
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Docker", slug: "docker" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "JavaScript", slug: "javascript" },
  { name: "Python", slug: "python" },
  { name: "FastAPI", slug: "fastapi" },
];

// white icons (visible on black)
const ICON = (slug: string) => `https://cdn.simpleicons.org/${slug}/6ADA44`;


export default function TechStackMarquee() {
  const items = [...techStack, ...techStack];

  return (
    <section className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="pl-12">
          <div className="relative mt-10 flex justify-center">
            <div className="relative overflow-hidden w-[1100px] rounded-full border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
              {/* transparent fade edges */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

              {/* moving track */}
              <div className="flex w-max animate-tech-marquee">
                {items.map((t, idx) => (
                  <div
                    key={`${t.slug}-${idx}`}
                    className="flex items-center gap-3 px-8 py-5"
                  >
                    <img
                      src={ICON(t.slug)}
                      alt={t.name}
                      className="h-7 w-7 opacity-70 hover:opacity-100 transition"
                      loading="lazy"
                      draggable={false}
                    />
                    <span className="text-lg font-semibold text-white/85 whitespace-nowrap">
                      {t.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* subtle green glow behind */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-20"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, #6ADA44 0%, transparent 60%)",
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes tech-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-tech-marquee {
          animation: tech-marquee 40s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-tech-marquee:hover {
            animation-play-state: paused;
            }
        }
      `}</style>
    </section>
  );
}
