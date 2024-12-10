'use client'
import { H1Icon } from '@heroicons/react/16/solid';
import React, { useState, useEffect } from 'react'

function ProductOne({params}) {
    const [products, setProducts] = useState([]);  
    const [isLoading, setIsLoading] = useState(true);
    
    const productId = React.use(params).id ? parseInt(React.use(params).id) : null;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                const data = await response.json();
                console.log('Fetched data:', data); // Log entire data
                setProducts(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Fetch error:', error);
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const selectedProduct = products.find(product => product.id === productId);

    const imagy = selectedProduct?.image

    console.log('Product ID:', productId);
    console.log('All Products:', products);
    console.log('Selected Product:', selectedProduct);



    if (isLoading) return <div>Loading...</div>;

  return (
    <div className='m-20 text-black'>

<section className='flex flex-row space-x-5'>



      <span className='flex flex-col space-y-2'>
<img src={imagy} className='w-24' alt="" />
<img src={imagy} className='w-24' alt="" />
<img src={imagy} className='w-24' alt="" />
<img src={imagy} className='w-24' alt="" />


      </span>
<img src={imagy} className='w-60 h-60' alt="" />
      {/* <img src={imagy} className='w-60 h-60' alt="" /> */}
      
      <div className='text-black'>
        <h1>{selectedProduct?.title}</h1>
        {/*stars */}
        <div className='flex flex-row'>
        <img className='w-5' src='https://i.imgur.com/QXd1jUS.png' />
        <img className='w-5' src='https://i.imgur.com/QXd1jUS.png' />
        <img className='w-5' src='https://i.imgur.com/QXd1jUS.png' />
        <img className='w-5' src='https://i.imgur.com/QXd1jUS.png' />
        </div>
        <p>
          
        </p>
        <p>
        {selectedProduct?.description}
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
        <span className=''>
        {selectedProduct?.price}$
        <br />
        </span>
        <span>
         
        <button className="m-5 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
  Add to cart
</button>

        </span>
        
       
      </div>
  
      </section>
   
    </div>
  )
}

export default ProductOne