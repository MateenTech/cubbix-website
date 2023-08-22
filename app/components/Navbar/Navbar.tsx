'use client'

import React, { useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import styles from './Navbar.module.css';
import Link from 'next/link';

export const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleClass = (menuToggle) ? "max-sm:inline-flex" : "max-sm:hidden";

  const hamBurger = () => {
    setMenuToggle(!menuToggle);
    console.log(toggleClass)
  }

  return (
    <header className='w-full sticky top-[0]  bg-slate-50 z-100'>
      <nav
        className=' xl:max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'
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
          max-sm:fixed
           z-100
          max-sm:right-[5%]
          max-sm:top-[9%]

          max-sm:h-56
          max-sm:w-52
          
          ${toggleClass}
          `}
        >
          {
            links.map((link) => {
              return (
                <li key={link} onClick={() => setMenuToggle(false)}>
                  <Link href={`#${link}`}>{link.toLocaleUpperCase()}</Link>
                </li>
              )
            })
          }
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


const links: string[] = ["home", "about", "projects", "contact us"];