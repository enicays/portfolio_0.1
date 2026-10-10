"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  CheckCircle2,
  Copy,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import InquiryForm from "./InquiryForm";
import { motion } from "framer-motion";

export default function Contact() {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-14 lg:py-20 relative scroll-mt-28 border-t border-[#D9D1C5]">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              {/* The single intentional two-tone heading on the site */}
              <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#1A1614] tracking-tight uppercase leading-[0.95] mb-6">
                HAVE A PROJECT? <br />
                <span className="text-[#E8341C]">LET&apos;S TALK.</span>
              </h2>
              <p className="text-base text-[#6B625A] font-normal leading-relaxed mb-8">
                Whether you need a full-stack web application, a performance overhaul, or a dedicated developer for your next project, my inbox is open.
              </p>

              {/* Email Card with Copy button */}
              <div className="p-5 rounded-2xl bg-[#FCFAF7] border border-[#D9D1C5] mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#6B625A] mb-1">
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-sm sm:text-base font-mono font-bold text-[#1A1614] hover:text-[#E8341C] transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF7F2] hover:bg-white text-xs text-[#1A1614] font-mono border border-[#D9D1C5] hover:border-[#E8341C] transition-colors self-start sm:self-auto cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E8341C]" />
                      <span className="text-[#E8341C] font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#6B625A]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Response Time Indicator */}
              <div className="flex items-center gap-2 text-xs font-mono text-[#6B625A] mb-8">
                <Clock className="w-3.5 h-3.5 text-[#E8341C]" />
                <span>Typical response time: Within 12-24 hours</span>
              </div>
            </div>

            {/* Socials Link List */}
            <div className="pt-6 border-t border-[#D9D1C5]">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#6B625A] mb-3">
                Social Profiles &amp; Networks
              </div>
              <div className="flex flex-wrap gap-2.5">
                {personal.socials.map((soc) => (
                  <a
                    key={soc.platform}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#FCFAF7] border border-[#D9D1C5] text-xs font-mono text-[#1A1614] hover:border-[#E8341C] hover:text-[#E8341C] transition-all"
                  >
                    <span>{soc.platform}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#6B625A] group-hover:text-[#E8341C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Multi-Step Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 flex justify-center lg:justify-end"
          >
            <InquiryForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
