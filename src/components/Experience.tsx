import React from "react";
import { portfolioData } from "@/data/portfolioData";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-14 lg:py-20 relative scroll-mt-28 border-t border-[#D9D1C5]">
      <div className="w-full">
        {/* Section Heading (Plain, unformulaic typography - rendered immediately) */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#1A1614] tracking-tight uppercase">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-[#6B625A] mt-3 font-normal leading-relaxed">
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
              {/* Header row: Role, Company, Period */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#1A1614] tracking-tight">
                      {item.role}
                    </h3>
                    {item.isCurrent && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#E8341C] uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E8341C]" />
                        Current
                      </span>
                    )}
                  </div>
                  <div className="text-base font-medium text-[#6B625A] mt-1">
                    {item.company} &nbsp;•&nbsp; {item.location}
                  </div>
                </div>

                <div className="text-sm font-mono text-[#6B625A] shrink-0">
                  {item.period}
                </div>
              </div>

              {/* Description */}
              <p className="text-base text-[#1A1614] leading-relaxed mb-5 max-w-3xl">
                {item.description}
              </p>

              {/* Achievements as clean editorial typographic list (No green checkmark icons) */}
              <ul className="space-y-2 mb-6 max-w-3xl list-disc list-inside text-sm text-[#6B625A] leading-relaxed marker:text-[#E8341C]">
                {item.achievements.map((ach, aIdx) => (
                  <li key={aIdx} className="pl-1">
                    <span className="text-[#6B625A]">{ach}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack (Plain inline text - no pill wrappers) */}
              <div className="text-xs font-mono text-[#6B625A]">
                <span className="font-semibold text-[#1A1614] mr-2">Core Stack:</span>
                {item.techStack.join(" • ")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
