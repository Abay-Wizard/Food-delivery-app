import {useState} from 'react'

const State = () => {
   {/*const [istoggled, setIsToggled] = useState(false)
    const Toggler = () =>{
        setIsToggled(prev => !prev)
    }
  */} 
 {/*const [car, setCar] = useState({
    brand:'Ferrari',
    model:'Roma',
    year:'2022',
    color:'red'
  })

  const changeColor = () =>{
    setCar(prev => ({...prev, color:'blue'}))
  }*/}

  const [count,setCount] = useState(0)
  const Counter = () =>{
    setCount(prev => prev+1)
  }

  return (
    <div className='mt-8'>
     <h2 className='text-2xl'>{count}</h2>
     <button className='rounded-lg bg-black text-white p-2' onClick={Counter}>increase</button>
    </div>
  )
}

export default State