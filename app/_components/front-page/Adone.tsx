import "../../globals.css";
import adImage from '../../../media/homePage/1.png'
import Image from 'next/image'
import Dropdown from '../Dropdown'



export default function Adone() {
    return(
        <>
        <div className='sm:grid sm:grid-cols-6 text-black sm:flex sm:flex-row mb-10'>
            <div className='adOne-first'>

<ul className=' gap-y-3 w-50  flex flex-col col-span-1'>
    <li>
<Dropdown 
name="Woman Fashion"
                />
                </li>
    <li>
        <Dropdown 
        name="Man Fashion"
        />
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
<section className='flex flex-row m-5'>
  
<Image
src={adImage}
width={1000}
height={1000}
alt='picture'
/>
</section>
</div>

        </div>
        </>
    )
}