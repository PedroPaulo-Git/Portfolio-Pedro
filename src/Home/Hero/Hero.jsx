import React from 'react';
import Avatar from '../../assets/avatar.png'

 const Hero = () => {
  return (
    <div className='w-full rounded-b-3xl h-3/4 bg-red-500'>
    <div className='Hero flex flex-col items-center text-center gap-4 my-2'>
        <img src={Avatar} className='rounded-full w-[22%] lg:w-1/12'  alt="" />
        <div className='text-3xl lg:text-5xl font-semibold bg-gradient-to-l from-gray-light to-gray-main bg-clip-text text-transparent'>
            <span className=''>
            Design e tecnologia 
            </span>
            <br />
            <span className=''>
            para impulsionar marcas
            </span>
            <br />
            <span className=''>
             e negocios
            </span>
        </div>
    </div>

    </div>
  )
}
export default Hero;