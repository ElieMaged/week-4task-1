/* eslint-disable */

import React from 'react'
import ShoppingCard from '../cart/ShoppingCard'


function Shop() {
  if(typeof window !== 'undefined' && localStorage && localStorage.getItem('cart') == null) {
    console.log(localStorage.getItem('cart'))
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
