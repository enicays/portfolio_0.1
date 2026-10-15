"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { ProfileGithubIcon, ProfileLinkedinIcon, ProfileMailIcon } from "./Icons";

export default function ProfileCard() {
  const { personal } = portfolioData;

  const githubLink = personal.socials.find((s) => s.platform.toLowerCase().includes("git"))?.url || "https://github.com/enicays";
  const linkedinLink = personal.socials.find((s) => s.platform.toLowerCase().includes("link"))?.url || "https://linkedin.com";
  const emailLink = `mailto:${personal.email}`;

  return (
    <aside className="w-full max-w-[340px] mx-auto select-none">
      <div className="relative w-full rounded-lg bg-[#FCFAF7] text-[#1A1614] p-5 sm:p-6 border border-[#D9D1C5] shadow-xs flex flex-col items-center">
        {/* Profile Picture Container */}
        <div className="relative w-full aspect-[3/4] rounded-md overflow-hidden bg-[#EAE3D6] border border-[#D9D1C5]">
          <Image
            src={personal.avatarUrl || "/profile.webp"}
            alt={personal.name}
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 340px, 300px"
            quality={85}
            className="object-cover object-top rounded-md transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* User Name directly under picture */}
        <h2 className="font-display font-bold text-2xl text-[#1A1614] text-center tracking-tight leading-tight mt-5">
          {personal.name}
        </h2>

        {/* Clean Headline Role (No flame, no doodle, no duplicate bio paragraph) */}
        <p className="text-xs font-mono font-medium tracking-wider text-[#6B625A] uppercase text-center mt-1.5">
          {personal.headlineRole}
        </p>

        {/* Social Icons (GitHub, LinkedIn, Email only - clean tinted styling) */}
        <div className="flex items-center justify-center gap-4 mt-6 pt-5 w-full border-t border-[#D9D1C5]">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-md bg-[#FAF7F2] border border-[#D9D1C5] text-[#1A1614] hover:text-[#E8341C] hover:border-[#E8341C]/40 hover:bg-white transition-all duration-150"
            aria-label="GitHub Profile"
          >
            <ProfileGithubIcon className="w-4 h-4" />
          </a>

          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-md bg-[#FAF7F2] border border-[#D9D1C5] text-[#1A1614] hover:text-[#E8341C] hover:border-[#E8341C]/40 hover:bg-white transition-all duration-150"
            aria-label="LinkedIn Profile"
          >
            <ProfileLinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={emailLink}
            className="p-2.5 rounded-md bg-[#FAF7F2] border border-[#D9D1C5] text-[#1A1614] hover:text-[#E8341C] hover:border-[#E8341C]/40 hover:bg-white transition-all duration-150"
            aria-label="Send Email"
          >
            <ProfileMailIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </aside>
  );
}
