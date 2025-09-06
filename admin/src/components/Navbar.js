import React from 'react'
import admin_panel from '../assets/admin_panel.png'

const Navbar = () => {
  return (
    <section className='sticky top-0 z-30 w-full'>
    <div className='flex justify-between items-center px-10 py-5 border-b border-gray-800 '>
      <h1 className=' text-2xl sm:text-5xl text-red-600'>Tomato.</h1>
      <img className='size-8 rounded-full sm:size-16' src={admin_panel} alt='' />
    </div>
   
    </section>
  )
}

export default Navbar