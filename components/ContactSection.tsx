"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Linkedin, Send } from "lucide-react";

const BRAND_GREEN = "#6ADA44";

/* Reveal-once hook */
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

export default function ContactSection() {
  const { ref, visible } = useRevealOnce<HTMLElement>();

  return (
    <section
      id="contact"
      ref={ref}
      className="scroll-mt-28 bg-black text-white pt-20 pb-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="pl-22">
          <div
            className={`
              transition-all duration-[900ms] ease-out
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
              Contact
            </p>

            <h2
              className="text-[clamp(28px,3.2vw,44px)] font-semibold leading-tight max-w-3xl"
              style={{ textShadow: "0 10px 40px rgba(0,0,0,0.6)" }}
            >
              Let’s build something solid (and ship it).
            </h2>

            <p className="mt-4 text-gray-400 text-lg max-w-3xl leading-relaxed">
              Got a role, referral, or a project idea? Send me a message — I usually reply fast.
            </p>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left info */}
              <div className="space-y-4">
                
                {/* Email */}
                <a
                  href="mailto:manishankar.work999@gmail.com"
                  className="
                    block rounded-2xl border border-white/10 bg-white/[0.03] p-5
                    transition-all duration-300
                    hover:border-[rgba(106,218,68,0.35)]
                    hover:shadow-[0_0_0_1px_rgba(106,218,68,0.22),0_0_45px_rgba(106,218,68,0.16)]
                  "
                >
                  <div className="flex items-center gap-3">
                    <Mail size={18} style={{ color: BRAND_GREEN }} />
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-semibold text-white/90">
                        manishankar.work999@gmail.com
                      </p>
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-center gap-3">
                    <MapPin size={18} style={{ color: BRAND_GREEN }} />
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="font-semibold text-white/90">USA</p>
                    </div>
                  </div>
                </div>

                {/* LinkedIn (Replaced Phone) */}
                <a
                  href="https://www.linkedin.com/in/mani-reddy-gunnam-0489a197/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    block rounded-2xl border border-white/10 bg-white/[0.03] p-5
                    transition-all duration-300
                    hover:border-[rgba(106,218,68,0.35)]
                    hover:shadow-[0_0_0_1px_rgba(106,218,68,0.22),0_0_45px_rgba(106,218,68,0.16)]
                  "
                >
                  <div className="flex items-center gap-3">
                    <Linkedin size={18} style={{ color: BRAND_GREEN }} />
                    <div>
                      <p className="text-sm text-gray-400">LinkedIn</p>
                      <p className="font-semibold text-white/90">
                        https://www.linkedin.com/in/mani-reddy-gunnam-0489a197/
                      </p>
                    </div>
                  </div>
                </a>

              </div>

              {/* Right form */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="space-y-4">
                  <input
                    placeholder="Your name"
                    className="
                      w-full rounded-xl bg-black/40 border border-white/10
                      px-4 py-3 text-white outline-none
                      focus:border-[rgba(106,218,68,0.45)]
                      transition-all
                    "
                  />
                  <input
                    placeholder="Your email"
                    className="
                      w-full rounded-xl bg-black/40 border border-white/10
                      px-4 py-3 text-white outline-none
                      focus:border-[rgba(106,218,68,0.45)]
                      transition-all
                    "
                  />
                  <textarea
                    placeholder="Your message..."
                    className="
                      w-full min-h-[140px] rounded-xl bg-black/40 border border-white/10
                      px-4 py-3 text-white outline-none resize-none
                      focus:border-[rgba(106,218,68,0.45)]
                      transition-all
                    "
                  />

                  <button
                    type="submit"
                    className="
                      w-full rounded-xl px-4 py-3 font-semibold
                      bg-black text-white border border-white/15
                      transition-all duration-300
                      hover:border-[rgba(106,218,68,0.50)]
                      hover:shadow-[0_0_0_1px_rgba(106,218,68,0.25),0_0_28px_rgba(106,218,68,0.15)]
                    "
                  >
                    <Send size={18} className="inline mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
