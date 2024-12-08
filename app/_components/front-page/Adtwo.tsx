'use client'
import Card from '../Card'
import Image from "next/image";
import { useEffect, useState } from 'react';

export default function Adtwo() {

const [productList, setProductList] = useState<any[]>([]);



  
return(
    <>
<div className='text-4xl text-black'></div>
    <div className='text-black flex flex-row justify-start mb-10'>
        <h1 className='text-4xl'>Flash Sales</h1>
        <h1 className='text-4xl ml-10 md:ml-40'>03:01:00</h1>
       
    </div>
    <div className='flex flex-col justify-center'>
    <span className=' gap-x-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-y-5'>


    </span>

    <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-md px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 m-5 self-center text-xl w-60 ">View all Products</button>
    </div>
    <hr/>
    </>
)
}