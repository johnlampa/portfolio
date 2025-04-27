import React from 'react'
import Image from 'next/image'

interface LogosProps {
  src: string;
  height: number;
  width: number;
}
// The Logos component is a functional React component that displays an image and a label.

function Logos({
    src,
    height,
    width
}: LogosProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-y-1 w-min'>
        <div className='h-28 w-32 flex justify-center'>
            <Image src={`/portfolio/${src}.png`} alt={`${src}`} height={height} width={width}></Image>
        </div>
        <div className='w-min'>{src}</div>
    </div>
  )
}

export default Logos