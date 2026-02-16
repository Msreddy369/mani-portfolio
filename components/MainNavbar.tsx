"use client";

import Image from "next/image";

export default function MainNavbar() {
  const handleLogoClick = () => {
    const el = document.getElementById("home");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // fallback (if #home isn't present for some reason)
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="w-full bg-black/60 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        {/* Zoomed Logo (click => smooth scroll to top) */}
        <button
          type="button"
          onClick={handleLogoClick}
          className="relative h-9 w-28 overflow-hidden cursor-pointer"
          aria-label="Go to top"
          title="Go to top"
        >
          <Image
            src="/mani-logo.png"
            alt="Mani logo"
            fill
            priority
            className="object-cover scale-[1.35] translate-y-px"
            sizes="112px"
          />
        </button>

        <div className="flex items-center gap-8 text-sm font-semibold text-white/90">
          <a href="#projects" className="transition-colors hover:text-white">
            Projects
          </a>
          <a href="#contact" className="transition-colors hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
