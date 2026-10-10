"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 140;

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
      const top = elem.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 pointer-events-auto w-[calc(100%-2rem)] max-w-fit">
      {/* Editorial Warm-Paper Labeled Nav Bar */}
      <nav
        className="relative flex items-center justify-center gap-1 sm:gap-2 px-2.5 sm:px-3 h-[50px] rounded-2xl bg-[#FAF7F2]/95 border border-[#D9D1C5] backdrop-blur-md shadow-sm transition-all duration-200"
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
              className={`relative flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-xl text-xs sm:text-[13px] font-medium transition-all duration-150 ${
                isActive
                  ? "text-[#1A1614] bg-[#EAE4D9]/80 font-semibold"
                  : "text-[#6B625A] hover:text-[#1A1614] hover:bg-[#EAE4D9]/40"
              }`}
            >
              {/* Active pill spring animation */}
              {isActive && (
                <motion.div
                  layoutId="activeNavBackground"
                  className="absolute inset-0 rounded-xl bg-[#EAE4D9]/80 -z-10"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              )}

              <Icon
                strokeWidth={isActive ? 2.2 : 1.8}
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-colors ${
                  isActive ? "text-[#E8341C]" : "text-[#6B625A]"
                }`}
              />

              {/* Explicit visible text label */}
              <span>{item.label}</span>

              {/* Single accent active dot */}
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8341C] shrink-0" />
              )}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
