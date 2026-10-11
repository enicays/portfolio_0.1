import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollManager from "@/components/ScrollManager";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-[#F2EDE4] text-[#1A1614] selection:bg-[#E8341C] selection:text-white">
        {/* Ensures page always opens at top without jumping to anchors on entry or reload */}
        <ScrollManager />

        {/* Floating Labeled Navigation Bar */}
        <Navbar />

        {/* Main 2-Column Responsive Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-36 pb-12">
          <div className="flex flex-col lg:flex-row items-start gap-10 xl:gap-14">
            {/* Sticky Profile Card on Desktop */}
            <div className="hidden lg:block lg:w-[340px] shrink-0 lg:sticky lg:top-24 lg:self-start z-30">
              <ProfileCard />
            </div>

            {/* Right Main Content Stream */}
            <div className="flex-1 min-w-0 w-full">
              <Hero />
              <Projects />
              <Experience />
              <Contact />
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
