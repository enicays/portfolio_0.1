import type { Metadata, Viewport } from "next";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://yacinesilem.dev";

export const viewport: Viewport = {
  themeColor: "#F2EDE4",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${portfolioData.personal.name} | Full-Stack Software Developer`,
  description:
    "Websites and apps that bring in clients. Fast, reliable full-stack web applications from first idea to launch.",
  keywords: [
    portfolioData.personal.name,
    "Full-Stack Developer",
    "Software Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: portfolioData.personal.name, url: siteUrl }],
  creator: portfolioData.personal.name,
  publisher: portfolioData.personal.name,
  applicationName: "Silem Yacine Portfolio",
  alternates: {
    canonical: "/",
  },
  // Dedicated Open Graph Metadata for WhatsApp, Telegram, Facebook, LinkedIn
  openGraph: {
    title: `${portfolioData.personal.name} | Full-Stack Software Developer`,
    description:
      "Websites and apps that bring in clients. Fast, reliable full-stack web applications from first idea to launch.",
    url: siteUrl,
    siteName: "Silem Yacine Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        secureUrl: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${portfolioData.personal.name} - Full-Stack Software Developer Portfolio`,
        type: "image/png",
      },
      {
        url: "/og-image-square.png",
        secureUrl: "/og-image-square.png",
        width: 600,
        height: 600,
        alt: `${portfolioData.personal.name} - Square Profile Card for WhatsApp`,
        type: "image/png",
      },
    ],
  },
  // Twitter Card Metadata (Telegram also reads this for large-format media preview)
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.personal.name} | Full-Stack Software Developer`,
    description:
      "Websites and apps that bring in clients. Fast, reliable full-stack web applications from first idea to launch.",
    images: ["/og-image.png"],
    creator: "@enicays",
  },
  // Additional tags specifically recognized by WhatsApp and Telegram link unfurlers
  other: {
    "og:image:type": "image/png",
    "og:image:width": "1200",
    "og:image:height": "630",
    "twitter:image:alt": `${portfolioData.personal.name} - Full-Stack Software Developer`,
    "format-detection": "telephone=no",
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
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto.variable} antialiased bg-[#F2EDE4] text-[#1A1614] selection:bg-[#E8341C] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
