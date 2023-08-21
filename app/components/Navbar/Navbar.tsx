'use client'

import React, { useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleClass = (menuToggle) ? "max-sm:inline-flex" : "max-sm:hidden";

  const hamBurger = () => {
    setMenuToggle(!menuToggle);
    console.log(toggleClass)
  }

  return (
    <header className=' w-full sticky'>
      <nav
        className='w-11/12 mx-auto px-4 py-3 flex items-center justify-between'
      >
        <h1
          className="cursor-pointer text-2xl font-extrabold"
        >
          CUBBIX
        </h1>
        <ul
          className={`flex items-center [&>*:not(:last-child)]:mr-2  hover:[&>*]:cursor-pointer [&>*]:px-4 [&>*]:py-2 [&>*]:rounded-md hover:[&>*]:text-slate-200
          hover:[&>*]:bg-gradient-to-br [&>*]:from-slate-900 [&>*]:to-gray-900 
          
          max-sm:flex-col
          max-sm:justify-between
          max-sm:py-3
          max-sm:bg-white
          max-sm:rounded-md
          max-sm:absolute
          max-sm:right-[4%]
          max-sm:top-[110%]
          max-sm:h-56
          max-sm:w-52
          ${toggleClass}
          `}
        >
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>

        <button onClick={hamBurger} className='bg-transparent hidden max-sm:block'>
          { 
            !menuToggle 
              ?
              <HiMenuAlt3 className=" h-6 w-6 cursor-pointer hidden max-sm:block" />
              : 
              <HiX className=" h-6 w-6 cursor-pointer hidden max-sm:block" />
          }
        </button>

        {/* <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
        </span> */}

      </nav>
    </header>
  )
};
