/* eslint-disable */
'use client'
import React from 'react'

function ShoppingCard({name, price, pic}:any) {
    console.log()
  return (
    <div>
      

<div className="max-w-sm bg-white text-black border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-200 w-40">
    <a href="#">
        <img className="rounded-t-lg w-40" src={pic} alt="" />
    </a>
    <div className="p-1">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">{name}</h5>
        </a>
        
        <p className="mb-5 font-normal text-gray-700 dark:text-gray-900">{price}$</p>
        
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
       
    </div>
</div>

    </div>
  )
}

export default ShoppingCard
