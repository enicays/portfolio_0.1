"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowDown, ArrowUpRight, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const { personal, marqueeItems } = portfolioData;

  return (
    <section id="hero" className="relative pt-0 pb-12 lg:pb-20 overflow-hidden">
      {/* Background radial ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C5FF41]/[0.04] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#F46C38]/[0.03] blur-[120px] pointer-events-none rounded-full" />

      <div className="w-full relative z-10">
        {/* Massive Display Role Heading - Put First */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-6 lg:mb-8 select-none"
        >
          <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] tracking-tight leading-[0.9] uppercase">
            <span className="block text-[#FAF7F3] drop-shadow-sm">
              {personal.displayTitleLine1}
            </span>
            <span className="block text-stroke tracking-normal hover:text-[#C5FF41]/10 transition-colors">
              {personal.displayTitleLine2}
            </span>
          </h1>
        </motion.div>

        {/* Top Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1817] border border-white/10 text-xs text-[#FAF7F3] shadow-md">
            <span className="flex h-2 w-2 rounded-full bg-[#C5FF41] animate-pulse" />
            <span className="font-mono text-[11px] text-[#998F8F]">STATUS:</span>
            <span className="text-[#FAF7F3] font-medium">{personal.status}</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs text-[#998F8F]">
            <Terminal className="w-3.5 h-3.5 text-[#C5FF41]" />
            <span>{personal.location}</span>
          </div>
        </motion.div>

        {/* Name & Headline Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-4xl mb-4"
        >
          <p className="text-sm sm:text-base font-mono tracking-widest text-[#C5FF41] uppercase mb-2">
            Hey there, I am {personal.name}
          </p>
          <p className="text-xl sm:text-2xl lg:text-3xl font-normal text-[#998F8F] leading-relaxed">
            {personal.tagline}
          </p>
        </motion.div>

        {/* Bio paragraph & Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-20"
        >
          <div className="lg:col-span-7">
            <p className="text-base sm:text-lg text-[#998F8F] font-light leading-relaxed max-w-2xl">
              {personal.bio}
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-wrap items-center gap-4 lg:justify-end">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#C5FF41] text-[#121110] font-bold text-sm tracking-wide transition-all duration-300 hover:bg-[#d5ff64] hover:shadow-[0_0_25px_rgba(197,255,65,0.4)] active:scale-95 cursor-pointer"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#181716] border border-white/10 text-[#FAF7F3] font-semibold text-sm hover:border-[#C5FF41]/40 hover:bg-[#1E1C1B] transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 text-[#998F8F] group-hover:text-[#C5FF41] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </motion.div>

        {/* Metrics Bento Counters Row */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 max-w-md sm:max-w-lg pt-6 border-t border-white/[0.08]"
        >
          {personal.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group p-5 sm:p-6 rounded-2xl bg-[#181716]/80 border border-white/[0.06] hover:border-[#C5FF41]/40 transition-all duration-300 hover:bg-[#1C1A19] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C5FF41]/[0.02] rounded-full blur-xl group-hover:bg-[#C5FF41]/[0.06] transition-colors" />
              <div className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#C5FF41] tracking-tight mb-2 group-hover:scale-105 transition-transform duration-200 origin-left">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-[#FAF7F3] uppercase">
                {stat.label}
              </div>
              <div className="text-[10px] sm:text-[11px] font-mono tracking-wider text-[#998F8F] uppercase mt-0.5">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Infinite Marquee Ticker */}
      <div className="w-full mt-16 lg:mt-24 py-4 bg-[#181716] border-y border-white/[0.08] overflow-hidden select-none">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div key={idx} className="flex items-center mx-5 group cursor-default">
              <span className="font-display font-black text-sm sm:text-base tracking-widest text-[#998F8F] group-hover:text-[#FAF7F3] transition-colors uppercase">
                {item}
              </span>
              <span className="mx-5 text-[#C5FF41] text-xs font-bold">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
