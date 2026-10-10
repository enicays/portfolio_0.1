"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-[#100F0E] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#1C1A19] border border-white/10 flex items-center justify-center font-bold text-xs">
                <span className="text-[#C5FF41]">A</span>R
              </div>
              <span className="font-display font-extrabold text-sm tracking-wide text-[#FAF7F3]">
                {portfolioData.personal.name}
              </span>
            </div>

            <span className="hidden sm:inline text-white/20">|</span>

            <p className="text-xs font-mono text-[#998F8F]">
              © {new Date().getFullYear()} All rights reserved. Crafted with precision.
            </p>
          </div>

          {/* System status pill */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#181716] border border-white/[0.06] text-[11px] font-mono text-[#998F8F]">
            <span className="w-2 h-2 rounded-full bg-[#C5FF41]"></span>
            <span>All systems nominal</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[#181716] border border-white/10 text-xs font-mono text-[#FAF7F3] hover:border-[#C5FF41]/40 hover:text-[#C5FF41] transition-all"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
