import React, { useState } from 'react'
import Header from '../components/Header'
import ExploreMenu from '../components/ExploreMenu'

const Home = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const MenuOpener = () =>{
        setIsMenuOpen(prev => !prev)
    }
  return (
    <div>
       <Header MenuOpener={MenuOpener}/>
       {isMenuOpen && <ExploreMenu/>}
    </div>
  )
}

export default Home