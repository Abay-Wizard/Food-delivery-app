import React, {useState, useEffect, useRef } from 'react'

const Ref = () => {
    const [value, setValue] = useState(0)
    const count = useRef(0)
    useEffect(()=>{
        count.current = count.current+1
    })
  return (
    <div>
        <button className='bg-black text-white p-2' onClick={() =>{setValue(prev => prev-1)}}>-1</button>
        <h1>{value}</h1>
        <button className='bg-black text-white p-2' onClick={() =>{setValue(prev => prev+1)}}>+1</button>
        <h2 className='text-3xl text-purple-700'>Render Count: {count.current}</h2>
    </div>
  )
}

export default Ref