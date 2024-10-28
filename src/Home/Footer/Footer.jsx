import React from 'react'
import HandShake from '../../assets/handshake.png'

import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='bg-white rounded-t-[90px] '>
<div>
<img src={HandShake} alt="" />
<div>
<span className="w-[90px] py-3.5 border rounded-full text-center font-semibold bg-gray-main sm:hidden text-white">Email</span>
<span className="w-[90px] py-3.5 border rounded-full text-center font-semibold  bg-white">CV</span>
</div>
</div>
  
    <span className='bg-gray-600 h-2 w-90'></span>
    <div className='border-t-2 w-11/12 mx-auto flex justify-between text-center py-8'>
        <p className=' my-auto text-gray-light'>© 2025 All rights reserved.</p>
        <div className='flex '>
            <span className='p-3 text-center  rounded-full bg-white border-4 text-gray-main text-lg'>
                <FaInstagram/>
            </span>
            <span className='p-3 text-center  rounded-full bg-white border-4 text-gray-main text-lg'>
                <FaInstagram/>
            </span>
            <span className='p-3 text-center  rounded-full bg-white border-4 text-gray-main text-lg'>
                <FaInstagram/>
            </span>
        </div>
    </div>
   </footer>
  )
}

export default Footer;