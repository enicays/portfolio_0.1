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
    <header className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 pointer-events-auto max-w-[calc(100vw-1.5rem)] sm:max-w-fit">
      {/* Editorial Warm-Paper Responsive Floating Nav Bar */}
      <nav
        className="relative flex items-center justify-center gap-0.5 sm:gap-2 px-1.5 sm:px-3 h-[46px] sm:h-[50px] rounded-2xl bg-[#FAF7F2]/95 border border-[#D9D1C5] backdrop-blur-md shadow-sm transition-all duration-200"
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
              className={`relative flex items-center rounded-xl text-xs sm:text-[13px] font-medium transition-all duration-200 select-none ${
                isActive
                  ? "text-[#1A1614] bg-[#EAE4D9]/80 font-semibold px-2.5 sm:px-3.5 py-1.5 gap-1.5 sm:gap-2"
                  : "text-[#6B625A] hover:text-[#1A1614] hover:bg-[#EAE4D9]/40 p-2 sm:px-3.5 sm:py-1.5 gap-2"
              }`}
            >
              {/* Active pill spring background */}
              {isActive && (
                <motion.div
                  layoutId="activeNavBackground"
                  className="absolute inset-0 rounded-xl bg-[#EAE4D9]/80 -z-10"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              )}

              <Icon
                strokeWidth={isActive ? 2.2 : 1.8}
                className={`w-4 h-4 shrink-0 transition-colors ${
                  isActive ? "text-[#E8341C]" : "text-[#6B625A]"
                }`}
              />

              {/* Responsive label: on mobile, active item expands with label; on desktop, all labels visible */}
              <span className={isActive ? "inline" : "hidden sm:inline"}>
                {item.label}
              </span>

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
