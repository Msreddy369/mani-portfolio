"use client";

import { useEffect, useMemo, useState } from "react";
import { Code2, Cpu } from "lucide-react";

type Phase = "typing" | "pause" | "deleting";

const BRAND_GREEN = "#6ADA44";

export default function HeroTitle() {
  const items = ["Mani Reddy", "Python Full Stack Dev"];

  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const [charIndex, setCharIndex] = useState(0);
  const [caretOn, setCaretOn] = useState(true);

  useEffect(() => {
    const id = window.setInterval(() => setCaretOn((v) => !v), 520);
    return () => window.clearInterval(id);
  }, []);

  const currentText = items[idx];
  const visibleText = useMemo(
    () => currentText.slice(0, charIndex),
    [currentText, charIndex]
  );

  useEffect(() => {
    const TYPE_MS = 65;
    const DELETE_MS = 40;
    const PAUSE_MS = 900;
    const BETWEEN_MS = 180;

    let t = 0;

    if (phase === "typing") {
      if (charIndex < currentText.length) {
        t = window.setTimeout(() => setCharIndex((i) => i + 1), TYPE_MS);
      } else {
        t = window.setTimeout(() => setPhase("pause"), PAUSE_MS);
      }
    }

    if (phase === "pause") {
      t = window.setTimeout(() => setPhase("deleting"), BETWEEN_MS);
    }

    if (phase === "deleting") {
      if (charIndex > 0) {
        t = window.setTimeout(() => setCharIndex((i) => i - 1), DELETE_MS);
      } else {
        setIdx((prev) => (prev + 1) % items.length);
        setPhase("typing");
      }
    }

    return () => window.clearTimeout(t);
  }, [phase, charIndex, currentText]);

  return (
    <section id="home" className="mx-auto max-w-7xl px-6 pt-14 pb-15">
      {/* IMPORTANT: this padding prevents LeftSocialBar overlap */}
      <div className="pl-24">
        <p
          className="text-xl font-semibold tracking-wide"
          style={{ color: BRAND_GREEN }}
        >
          Hey there!, I&apos;m-
        </p>

        {/* NOTE: removed whitespace-nowrap + overflow-hidden so it never clips */}
        <h1
          className="
            mt-8
            text-white
            font-semibold
            tracking-[-0.03em]
            leading-[0.95]
            text-[clamp(44px,6vw,105px)]
            max-w-[1100px]
          "
          style={{ textShadow: "0 12px 50px rgba(0,0,0,0.6)" }}
        >
          {visibleText}
          <span
            className={[
              "inline-block ml-3 align-baseline",
              caretOn ? "opacity-100" : "opacity-0",
            ].join(" ")}
            style={{ color: BRAND_GREEN, fontWeight: 700 }}
          >
            |
          </span>
        </h1>

        <p className="mt-6 text-xl font-semibold text-white max-w-5xl">
          Crafting performant full-stack solutions with precision, purpose, and
          production-grade reliability.
        </p>

        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-3 text-lg">
            <Code2 size={20} style={{ color: BRAND_GREEN }} />
            <span className="text-white">
              Architecting{" "}
              <span style={{ color: BRAND_GREEN }} className="font-semibold">
                clean, maintainable
              </span>{" "}
              full-stack applications.
            </span>
          </div>

          <div className="flex items-center gap-3 text-lg">
            <Cpu size={20} style={{ color: BRAND_GREEN }} />
            <span className="text-white">
              Focused on scalable backend logic and efficient system design.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
