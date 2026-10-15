"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import InquiryForm from "./InquiryForm";

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
    <section id="contact" className="pt-4 pb-12 sm:pt-8 sm:pb-16 lg:py-20 relative scroll-mt-20 sm:scroll-mt-24">
      {/* Horizontal divider line hidden on mobile viewports */}
      <hr className="hidden sm:block border-t border-[#D9D1C5] mb-8 sm:mb-12" />

      <div className="max-w-xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-4 sm:mb-6">
          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-[#1A1614] tracking-tight uppercase leading-[0.98] sm:leading-[0.95] mb-2 sm:mb-3">
            HAVE A PROJECT? <br />
            <span className="text-[#E8341C]">LET&apos;S TALK.</span>
          </h2>
          <p className="hidden sm:block text-sm sm:text-base text-[#6B625A] font-normal leading-relaxed">
            Tell me what you need. I&apos;ll reply with a quote within 24 hours.
          </p>
        </div>

        {/* Free Quote Form Card */}
        <div id="quote-form" className="scroll-mt-20 sm:scroll-mt-24">
          <InquiryForm />
        </div>

        {/* Compact Direct Email & Social Links Footer */}
        <div className="mt-7 text-center">
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
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#FAF7F2] hover:bg-white text-xs font-mono text-[#6B625A] hover:text-[#1A1614] border border-[#D9D1C5] hover:border-[#E8341C] transition-all cursor-pointer ml-1"
              aria-label="Copy direct email address"
            >
              {copiedEmail ? (
                <span className="text-[#E8341C] font-semibold">[ Copied ✓ ]</span>
              ) : (
                <span>[ Copy ]</span>
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
        </div>
      </div>
    </section>
  );
}
