"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  NextjsLogo,
  ReactLogo,
  TypeScriptLogo,
  TailwindLogo,
  NodejsLogo,
  PostgreSQLLogo,
  FigmaLogo,
  GithubLogo,
} from "./Icons";

export default function Tools() {
  const { tools } = portfolioData;

  const renderToolLogo = (iconType: string) => {
    switch (iconType) {
      case "nextjs":
        return <NextjsLogo className="w-9 h-9" />;
      case "react":
        return <ReactLogo className="w-9 h-9" />;
      case "typescript":
        return <TypeScriptLogo className="w-8 h-8" />;
      case "tailwind":
        return <TailwindLogo className="w-8 h-8" />;
      case "nodejs":
        return <NodejsLogo className="w-9 h-9" />;
      case "postgresql":
        return <PostgreSQLLogo className="w-8 h-8" />;
      case "figma":
        return <FigmaLogo className="w-6 h-9" />;
      case "github":
        return <GithubLogo className="w-8 h-8 text-black" />;
      default:
        return <div className="w-8 h-8 bg-black rounded" />;
    }
  };

  return (
    <section id="tools" className="py-14 lg:py-20 relative border-t border-white/[0.06]">
      <div className="w-full">
        {/* Large Sawad Display Heading */}
        <div className="mb-14 sm:mb-20 select-none">
          <h2 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] tracking-tight leading-[0.88] uppercase">
            <span className="block text-[#FAF7F3] drop-shadow-sm">
              PREMIUM
            </span>
            <span className="block text-[#2e2c2a] transition-colors">
              TOOLS
            </span>
          </h2>
        </div>

        {/* 2-Column Client-Friendly Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-9 sm:gap-y-12 max-w-4xl">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group flex items-center gap-4 sm:gap-5 cursor-default transition-all duration-200"
            >
              {/* White rounded squircle icon container */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-lg p-2.5 transition-transform duration-200 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                {renderToolLogo(tool.iconType)}
              </div>

              {/* Title & Client-Friendly Subtitle */}
              <div className="flex flex-col">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#FAF7F3] group-hover:text-[#C5FF41] transition-colors leading-tight">
                  {tool.name}
                </h3>
                <p className="text-sm sm:text-base text-[#998F8F] font-normal leading-normal mt-0.5">
                  {tool.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
