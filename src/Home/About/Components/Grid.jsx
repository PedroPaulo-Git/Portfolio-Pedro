import React,{useRef,useEffect} from "react";
import programming from "../../../assets/About/tec.png"; // add other icons as needed
import IconCodingStudy from "../../../assets/About/coding-book.png"; // add other icons as needed
import IconBook from "../../../assets/About/book.png";
import IconSuccess from "../../../assets/About/success.png";
import { useInView } from "framer-motion";
import { motion } from "framer-motion"



const GridSkils = () => {
  
  const ref = useRef(null)
  const isInView = useInView(ref,{once:true})


useEffect(()=>{
  console.log(isInView)
},[isInView]);



  return (
    <motion.div
    variants = {{
      hidden:{ opacity: 0, x:30},
      visible:{ opacity: 1, x:0},
    }}
  initial="hidden"
  animate={isInView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.5,delay:0.2}}
>
    <div ref={ref} className="lg:w-[30rem] sm:w-[10rem] md:w-[30rem]">
     <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:w-full">
  <div className="h-32 z-10 flex justify-center items-center bg-white shadow-lg border-b">
    <img className="w-[4rem] object-contain" src={IconSuccess} alt="Ícone de Troféu" />
  </div>
 
  <div className="h-32 p-2 text-center flex items-center bg-gray-50 shadow-lg border-b">
      <div className="text-xl w-full">
        <span className="font-bold">25<span className="font-sans">+</span></span><br></br>
        <span className="text-base text-gray-light">Projetos Conclu<span className="font-sans">í</span>dos</span>
      </div>
  </div>

  <div className="h-32 flex justify-center items-center bg-white shadow-lg z-10">
    <img className="w-[4rem] object-contain" src={programming} alt="Ícone de Certificado" />
  </div>

  <div className="h-32 p-2 text-center flex items-center bg-gray-50">
      <div className="text-xl w-full">
        <span className="font-bold">15<span className="font-sans">+</span></span><br></br>
        <span className="text-base text-gray-light">Tecnologias Dominadas</span>
      </div>
  </div>

  <div className="h-32 p-2 text-center flex items-center bg-gray-50 shadow-lg border-b">
      <div className="text-xl w-full">
        <span className="font-bold">21.900<span className="font-sans">+</span></span><br></br>
        <span className="text-base text-gray-light">Horas de Cursos</span>
      </div>
  </div>

  <div className="h-32 flex justify-center items-center bg-white shadow-lg z-10 border-b">
    <img className="w-[4rem] object-contain" src={IconBook} alt="Ícone de Graduação" />
  </div>
  
  <div className="h-32 p-2 text-center flex items-center bg-gray-50">
      <div className="text-xl w-full">
        <span className="font-bold">3.5<span className="font-sans">+</span></span><br></br>
        <span className="text-base text-gray-light">Anos de Estudos</span>
      </div>
  </div>

  <div className="h-32 flex justify-center items-center bg-white shadow-lg z-10">
    <img className="w-[3.2rem] object-contain" src={IconCodingStudy} alt="Ícone de Web" />
  </div>
</div>

    </div>
    </motion.div>
  );
};
export default GridSkils;
