import React, { useState } from 'react'

export const Navbar = () => {
   const [menu, setMenu] = useState('home')
  return (
    <div className='flex items-center justify-evenly'>
         <h1 className='text-red-600 text-4xl'>
            Tomato.
         </h1>
         <ul className='flex items-center gap-10'>
            <li onClick={()=>{setMenu('home')}} className={menu === 'home'  ? 'border-b-2 border-blue-500':'cursor-pointer'}>
               home 
            </li>
            <li  onClick={()=>{setMenu('menu')}} className={menu === 'menu'  ? 'border-b-2 border-blue-500':'cursor-pointer'}>
               menu
            </li>
            <li  onClick={()=>{setMenu('mobile-app')}} className={menu === 'mobile-app'  ? 'border-b-2 border-blue-500':'cursor-pointer'}>
               mobile-app 
            </li>
            <li  onClick={()=>{setMenu('contact us')}} className={menu === 'contact us'  ? 'border-b-2 border-blue-500':'cursor-pointer'}>
                contact us 
            </li>
         </ul>
         <div className='flex items-center gap-5 px-3'>
            <img  src='https://www.iconpacks.net/icons/2/free-search-icon-2903-thumb.png' alt='' className='w-8 cursor-pointer'/>
            <div className="relative inline-block">
               <img 
                  src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-shopping-cart-icon-image_1166717.jpg" 
                  alt="cart" 
                  className="w-10 cursor-pointer" 
               />
               <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  3
               </span>
            </div>
           <button className='rounded-lg py-1 px-2 bg-black text-white cursor-pointer'>sign in</button>
         </div>

    </div>
  )
}

export default Navbar