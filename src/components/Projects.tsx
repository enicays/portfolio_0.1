"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";
import { ArrowUpRight, ExternalLink, Sparkles, Layers } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-14 lg:py-20 relative">
      <div className="w-full">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#C5FF41] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SELECTED WORKS</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#FAF7F3] tracking-tight uppercase">
              RECENT <span className="text-[#C5FF41]">PROJECTS</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#998F8F] max-w-md font-light leading-relaxed">
            Engineered with a focus on scalable distributed backends, strict type safety, and polished, responsive frontend interfaces.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#181716]/90 border border-white/[0.08] hover:border-[#C5FF41]/40 transition-all duration-300 hover:bg-[#1C1A19] hover:shadow-[0_10px_35px_rgba(0,0,0,0.4)]"
            >
              {/* Card Top Meta */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[11px] font-mono font-medium text-[#FAF7F3]">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-[#998F8F]">
                      {project.year}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-bold text-[#998F8F] group-hover:text-[#C5FF41] transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                {/* Visual Preview Container */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="w-full h-48 sm:h-56 rounded-2xl bg-[#141312] border border-white/[0.06] p-5 mb-6 cursor-pointer relative overflow-hidden group/thumb transition-all duration-300 group-hover:border-[#C5FF41]/30 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#f46c38]/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#c5ff41]/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-sky-400/80" />
                    </div>
                    <span className="text-[10px] font-mono text-[#998F8F]">
                      architecture.v{project.year}
                    </span>
                  </div>

                  <div className="space-y-2 my-auto">
                    <div className="text-xs font-mono text-[#C5FF41] opacity-75">
                      {"// " + project.title}
                    </div>
                    <div className="font-display font-black text-xl sm:text-2xl text-[#FAF7F3] tracking-tight group-hover/thumb:text-[#C5FF41] transition-colors">
                      {project.subtitle}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.05] text-[11px] font-mono text-[#998F8F]">
                    <span>Click to open case study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C5FF41] transition-transform duration-200 group-hover/thumb:translate-x-0.5 group-hover/thumb:-translate-y-0.5" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#FAF7F3] tracking-tight mb-2 group-hover:text-[#C5FF41] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#998F8F] leading-relaxed mb-6 font-light">
                  {project.summary}
                </p>

                {/* Key Metrics Quick Ribbon */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#141312] border border-white/[0.04] mb-6">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <div className="font-display font-bold text-sm sm:text-base text-[#C5FF41]">
                          {m.value}
                        </div>
                        <div className="text-[9px] font-mono text-[#998F8F] uppercase truncate">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-[#FAF7F3]/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C5FF41]/10 border border-[#C5FF41]/25 text-xs font-bold text-[#C5FF41] hover:bg-[#C5FF41] hover:text-[#121110] transition-all duration-200"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Case Study</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#998F8F] hover:text-[#FAF7F3] hover:border-white/20 transition-colors"
                      title="View GitHub repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#998F8F] hover:text-[#C5FF41] hover:border-[#C5FF41]/40 transition-colors"
                      title="Open Live Preview"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
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
