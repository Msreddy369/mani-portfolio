"use client";

import { useState } from "react";
import { Send, X } from "lucide-react";

type TopAnnouncementBarProps = {
  defaultVisible?: boolean;
  onClose?: () => void;
};

export default function TopAnnouncementBar({
  defaultVisible = true,
  onClose,
}: TopAnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(defaultVisible);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    window.setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={[
        "w-full",
        "bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700",
        "text-white",
        "transition-all duration-300 ease-in-out",
        isClosing ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 relative">
        <div className="flex items-center gap-6 mx-auto">
          <p className="text-[15px] font-bold tracking-wide">
            Open to opportunities! Your referrals and connections are truly appreciated!
          </p>

          <a
            href="/Mani-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-neutral-900 active:scale-[0.98]"
          >
            Refer Me
            <Send size={16} strokeWidth={2} />
          </a>
        </div>

        <button
          type="button"
          onClick={handleClose}
          aria-label="Close announcement"
          className="absolute right-4 text-white/90 transition hover:text-white"
        >
          <X size={18} strokeWidth={2.2} />
        </button>
      </div>
    </div>
  );
}
