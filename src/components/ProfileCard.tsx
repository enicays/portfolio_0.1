"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Flame } from "lucide-react";
import {
  DribbbleIcon,
  TwitterBirdIcon,
  InstagramIcon,
  YoutubeIcon,
} from "./Icons";
import { motion } from "framer-motion";

export default function ProfileCard() {
  const { personal } = portfolioData;

  return (
    <aside className="w-full max-w-[340px] mx-auto select-none">
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative w-full rounded-[32px] bg-white text-[#151312] p-5 sm:p-6 shadow-2xl shadow-black/60 border border-white/10 overflow-hidden flex flex-col items-center"
      >
        {/* Profile Picture Container */}
        <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-black shadow-md">
          <img
            src={personal.avatarUrl || "/profile.jpg"}
            alt={personal.name}
            className="w-full h-full object-cover object-top rounded-2xl transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* User Name directly under picture */}
        <h2 className="font-display font-extrabold text-2xl sm:text-[28px] text-[#151312] text-center tracking-tight leading-tight mt-5">
          {personal.name}
        </h2>

        {/* Flame Badge with Dotted Line leading to it */}
        <div className="relative my-3 flex items-center justify-center w-full">
          <svg
            className="absolute left-0 -top-4 w-28 h-12 pointer-events-none text-[#FF7A00] z-0"
            viewBox="0 0 100 40"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M 0 35 C 25 35 45 28 60 10"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeDasharray="5 5"
            />
          </svg>

          <div className="relative z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FF7A00] text-white flex items-center justify-center shadow-md shadow-[#FF7A00]/40">
            <Flame className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white" />
          </div>
        </div>

        {/* Short Bio / Tagline */}
        <p className="text-xs sm:text-[13px] text-[#6A6B6E] text-center font-normal leading-relaxed max-w-[240px]">
          {personal.tagline ||
            "A Software Developer who has developed countless innovative solutions."}
        </p>

        {/* Social Icons (Orange outline matching template) */}
        <div className="flex items-center justify-center gap-5 mt-6 pt-5 w-full border-t border-gray-100 text-[#FF7A00]">
          <a
            href={personal.socials.find((s) => s.platform.toLowerCase().includes("git"))?.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full hover:bg-orange-50 hover:scale-110 transition-all duration-200"
            aria-label="Portfolio link"
          >
            <DribbbleIcon className="w-5 h-5" />
          </a>

          <a
            href={personal.socials.find((s) => s.platform.toLowerCase().includes("twit"))?.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full hover:bg-orange-50 hover:scale-110 transition-all duration-200"
            aria-label="Twitter profile"
          >
            <TwitterBirdIcon className="w-5 h-5" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full hover:bg-orange-50 hover:scale-110 transition-all duration-200"
            aria-label="Instagram profile"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>

          <a
            href={personal.socials.find((s) => s.platform.toLowerCase().includes("git"))?.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full hover:bg-orange-50 hover:scale-110 transition-all duration-200"
            aria-label="YouTube or Code link"
          >
            <YoutubeIcon className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </aside>
  );
}
