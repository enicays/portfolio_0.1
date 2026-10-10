"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowDown, ArrowUpRight } from "lucide-react";
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
        {/* Top Status & Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-wrap items-center gap-2.5 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCFAF7] border border-[#D9D1C5] text-xs shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-[#E8341C]" />
            <span className="font-mono text-[11px] text-[#6B625A] uppercase">STATUS:</span>
            <span className="text-[#1A1614] font-medium">{personal.status}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCFAF7] border border-[#D9D1C5] text-xs font-mono text-[#6B625A]">
            <span>{personal.location}</span>
          </div>
        </motion.div>

        {/* Display Role Heading (Solid near-black typography - no split colors) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-6 lg:mb-8 select-none"
        >
          <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] tracking-tight leading-[0.9] text-[#1A1614] uppercase">
            <span className="block">{personal.displayTitleLine1}</span>
            <span className="block">{personal.displayTitleLine2}</span>
          </h1>
        </motion.div>

        {/* Introduction & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl mb-4"
        >
          <p className="text-sm font-mono tracking-widest text-[#6B625A] uppercase mb-2">
            Hey there, I am {personal.name}
          </p>
          <p className="text-xl sm:text-2xl lg:text-3xl font-normal text-[#1A1614] leading-relaxed">
            {personal.tagline}
          </p>
        </motion.div>

        {/* Bio paragraph & Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 lg:mb-16"
        >
          <div className="lg:col-span-7">
            <p className="text-base sm:text-lg text-[#6B625A] font-normal leading-relaxed max-w-2xl">
              {personal.bio}
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-wrap items-center gap-3.5 lg:justify-end">
            <button
              type="button"
              onClick={() => handleScrollTo("projects")}
              className="group flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#E8341C] text-white font-bold text-sm tracking-wide transition-all duration-200 hover:brightness-105 active:scale-95 cursor-pointer shadow-xs"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </button>

            <button
              type="button"
              onClick={() => handleScrollTo("contact")}
              className="group flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-[#FCFAF7] border border-[#D9D1C5] text-[#1A1614] font-semibold text-sm hover:border-[#1A1614] transition-all duration-150 active:scale-95 cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 text-[#6B625A] group-hover:text-[#1A1614] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>
          </div>
        </motion.div>

        {/* Metrics Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md pt-6 border-t border-[#D9D1C5]"
        >
          {personal.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#FCFAF7] border border-[#D9D1C5] transition-all duration-150"
            >
              <div className="font-display font-black text-3xl sm:text-4xl text-[#1A1614] tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-[11px] font-mono font-bold tracking-wider text-[#1A1614] uppercase">
                {stat.label}
              </div>
              <div className="text-[10px] font-mono tracking-wider text-[#6B625A] uppercase">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Editorial Marquee Ticker */}
      <div className="w-full mt-14 lg:mt-20 py-3.5 bg-[#FAF7F2] border-y border-[#D9D1C5] overflow-hidden select-none">
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
