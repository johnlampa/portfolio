"use client";
import React from "react";
import EmblaCarousel from "../ui/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "../../app/globals.css";

const OPTIONS: EmblaOptionsType = { loop: true };

const slides = [
  {
    image: `/portfolio/Misscon.png`,
    title: "MISSCON 2025 Registration Website",
    description:
      "Registration website for the Mindanao International Studies Society Convention 2025",
    link: true,
    linkk: "https://misscon2025.info",
    code: true,
    codee: "https://github.com/SAMAHAN-Systems-Development/MISSCON-2025",
  },
  {
    image: "/portfolio/Fylp.png",
    title: "FYLP 2024 Registration Website",
    description:
      "Registration website for the Filipino Youth Leadership Program 2024",
    link: true,
    linkk: "https://www.fylp2024.com",
    code: true,
    codee: "https://github.com/SAMAHAN-Systems-Development/FYLP-frontend-2024",
  },
  {
    image: "/portfolio/Newsfeed.png",
    title: "SAMAHAN Newsfeed Website (ongoing)",
    description:
      "Full-stack Website containing the archives of the documents of SAMAHAN Communications",
  },
  {
    image: "/portfolio/Technology.png",
    title: "Mockup Website about Technology",
    description:
      "Applications Development Course project showcasing information about technology",
    code: true,
    codee: "https://github.com/johnlampa/AppDev-Project",
  },
  {
    image: "/portfolio/Compiler.png",
    title: "Course Requirements Compiler Website ",
    description:
      "Introductions to Computing Course project showcasing my works throughout the course",
    code: true,
    codee: "https://github.com/johnlampa/ITC-Project",
  },
  {
    image: "/portfolio/Tycheros.png",
    title: "Tycheros Cafe Management System",
    description:
      "Cafe Management System tailored for the needs of Tycheros Cafe",
    code: true,
    codee: "https://github.com/johnlampa/TycherosCafe-ManagementSystem",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <div className="projects-section flex flex-col items-center ">
      <div className="text-6xl font-extrabold mb-12 tracking-wider bg-gradient-to-r from-[var(--color-purple)] to-[var(--color-magenta)] bg-clip-text text-transparent">
        <div>PROJECTS</div>
      </div>
      <EmblaCarousel slides={slides} options={OPTIONS} />
    </div>
  );
};

export default ProjectsSection;
