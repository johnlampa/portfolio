'use client';
import React from 'react';
import EmblaCarousel from '../ui/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import '../../app/globals.css';

const OPTIONS: EmblaOptionsType = { loop: true };
const slides = [
  { image: '/Misscon.png', title: 'MISSCON 2025 Registration Website', description: 'Registration website for the Mindanao International Studies Society Convention 2025' },
  { image: '/Fylp.png', title: 'FYLP 2024 Registration Website', description: 'Registration website for the Filipino Youth Leadership Program 2024' },
  { image: '/Technology.png', title: 'Mockup Website about Technology', description: 'Applications Development Course project showcasing information about technology' },
  { image: '/Compiler.png', title: 'Course Requirements Compiler Website ', description: 'Introductions to Computing Course project showcasing my works throughout the course' },
  { image: '/Newsfeed.png', title: 'SAMAHAN Newsfeed Website (ongoing)', description: 'Full-stack Website containing the archives of the documents of SAMAHAN Communications' },
  { image: '/Tycheros.png', title: 'Tycheros Cafe Management System', description: 'Cafe Management System tailored for the needs of Tycheros Cafe' },
];

const ProjectsSection: React.FC = () => {
  return (
    <div className="projects-section flex flex-col items-center">
      <div className='text-6xl font-extrabold mb-12 tracking-wider bg-gradient-to-r from-[var(--color-purple)] to-[var(--color-magenta)] bg-clip-text text-transparent'><div>PROJECTS</div></div>
      <EmblaCarousel slides={slides} options={OPTIONS} />
    </div>
  );
};

export default ProjectsSection;