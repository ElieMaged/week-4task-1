/* eslint-disable */
'use client';

import { useState, useEffect } from 'react';
import Card from '../Card'

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/api/products');
            const data = await response.json();
            setProducts(data);
            console.log(data);
        };

        fetchProducts();
    }, []);
  
return(
    <>
<div className='text-4xl text-black'></div>
    <div className='text-black flex flex-row justify-start mb-10'>
        <h1 className='text-4xl'>Flash Sales</h1>
        <h1 className='text-4xl ml-10 md:ml-40'>03:01:00</h1>
       
    </div>
    <div className='flex flex-col justify-center'>
    <span className=' gap-x-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-y-5'>
        {products.length > 0 && products.map(prev => {
            
            return <Card
            name={prev.title}
            pic={prev.image}
            id={prev.id}
            key={prev.id}
            price={prev.price}
            desc={prev.description}
            />
        })}


    </span>

    <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-md px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 m-5 self-center text-xl w-60 ">View all Products</button>
    </div>
    <hr/>
    </>
)
}