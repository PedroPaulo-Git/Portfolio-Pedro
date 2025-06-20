import React from "react";
import { motion } from "framer-motion";
//import Avatar from "../../assets/avatar.png";
import Avatar from "../../assets/newAvatar.png";
import { PiArrowLineUpRight } from "react-icons/pi";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useTranslation } from "react-i18next";
import "./backgroundhero.css";

const Hero = () => {
  const [t, i18n] = useTranslation("global");

  const phoneNumber = "5581999049803"; // Seu número com código do país
  const message = encodeURIComponent("Gostaria de entrar em contato !"); // Mensagem a ser enviada

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };
  return (
    <div className="Hero relative w-full rounded-b-[90px] h-[32rem] lg:h-[37rem] z-30 border-solid border-b-2 border-gray-fulllight">
      <div className="flex flex-col items-center text-center gap-5 my-2">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative bg-gradient-to-t from-[#efefef] to-[#f8f7f7] rounded-full mt-10">
            <img
              draggable="false"
              src={Avatar}
              className="rounded-full w-[8rem] lg:w-[8rem] m-1 "
              alt=""
            />

            <span className=" w-32 absolute py-4 top-0 mt-5 ml-10 bg-white text-xs rounded-full animate-kick shadow-md">
              <span
                className="font-normal"
                dangerouslySetInnerHTML={{ __html: t("hero.icon_hello") }}
              ></span>
            </span>
          </div>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {/* <div className="flex flex-col  text-[32px] lg:text-[3.4rem] xl:text-[3.4rem] font-semibold bg-gradient-to-l from-[#7c7878] to-black-main bg-clip-text text-transparent">
            <span className="leading-tight">Design e tecnologia</span>
            <span className="leading-tight">para impulsionar marcas</span>
            <span className="leading-tight">e negocios.</span>
          </div> */}
          <div className="flex flex-col text-[32px] lg:text-[3.4rem] xl:text-[3.4rem] font-semibold bg-gradient-to-l from-[#7c7878] to-black-main bg-clip-text text-transparent">
            {t("hero.title", { returnObjects: true }).map((line, index) => (
              <span key={index} className="leading-tight">
                {line}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="flex gap-2"
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a
             onClick={handleClick}
            href="#projects"
            className="rounded-full flex items-center bg-gray-main p-5 px-6 mt-4 text-white text-sm"
          >
            <div className="flex items-center gap-1 relative group">
              {t("hero.button")}
              <PiArrowLineUpRight className="ml-1 text-lg" />
              <span className="absolute left-0 -bottom-1 w-[80%] h-[2px] bg-gray-fulllight  scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </div>
          </a>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <a
            href="#projects"
            className="cursor-pointer group relative text-gray-main text-sm"
          >
            {t("hero.buttonSeeProjects")}
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gray-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;
