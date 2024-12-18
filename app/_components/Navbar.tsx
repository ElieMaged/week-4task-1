/* eslint-disable */
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'


export default function Navbar() {
    return(
        <>
        
        <nav className="bg-white border-white-200 dark:bg-white-900 dark:border-white-700 text-black">
  <div className="max-w-screen-xl flex flex-wrap items-center space-x-10 mx-auto p-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black m-5">Exclusive</span>
    </a>
    <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black-500 rounded-lg md:hidden hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-white-200 dark:text-black-400 dark:hover:bg-white-700 dark:focus:ring-white-600" aria-controls="navbar-multi-level" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-white-100 rounded-lg bg-white-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-white-800 md:dark:bg-white-900 dark:border-white-700">
        <li>
          <a href="/" className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
        </li>

    {/* <!-- Dropdown menu --> */}


        {/* //done */}
        <li>
          <a href="/shopping-cart" className="block py-2 px-3 text-black-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-white-700 dark:hover:text-black md:dark:hover:bg-transparent">Shopping Cart</a>
        </li>
        <li>
          <a href="/about-us" className="block py-2 px-3 text-black-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-white-700 dark:hover:text-black md:dark:hover:bg-transparent">About Us</a>
        </li>
        <li>
        <span className="block py-2 px-3 text-black-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-white-700 dark:hover:text-black md:dark:hover:bg-transparent">

      </span>
        </li>
      </ul>
    </div>
  </div>

  <hr className='' />
</nav>

        </>
    )
}




