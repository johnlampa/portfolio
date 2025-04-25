import React from 'react'
import ContactButtons from './ContactButtons'

function Footer() {
  return (
    <div className='h-20 flex justify-between items-center px-8 pb-20'>
        <div className='h-9 flex gap-x-4 mt-5'>
              <ContactButtons type='email' size={23}></ContactButtons>
              <ContactButtons type='github' size={23}></ContactButtons>
              <ContactButtons type='linkedin' size={23}></ContactButtons>
        </div>
        <p className='text-white text-xl font-semibold'>&copy; John Lampa</p>
    </div>
  )
}

export default Footer