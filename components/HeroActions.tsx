"use client";

import { Github, Linkedin, FileText } from "lucide-react";

const BRAND_GREEN = "#6ADA44";

export default function HeroActions() {
  const base =
    "group inline-flex items-center justify-center gap-3 rounded-2xl border border-gray-800 bg-[#0b0f0b] px-7 py-4 " +
    "text-white/90 transition-all duration-300 " +
    "hover:border-[#6ADA44] hover:text-white " +
    "hover:shadow-[0_0_0_1px_rgba(106,218,68,0.35),0_0_28px_rgba(106,218,68,0.18)]";

  return (
    <div className="pl-22">
      <div className="mt-10 flex flex-wrap gap-5">
        <a
          href="https://github.com/Msreddy369"
          target="_blank"
          rel="noreferrer"
          className={base}
        >
          <Github size={18} style={{ color: BRAND_GREEN }} />
          <span className="font-semibold">GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/mani-reddy-gunnam-0489a197/"
          target="_blank"
          rel="noreferrer"
          className={base}
        >
          <Linkedin size={18} style={{ color: BRAND_GREEN }} />
          <span className="font-semibold">LinkedIn</span>
        </a>

        <a
          href="/Mani-Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className={base}
        >
          <FileText size={18} style={{ color: BRAND_GREEN }} />
          <span className="font-semibold">My Resume</span>
        </a>
      </div>
    </div>
  );
}
