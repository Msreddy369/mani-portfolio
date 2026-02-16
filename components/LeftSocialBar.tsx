"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const BRAND_GREEN = "#6ADA44";

export default function LeftSocialBar() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // show button only after user scrolls down a bit
      setShowTop(window.scrollY > 220);
    };

    onScroll(); // initial
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pillBase =
    "group relative w-14 h-14 rounded-full flex items-center justify-center " +
    "bg-[#0B1116]/80 border border-white/10 " +
    "shadow-[0_12px_40px_rgba(0,0,0,0.55)] " +
    "transition-all duration-300 " +
    "hover:-translate-y-1 hover:scale-[1.06] " +
    "hover:border-white/20 hover:shadow-[0_18px_70px_rgba(0,0,0,0.75)] " +
    "active:scale-[0.98]";

  const glowRing =
    "pointer-events-none absolute inset-0 rounded-full opacity-0 " +
    "transition-opacity duration-300 group-hover:opacity-100";

  return (
    <div className="fixed left-6 bottom-16 z-[60]">
      <div className="flex flex-col gap-6">
        {/* GitHub */}
        <a
          href="https://github.com/Msreddy369"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
          className={pillBase}
        >
          <Github
            size={22}
            strokeWidth={2}
            style={{ color: BRAND_GREEN }}
            className="transition-transform duration-300 group-hover:rotate-12"
          />
          <span
            className={glowRing}
            style={{ boxShadow: "0 0 0 6px rgba(106,218,68,0.10)" }}
          />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/mani-gr-0290103a2/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
          className={pillBase}
        >
          <Linkedin
            size={22}
            strokeWidth={2}
            style={{ color: BRAND_GREEN }}
            className="transition-transform duration-300 group-hover:rotate-12"
          />
          <span
            className={glowRing}
            style={{ boxShadow: "0 0 0 6px rgba(106,218,68,0.10)" }}
          />
        </a>

        {/* Email */}
        <a
          href="mailto:manishankar.work999@gmail.com"
          aria-label="Email"
          title="Email"
          className={pillBase}
        >
          <Mail
            size={22}
            strokeWidth={2}
            style={{ color: BRAND_GREEN }}
            className="transition-transform duration-300 group-hover:rotate-12"
          />
          <span
            className={glowRing}
            style={{ boxShadow: "0 0 0 6px rgba(106,218,68,0.10)" }}
          />
        </a>

        {/* Back to top (only when scrolled) */}
        <button
          type="button"
          aria-label="Back to top"
          title="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={[
            pillBase,
            "transition-all duration-300",
            showTop
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-2 pointer-events-none",
          ].join(" ")}
        >
          <ArrowUp
            size={22}
            strokeWidth={2}
            style={{ color: BRAND_GREEN }}
            className="transition-transform duration-300 group-hover:-translate-y-0.5"
          />
          <span
            className={glowRing}
            style={{ boxShadow: "0 0 0 6px rgba(106,218,68,0.10)" }}
          />
        </button>
      </div>
    </div>
  );
}
