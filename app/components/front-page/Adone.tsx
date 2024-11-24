import "../../globals.css";
import adImage from '../../../media/homePage/1.png'
import Image from 'next/image'



export default function Adone() {
    return(
        <>
        <div className='grid grid-cols-6 text-black'>
            <div className=''>
<ul>
    <li>
        Woman's Fashion
    </li>
    <li>
        Men's Fashion
    </li>
    <li>
        Electronics
    </li>
    <li>
        Home & Lifestyle
    </li>
    <li>
        Medicine
    </li>
    <li>
        Sports & Outdoor
    </li>
    <li>
        Groceries & Pets
    </li>
    <li>
        Health & Beauty
    </li>
</ul>
            </div>
           
            <div className='col-span-5'>
<section className='flex flex-row'>
    wqeqweqw
<Image
src={adImage}
width={500}
height={500}
alt='picture'
/>
</section>
</div>
        </div>
        </>
    )
}