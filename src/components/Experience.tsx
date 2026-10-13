import React from "react";
import { portfolioData } from "@/data/portfolioData";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="pt-20 pb-14 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20 relative scroll-mt-32 border-t border-[#D9D1C5]">
      <div className="w-full">
        {/* Section Heading (Plain, unformulaic typography - rendered immediately) */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#1A1614] tracking-tight uppercase">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-[#4A423B] mt-3 font-normal leading-relaxed">
            Practical experience delivering production-ready web applications, e-commerce stores, and enterprise management tools.
          </p>
        </div>

        {/* Editorial Plain List Layout (Varied from bento cards - clean hairline rules & typography) */}
        <div className="divide-y divide-[#D9D1C5]">
          {experience.map((item) => (
            <div
              key={item.id}
              className="py-10 first:pt-0 last:pb-0"
            >
              {/* Header row: Role, Badges, Company, Period */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5 sm:gap-4 mb-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#1A1614] tracking-tight">
                      {item.role}
                    </h3>
                    {item.isCurrent && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#E8341C]/10 text-xs font-mono font-semibold text-[#E8341C] uppercase tracking-wider border border-[#E8341C]/25">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E8341C]" />
                        Current
                      </span>
                    )}
                    {item.type === "Graduation Project" && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#FAF7F2] text-xs font-mono font-medium text-[#6B625A] uppercase tracking-wider border border-[#D9D1C5]">
                        Graduation Project
                      </span>
                    )}
                  </div>
                  <div className="text-sm sm:text-base font-medium text-[#6B625A] mt-1">
                    {item.company} &nbsp;•&nbsp; {item.location}
                  </div>
                </div>

                <div className="text-xs sm:text-sm font-mono font-semibold text-[#6B625A] shrink-0 sm:text-right mt-1 sm:mt-0">
                  {item.period}
                </div>
              </div>

              {/* Description (Dark, readable contrast) */}
              <p className="text-[15px] sm:text-base text-[#2E2824] leading-relaxed mb-5 max-w-3xl font-medium">
                {item.description}
              </p>

              {/* Achievements as clean editorial list with true hanging indent */}
              <ul className="space-y-3 mb-6 max-w-3xl">
                {item.achievements.map((ach, aIdx) => (
                  <li
                    key={aIdx}
                    className="flex items-baseline gap-3 text-[15px] sm:text-base text-[#2E2824] leading-relaxed"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#E8341C] shrink-0 translate-y-[-2px]"
                      aria-hidden="true"
                    />
                    <span className="flex-1 font-normal">{ach}</span>
                  </li>
                ))}
              </ul>

              {/* Core Tech Stack (Scannable architectural tags) */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1A1614] mr-1">
                  Core Stack:
                </span>
                {item.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-[#FAF7F2] border border-[#D9D1C5] text-xs font-mono font-medium text-[#2E2824] hover:border-[#1A1614] hover:bg-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
