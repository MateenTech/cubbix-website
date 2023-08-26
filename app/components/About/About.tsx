import { AboutUI } from "@/types";
import { infos } from '../../../public/data';
import { info } from "console";

export const About = () => {
  return (
    <section id='about' className=' bg-slate-200'>
      <div className='w-full xl:max-w-7xl mx-auto px-4 py-20'>

        <p className='uppercase font-bold text-2xl text-slate-800 max-sm:text-center'>
          <span className='  text-sky-400 underline underline-offset-4'>Leading No.1 </span> Agency world wide. <br />world class services in <span className='text-sky-400 underline underline-offset-4'>best price with quality</span>.
        </p>

        <div className='my-7 [&>*:not(:last-child)]:mb-6 md:grid md:grid-cols-3 md:[&>*:not(:last-child)]:mb-0 md:gap-3'>


          {
            infos.map<JSX.Element>(({ title, total, descp }) => {
              return (
                <div className=' bg-slate-100 border-2 rounded-md p-6 border-slate-700 hover:bg-slate-800 hover:cursor-pointer
                 shadow-xl group animate__animated animate__bounceInLeft'
                  key={title}
                >
                  <h3 className=" font-semibold mb-0.5 text-slate-800 group-hover:text-sky-400 text-lg">{title}</h3>
                  <p className="mb-2 font-light text-slate-700 group-hover:text-slate-300">{total}+</p>
                  <p className="text-slate-700 font-light text-md group-hover:text-slate-300">
                    {descp}
                  </p>
                </div>
              )
            })
          }

        </div>

      </div>
    </section>
  )
};