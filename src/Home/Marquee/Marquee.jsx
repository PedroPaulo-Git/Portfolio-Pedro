import React from 'react'
import { FaNode } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
 const Marquee = () => {
  return (
    <div className='bg-white flex text-4xl h-1/3 -mt-20 z-0 py-auto' >
        <div className='flex items-center'>
        <FaNode />
<BiLogoPostgresql />
<RiTailwindCssFill />
<FaGitAlt />
<FaGithub />
<SiTypescript />
        </div>

    </div>
  )
}
export default Marquee;