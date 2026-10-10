"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Mail,
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
    <section id="contact" className="py-14 lg:py-20 relative border-t border-white/[0.06]">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#C5FF41] uppercase mb-3">
                <Mail className="w-3.5 h-3.5" />
                <span>LET&apos;S WORK TOGETHER</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#FAF7F3] tracking-tight uppercase leading-[0.95] mb-6">
                HAVE A PROJECT? <br />
                <span className="text-[#C5FF41]">LET&apos;S TALK.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#998F8F] font-light leading-relaxed mb-8">
                Whether you need a high-scale web system, an architecture overhaul, or a dedicated senior engineering partner, my inbox is open.
              </p>

              {/* Email Card with Copy button */}
              <div className="p-5 rounded-2xl bg-[#181716] border border-white/[0.08] mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#998F8F] mb-1">
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-sm sm:text-base font-mono font-bold text-[#FAF7F3] hover:text-[#C5FF41] transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/10 text-xs text-[#FAF7F3] font-mono border border-white/[0.06] transition-colors self-start sm:self-auto"
                >
                  {copiedEmail ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5FF41]" />
                      <span className="text-[#C5FF41]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#998F8F]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Response Time Badge */}
              <div className="flex items-center gap-2 text-xs font-mono text-[#998F8F] mb-8">
                <Clock className="w-3.5 h-3.5 text-[#C5FF41]" />
                <span>Typical response time: Within 12-24 hours</span>
              </div>
            </div>

            {/* Socials Link List */}
            <div className="pt-6 border-t border-white/[0.06]">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#998F8F] mb-3">
                Social Profiles &amp; Networks
              </div>
              <div className="flex flex-wrap gap-2.5">
                {personal.socials.map((soc) => (
                  <a
                    key={soc.platform}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#181716] border border-white/[0.06] text-xs font-mono text-[#FAF7F3] hover:border-[#C5FF41]/40 hover:text-[#C5FF41] transition-all"
                  >
                    <span>{soc.platform}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#998F8F] group-hover:text-[#C5FF41] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Multi-Step Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 flex justify-center lg:justify-end"
          >
            <InquiryForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
