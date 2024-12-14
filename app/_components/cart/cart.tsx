/* eslint-disable */
'use client'
import React from 'react'
import ShoppingCard from '../cart/ShoppingCard'


function Shop() {
  if(window.localStorage.getItem('cart') == null || []) {
return <h1 className='text-black'>Your shopping cart is empty!</h1>
  } else {

  
const jsonProduct:any = window.localStorage.getItem('cart')
const cartProduct = JSON.parse(jsonProduct)
  return (
    <div>
      <ul>
      {cartProduct.map((product:any, id:number) => {
 
        return <li key={id}>
        <ShoppingCard
        name={product?.name}
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
