import React,{useRef,useEffect} from "react";
import IconDeveloper from "../../assets/Services/dev.png";
import IconDesign from "../../assets/Services/design.png";
import IconWeb from "../../assets/Services/web-page.png"; 
import IconSoftware from "../../assets/Services/software-development.png";
import './backgroundServices.css'
import { useInView } from "framer-motion";
import { motion } from "framer-motion"



const Services = () => {

  const ref = useRef(null)
  const isInView = useInView(ref,{once:true})


useEffect(()=>{
  console.log(isInView)
},[isInView]);


  const services = [
    {
      image: IconDeveloper,
      title: (
        <>
          Desenvolvimento Full
          <span className="font-sans">-</span>
          Stack
        </>
      ),
      subtitle: (
        <>
          Criando Solu<span className="Acentuacoes">ç</span>
          <span className="Acentuacoes">õ</span>es completas fluidas para web e
          mobile
        </>
      ),
      icon: IconDeveloper,
    },
    {
      image: IconDesign,
      title: (
        <>
          Design <span className="font-sans text-base font-medium">&</span> Criatividade
        </>
      ),
      subtitle: "Designs que conectam marcas e pessoas",
      icon: IconDesign,
    },
    ,
    {
      image: IconWeb,
      title: (
        <>
          Landing Pages <span className="font-sans text-base font-medium">&</span> Conversao
        </>
      ),
      subtitle:
        "Designs estrategicos que engajam e convertem visitantes em clientes.",
      icon: IconDesign,
    },
    {
      image: IconSoftware,
      title: (
        <>
          Software <span className="font-sans text-base font-medium">&</span> Solu
          <span className="Acentuacoes">ç</span>
          <span className="Acentuacoes">õ</span>es
        </>
      ),
      subtitle:
        "Sistemas personalizados que simplificam processos e geram resultados.",
      icon: IconDesign,
    },
  ];
  return (
    <div className="Services mx-auto mt-20 pb-20 rounded-b-[90px] relative z-10">
     <motion.div
      variants = {{
        hidden:{ opacity: 0, x:30},
        visible:{ opacity: 1, x:0},
      }}
    initial="hidden"
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.5,delay:0.2}}
  >
      <div  className="flex flex-col text-center text-2xl  sm:text-2xl lg:text-4xl font-semibold bg-gradient-to-l from-gray-midlight to-black bg-clip-text text-transparent">
        <span className="leading-tight">
          Colaboro com empresas para criar experi<span className="Acentuacoes">ê</span>ncias
        </span>
        <span className="leading-tight">digitais de alto impacto</span>
      </div>
      </motion.div>
      <div class="">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-36">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            <span className="relative flex justify-center">
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

              <span className="relative z-10 bg-white text-xs lg:text-sm p-3 px-8  lg:p-3 lg:px-8 rounded-full text-gray-light -rotate-12">
                Servi<span className="Acentuacoes">ç</span>os
              </span>
            </span>
          </h2>

          <div ref={ref}  className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.3, // Atraso progressivo para cada serviço
              }}
            >
              <div className="mt-4 flex flex-col">
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    <img
                      src={service.image}
                      alt="Service icon"
                      className="w-12"
                    />
                  </a>
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-main">
                  {service.title}
                </p>
                <p className="mt-1 text-sm text-gray-700 max-w-52">
                  {service.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
