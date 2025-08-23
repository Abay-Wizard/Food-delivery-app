import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>
         <h1 className='text-red-600 text-4xl'>
            Tomato.
         </h1>
         <ul className='flex items-center gap-10'>
            <li>
               home 
            </li>
            <li>
               menu
            </li>
            <li>
               mobile-app 
            </li>
            <li>
                contact us 
            </li>
         </ul>
         <div className='flex items-center gap-5 px-3'>
            <Link to =''><img  src='https://www.iconpacks.net/icons/2/free-search-icon-2903-thumb.png' className='w-8'/></Link>
            <img src='https://png.pngtree.com/element_our/20190528/ourmid/pngtree-shopping-cart-icon-image_1166717.jpg' className='w-10' />
            <button className='rounded-lg py-1 px-2 bg-black text-white'>sign in</button>
         </div>

    </div>
  )
}

export default Navbar