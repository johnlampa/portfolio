import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

interface ContactButtonsProps {
  type: 'email' | 'github' | 'linkedin';
  size: number
}

function ContactButtons({ type, size }: ContactButtonsProps) {
  return (
    <button className='border-2 border-[var(--color-purple)] h-full w-min rounded-md p-1'>
        <a href={type === 'email' ? 'mailto: jklampa31@gmail.com' : (type === 'github' ? 'https://github.com/johnlampa' : 'https://www.linkedin.com/in/john-lampa/')} target="_blank" rel="noopener noreferrer">
            {type === 'email' ? (<MdOutlineEmail color='white' size={size}/>) : (type === 'linkedin' ? (<div className='mx-[2px]'><FaLinkedinIn color='white' size={size-3}/></div>) : (<div className='mx-[1px]'><FaGithub color='white' size={size-2}/></div>)) }
        </a>
    </button>
  )
}






export default ContactButtons