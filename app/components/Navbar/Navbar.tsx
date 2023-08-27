'use client'

import React, { useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Link from 'next/link';
import 'animate.css';

export const Navbar: React.FC = () => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  const toggleClass = (menuToggle) ? `max-md:inline-flex animate__backInDown` : "max-md:hidden ";

  const hamBurger = () => {
    setMenuToggle(!menuToggle);
    console.log(toggleClass)
  }

  return (
    <header className='w-full fixed top-[0]  bg-slate-50 z-100 shadow'>
      <nav
        className=' xl:max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'
      >
        <h1
          className={`cursor-pointer text-2xl font-extrabold animate__animated animate__tada`}
        >
          <Link href={'#home'}>CU<span className=' text-sky-400'>BBIX</span></Link>
        </h1>

        <ul
          className={`flex items-center [&>*:not(:last-child)]:mr-2  hover:[&>*]:cursor-pointer 
          
          max-md:flex-col
          max-md:justify-between
          max-md:py-6
        max-md:bg-slate-100
          max-md:rounded-md
          max-md:fixed
           z-100
          max-md:right-[5%]
          max-md:top-[10%]
          max-md:shadow-xl
          max-md:h-64
          max-md:w-52
          animate__animated
          ${toggleClass}
          `}
        >
          {
            links.map((link) => {
              return (
                <li key={link} onClick={() => setMenuToggle(false)}>
                  <Link
                    href={`#${link}`}
                    className='px-4 py-2  rounded-md hover:text-slate-200
                    hover:bg-gradient-to-br from-slate-900 to-gray-900 '
                  >
                    {link.toLocaleUpperCase()}
                  </Link>
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


const links: string[] = ["home", "about", "services", "portfolio", "contact"];