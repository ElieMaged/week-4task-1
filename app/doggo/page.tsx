'use client'
import React, { useState } from 'react'
const axios = require('axios')


function doggo() {
const handleClick = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
        getPic(res.data.message)
    })
    console.log('clicky works!')
}

const [pic, getPic] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIiikUeKwkm9ePJAq4TtIM51l8OT-AQ9b6GA&s')

  return (
    <div>
        <img src={pic} alt="" />
      <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' onClick={handleClick}>
        Generate Dog Pic
      </button>
    </div>
  )
}

export default doggo
