"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";
import { ArrowUpRight, Users, TrendingUp, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { projects } = portfolioData;

  const renderProjectThumbnail = (project: Project) => {
    if (project.thumbnail) {
      return (
        <div className="relative w-full h-full overflow-hidden bg-[#181615] group/thumb">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 112px, (max-width: 1024px) 176px, 224px"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            priority={project.featured}
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#181615]/85 via-black/20 to-transparent pointer-events-none" />

          {/* Header badges */}
          <div className="absolute top-2 left-2 right-2 flex items-center justify-between pointer-events-none">
            <span className="px-1.5 py-0.5 rounded bg-black/70 backdrop-blur-xs text-white/95 text-[8px] sm:text-[9px] font-mono font-medium border border-white/10">
              {project.id === "hr-system"
                ? "Algeria Post"
                : project.id === "landing-page"
                ? "DigitalyHub"
                : "Live Demo"}
            </span>
            <span className="px-1.5 py-0.5 rounded bg-[#E8341C] text-white text-[7px] sm:text-[8px] font-mono font-bold shadow-xs">
              Live UI
            </span>
          </div>

          {/* Footer note */}
          <div className="absolute bottom-1.5 left-2 right-2 flex items-center justify-between text-[8px] font-mono text-white/80 pointer-events-none">
            <span className="truncate">
              {project.id === "hr-system"
                ? "HR & Presence System"
                : project.id === "landing-page"
                ? "E-Commerce Showcase"
                : project.category}
            </span>
            <span className="text-[7px] text-white/60">
              {project.screenshots ? `${project.screenshots.length} Screens` : "Live UI"}
            </span>
          </div>
        </div>
      );
    }

    if (project.id === "hr-system") {
      return (
        <div className="w-full h-full bg-[#181615] p-3 sm:p-4 flex flex-col justify-between select-none relative overflow-hidden">
          {/* Subtle gradient accent */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#E8341C]/15 rounded-full blur-xl pointer-events-none" />

          {/* Top header bar mockup */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Users className="w-3 h-3 text-[#E8341C]" />
              <span className="text-[9px] sm:text-[10px] font-mono text-white/90 font-medium">HR Core</span>
            </div>
            <span className="px-1.5 py-0.5 rounded-full bg-[#E8341C]/20 text-[#E8341C] text-[8px] font-mono font-semibold">
              Live
            </span>
          </div>

          {/* Mini Personnel Rows */}
          <div className="space-y-1.5 my-auto">
            <div className="flex items-center justify-between p-1.5 rounded-lg bg-white/[0.06] border border-white/[0.08]">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-[#E8341C]/40 flex items-center justify-center text-[8px] text-white">S</div>
                <div className="w-12 h-1.5 rounded-full bg-white/40" />
              </div>
              <span className="text-[8px] font-mono text-emerald-400">Approved</span>
            </div>

            <div className="flex items-center justify-between p-1.5 rounded-lg bg-white/[0.04]">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[8px] text-white">Y</div>
                <div className="w-10 h-1.5 rounded-full bg-white/25" />
              </div>
              <span className="text-[8px] font-mono text-white/50">Pending</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[8px] font-mono text-white/40 pt-1 border-t border-white/[0.08]">
            <span>128 Employees</span>
            <span>REST API</span>
          </div>
        </div>
      );
    }

    if (project.id === "crm-system") {
      return (
        <div className="w-full h-full bg-[#181615] p-3 sm:p-4 flex flex-col justify-between select-none relative overflow-hidden">
          {/* Top pipeline bar mockup */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-3 h-3 text-[#E8341C]" />
              <span className="text-[9px] sm:text-[10px] font-mono text-white/90 font-medium">Pipeline CRM</span>
            </div>
            <span className="text-[9px] font-mono font-bold text-white/80">+45% ARR</span>
          </div>

          {/* Mini Kanban Columns */}
          <div className="grid grid-cols-3 gap-1.5 my-auto">
            <div className="p-1.5 rounded-lg bg-white/[0.05] flex flex-col gap-1">
              <div className="w-6 h-1 rounded bg-white/30" />
              <div className="h-6 rounded bg-[#E8341C]/20 border border-[#E8341C]/30 flex items-center justify-center text-[7px] text-[#E8341C] font-mono font-bold">
                $12k
              </div>
            </div>
            <div className="p-1.5 rounded-lg bg-white/[0.05] flex flex-col gap-1">
              <div className="w-6 h-1 rounded bg-white/30" />
              <div className="h-6 rounded bg-white/[0.08] flex items-center justify-center text-[7px] text-white/60 font-mono">
                $8k
              </div>
            </div>
            <div className="p-1.5 rounded-lg bg-white/[0.05] flex flex-col gap-1">
              <div className="w-6 h-1 rounded bg-white/30" />
              <div className="h-6 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-[7px] text-emerald-400 font-mono font-bold">
                Won
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[8px] font-mono text-white/40 pt-1 border-t border-white/[0.08]">
            <span>PostgreSQL</span>
            <span>Real-time</span>
          </div>
        </div>
      );
    }

    // Landing Page
    return (
      <div className="w-full h-full bg-[#181615] p-3 sm:p-4 flex flex-col justify-between select-none relative overflow-hidden">
        {/* Top header mockup */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#E8341C]" />
            <span className="text-[9px] sm:text-[10px] font-mono text-white/90 font-medium">Showcase UI</span>
          </div>
          <span className="px-1.5 py-0.5 rounded-full bg-white/10 text-white/80 text-[8px] font-mono">
            60 FPS
          </span>
        </div>

        {/* Central Bold Hero Banner (Matching Majd template in reference image) */}
        <div className="p-2.5 rounded-xl bg-[#FCFAF7] text-[#1A1614] my-auto flex flex-col items-center justify-center text-center shadow-xs">
          <span className="text-[8px] font-mono font-black tracking-widest text-[#E8341C] uppercase leading-none mb-1">
            ✦ HIGH CONVERTING
          </span>
          <span className="font-display font-black text-[11px] sm:text-xs text-[#1A1614] tracking-tight uppercase leading-tight">
            MODERN LANDING
          </span>
        </div>

        <div className="flex items-center justify-between text-[8px] font-mono text-white/40 pt-1 border-t border-white/[0.08]">
          <span>Next.js 15</span>
          <span>100/100 Perf</span>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-12 lg:py-18 relative scroll-mt-28">
      <div className="w-full">
        {/* Section Heading (Matching Sawad reference: Bold RECENT + Muted PROJECTS) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-8 sm:mb-12 select-none"
        >
          <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-[6.5rem] tracking-tight leading-[0.88] uppercase">
            <span className="block text-[#1A1614]">RECENT</span>
            <span className="block text-[#D9D1C5]">PROJECTS</span>
          </h2>
        </motion.div>

        {/* Vertical Stack of Horizontal Cards (Matching Screenshot Layout) */}
        <div className="space-y-4 sm:space-y-5">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              onClick={() => setSelectedProject(project)}
              className="group relative flex items-center justify-between p-3.5 sm:p-5 lg:p-6 rounded-3xl bg-[#FCFAF7] border border-[#D9D1C5] hover:border-[#E8341C]/40 hover:bg-[#FAF7F2] transition-all duration-200 cursor-pointer shadow-xs"
            >
              {/* Left: Thumbnail Preview Container */}
              <div className="relative w-28 h-24 sm:w-44 sm:h-36 lg:w-56 lg:h-38 rounded-2xl overflow-hidden shrink-0 border border-[#D9D1C5] shadow-sm">
                {renderProjectThumbnail(project)}
              </div>

              {/* Center: Title & Subtitle */}
              <div className="flex-1 min-w-0 mx-4 sm:mx-6 lg:mx-8">
                <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-[#1A1614] group-hover:text-[#E8341C] transition-colors leading-tight tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-[#6B625A] mt-1 sm:mt-1.5 font-normal">
                  {project.subtitle}
                </p>
              </div>

              {/* Right: Diagonal Action Arrow (Red accent hover) */}
              <div className="shrink-0 p-2 sm:p-3 text-[#6B625A] group-hover:text-[#E8341C] transition-colors">
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
