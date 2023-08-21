import React from 'react'
import { HiArrowUpRight} from 'react-icons/hi2';

type ButtonClassProp = {
    customClass?: String;
}

export const Button = ({customClass}: ButtonClassProp) => {
  return (
    <button className={`text-2xl bg-sky-600 text-white border-none p-3 rounded-xl ${customClass}`} >
      <HiArrowUpRight className="stroke-1"/>
    </button>
  )
}
