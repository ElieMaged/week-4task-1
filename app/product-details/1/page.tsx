'use client'
import React, { useState } from 'react'

function productOne() {
  const [select, setSelection] = useState()
  return (
    <div className='m-20 text-black'>

<section className='flex flex-row space-x-5'>


      <span className='flex flex-col space-y-2'>
<img src="https://i.imgur.com/iRnKSHw.jpeg" className='w-24' alt="" />
<img src="https://i.imgur.com/iRnKSHw.jpeg" className='w-24' alt="" />
<img src="https://i.imgur.com/iRnKSHw.jpeg" className='w-24' alt="" />
<img src="https://i.imgur.com/iRnKSHw.jpeg" className='w-24' alt="" />
      </span>

      <img src="https://i.imgur.com/iRnKSHw.jpeg" className='w-100 h-100' alt="" />
      <div className='text-black'>
        <h1>Havic HV G-92 Gamepad</h1>
        <p>
PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
        </p>
        <div className='flex flex-row'>
        Colors:
        <img className='w-6 cursor-pointer' src="https://i.imgur.com/oCNw8x9.png" alt="" />
        </div>


        <div className='flex flex-row'>
        Size:
      <p className='border-2 pl-2 pr-2 mr-1 ml-1 border-black rounded-md cursor-pointer hover:bg-red-200'>S</p>
      <p className='border-2 pl-2 pr-2 mr-1 ml-1 border-black rounded-md cursor-pointer hover:bg-red-200'>M</p>
      <p className='border-2 pl-2 pr-2 mr-1 ml-1 border-black rounded-md cursor-pointer hover:bg-red-200'>L</p>

        </div>
        
       
      </div>
  
      </section>
   
    </div>
  )
}

export default productOne
