import { services } from '@/public/data'
import React from 'react'

export const Services = () => {
  return (
    <div id='services' className='w-full min-h-screen bg-slate-200'>
      <section className='w-full min-h-screen  xl:max-w-7xl xl:mx-auto py-28'>
        <h1 className='font-extrabold text-4xl text-sky-400 text-center'>Services</h1>

        <ul className='mt-11 px-9 grid gap-9
        md:grid-cols-2
        xl:grid-cols-3'>
          {
            services.map((service) => {
              const { category, description } = service;
              return (
                <li key={category} className='bg-slate-100 p-9 rounded-xl cursor-pointer group hover:bg-slate-900 shadow-xl border-2 border-slate-600 hover:border-transparent'>
                  <h3 className='mb-4 text-lg font-semibold text-slate-800 group-hover:text-sky-500'>{category}</h3>
                  <p className='text-slate-600 group-hover:text-slate-500'>
                    {description}
                  </p>
                </li>
              );
            })
          }
        </ul>

      </section>
    </div>
  )
}