'use client'
/* eslint-disable */

import React from 'react'
import ShoppingCard from '../cart/ShoppingCard'


function Shop() {

  if(typeof window !== 'undefined' && window.localStorage && window.localStorage.getItem('cart') ==  null) {
    
return <h1 className='text-black'>Your shopping cart is empty!</h1>
  } else {

  
const jsonProduct:any = localStorage.getItem('cart')
const cartProduct = JSON.parse(jsonProduct)
  return (
    <div>
      <ul>
      {cartProduct.map((product:any, id:number) => {
 
        return <li key={id}>
        <ShoppingCard
        name={product?.title}
        price={product?.price}
        pic={product?.pic}
        key={id}
        />
               </li>
      }) }
      </ul>
    </div>
  )
}
}


export default Shop
