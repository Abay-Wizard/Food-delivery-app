import React, {useState, useEffect } from 'react'

const Effect = () => {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setCount(prev => prev+1)
        },2000)
    },[])
  return (
    <div className='mt-5'>
    <h1 className='text-2xl text-red-600'>I have renderd {count} times.</h1>
    </div>
  )
}

export default Effect