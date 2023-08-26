'use client'

import React, { useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import styles from './Navbar.module.css';
import Link from 'next/link';

export const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleClass = (menuToggle) ? "max-md:inline-flex" : "max-md:hidden";

  const hamBurger = () => {
    setMenuToggle(!menuToggle);
    console.log(toggleClass)
  }

  return (
    <header className='w-full sticky top-[0]  bg-slate-50 z-100 shadow'>
      <nav
        className=' xl:max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'
      >
        <h1
          className="cursor-pointer text-2xl font-extrabold"
        >
          <Link href={'#home'}>CU<span className=' text-sky-400'>BBIX</span></Link>          
        </h1>
        <ul
          className={`flex items-center [&>*:not(:last-child)]:mr-2  hover:[&>*]:cursor-pointer [&>*]:px-4 [&>*]:py-2 [&>*]:rounded-md hover:[&>*]:text-slate-200
          hover:[&>*]:bg-gradient-to-br [&>*]:from-slate-900 [&>*]:to-gray-900 
          
          max-md:flex-col
          max-md:justify-between
          max-md:py-3
          max-md:bg-white
          max-md:rounded-md
          max-md:fixed
           z-100
          max-md:right-[5%]
          max-md:top-[10%]
          max-md:shadow
          max-md:h-56
          max-md:w-52
          
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

        <button onClick={hamBurger} className='bg-transparent hidden max-md:block'>
          {
            !menuToggle
              ?
              <HiMenuAlt3 className=" h-6 w-6 cursor-pointer hidden max-md:block" />
              :
              <HiX className=" h-6 w-6 cursor-pointer hidden max-md:block" />
          }
        </button>

        

      </nav>
    </header>
  )
};


const links: string[] = ["home", "about", "services", "projects", "contact us"];