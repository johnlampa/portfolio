"use client";
import MainButton from "@/components/ui/MainButton";
import React from "react";
import { saveAs } from "file-saver";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaFileDownload } from "react-icons/fa";

interface NavbarProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ setIsOpen }: NavbarProps) {
  const saveFile = () => {
    saveAs("/portfolio/Resume.pdf", "JohnLampa_Resume.pdf");
  };

  return (
    <div className="h-15 lg:h-20 w-full flex items-center justify-between">
      <div className="text-[var(--color-white)] text-sm lg:text-lg font-bold">
        John Lampa
      </div>
      <div className="flex items-center space-x-4 lg:space-x-6">
        <nav className="space-x-6 hidden lg:flex">
          <a
            href="#Skills"
            className="text-[var(--color-white)] hover:text-[var(--color-purple)]"
          >
            Skills
          </a>
          <a
            href="#Experience"
            className="text-[var(--color-white)] hover:text-[var(--color-purple)]"
          >
            Experience
          </a>
          <a
            href="#Projects"
            className="text-[var(--color-white)] hover:text-[var(--color-purple)]"
          >
            Projects
          </a>
        </nav>
        <div className="hidden lg:flex">
          <MainButton variant="gradient" onClick={saveFile}>
            <div className="flex gap-x-2">
              <div>Resume</div>
              <div className="flex items-center justify-center -mt-1">
                <FaFileDownload />
              </div>
            </div>
          </MainButton>
        </div>
        <div className="block lg:hidden">
          <MainButton variant="gradient" onClick={saveFile}>
            <div className="flex gap-x-2">
              <div className="flex items-center justify-center -mt-1">
                <FaFileDownload />
              </div>
            </div>
          </MainButton>
        </div>
        {/* Open Sidebar Button */}
        <button className="lg:hidden" onClick={() => setIsOpen(true)}>
          <RxHamburgerMenu color="white" size={20} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
