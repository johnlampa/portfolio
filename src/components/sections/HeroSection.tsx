import React from "react";
import Image from "next/image";
import ContactButtons from "../ui/ContactButtons";

function HeroSection() {
  return (
    <div>
      <div
        className="flex flex-col lg:flex-row p-3 lg:p-24 items-center lg:justify-between "
        style={{
          backgroundImage: "url('hero-background.png')",
          backgroundSize: "100%", // Ensures the image covers the entire section
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
        }}
      >
        <div className="h-52 w-52 rounded-full overflow-hidden items-center justify-center flex lg:hidden">
          <Image
            src={"/portfolio/Subject.png"}
            alt="Animated picture"
            height={340}
            width={340}
            className="mt-5"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <div className="text-[var(--color-white)] text-xl lg:text-2xl font-bold my-5 tracking-wide">
            Hi, I am John Lampa
          </div>
          <div className="text-3xl lg:text-6xl font-semibold mb-5 lg:mb-10 text-[var(--color-purple)] flex flex-col items-center lg:items-start">
            <div>Front End Developer</div>
            <div className="lg:mt-5">+</div>
            <div className="lg:mt-5">QA Specialist</div>
          </div>
          <div className="text-[var(--color-white)] opacity-70 text-base font-normal max-w-xl leading-6 lg:leading-8 text-center lg:text-left">
            I&apos;m a developer driven by curiosity and precision, skilled in
            building clean, responsive user interfaces with modern frameworks
            and tools. I am passionate about crafting seamless digital
            experiences and continuously improving through hands-on learning and
            collaboration.
          </div>
          <div className="flex gap-x-4 mt-5">
            <ContactButtons type="email" size={23}></ContactButtons>
            <ContactButtons type="github" size={23}></ContactButtons>
            <ContactButtons type="linkedin" size={23}></ContactButtons>
          </div>
        </div>
        <div className="h-96 w-96 rounded-full overflow-hidden items-center justify-center hidden lg:flex">
          <Image
            src={"/portfolio/Subject.png"}
            alt="Animated picture"
            height={340}
            width={340}
            className="mt-5"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
