import React from "react";
import Logos from "../ui/Logos";

function SkillsSection() {
  const heightWidth = 100;
  return (
    <div className="flex flex-col items-center text-white mt-28 lg:px-16">
      <div className="text-3xl lg:text-6xl font-extrabold mb-5 lg:mb-20 tracking-wider bg-gradient-to-r from-[var(--color-purple)] to-[var(--color-magenta)] bg-clip-text text-transparent">
        <div>TECHNICAL SKILLS</div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between w-full max-w-96 lg:max-w-7xl mb-24">
        <div className="text-2xl font-bold text-center mb-5 lg:mb-0">
          <p className="">Programming</p>
        </div>
        <div className="lg:-mt-2 grid grid-cols-2 lg:grid-cols-5 gap-y-4 place-items-center">
          <Logos src="Next.js" height={heightWidth} width={heightWidth}></Logos>
          <Logos
            src="React.js"
            height={heightWidth}
            width={heightWidth}
          ></Logos>
          <Logos
            src="JavaScript"
            height={heightWidth}
            width={heightWidth}
          ></Logos>
          <Logos
            src="TypeScript"
            height={heightWidth}
            width={heightWidth}
          ></Logos>
          <Logos src="Dart" height={heightWidth} width={heightWidth}></Logos>
          <Logos
            src="TailwindCSS"
            height={heightWidth}
            width={heightWidth}
          ></Logos>
          <Logos src="CSS" height={heightWidth} width={heightWidth}></Logos>
          <Logos src="Java" height={heightWidth} width={heightWidth}></Logos>
          <Logos src="MySQL" height={heightWidth} width={heightWidth}></Logos>
          <Logos
            src="PostgreSQL"
            height={heightWidth}
            width={heightWidth}
          ></Logos>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between w-full max-w-96 lg:max-w-7xl mb-24">
        <div className="text-2xl font-bold text-center mb-5 lg:mb-0">
          <p className="">Tools</p>
        </div>
        <div className="lg:-mt-2">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-4 place-items-center">
            <Logos src="Figma" height={heightWidth} width={heightWidth}></Logos>
            <Logos
              src="GitHub"
              height={heightWidth}
              width={heightWidth}
            ></Logos>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
