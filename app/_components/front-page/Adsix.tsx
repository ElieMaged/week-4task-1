import Card from '../Card'
import Image from "next/image";


export default function Adsix() {
    return(
        <>
        <h1 className='text-4xl text-red-700 m-10'>New Arrival</h1>
<div className='lg:grid lg:grid-cols-2 lg:mr-5'>
<img src="/images/4.png" alt="" />
<span className='lg:grid lg:grid-cols-1 grid-rows-2 m-1-2'>
<img className='lg:ml-5' src="/images/5.png" alt="" />
<img className='lg:ml-5' src="/images/10.png" alt="" />
</span>
</div>

        
        </>
    )
}