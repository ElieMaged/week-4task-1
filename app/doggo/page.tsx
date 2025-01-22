'use client'
import React from 'react'

function doggo() {
const handleClick = () => {
    console.log('clicky works!')
}

  return (
    <div>
        <img src="" alt="" />
      <button onClick={handleClick}>
        Generate Dog Pic
      </button>
    </div>
  )
}

export default doggo
