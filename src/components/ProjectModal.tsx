"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/portfolioData";
import {
  X,
  ExternalLink,
  CheckCircle2,
  Layers,
  Cpu,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { GithubIcon } from "./Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0e0d0c]/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-4xl bg-[#161514] border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#181716]/95 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#C5FF41]/10 text-[#C5FF41] border border-[#C5FF41]/20 font-mono text-[11px] font-bold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs font-mono text-[#998F8F]">
              {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/[0.05] hover:bg-white/10 text-[#998F8F] hover:text-[#FAF7F3] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Title & Headline */}
          <div>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-[#FAF7F3] tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-[#998F8F]">
              {project.subtitle}
            </p>
          </div>

          {/* Key Metrics Bento */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#1C1A19] border border-white/[0.06]">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="p-3">
                  <div className="font-display font-black text-xl sm:text-2xl text-[#C5FF41]">
                    {metric.value}
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#998F8F] mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Project Overview */}
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FAF7F3] uppercase">
              <Layers className="w-4 h-4 text-[#C5FF41]" />
              System Overview
            </h3>
            <p className="text-sm sm:text-base text-[#FAF7F3]/90 leading-relaxed font-light">
              {project.overview}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#181716] border border-white/[0.06]">
              <h4 className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#F46C38] uppercase mb-2">
                <Cpu className="w-4 h-4" />
                The Engineering Challenge
              </h4>
              <p className="text-xs sm:text-sm text-[#998F8F] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#181716] border border-white/[0.06]">
              <h4 className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#C5FF41] uppercase mb-2">
                <TrendingUp className="w-4 h-4" />
                The Architectural Solution
              </h4>
              <p className="text-xs sm:text-sm text-[#998F8F] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architectural Highlights */}
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FAF7F3] uppercase">
              <ShieldCheck className="w-4 h-4 text-[#C5FF41]" />
              Architectural Highlights & Innovations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.architectureHighlights.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#1C1A19]/60 border border-white/[0.04]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C5FF41] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#FAF7F3]/80 leading-normal">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold tracking-widest text-[#998F8F] uppercase">
              Technologies & Infrastructure
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-[#201E1C] border border-white/10 text-xs font-mono text-[#FAF7F3]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="sticky bottom-0 z-20 flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-[#181716]/95 backdrop-blur-md border-t border-white/[0.08]">
          <div className="text-xs text-[#998F8F] font-mono">
            Full-Stack Case Study breakdown
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#201E1C] border border-white/10 text-xs font-semibold text-[#FAF7F3] hover:border-white/25 transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View Source</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-xl bg-[#C5FF41] text-[#121110] text-xs font-bold hover:bg-[#d6ff6b] transition-all hover:shadow-[0_0_15px_rgba(197,255,65,0.3)]"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
