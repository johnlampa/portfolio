import React from 'react'
import ContactButtons from './ContactButtons'

function Footer() {
  return (
    <div className='h-20 flex justify-between items-center lg:px-8 lg:pb-20'>
        <div className='h-9 flex gap-x-2 lg:gap-x-4 lg:mt-5'>
              <ContactButtons type='email' size={23}></ContactButtons>
              <ContactButtons type='github' size={23}></ContactButtons>
              <ContactButtons type='linkedin' size={23}></ContactButtons>
        </div>
        <p className='text-white text-base lg:text-xl font-semibold'>&copy; John Lampa</p>
    </div>
  )
}

export default Footer