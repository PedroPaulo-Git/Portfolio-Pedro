import React from 'react';
import Avatar from '../../assets/avatar.png'
import { MdOutlineArrowOutward } from "react-icons/md";
import './backgroundhero.css'

 const Hero = () => {
  return (
    <div className='Hero relative w-full rounded-b-[90px] h-[32rem] lg:h-[37rem] z-30 border-solid border-b-2 border-gray-fulllight'>
    <div className='flex flex-col items-center text-center gap-5 my-2'>
        <img src={Avatar} className='rounded-full w-[8rem] lg:w-[8rem] mt-10 saturate-0'  alt="" />
        <div className='flex flex-col  text-4xl lg:text-[3.4rem] xl:text-[3.4rem] font-semibold bg-gradient-to-l from-gray-light to-gray-main bg-clip-text text-transparent'>
            <span className='leading-tight'>
            Design e tecnologia 
            </span>
            <span className='leading-tight'>
            para impulsionar marcas
            </span>
            <span className='leading-tight'>
            e negocios.
            </span>
        </div>
        <a href="" className='rounded-full flex items-center bg-gray-main p-5 px-6 mt-4 text-white text-sm'>
        Trabalhos Recentes
        <MdOutlineArrowOutward className='ml-2 text-lg' />
        </a>
    </div>

    </div>
  )
}
export default Hero;