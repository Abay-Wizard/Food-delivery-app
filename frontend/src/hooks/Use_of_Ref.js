import React, { useRef } from 'react'

const Use_of_Ref = () => {  // useRef is used to access the dom elements on the web page.
    const inputElem = useRef()
    const ShowTyping = () => {
        console.log(inputElem.current)
        inputElem.current.style.background = 'yellow'
    }

  return (
    <div>
      <input type='text' className='rounded-lg p-2 border-blue-400 bg-red-100' ref={inputElem}/>
      <button className='rounded-lg p-3 text-yellow-400 text-2xl' onClick={ShowTyping}>Click here:</button>
    </div>
  )
}

export default Use_of_Ref