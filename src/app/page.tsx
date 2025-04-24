import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <div className="h-10"></div>
      <SkillsSection></SkillsSection>
      <ExperienceSection></ExperienceSection>
      <div className="h-20"></div>
      <ProjectsSection></ProjectsSection>
    </div>
  );
}
