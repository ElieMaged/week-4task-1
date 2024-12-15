'use client'
/* eslint-disable */

import React, { useEffect, useState } from 'react'
import ShoppingCard from '../cart/ShoppingCard'

function Shop() {
  const [loaded, isLoaded] = useState(false)


  useEffect(() => {
    typeof localStorage == 'undefined' ? isLoaded(false) : isLoaded(true)
  }) 
const clearCart = () => {
  localStorage.clear();
  location.reload();
}

  if(!loaded) {
    
return <h1 className='text-black'>Your shopping cart is empty!</h1>
  } else {

  
const jsonProduct:any = window.localStorage.getItem('cart')
const cartProduct = JSON.parse(jsonProduct)

  return (
    <div>
      <ul>
      {cartProduct && cartProduct.map((product:any, id:number) => {
 
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
      {!cartProduct && <h1 className='text-black'>Your shopping cart is empty!</h1>}
      {cartProduct && <button onClick = {clearCart} className="m-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
  Clear Cart
</button>}
    </div>
  )
}
}


export default Shop
