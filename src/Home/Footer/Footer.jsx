import React from "react";
import HandShake from "../../assets/handshake.png";
import { FaInstagram } from "react-icons/fa6";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import EmailButton from "../components/EmailButton";

const Footer = () => {
  const phoneNumber = "5581999049803"; // Seu número com código do país
  const message = encodeURIComponent("Gostaria de entrar em contato !"); // Mensagem a ser enviada

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };
  return (
    <footer className="bg-white rounded-t-[90px] ">
      <div className="mx-auto w-full text-center flex flex-col items-center py-20 ">
        <img
          src={HandShake}
          className="w-36 rounded-full p-1 bg-gradient-to-b from-[#f0f0f0] to-white"
          alt=""
        />
        <span className="my-6 w-[25rem]  text-4xl sm:text-5xl sm:w-[40rem]  lg:text-6xl lg:w-[50rem] font-semibold bg-gradient-to-l from-gray-midlight to-black bg-clip-text text-transparent">
          Me fale sobre seu proximo projeto
        </span>
        <div className="flex gap-3">
          <EmailButton />
          <a
            onClick={handleClick}
            className="w-[110px] relative cursor-pointer py-3 border-4 border-gray-fulllight rounded-full text-center font-normal text-sm bg-white leading-normal flex justify-center items-center gap-1"
          >
            {" "}  <div className="flex items-center gap-1 relative group">
            <PiWhatsappLogoDuotone className="text-base" /> Whatsapp{" "}
          <span className="absolute right-2 -bottom-1 w-5/6  h-[2px] bg-gray-light scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </div>
          
          
          </a>
        </div>
      </div>

      <span className="bg-gray-600 h-2 w-90"></span>
      <div className="border-t-2 w-11/12 mx-auto flex justify-between text-center py-8">
        <span className=" my-auto text-gray-light text-sm">
          © 202<span className="font-sans">4 </span>All rights reserved.
        </span>
        <div className="flex gap-1">
          <a
            href="https://www.instagram.com/portsoftware/"
            target="blank"
            className="p-3 text-center  rounded-full bg-white border-4 text-gray-main text-lg"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/PedroPaulo-Git"
            target="blank"
            className="p-3 text-center  rounded-full bg-white border-4 text-gray-main text-lg"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-paulodev/"
            target="blank"
            className="p-3 text-center  rounded-full bg-white border-4 text-gray-main text-lg"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
