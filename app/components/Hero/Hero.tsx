import { Button } from '../Button/Button';
import Image from 'next/image';
import device from '../../../public/assets/responsive-devices-removebg-preview.png';

export const Hero = () => {
    return (
        <div
            className=' bg-slate-900 text-slate-200 
            h-full min-h-screen w-full'
        >
            <main
                className=" w-11/12 mx-auto xl:max-w-6xl
                p-4
                min-h-screen
                max-sm:text-center
                flex
                items-center
                "
            >
                <div className='relative w-[555px] min-[640px]:grid 
                min-[640px]: grid-cols-3 gap-3'>
                    <h1 className="uppercase font-extrabold text-5xl my-auto max-sm:text-4xl col-span-4">
                        You got an idea <br /> We make it reality
                    </h1>
                    <p className='text-md font-ligh tracking-wide  text-slate-400 max-sm:px-16 col-span-2'>
                        We provide best quality services.
                        We are here to help you in growing you business and revenue in the 
                        world of growing technology & AI.
                    </p>
                    <Button customClass={'max-sm:mt-8 flex max-sm:w-2/4 max-sm:mx-auto items-center justify-center col-start-3 '} />
                </div>

                <figure className='hero_img'>
                    <Image src={device} alt="responsive-devices" className='animate-illus-bounce'/>
                </figure>
            </main>
        </div>
    )
};