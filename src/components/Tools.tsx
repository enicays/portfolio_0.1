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
import { motion } from "framer-motion";

export default function Tools() {
  const { tools } = portfolioData;

  const renderToolLogo = (iconType: string) => {
    switch (iconType) {
      case "nextjs":
        return <NextjsLogo className="w-8 h-8" />;
      case "react":
        return <ReactLogo className="w-8 h-8" />;
      case "typescript":
        return <TypeScriptLogo className="w-7 h-7" />;
      case "tailwind":
        return <TailwindLogo className="w-7 h-7" />;
      case "nodejs":
        return <NodejsLogo className="w-8 h-8" />;
      case "postgresql":
        return <PostgreSQLLogo className="w-7 h-7" />;
      case "figma":
        return <FigmaLogo className="w-5 h-8" />;
      case "github":
        return <GithubLogo className="w-7 h-7 text-black" />;
      default:
        return <div className="w-7 h-7 bg-black rounded" />;
    }
  };

  return (
    <section id="tools" className="py-14 lg:py-20 relative scroll-mt-28 border-t border-[#D9D1C5]">
      <div className="w-full">
        {/* Section Heading (Confident, quiet, plain heading with white space) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-2xl mb-12 sm:mb-16"
        >
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#1A1614] tracking-tight uppercase">
            Tools &amp; Technologies
          </h2>
          <p className="text-sm sm:text-base text-[#6B625A] mt-3 font-normal leading-relaxed">
            A focused stack of modern technologies I use daily to design, engineer, and deploy reliable web products.
          </p>
        </motion.div>

        {/* 2-Column Grid with generous white space and authentic practitioner notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-10 sm:gap-y-12">
          {tools.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.06,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="group flex items-start gap-4 sm:gap-5 cursor-default"
            >
              {/* Tinted squircle icon container */}
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#FCFAF7] border border-[#D9D1C5] flex items-center justify-center shrink-0 shadow-xs p-2.5 transition-transform duration-200 group-hover:scale-105">
                {renderToolLogo(tool.iconType)}
              </div>

              {/* Title & Authentic Practitioner Note */}
              <div className="flex flex-col">
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#1A1614] group-hover:text-[#E8341C] transition-colors leading-tight">
                  {tool.name}
                </h3>
                <p className="text-sm text-[#6B625A] font-normal leading-relaxed mt-1">
                  {tool.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
