import { span } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import useClipboard from "react-use-clipboard";
import { LuArrowDownToLine } from "react-icons/lu";
import DownloadCVButton from "../components/DownloadCVButton";
const Header = () => {
  const [isCopied, setCopied] = useClipboard("receberpedro09@gmail.com", { successDuration: 1000 });
  const [copyMessage, setCopyMessage] = useState("Copiar");

  const handleCopy = () => {
    setCopied();
    setTimeout(() => {
      setCopyMessage(<span>Copiado<span className="font-sans">!</span></span>);
    }, 100);
    setCopyMessage("...");
    setTimeout(() => {
      setCopyMessage("Copiar");
    }, 2000);
  
  };
    const phoneNumber = '5581999049803'; // Seu número com código do país
    const message = encodeURIComponent('Gostária de entrar em contato !'); // Mensagem a ser enviada
 
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
  return (
    <div>
      <div className="flex flex-1 items-center justify-between px-4 py-12 sm:px-16 sm:py-12 ">
        <nav aria-label="Global" className=" md:block border-black">
          <div className="flex items-center gap-2 text-xs">
            <p className="hidden md:block text-gray-light">
              receberpedro09
              <span className="font-serif font-semibold">@</span>gmail.com
            </p>

            <span
              onClick={handleCopy}
              className="w-[90px] my-1 py-3.5 cursor-pointer border rounded-full text-center font-semibold hidden sm:block bg-white"
            >
              {copyMessage}
            </span>
            <span onClick = {handleClick}
            className="w-[90px] py-3.5 cursor-pointer border rounded-full text-center font-semibold bg-gray-main sm:hidden text-white">
              Whatsapp
            </span>
           
            <DownloadCVButton/>
          </div>
        </nav>

        <div className="flex items-center gap-4 text-sm">
          <div className="sm:flex">
            <div className="flex sm:gap-2 text-gray-light">
              <a
                href="https://www.linkedin.com/in/pedro-paulodev/"
                target="blank"
                className="cursor-pointer group relative"
              >
                LinkedIn
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gray-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
              <span className="font-serif">/</span>
              <a
                href="https://github.com/PedroPaulo-Git"
                target="blank"
                className="cursor-pointer group relative"
              >
                Git Hub
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gray-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
              <span className="font-serif">/</span>
              <a
                href="https://www.instagram.com/portsoftware/"
                target="blank"
                className="cursor-pointer group relative"
              >
                Instagram
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gray-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
