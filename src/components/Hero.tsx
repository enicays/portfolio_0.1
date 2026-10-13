"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const { personal, marqueeItems } = portfolioData;

  const handleScrollTo = (id: string) => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
    const targetId = id === "contact" && isMobile ? "quote-form" : id;
    const elem = document.getElementById(targetId) || document.getElementById(id);
    if (!elem) return;

    const navbarOffset = -65;

    if (window.__lenisSmooth) {
      window.__lenisSmooth.scrollTo(elem, {
        offset: navbarOffset,
        duration: 0.9,
      });
    } else {
      const top = elem.getBoundingClientRect().top + window.scrollY + navbarOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative pt-0 pb-12 lg:pb-16 scroll-mt-28">
      <div className="w-full relative z-10">
        {/* Main Value Proposition Headline (Rendered immediately - no template fade-up) */}
        <div className="mb-5 sm:mb-6 select-none">
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.6rem] tracking-tight leading-[1.04] sm:leading-[0.98] lg:leading-[0.95] text-[#1A1614] uppercase">
            <span className="block">WEBSITES AND</span>
            <span className="block">APPS THAT BRING</span>
            <span className="block">IN CLIENTS.</span>
          </h1>
        </div>

        {/* Intro Subtitle */}
        <div className="max-w-2xl mb-6 sm:mb-8">
          <p className="text-base sm:text-lg text-[#2E2824] font-medium leading-relaxed">
            I&apos;m Yacine, a full-stack developer. I build fast, reliable web apps, from first idea to launch.
          </p>
        </div>

        {/* Primary CTAs & Microcopy */}
        <div className="mb-8 lg:mb-10">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-3 max-w-md">
            <button
              type="button"
              onClick={() => handleScrollTo("contact")}
              className="group flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-[#E8341C] text-white font-bold text-sm tracking-wide transition-all duration-150 hover:brightness-105 active:scale-[0.98] cursor-pointer shadow-xs"
            >
              <span>Get a free quote</span>
              <span className="font-bold text-base leading-none transition-transform duration-150 group-hover:translate-y-0.5">↓</span>
            </button>

            <button
              type="button"
              onClick={() => handleScrollTo("projects")}
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-[#FCFAF7] border-[1.5px] border-[#A89D8F] text-[#1A1614] font-bold text-sm hover:border-[#1A1614] hover:bg-white transition-all duration-150 active:scale-[0.98] cursor-pointer shadow-xs"
            >
              <span>Explore selected work</span>
            </button>
          </div>

          <p className="text-xs sm:text-[13px] text-[#2E2824] font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8341C] shrink-0" />
            <span>Free, no commitment. Replies within 24 hours.</span>
          </p>
        </div>

        {/* Mobile Photo Card (Rendered here on mobile right after CTAs, hidden on desktop where sidebar is sticky) */}
        <div className="block lg:hidden mb-6 max-w-sm mx-auto">
          <div className="rounded-lg bg-[#FCFAF7] border border-[#D9D1C5] p-5 shadow-xs">
            <div className="relative w-full aspect-[3/4] rounded-md overflow-hidden bg-[#EAE3D6] border border-[#D9D1C5] mb-4">
              <Image
                src={personal.avatarUrl || "/profile.webp"}
                alt={personal.name}
                fill
                priority
                sizes="(max-width: 640px) 100vw, 380px"
                quality={85}
                className="object-cover object-top rounded-md"
              />
            </div>
            <h2 className="font-display font-bold text-2xl text-[#1A1614] text-center tracking-tight leading-tight">
              {personal.name}
            </h2>
            <p className="text-xs font-mono font-medium tracking-wider text-[#6B625A] uppercase text-center mt-1.5">
              {personal.headlineRole}
            </p>
          </div>
        </div>

        {/* Metrics / Stats Row */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 max-w-sm sm:max-w-md lg:max-w-xl mx-auto lg:mx-0 pt-1">
          <div className="p-3.5 sm:p-5 rounded-lg bg-[#FCFAF7] border border-[#D9D1C5] shadow-2xs">
            <div className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#1A1614] tracking-tight mb-1">
              10+
            </div>
            <div className="text-[11px] sm:text-xs text-[#4A423B] font-semibold leading-snug">
              Projects delivered
            </div>
          </div>

          <div className="p-3.5 sm:p-5 rounded-lg bg-[#FCFAF7] border border-[#D9D1C5] shadow-2xs">
            <div className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#1A1614] tracking-tight mb-1">
              &lt;24h
            </div>
            <div className="text-[11px] sm:text-xs text-[#4A423B] font-semibold leading-snug">
              Quote turnaround
            </div>
          </div>

          <div className="p-3.5 sm:p-5 rounded-lg bg-[#FCFAF7] border border-[#D9D1C5] shadow-2xs">
            <div className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#1A1614] tracking-tight mb-1">
              2+
            </div>
            <div className="text-[11px] sm:text-xs text-[#4A423B] font-semibold leading-snug">
              Years experience
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Marquee Ticker */}
      <div className="w-full mt-12 lg:mt-16 py-3.5 bg-[#FAF7F2] border-y border-[#D9D1C5] overflow-hidden select-none">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div key={idx} className="flex items-center mx-4 group cursor-default">
              <span className="font-display font-extrabold text-xs sm:text-sm tracking-widest text-[#2E2824] group-hover:text-[#1A1614] transition-colors uppercase">
                {item}
              </span>
              <span className="mx-4 text-[#E8341C] text-xs font-bold">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
