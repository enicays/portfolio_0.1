import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollManager from "@/components/ScrollManager";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-[#121110] text-[#FAF7F3] selection:bg-[#C5FF41] selection:text-[#121110]">
      {/* Ensures page always opens at top without jumping to anchors on entry or reload */}
      <ScrollManager />

      {/* Sawad Floating Icon Dock Header */}
      <Navbar />

      {/* Main 2-Column Responsive Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-36 pb-12">
        <div className="flex flex-col lg:flex-row items-start gap-10 xl:gap-14">
          {/* Sticky Profile Card on Desktop (Stays visible while scrolling down) */}
          <div className="w-full lg:w-[340px] shrink-0 lg:sticky lg:top-24 lg:self-start z-30">
            <ProfileCard />
          </div>

          {/* Right Main Content Stream */}
          <div className="flex-1 min-w-0 w-full">
            <Hero />
            <Projects />
            <Experience />
            <Tools />
            <Contact />
          </div>
        </div>
      </div>

      <Footer />
    </main>
    </SmoothScrollProvider>
  );
}
