import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <div id="Skills">
        <SkillsSection></SkillsSection>
      </div>
      
      <div className="h-28"></div>
      <div id="Experience">
        <ExperienceSection></ExperienceSection>
      </div>
      <div className="h-28"></div>
      <div id="Projects">
        <ProjectsSection></ProjectsSection>
      </div>
      
      <div className="h-28"></div>
      <Footer></Footer>
    </div>
  );
}
