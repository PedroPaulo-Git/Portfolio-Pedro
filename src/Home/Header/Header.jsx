
import React, { useEffect, useState } from "react";
import useClipboard from "react-use-clipboard";
import { LuArrowDownToLine } from "react-icons/lu";
import DownloadCVButton from "../components/DownloadCVButton";
import DownloadCvEnglishButton from "../components/DownloadCvEnglishButton";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import buttonEua from '../../assets/usa.png'
import buttonBr from '../../assets/br.png'

const Header = () => {
  const [t,i18n] = useTranslation('global')

  const handleChangeLanguage = (lang)=>{
    i18n.changeLanguage(lang);
    const newLang = linguage === 'pt-br' ? 'en' : 'pt-br';
    setLinguage(newLang);
  }
  const [linguage, setLinguage] = useState('pt-br');



  const [isCopied, setCopied] = useClipboard("receberpedro09@gmail.com", {
    successDuration: 1000,
  });
  const [copyMessage, setCopyMessage] = useState(t("header.contact_copy"));
  
  const handleCopy = () => {
    setCopied();
    setTimeout(() => {
      setCopyMessage(
        <span>
          {t("header.contact_copied")}<span className="font-sans">!</span>

        </span>
      );
    }, 100);
    setCopyMessage("...");
    setTimeout(() => {
      setCopyMessage(t("header.contact_copy"));
    }, 2000);
  };
  useEffect(() => {
    setCopyMessage(t("header.contact_copy"));
  }, [t]);

  const phoneNumber = "5581999049803"; // Seu número com código do país
  const message = encodeURIComponent("Gostaria de entrar em contato !"); // Mensagem a ser enviada

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };
  return (
    <div>
      <div className="flex flex-1 items-center justify-between pr-4 py-8 sm:px-16 sm:py-12 ">
        <nav aria-label="Global" className=" md:block border-black">
          <div className="flex items-center gap-0 text-xs">
            <div className="flex border rounded-full pr-0.5 pl-0.5 lg:pl-1 items-center ">
              <p className="hidden md:block text-gray-light px-4">
                receberpedro09
                <span className="font-serif font-semibold">@</span>gmail.com
              
              </p>

              <span
                onClick={handleCopy}
                className="w-[90px] my-1 py-3 lg:py-4 cursor-pointer border rounded-full text-center font-semibold hidden sm:block bg-white"
              >
               
                {copyMessage}
              </span>
            </div>

            <div className="flex border rounded-full p-0.5">
              <span
                onClick={handleClick}
                className="w-[90px] py-3  cursor-pointer border rounded-full text-center font-semibold bg-gray-main sm:hidden text-white"
              >
                Whatsapp
              </span>
            </div>
            {linguage === 'pt-br' ?<DownloadCVButton /> : <DownloadCvEnglishButton />}
        
          </div>
        </nav>

        <div className="hidden lg:flex items-center gap-4 text-sm">
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
      
          {linguage === 'pt-br' ?  
          <button onClick={()=> handleChangeLanguage("en")}> <img className="w-5" src={buttonEua} alt="" /> </button>
           : 
           <button onClick={()=> handleChangeLanguage("ptbr")}> <img className="w-5" src={buttonBr} alt="" /> </button>
           }
     
        </div>
        <div className="flex lg:hidden relative ">
          
          <a
            href="https://github.com/PedroPaulo-Git"
            target="blank"
            className="p-2.5 text-center  rounded-full bg-white border-4 text-gray-main text-lg"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-paulodev/"
            target="blank"
            className="p-2.5 text-center  rounded-full bg-white border-4 text-gray-main text-lg"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/portsoftware/"
            target="blank"
            className=" p-2.5 text-center  rounded-full bg-white border-4 text-gray-main text-lg"
          >
            <FaInstagram />
          </a>
          <div className="absolute right-0 -top-6">
          {linguage === 'pt-br' ?  
          <button onClick={()=> handleChangeLanguage("en")}> <img className="w-5" src={buttonEua} alt="" /> </button>
           : 
           <button onClick={()=> handleChangeLanguage("ptbr")}> <img className="w-5" src={buttonBr} alt="" /> </button>
           }
           </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
