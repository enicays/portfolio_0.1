"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { CheckCircle2, Copy } from "lucide-react";
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

  const socialLinks = personal.socials.filter(
    (s) => s.platform.toLowerCase() !== "email"
  );

  return (
    <section id="contact" className="pt-10 pb-14 sm:pt-14 sm:pb-16 lg:py-20 relative scroll-mt-24 border-t border-[#D9D1C5]">
      <div className="max-w-xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-7"
        >
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#1A1614] tracking-tight uppercase leading-[0.95] mb-3.5">
            HAVE A PROJECT? <br />
            <span className="text-[#E8341C]">LET&apos;S TALK.</span>
          </h2>
          <p className="text-base text-[#6B625A] font-normal leading-relaxed">
            Tell me what you need. I&apos;ll reply with a quote within 24 hours.
          </p>
        </motion.div>

        {/* Free Quote Form Card */}
        <motion.div
          id="quote-form"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="scroll-mt-20"
        >
          <InquiryForm />
        </motion.div>

        {/* Compact Direct Email & Social Links Footer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-7 text-center"
        >
          {/* Prefer email line */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-[#6B625A]">
            <span>Prefer email?</span>
            <a
              href={`mailto:${personal.email}`}
              className="font-semibold text-[#1A1614] hover:text-[#E8341C] underline underline-offset-4 transition-colors"
            >
              {personal.email}
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FAF7F2] hover:bg-white text-xs font-mono text-[#6B625A] hover:text-[#1A1614] border border-[#D9D1C5] hover:border-[#E8341C] transition-all cursor-pointer ml-1"
              aria-label="Copy direct email address"
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

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mt-3">
            {socialLinks.map((soc) => (
              <a
                key={soc.platform}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#6B625A] hover:text-[#E8341C] underline-offset-4 hover:underline transition-colors"
              >
                {soc.platform}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
