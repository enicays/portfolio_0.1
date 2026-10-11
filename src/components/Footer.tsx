"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    if (window.__lenisSmooth) {
      window.__lenisSmooth.scrollTo(0, { duration: 0.9 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 bg-[#FAF7F2] border-t border-[#D9D1C5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Monogram & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#FCFAF7] border border-[#D9D1C5] flex items-center justify-center font-bold text-xs">
                <span className="text-[#E8341C]">S</span>Y
              </div>
              <span className="font-display font-bold text-sm tracking-wide text-[#1A1614]">
                {portfolioData.personal.name}
              </span>
            </div>

            <span className="hidden sm:inline text-[#D9D1C5]">|</span>

            <p className="text-xs font-mono text-[#6B625A]">
              © {new Date().getFullYear()} All rights reserved. Crafted with care and precision.
            </p>
          </div>

          {/* System status pill */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCFAF7] border border-[#D9D1C5] text-[11px] font-mono text-[#6B625A]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8341C]"></span>
            <span>All systems nominal</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[#FCFAF7] border border-[#D9D1C5] text-xs font-mono text-[#1A1614] hover:border-[#E8341C] hover:text-[#E8341C] transition-all cursor-pointer"
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
