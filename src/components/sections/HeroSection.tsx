import React from 'react'
import Image from 'next/image'

function HeroSection() {
  return (
    <div 
        className='flex py-24 px-24 justify-between' 
        style={{ 
            backgroundImage: "url('hero-background.png')",
            backgroundSize: "100%", // Ensures the image covers the entire section
            backgroundPosition: "center", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
        }}>
        <div className='flex flex-col'>
            <div className='text-[var(--color-white)] text-2xl font-bold mb-5 tracking-wide'>
                Hi, I am John Lampa
            </div>
            <div className="text-6xl font-semibold mb-10 text-[var(--color-purple)]">
              <div>Front End Developer +</div><div className='mt-5'>QA Specialist</div> 
            </div>
            <div className='text-[var(--color-white)] opacity-70 text-base font-normal max-w-xl leading-8'>
            I&apos;m a developer driven by curiosity and precision, skilled in building clean, responsive user interfaces with modern frameworks and tools. I am passionate about crafting seamless digital experiences and continuously improving through hands-on learning and collaboration.
            </div>
        </div>
        <div className='h-96 w-96 rounded-full overflow-hidden flex items-center justify-center'><Image src={"/Subject.png"} alt='Animated picture' height={340} width={340} className='mt-5'/></div>
        
    </div>
  )
}

export default HeroSection