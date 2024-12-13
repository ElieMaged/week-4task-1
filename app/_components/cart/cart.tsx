import React from 'react'
import ShoppingCard from '../cart/ShoppingCard'


function Shop() {
  if(JSON.parse(localStorage.getItem('cart') == null)) {
return <h1 className='text-black'>Your shopping cart is empty!</h1>
  } else {

  
const cartProduct = JSON.parse(localStorage.getItem('cart'))
  return (
    <div>
      <ul>
      {cartProduct.map((product:[], id:number) => {
 
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
