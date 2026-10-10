"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-14 lg:py-20 relative border-t border-white/[0.06]">
      <div className="w-full">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-2xl mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#C5FF41] uppercase mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER PATH</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#FAF7F3] tracking-tight uppercase">
            WORK <span className="text-[#C5FF41]">EXPERIENCE</span>
          </h2>
          <p className="text-sm sm:text-base text-[#998F8F] mt-4 font-light leading-relaxed">
            Practical experience delivering custom web applications, e-commerce stores, and enterprise management software.
          </p>
        </motion.div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6">
          {experience.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group p-6 sm:p-8 rounded-3xl bg-[#181716]/90 border border-white/[0.08] hover:border-[#C5FF41]/40 transition-all duration-300 hover:bg-[#1C1A19]"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display font-black text-xl sm:text-2xl text-[#FAF7F3] group-hover:text-[#C5FF41] transition-colors">
                      {item.role}
                    </h3>
                    {item.isCurrent && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#C5FF41]/15 text-[#C5FF41] border border-[#C5FF41]/30 text-[10px] font-mono font-bold uppercase tracking-wider">
                        Current Role
                      </span>
                    )}
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-[#998F8F]">
                    {item.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#998F8F]">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06]">
                    <Calendar className="w-3.5 h-3.5 text-[#C5FF41]" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06]">
                    <MapPin className="w-3.5 h-3.5 text-[#998F8F]" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#FAF7F3]/90 leading-relaxed font-light mb-6">
                {item.description}
              </p>

              {/* Achievements bullet list */}
              <div className="space-y-2.5 mb-6">
                {item.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C5FF41] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#998F8F] leading-relaxed">
                      {ach}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-[#998F8F] mr-1">
                  Stack:
                </span>
                {item.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-[#22201E] border border-white/[0.06] text-xs font-mono text-[#FAF7F3]/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
