import React from 'react'
import HandShake from '../../assets/handshake.png'
import { AiTwotoneMail } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='bg-white rounded-t-[90px] '>
<div className='mx-auto w-full text-center flex flex-col items-center py-20 '>
<img src={HandShake} className='w-36 rounded-full p-1 bg-gradient-to-b from-[#f0f0f0] to-white' alt="" />
<span className='my-6 w-72 text-4xl sm:text-5xl sm:w-96  lg:text-6xl lg:w-2/4 font-semibold bg-gradient-to-l from-gray-midlight to-black bg-clip-text text-transparent'>
    Me fale sobre seu proximo projeto
</span>
<div className='flex gap-3'>
<span className="w-[110px] py-3 border-4 border-gray-fulllight rounded-full text-center font-normal bg-gray-main text-sm leading-normal text-white flex justify-center items-center gap-2"><AiTwotoneMail /> Email</span>
<span className="w-[110px] py-3 border-4 border-gray-fulllight rounded-full text-center font-normal text-sm bg-white leading-normal flex justify-center items-center gap-1"> <PiWhatsappLogoDuotone className='text-base' /> Whatsapp </span>
</div>
</div>
  
    <span className='bg-gray-600 h-2 w-90'></span>
    <div className='border-t-2 w-11/12 mx-auto flex justify-between text-center py-8'>
        <span className=' my-auto text-gray-light text-sm'>© 2025 All rights reserved.</span>
        <div className='flex '>
            <a className='p-3 text-center  rounded-full bg-white border-4 text-gray-main text-lg'>
                <FaInstagram/>
            </a>
            <a className='p-3 text-center  rounded-full bg-white border-4 text-gray-main text-lg'>
                <FaGithub/>
            </a>
            <a className='p-3 text-center  rounded-full bg-white border-4 text-gray-main text-lg'>
                <FaLinkedin/>
            </a>
        </div>
    </div>
   </footer>
  )
}

export default Footer;