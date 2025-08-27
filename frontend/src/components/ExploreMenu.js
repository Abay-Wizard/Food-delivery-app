import React from 'react'
import menu_list from '../assets/Menu_list'

const ExploreMenu = () => {
  return (
    <section className='mx-40 my-20'>
        <div className='mb-10 w-1/2 flex flex-col items-start gap-5'>

            <h1 className='text-3xl font-semibold'>Explore our menu</h1>
            <p className='text-gray-700'>Discover a world of flavors crafted to delight every taste bud. From classic favorites like pizza, pasta, and burgers to traditional dishes like shiro and hearty beef meals, our menu is designed to bring comfort and excitement to your dining experience. Whether you’re craving something light and fresh or rich and savory, each dish is made with care to ensure the perfect balance of taste and satisfaction. Explore our menu and find your next favorite bite</p>
        
        </div>
        
        <div className='grid grid-cols-5 gap-5'>
            {menu_list.map((item,index)=> (
                <div key={index}>
                    <img src={item.image} alt='menu' className='size-40 rounded-full' />
                    <p className='text-sm'>{item.name}</p>
                </div>
            ))}
       </div>
   </section>
  )
}

export default ExploreMenu