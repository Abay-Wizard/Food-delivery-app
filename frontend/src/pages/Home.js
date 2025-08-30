import React, { useState } from 'react'
import Header from '../components/Header'
import ExploreMenu from '../components/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay'
import AppDownload from '../components/AppDownload'

const Home = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(true)
    const [category,setCategory] = useState('All')
    const MenuOpener = () =>{
        setIsMenuOpen(prev => !prev)
    }
  return (
    <div>
       <Header MenuOpener={MenuOpener}/>
       {isMenuOpen && <ExploreMenu category={category} setCategory={setCategory}/>}
       <FoodDisplay category={category}/>
       <AppDownload/>
    </div>
  )
}

export default Home