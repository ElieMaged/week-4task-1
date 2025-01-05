'use client'
import React, { useState } from 'react'

function page() {


  const addTodo = text => {
    return {
      type: 'todos/todoAdded',
      payload: text
    }
  }

const [counter, setCounter] = useState(0)

const handleClick = () => {
  setCounter(prevCount => prevCount + 1)
}

  return (
    <div className='text-black m-5'>
      <span>{counter}</span>
      
      <button className='text-black' onClick={handleClick}>Raise Counter</button>
    </div>
  )
}

export default page
