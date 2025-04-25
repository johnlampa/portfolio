'use client'
import MainButton from "@/components/ui/MainButton";
import React from "react";
import { FiDownload } from "react-icons/fi";
import { saveAs } from "file-saver";

function Navbar() {
  const saveFile = () => {
    saveAs(
      "/Resume.pdf",
      "JohnLampa_Resume.pdf"
    );
  };
  return (
    <div className="h-20 flex">
      <div className="flex items-center justify-between w-full px-8">
        <div className="text-[var(--color-white)] text-lg font-bold">John Lampa</div>
        <div className="flex items-center space-x-6">
          <nav className="flex space-x-6">
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
          <MainButton variant="gradient" onClick={saveFile}>
            <div className="flex gap-x-2">
              <div>Resume</div>
              <div className="flex items-center justify-center -mt-1">
                <FiDownload />
              </div>
            </div>
          </MainButton>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
