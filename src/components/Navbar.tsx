"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  NavHomeIcon,
  NavProjectsIcon,
  NavExperienceIcon,
  NavContactIcon,
} from "./Icons";

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

const navItems: NavItem[] = [
  {
    id: "hero",
    label: "Home",
    href: "#hero",
    icon: NavHomeIcon,
  },
  {
    id: "projects",
    label: "Projects",
    href: "#projects",
    icon: NavProjectsIcon,
  },
  {
    id: "experience",
    label: "Experience",
    href: "#experience",
    icon: NavExperienceIcon,
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
    icon: NavContactIcon,
  },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Bottom of page detection ensures contact is always active at the end
          const isAtBottom =
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 60;

          if (isAtBottom) {
            setActiveSection("contact");
            ticking = false;
            return;
          }

          const sectionIds = navItems.map((item) => item.id);
          for (let i = sectionIds.length - 1; i >= 0; i--) {
            const el = document.getElementById(sectionIds[i]);
            if (el) {
              const rect = el.getBoundingClientRect();
              // Trigger when section top enters near the upper third of screen
              if (rect.top <= 200) {
                setActiveSection(sectionIds[i]);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");

    // On mobile screens, scroll directly to the quote form card so it lands right in view
    const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
    const effectiveId =
      targetId === "contact" && isMobile ? "quote-form" : targetId;

    const elem =
      document.getElementById(effectiveId) || document.getElementById(targetId);
    if (!elem) return;

    // Navbar height is 46-50px with 14-20px top margin (~65px total dock height)
    const navbarOffset = -65;

    if (window.__lenisSmooth) {
      window.__lenisSmooth.scrollTo(elem, {
        offset: navbarOffset,
        duration: 0.9,
      });
    } else {
      const top = elem.getBoundingClientRect().top + window.scrollY + navbarOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-3.5 sm:top-5 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      {/* Editorial Warm-Paper Silky Smooth Floating Dock (Solid opaque, no blur gimmick) */}
      <nav
        className="relative flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 h-[46px] sm:h-[50px] rounded-lg bg-[#FAF7F2] border border-[#D9D1C5] shadow-xs select-none"
        aria-label="Main Navigation"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              aria-label={item.label}
              className={`relative flex items-center justify-center sm:justify-start w-9 h-9 sm:w-auto sm:px-3.5 sm:py-1.5 rounded-md text-xs sm:text-[13px] font-medium transition-colors duration-150 active:scale-95 ${
                isActive
                  ? "text-[#1A1614] font-semibold"
                  : "text-[#6B625A] hover:text-[#1A1614]"
              }`}
            >
              {/* Hardware-accelerated sliding active pill */}
              {isActive && (
                <motion.div
                  layoutId="activeNavBackground"
                  className="absolute inset-0 rounded-md bg-[#EAE4D9]/85 -z-10"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                    mass: 0.8,
                  }}
                />
              )}

              {/* Icon */}
              <Icon
                strokeWidth={isActive ? 2.2 : 1.8}
                className={`w-4 h-4 shrink-0 transition-colors duration-150 ${
                  isActive ? "text-[#E8341C]" : "text-[#6B625A]"
                }`}
              />

              {/* Desktop text label (Hidden on mobile to preserve 100% stable width and eliminate animation jank) */}
              <span className="hidden sm:inline ml-2">
                {item.label}
              </span>

              {/* Desktop active accent dot */}
              {isActive && (
                <span className="hidden sm:inline w-1.5 h-1.5 rounded-full bg-[#E8341C] shrink-0 ml-1.5" />
              )}

              {/* Mobile active micro dot underneath */}
              {isActive && (
                <span className="sm:hidden absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E8341C]" />
              )}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
