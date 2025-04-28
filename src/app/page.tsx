"use client";
import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Footer from "@/components/ui/Footer";

import { Sheet, SheetContent } from "@/components/ui/sheet";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close the sidebar after scrolling
  };

  return (
    <div className="w-full px-5">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent>
          <div className="px-7 py-14 flex flex-col gap-y-5 text-[var(--color-purple)] font-semibold text-xl">
            <a href="#Skills" onClick={(e) => handleScroll(e, "Skills")}>
              Skills
            </a>
            <a
              href="#Experience"
              onClick={(e) => handleScroll(e, "Experience")}
            >
              Experience
            </a>
            <a href="#Projects" onClick={(e) => handleScroll(e, "Projects")}>
              Projects
            </a>
          </div>
        </SheetContent>
      </Sheet>

      <Navbar setIsOpen={setIsOpen} />
      <HeroSection />
      <div id="Skills">
        <SkillsSection />
      </div>

      <div className="h-28"></div>
      <div id="Experience">
        <ExperienceSection />
      </div>
      <div className="h-28"></div>
      <div id="Projects">
        <ProjectsSection />
      </div>

      <div className="h-14 lg:h-28"></div>
      <Footer />
    </div>
  );
}
