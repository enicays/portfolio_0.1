import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import { portfolioData } from "@/data/portfolioData";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} | Full-Stack Software Developer`,
  description:
    "Full-Stack Software Developer portfolio showcasing bespoke high-performance web systems, distributed architectures, and modern user interfaces.",
  keywords: [
    portfolioData.personal.name,
    "Full-Stack Developer",
    "Software Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: portfolioData.personal.name }],
  openGraph: {
    title: `${portfolioData.personal.name} | Full-Stack Software Developer`,
    description: portfolioData.personal.tagline,
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} ${roboto.variable} antialiased bg-[#121110] text-[#FAF7F3] selection:bg-[#C5FF41] selection:text-[#121110]`}
      >
        {children}
      </body>
    </html>
  );
}
