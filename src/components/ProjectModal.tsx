"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/portfolioData";
import {
  X,
  ExternalLink,
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
        className="fixed inset-0 bg-[#1A1614]/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog Content (Warm paper editorial modal) */}
      <div className="relative w-full max-w-4xl bg-[#FCFAF7] border border-[#D9D1C5] rounded-3xl shadow-xl overflow-hidden z-10 my-auto animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col text-[#1A1614]">
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FAF7F2] border-b border-[#D9D1C5]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6B625A]">
              {project.category}
            </span>
            <span className="text-xs font-mono text-[#D9D1C5]">/</span>
            <span className="text-xs font-mono text-[#6B625A]">
              {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#FCFAF7] border border-[#D9D1C5] text-[#6B625A] hover:text-[#1A1614] hover:border-[#1A1614] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Title & Headline */}
          <div>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-[#1A1614] tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-[#6B625A]">
              {project.subtitle}
            </p>
          </div>

          {/* Key Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#FAF7F2] border border-[#D9D1C5]">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="p-3">
                  <div className="font-display font-black text-xl sm:text-2xl text-[#1A1614]">
                    {metric.value}
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#6B625A] mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Project Overview */}
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#1A1614] uppercase">
              <Layers className="w-4 h-4 text-[#E8341C]" />
              System Overview
            </h3>
            <p className="text-base text-[#1A1614] leading-relaxed font-normal">
              {project.overview}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#D9D1C5]">
              <h4 className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#E8341C] uppercase mb-2">
                <Cpu className="w-4 h-4" />
                The Engineering Challenge
              </h4>
              <p className="text-sm text-[#6B625A] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#D9D1C5]">
              <h4 className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#1A1614] uppercase mb-2">
                <TrendingUp className="w-4 h-4 text-[#E8341C]" />
                The Architectural Solution
              </h4>
              <p className="text-sm text-[#6B625A] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architectural Highlights */}
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#1A1614] uppercase">
              <ShieldCheck className="w-4 h-4 text-[#E8341C]" />
              Architectural Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.architectureHighlights.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF7F2] border border-[#D9D1C5]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8341C] shrink-0 mt-2" />
                  <span className="text-xs text-[#1A1614] leading-normal">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold tracking-widest text-[#6B625A] uppercase">
              Technologies &amp; Tools
            </h3>
            <div className="text-xs font-mono text-[#6B625A]">
              {project.techStack.join(" • ")}
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="sticky bottom-0 z-20 flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-[#FAF7F2] border-t border-[#D9D1C5]">
          <div className="text-xs text-[#6B625A] font-mono">
            Full-Stack Case Study breakdown
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FCFAF7] border border-[#D9D1C5] text-xs font-semibold text-[#1A1614] hover:border-[#1A1614] transition-all"
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
                className="flex items-center gap-2 px-5 py-2 rounded-xl bg-[#E8341C] text-white text-xs font-bold hover:brightness-105 transition-all shadow-xs"
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
