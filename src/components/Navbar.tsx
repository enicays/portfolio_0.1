"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Folder, Briefcase, Wrench, SquarePen } from "lucide-react";

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
    icon: Home,
  },
  {
    id: "projects",
    label: "Projects",
    href: "#projects",
    icon: Folder,
  },
  {
    id: "experience",
    label: "Experience",
    href: "#experience",
    icon: Briefcase,
  },
  {
    id: "tools",
    label: "Tools",
    href: "#tools",
    icon: Wrench,
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
    icon: SquarePen,
  },
];

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      {/* Sawad Floating Icon Dock Bar */}
      <nav
        className="relative flex items-center justify-center gap-4 sm:gap-5 px-5 sm:px-6 h-[54px] rounded-2xl bg-[#181716]/90 border border-white/[0.08] backdrop-blur-xl shadow-2xl shadow-black/60 transition-all duration-300"
        aria-label="Main Navigation"
      >
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          const isHovered = hoveredIndex === idx;

          return (
            <div
              key={item.id}
              className="relative flex items-center justify-center"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                aria-label={item.label}
                className={`relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl transition-all duration-200 group ${
                  isActive
                    ? "text-[#FAF7F3] bg-white/[0.06]"
                    : "text-[#FAF7F3]/75 hover:text-[#FAF7F3] hover:bg-white/[0.04]"
                }`}
              >
                {/* Active subtle background pill */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 rounded-xl bg-white/[0.08] -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Icon with smooth hover scale */}
                <Icon
                  strokeWidth={1.8}
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isHovered ? "scale-110 text-[#FAF7F3]" : ""
                  } ${isActive ? "text-[#FAF7F3]" : ""}`}
                />

                {/* Subtle active neon dot indicator */}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C5FF41]" />
                )}
              </a>

              {/* Hover Tooltip Pill - Appears below like in Sawad screenshot */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: -4, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.96 }}
                    transition={{
                      duration: 0.16,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-[#242220] border border-white/[0.08] text-[#FAF7F3] text-xs font-sans font-medium whitespace-nowrap shadow-xl pointer-events-none z-50 select-none"
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>
    </header>
  );
}
