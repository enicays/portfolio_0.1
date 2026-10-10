"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";
import { ArrowUpRight, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-12 lg:py-18 relative scroll-mt-28">
      <div className="w-full">
        {/* Section Heading (Plain, dignified typography - no eyebrow, no two-tone) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6"
        >
          <div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#1A1614] tracking-tight uppercase">
              Selected Projects
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6B625A] max-w-md font-normal leading-relaxed">
            Engineered with a focus on scalable distributed backends, strict type safety, and polished, responsive user interfaces.
          </p>
        </motion.div>

        {/* Projects Grid (Rich visual presence, warm paper cards, no fake window dots) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: idx * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#FCFAF7] border border-[#D9D1C5] hover:border-[#1A1614]/30 transition-all duration-200 shadow-xs"
            >
              {/* Card Top Meta (Plain text instead of pill badges) */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-medium text-[#6B625A] uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-[#D9D1C5]">/</span>
                    <span className="text-xs font-mono text-[#6B625A]">
                      {project.year}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-bold text-[#6B625A]">
                    0{idx + 1}
                  </span>
                </div>

                {/* Big Visual Preview Container (No fake window dots, clean typographic focus) */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="w-full h-48 sm:h-56 rounded-2xl bg-[#FAF7F2] border border-[#D9D1C5] p-6 mb-6 cursor-pointer relative overflow-hidden group/thumb transition-all duration-200 hover:border-[#E8341C]/50 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-semibold tracking-wider text-[#6B625A] uppercase">
                      Architecture Overview
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#6B625A] group-hover/thumb:text-[#E8341C] group-hover/thumb:translate-x-0.5 group-hover/thumb:-translate-y-0.5 transition-all duration-150" />
                  </div>

                  <div className="space-y-1.5 my-auto">
                    <div className="text-xs font-mono text-[#E8341C]">
                      {"// " + project.title}
                    </div>
                    <div className="font-display font-bold text-xl sm:text-2xl text-[#1A1614] tracking-tight group-hover/thumb:text-[#E8341C] transition-colors">
                      {project.subtitle}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#D9D1C5] text-[11px] font-mono text-[#6B625A]">
                    Click to view complete case study
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-display font-bold text-2xl text-[#1A1614] tracking-tight mb-2 group-hover:text-[#E8341C] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#6B625A] leading-relaxed mb-6 font-normal">
                  {project.summary}
                </p>

                {/* Key Metrics Quick Ribbon (Tinted flat container) */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#FAF7F2] border border-[#D9D1C5] mb-6">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <div className="font-display font-bold text-sm sm:text-base text-[#1A1614]">
                          {m.value}
                        </div>
                        <div className="text-[10px] font-mono text-[#6B625A] uppercase truncate mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack (Plain clean comma-style or subtle text instead of heavy pills) */}
                <div className="text-xs font-mono text-[#6B625A] mb-6 leading-relaxed">
                  <span className="font-semibold text-[#1A1614] mr-2">Technologies:</span>
                  {project.tags.join(" • ")}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-[#D9D1C5] flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FAF7F2] border border-[#D9D1C5] text-xs font-semibold text-[#1A1614] hover:border-[#E8341C] hover:text-[#E8341C] transition-all duration-150 cursor-pointer"
                >
                  <Layers className="w-3.5 h-3.5 text-[#E8341C]" />
                  <span>Case Study</span>
                </button>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono font-medium text-[#6B625A] hover:text-[#E8341C] transition-colors"
                  >
                    Live Demo →
                  </a>
                )}
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
