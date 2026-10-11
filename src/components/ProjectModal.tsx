"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Project } from "@/data/portfolioData";
import {
  X,
  ExternalLink,
  Layers,
  Cpu,
  ShieldCheck,
  TrendingUp,
  LayoutGrid,
  Maximize2,
} from "lucide-react";
import { GithubIcon } from "./Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);
  const scrollBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveScreenshotIdx(0);
    // Scroll back to top whenever project changes
    if (scrollBodyRef.current) {
      scrollBodyRef.current.scrollTop = 0;
    }
  }, [project?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      // Temporarily pause smooth scroll instance while modal is open
      window.__lenisSmooth?.stop();
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
      window.__lenisSmooth?.start();
    };
  }, [project, onClose]);

  const handleModalWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
    // If scrolling occurs outside the scrollable body (e.g. over header, footer, padding), forward delta to body
    if (scrollBodyRef.current && !scrollBodyRef.current.contains(e.target as Node)) {
      scrollBodyRef.current.scrollTop += e.deltaY;
    }
  };

  if (!project) return null;

  return (
    <div
      data-lenis-prevent
      onWheel={handleModalWheel}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1A1614]/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog Content (Warm paper editorial modal) */}
      <div
        data-lenis-prevent
        className="relative w-full max-w-4xl bg-[#FCFAF7] border border-[#D9D1C5] rounded-3xl shadow-xl overflow-hidden z-10 my-auto animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col text-[#1A1614]"
      >
        {/* Top Header Bar */}
        <div className="shrink-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FAF7F2] border-b border-[#D9D1C5]">
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
        <div
          ref={scrollBodyRef}
          data-lenis-prevent
          tabIndex={0}
          className="flex-1 min-h-0 p-6 sm:p-8 overflow-y-auto overscroll-contain space-y-8 focus:outline-none"
        >
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

          {/* Screenshots Showcase */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <h3 className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#1A1614] uppercase">
                  <LayoutGrid className="w-4 h-4 text-[#E8341C]" />
                  Application Interface &amp; Live Screens
                </h3>
                <span className="text-[11px] font-mono text-[#6B625A]">
                  {activeScreenshotIdx + 1} of {project.screenshots.length}
                </span>
              </div>

              {/* Main Featured Screenshot */}
              <div className="relative aspect-[16/8] sm:aspect-[16/7.5] w-full rounded-2xl overflow-hidden bg-[#181615] border border-[#D9D1C5] shadow-xs group">
                <Image
                  src={project.screenshots[activeScreenshotIdx].url}
                  alt={project.screenshots[activeScreenshotIdx].title}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 100vw, 896px"
                  priority
                />
                <a
                  href={project.screenshots[activeScreenshotIdx].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 px-2.5 py-1.5 rounded-lg bg-[#1A1614]/85 backdrop-blur-xs text-white text-xs font-mono font-medium flex items-center gap-1.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity hover:bg-[#E8341C]"
                  title="Open full resolution in new tab"
                >
                  <span className="hidden sm:inline">Full Resolution</span>
                  <Maximize2 className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Caption Card */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FAF7F2] border border-[#D9D1C5]">
                <p className="text-xs sm:text-sm font-mono font-bold text-[#1A1614]">
                  {project.screenshots[activeScreenshotIdx].title}
                </p>
                <p className="text-xs sm:text-sm text-[#6B625A] mt-1 leading-relaxed">
                  {project.screenshots[activeScreenshotIdx].caption}
                </p>
              </div>

              {/* Screenshot Selector Buttons */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {project.screenshots.map((s, idx) => {
                  const isActive = idx === activeScreenshotIdx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveScreenshotIdx(idx)}
                      className={`relative aspect-[16/8] sm:aspect-[16/7] rounded-xl overflow-hidden border text-left transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "border-[#E8341C] ring-2 ring-[#E8341C]/30 shadow-xs"
                          : "border-[#D9D1C5] opacity-70 hover:opacity-100 hover:border-[#1A1614]"
                      }`}
                    >
                      <Image
                        src={s.url}
                        alt={s.title}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 30vw, 260px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-1.5 sm:p-2">
                        <span className="text-[9px] sm:text-[10px] font-mono font-medium text-white line-clamp-1 leading-tight">
                          {idx + 1}. {s.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
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
        <div className="shrink-0 z-20 flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-[#FAF7F2] border-t border-[#D9D1C5]">
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
