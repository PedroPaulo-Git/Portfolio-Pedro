import React from "react";
import Avatar from "../../assets/avatar.png";
import { PiArrowLineUpRight } from "react-icons/pi";
import "./backgroundhero.css";

const Hero = () => {
  const phoneNumber = "5581999049803"; // Seu número com código do país
  const message = encodeURIComponent("Gostaria de entrar em contato !"); // Mensagem a ser enviada

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };
  return (
    <div className="Hero relative w-full rounded-b-[90px] h-[32rem] lg:h-[37rem] z-30 border-solid border-b-2 border-gray-fulllight">
      <div className="flex flex-col items-center text-center gap-5 my-2">
        <div className="relative bg-gradient-to-t from-[#efefef] to-[#f8f7f7] rounded-full mt-10">
          <img
            src={Avatar}
            className="rounded-full w-[8rem] lg:w-[8rem] m-1 "
            alt=""
          />
          
          <span className=" w-32 absolute py-4 top-0 mt-5 ml-10 bg-white text-xs rounded-full animate-kick shadow-md">
            Ol<span className="font-sans font-semibold">á</span>, sou Pedro 👋🏽
            </span>
        </div>

        <div className="flex flex-col  text-[32px] lg:text-[3.4rem] xl:text-[3.4rem] font-semibold bg-gradient-to-l from-[#7c7878] to-black-main bg-clip-text text-transparent">
          <span className="leading-tight">Design e tecnologia</span>
          <span className="leading-tight">para impulsionar marcas</span>
          <span className="leading-tight">e negocios.</span>
        </div>
        <a
        onClick={handleClick}
          href=""
          className="rounded-full flex items-center bg-gray-main p-5 px-6 mt-4 text-white text-sm"
        >
          Entrar em contato
          <PiArrowLineUpRight className="ml-2 text-lg" />
        </a>
      </div>
    </div>
  );
};
export default Hero;
