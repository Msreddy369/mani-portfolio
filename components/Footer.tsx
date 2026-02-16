"use client";

import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const BRAND_GREEN = "#6ADA44";

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
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export default function Footer() {
  const { ref, visible } = useRevealOnce<HTMLElement>();

  return (
    <footer
      ref={ref}
      className="bg-black text-white pt-16 pb-10 border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`
            pl-12
            transition-all duration-[900ms] ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          {/* Top Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            
            {/* Left */}
            <div>
              <h3 className="text-xl font-semibold">
                Mani Sankar
              </h3>
              <p className="text-gray-400 mt-2 max-w-md">
                Building scalable systems, elegant interfaces, and software that actually ships.
              </p>
            </div>

            {/* Right Socials */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Msreddy369"
                target="_blank"
                rel="noreferrer"
                className="
                  w-11 h-11 flex items-center justify-center
                  rounded-xl border border-white/10 bg-white/[0.03]
                  transition-all duration-300
                  hover:border-[rgba(106,218,68,0.45)]
                  hover:shadow-[0_0_0_1px_rgba(106,218,68,0.25),0_0_30px_rgba(106,218,68,0.18)]
                "
              >
                <Github size={18} style={{ color: BRAND_GREEN }} />
              </a>

              <a
                href="https://www.linkedin.com/in/mani-gr-0290103a2/"
                target="_blank"
                rel="noreferrer"
                className="
                  w-11 h-11 flex items-center justify-center
                  rounded-xl border border-white/10 bg-white/[0.03]
                  transition-all duration-300
                  hover:border-[rgba(106,218,68,0.45)]
                  hover:shadow-[0_0_0_1px_rgba(106,218,68,0.25),0_0_30px_rgba(106,218,68,0.18)]
                "
              >
                <Linkedin size={18} style={{ color: BRAND_GREEN }} />
              </a>

              <a
                href="mailto:manishankar.work999@gmail.com"
                className="
                  w-11 h-11 flex items-center justify-center
                  rounded-xl border border-white/10 bg-white/[0.03]
                  transition-all duration-300
                  hover:border-[rgba(106,218,68,0.45)]
                  hover:shadow-[0_0_0_1px_rgba(106,218,68,0.25),0_0_30px_rgba(106,218,68,0.18)]
                "
              >
                <Mail size={18} style={{ color: BRAND_GREEN }} />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-4">
            <p>
              © {new Date().getFullYear()} Mani Sankar. All rights reserved.
            </p>
            <p>
              Built with Next.js · Tailwind · Passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
