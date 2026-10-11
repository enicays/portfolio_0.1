"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const { personal, marqueeItems } = portfolioData;

  const handleScrollTo = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      const top = elem.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative pt-0 pb-12 lg:pb-16 scroll-mt-28">
      <div className="w-full relative z-10">
        {/* Main Value Proposition Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-5 sm:mb-6 select-none"
        >
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.6rem] tracking-tight leading-[0.95] sm:leading-[0.92] text-[#1A1614] uppercase">
            <span className="block">WEBSITES AND</span>
            <span className="block">APPS THAT BRING</span>
            <span className="block">IN CLIENTS.</span>
          </h1>
        </motion.div>

        {/* Intro Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-2xl mb-6 sm:mb-8"
        >
          <p className="text-base sm:text-lg text-[#6B625A] font-normal leading-relaxed">
            I&apos;m Yacine, a full-stack developer. I build fast, reliable web apps, from first idea to launch.
          </p>
        </motion.div>

        {/* Primary CTAs & Microcopy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-8 lg:mb-10"
        >
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-2.5 max-w-md">
            <button
              type="button"
              onClick={() => handleScrollTo("contact")}
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#E8341C] text-white font-bold text-sm tracking-wide transition-all duration-150 hover:brightness-105 active:scale-[0.98] cursor-pointer shadow-xs"
            >
              <span>Get a free quote</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => handleScrollTo("projects")}
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#FCFAF7] border border-[#D9D1C5] text-[#1A1614] font-semibold text-sm hover:border-[#1A1614] transition-all duration-150 active:scale-[0.98] cursor-pointer shadow-2xs"
            >
              <span>Explore selected work</span>
            </button>
          </div>

          <p className="text-xs text-[#6B625A]">
            Free, no commitment. Replies within 24 hours.
          </p>
        </motion.div>

        {/* Mobile Photo Card (Rendered here on mobile right after CTAs, hidden on desktop where sidebar is sticky) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="block lg:hidden mb-6 max-w-sm mx-auto"
        >
          <div className="rounded-3xl bg-[#FCFAF7] border border-[#D9D1C5] p-5 shadow-xs">
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[#EAE3D6] border border-[#D9D1C5] mb-4">
              <Image
                src={personal.avatarUrl || "/profile.webp"}
                alt={personal.name}
                fill
                priority
                sizes="(max-width: 640px) 100vw, 380px"
                quality={85}
                className="object-cover object-top rounded-2xl"
              />
            </div>
            <h2 className="font-display font-bold text-2xl text-[#1A1614] text-center tracking-tight leading-tight">
              {personal.name}
            </h2>
            <p className="text-xs font-mono font-medium tracking-wider text-[#6B625A] uppercase text-center mt-1.5">
              {personal.headlineRole}
            </p>
          </div>
        </motion.div>

        {/* Metrics / Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="grid grid-cols-2 gap-3 sm:gap-4 max-w-sm lg:max-w-md mx-auto lg:mx-0 pt-1"
        >
          <div className="p-5 rounded-2xl bg-[#FCFAF7] border border-[#D9D1C5]">
            <div className="font-display font-black text-3xl sm:text-4xl text-[#1A1614] tracking-tight mb-1">
              2
            </div>
            <div className="text-xs sm:text-sm text-[#6B625A] font-medium leading-snug">
              Years of experience
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#FCFAF7] border border-[#D9D1C5]">
            <div className="font-display font-black text-3xl sm:text-4xl text-[#1A1614] tracking-tight mb-1">
              10+
            </div>
            <div className="text-xs sm:text-sm text-[#6B625A] font-medium leading-snug">
              Projects delivered
            </div>
          </div>
        </motion.div>
      </div>

      {/* Editorial Marquee Ticker */}
      <div className="w-full mt-12 lg:mt-16 py-3.5 bg-[#FAF7F2] border-y border-[#D9D1C5] overflow-hidden select-none">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div key={idx} className="flex items-center mx-4 group cursor-default">
              <span className="font-display font-bold text-xs sm:text-sm tracking-widest text-[#6B625A] group-hover:text-[#1A1614] transition-colors uppercase">
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
