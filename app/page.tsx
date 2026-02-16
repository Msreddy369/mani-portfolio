"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import TopAnnouncementBar from "../components/TopAnnouncementBar";
import MainNavbar from "../components/MainNavbar";
import HeroTitle from "../components/HeroTitle";
import HeroActions from "../components/HeroActions";
import LeftSocialBar from "../components/LeftSocialBar";
import AboutSection from "../components/AboutSection";
import TechStackMarquee from "../components/TechStackMarquee";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  const [topBarClosed, setTopBarClosed] = useState(false);

  const [topBarHeight, setTopBarHeight] = useState(0);
  const [navHeight, setNavHeight] = useState(0);

  const topBarRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  // Measure top bar height
  useEffect(() => {
    if (!topBarRef.current) return;
    const el = topBarRef.current;

    const ro = new ResizeObserver(() => {
      setTopBarHeight(Math.round(el.getBoundingClientRect().height));
    });

    ro.observe(el);
    setTopBarHeight(Math.round(el.getBoundingClientRect().height));
    return () => ro.disconnect();
  }, []);

  // Measure navbar height
  useEffect(() => {
    if (!navRef.current) return;
    const el = navRef.current;

    const ro = new ResizeObserver(() => {
      setNavHeight(Math.round(el.getBoundingClientRect().height));
    });

    ro.observe(el);
    setNavHeight(Math.round(el.getBoundingClientRect().height));
    return () => ro.disconnect();
  }, []);

  // Navbar will ALWAYS be fixed, but it will slide up/down based on top bar height.
  const navTranslateY = useMemo(
    () => (topBarClosed ? 0 : topBarHeight),
    [topBarClosed, topBarHeight]
  );

  // Total header space we must reserve so content never goes under fixed header
  const headerSpacerHeight = useMemo(
    () => navHeight + (topBarClosed ? 0 : topBarHeight),
    [navHeight, topBarClosed, topBarHeight]
  );

  return (
    <main className="min-h-screen bg-black text-white">
      <LeftSocialBar />

      {/* Reserve space for fixed TopBar + fixed Navbar */}
      <div
        style={{ height: headerSpacerHeight + 45 }} // 32px breathing space
        className="transition-[height] duration-700 ease-in-out"
      />


      {/* Fixed Top Announcement Bar (animates closed) */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div
          className="overflow-hidden transition-[height,opacity,transform] duration-700 ease-in-out"
          style={{
            height: topBarClosed ? 0 : topBarHeight,
            opacity: topBarClosed ? 0 : 1,
            transform: topBarClosed ? "translateY(-10px)" : "translateY(0px)",
          }}
        >
          <div ref={topBarRef}>
            <TopAnnouncementBar onClose={() => setTopBarClosed(true)} />
          </div>
        </div>
      </div>

      {/* Fixed Navbar (slides up smoothly when top bar closes) */}
      <div
        ref={navRef}
        className="fixed left-0 right-0 z-40 transition-transform duration-700 ease-in-out will-change-transform"
        style={{
          top: 0,
          transform: `translateY(${navTranslateY}px)`,
        }}
      >
        <MainNavbar />
      </div>

      {/* Content */}
      <HeroTitle />

      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-5xl">
          <HeroActions />
        </div>
      </div>
      <TechStackMarquee />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
