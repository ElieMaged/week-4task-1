

export default function Footer() {
    return(
        <>
         <footer className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 footer p-20 space-x-20 '>
            {/* col-1 */}
        
<div className='col-span-1 flex flex-col space-y-4'>
<p className='text-2xl'>Exclusive</p>
<p>Subscribe</p>
<p>Get 10% off your first order</p>
<span className='relative'>
<input placeholder='Enter your email' className='inputy text-white p-2' />
<img className='text-white arrow' src="/images/arrow.png" alt="qweqweqw" />
</span>
</div>
{/* col-2 */}
<div className='space-y-2 col-span-1 mt-5 lg:mt-0'>
    <p>Support</p>
    <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
    <p>exclusive@gmail.com</p>
    <p>+88015-88888-9999</p>
</div>
{/* col-3 */}
<div className='space-y-2 col-span-1 mt-5 lg:mt-0'>
    <p>Account</p>
    <p>My Account</p>
    <p>Login / Register</p>
    <p>Cart</p>
    <p>Wishlist</p>
    <p>Shop</p>
</div>
{/* col-4 */}
<div className='space-y-2 col-span-1  lg:mt-0'>
    <p>Quick Link</p>
    <p>Privacy Policy</p>
    <p>Terms Of Use</p>
    <p>FAQ</p>
    <p>Contact</p>
</div>
{/* col-5 */}
<div className='space-y-2 col-span-1  lg:mt-0'>
    <p>Download App</p>
    <p>Save $3 with App New User Only</p>

<section className='grid grid-cols-2 grid-rows-2'>
<img src='/images/barcode.png' />
<span className='flex flex-col  space-y-3'>
<img className='' src="/images/play.png" alt="" />
<img className='' src="/images/apple.png" alt="" />
</span>
</section>
</div>

{/* row-2 */}
<div className='flex flex-row lg:col-start-3'>
<p className='text-white centery'>Copyright Rimel 2022. All right reserved</p>
</div>
         </footer>
        </>
    )
}