import React from "react";

function ExperienceSection() {
  return (
    <div className="flex flex-col items-center text-white">
      <div className="text-3xl lg:text-6xl font-extrabold mb-6 lg:mb-12 tracking-wider bg-gradient-to-r from-[var(--color-purple)] to-[var(--color-magenta)] bg-clip-text text-transparent">
        <div>EXPERIENCE</div>
      </div>
      <div className="flex flex-col lg:flex-row gap-x-5 justify-center lg:justify-start items-center lg:items-start">
  <div className="h-40 w-40 rounded-full overflow-hidden flex items-center justify-center mb-6 lg:mb-0">
    <img
      src={"/SysDev.jpg"}
      alt={""}
      height={300}
      width={300}
    ></img>
  </div>
  <div className="flex flex-col justify-center">
    <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:items-end">
      <div className="flex flex-col lg:flex-row lg:items-end gap-x-1">
        <p className="text-xl font-semibold text-center lg:text-start">
          Front End Developer
        </p>
        <p className="text-[var(--color-gray)] opacity-80 italic">
          at SAMAHAN Systems Development
        </p>
      </div>
      <p className="">(August 2023 – Present)</p>
    </div>

    <ul className="text-[var(--color-gray)] opacity-80 text-sm font-normal mt-5 list-disc list-inside text-justify">
      <li className="mb-3 lg:mb-1">
        Headed the front end team of developers and delivered an informational registration website, using Next.js and Render
      </li>
      <li className="mb-3 lg:mb-1">
        Ensured that websites were responsive and efficient, which resulted in performant and responsive web pages
      </li>
      <li className="mb-3 lg:mb-1">
        Collaborated with teams to deliver 4 minor and major projects
      </li>
    </ul>
  </div>
</div>
    </div>
  );
}

export default ExperienceSection;
