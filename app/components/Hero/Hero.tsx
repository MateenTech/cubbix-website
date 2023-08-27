'use client'
import { Button } from '../Button/Button';
import device from '../../../public/assets/responsive-devices-removebg-preview.png';
import { CustomImage } from '../Image/CustomImage';
import 'animate.css'
import Link from 'next/link';

export const Hero = () => {
    return (
        <div
            className=' bg-slate-900 text-slate-200 
                        h-full min-h-screen w-full
                        xl:grid
                        xl:place-content-center
                    '
        >
            <main id='home' className='w-full xl:max-w-7xl mx-auto px-4 py-20
            xl:grid
            xl:grid-cols-2
            xl:place-content-center
            xl:grid-rows-auto
            
            '>
                {/* Hero Image Illustration */}
                <CustomImage src={device} alt='responsive-devices' classes={`
                  animate__animated
                  animate__heartBeat
                  animate__slow
                col-start-2
                
                `} />

                {/* Hero Info */}

                <div className='text-center xl:text-left max-md:p-12
                xl:row-span-full relative
                animate__animated animate__flipInX animate__slow  xl:mt-14'>
                    <h1 className='xl:text-5xl text-4xl max-md:text-3xl font-extrabold mb-2 uppercase text-slate-200
                    max-[425px]:text-2xl max-[300px]:text-xl'>You <span className=' text-sky-400'>dream it </span> <br /> We <span className='text-sky-400'>make it reality</span>.</h1>
                    <p className='max-md:mb-6 text-md  font-light text-slate-400 w-[345px] mx-auto my-5               
                    xl:ml-0
                    xl:w-96
                    max-[425px]:w-auto
                    max-[300px]:text-sm'>
                        We provide high quality services,
                        to transform and grow your business in the world of technology & AI.
                    </p>
                    <Link href={"#portfolio"}>
                        <Button customClass={`w-40 mx-auto flex items-center justify-center xl:absolute top-[42%] right-[18%]  xl:rounded-full xl:h-16 xl:w-28 cursor-pointer animate__animated animate__pulse animate__infinite`} />
                    </Link>
                </div>

            </main>
        </div>
    )
};