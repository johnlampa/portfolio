import React from 'react'
import Logos from '../ui/Logos'

function SkillsSection() {
  const heightWidth = 100;
  return (
    <div className='flex flex-col items-center'>
      <div className='text-6xl font-extrabold mb-20 tracking-wider bg-gradient-to-r from-[var(--color-purple)] to-[var(--color-magenta)] bg-clip-text text-transparent'><div>TECHNICAL SKILLS</div></div>
      <div className='px-24 flex justify-between w-full max-w-7xl mb-24'>
        <div className='text-2xl font-bold'><p className='mb-3'>Programming</p></div>
        <div className='-mt-5'>
          <div className='flex'>
              <Logos src='Next.js' height={heightWidth} width={heightWidth}></Logos>
              <Logos src='React.js' height={heightWidth} width={heightWidth}></Logos>
              <Logos src='JavaScript' height={heightWidth} width={heightWidth}></Logos>
              <Logos src='TypeScript' height={heightWidth} width={heightWidth}></Logos>
              <Logos src='Dart' height={heightWidth} width={heightWidth}></Logos>
          </div>
          <div className='flex'>
              <Logos src='TailwindCSS' height={heightWidth} width={heightWidth}></Logos>
              <Logos src='CSS' height={heightWidth} width={heightWidth}></Logos>
              <Logos src='Java' height={heightWidth} width={heightWidth}></Logos>
              <Logos src='MySQL' height={heightWidth} width={heightWidth}></Logos>
              <Logos src='PostgreSQL' height={heightWidth} width={heightWidth}></Logos>
          </div>
        </div>
      </div>
      <div className='px-24 flex justify-between w-full max-w-7xl mb-24'>
        <div className='text-2xl font-bold'><p className='mb-3'>Tools</p></div>
        <div className='-mt-5'>
          <div className='flex'>
              <Logos src='Figma' height={heightWidth} width={heightWidth}></Logos>
              <Logos src='Github' height={heightWidth} width={heightWidth}></Logos>
              <Logos src='npm' height={heightWidth} width={heightWidth}></Logos>
              <Logos src='Vercel' height={heightWidth} width={heightWidth}></Logos>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default SkillsSection