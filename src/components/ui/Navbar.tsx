import MainButton from "@/components/ui/MainButton";
import React from "react";
import { FiDownload } from "react-icons/fi";

function Navbar() {
  return (
    <div className="h-20 flex">
      <div className="flex items-center justify-between w-full px-8">
        <div className="text-[var(--color-white)] text-lg font-bold">John Lampa</div>
        <div className="flex items-center space-x-6">
          <nav className="flex space-x-6">
            <a
              href="#"
              className="text-[var(--color-white)] hover:text-[var(--color-purple)]"
            >
              Skills
            </a>
            <a
              href="#"
              className="text-[var(--color-white)] hover:text-[var(--color-purple)]"
            >
              Experience
            </a>
            <a
              href="#"
              className="text-[var(--color-white)] hover:text-[var(--color-purple)]"
            >
              Projects
            </a>
          </nav>
          <MainButton variant="gradient">
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
