"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Box, Cpu, ShieldCheck } from "lucide-react";

const BRAND_GREEN = "#6ADA44";

/* Reveal-once hook (same behavior as Contact) */
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

export default function AboutSection() {
  const { ref, visible } = useRevealOnce<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className="scroll-mt-28 relative bg-black text-white py-20 overflow-visible"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* same left alignment as HeroTitle */}
        <div className="pl-24">
          <div
            className={[
              "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
              "transition-all duration-[900ms] ease-out",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            ].join(" ")}
          >
            {/* LEFT CONTENT */}
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-6">
                About Me
              </p>

              <h2
                className="text-[clamp(27px,4vw,50px)] font-semibold leading-tight mb-8 max-w-2xl"
                style={{ textShadow: "0 10px 40px rgba(0,0,0,0.6)" }}
              >
                Engineering performance-driven systems with precision and architectural clarity.
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
                I design backend systems that stay calm under pressure and frontend experiences that don’t fight users.
                <br />
                <br />
                <span style={{ color: BRAND_GREEN }} className="font-semibold">
                  Python
                </span>{" "}
                is where I feel at home.{" "}
                <span style={{ color: BRAND_GREEN }} className="font-semibold">
                  JavaScript
                </span>{" "}
                keeps me humble. Performance, clarity, and maintainability are non-negotiable.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 border border-gray-800 px-5 py-3 rounded-xl bg-[#0b0f0b] transition-all duration-300 hover:border-[#6ADA44] hover:shadow-[0_0_0_1px_rgba(106,218,68,0.30),0_0_35px_rgba(106,218,68,0.20)]">
                  <Box size={18} style={{ color: BRAND_GREEN }} />
                  <span className="text-gray-300">Clean Architecture</span>
                </div>

                <div className="flex items-center gap-3 border border-gray-800 px-5 py-3 rounded-xl bg-[#0b0f0b] transition-all duration-300 hover:border-[#6ADA44] hover:shadow-[0_0_0_1px_rgba(106,218,68,0.30),0_0_35px_rgba(106,218,68,0.20)]">
                  <Cpu size={18} style={{ color: BRAND_GREEN }} />
                  <span className="text-gray-300">Scalable Backend</span>
                </div>

                <div className="flex items-center gap-3 border border-gray-800 px-5 py-3 rounded-xl bg-[#0b0f0b] transition-all duration-300 hover:border-[#6ADA44] hover:shadow-[0_0_0_1px_rgba(106,218,68,0.30),0_0_35px_rgba(106,218,68,0.20)]">
                  <ShieldCheck size={18} style={{ color: BRAND_GREEN }} />
                  <span className="text-gray-300">Production-Ready Systems</span>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center lg:justify-end lg:-translate-y-22">
              {/* whole circle block moves together on hover */}
              <div
                className="
                  relative w-90 h-90 sm:w-105 sm:h-105
                  transition-transform duration-700 ease-out
                  hover:-translate-y-4 hover:scale-[1.03]
                  will-change-transform
                "
              >
                {/* glow */}
                <div
                  className="absolute inset-0 rounded-full blur-3xl opacity-35 transition-opacity duration-700 ease-out hover:opacity-55"
                  style={{ backgroundColor: BRAND_GREEN }}
                />

                {/* portrait */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <Image
                    src="/neon-portrait.png"
                    alt="Neon Sketch Portrait"
                    fill
                    priority={false}
                    className="object-cover"
                    sizes="(max-width: 640px) 360px, 420px"
                    style={{ objectPosition: "50% 12%" }}
                  />
                </div>

                {/* ring */}
                <div className="absolute inset-0 rounded-full ring-1 ring-[rgba(106,218,68,0.22)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
