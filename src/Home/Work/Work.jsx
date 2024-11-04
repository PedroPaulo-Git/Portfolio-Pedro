import React,{useRef,useEffect,useState} from "react";
import IdealTemplate from "../../assets/Works/IdealTemplete.png";
import Template2 from "../../assets/Works/Templete3.png";
import Template3 from "../../assets/Works/Templeteport.png";
import Template4 from "../../assets/Works/Templete34.png";
import Template5 from "../../assets/Works/Templete5.png";
import Template6 from "../../assets/Works/TemplateGame.png";
import Template7 from "../../assets/Works/TemplateDog.png";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion"

import { IoLogoGithub } from "react-icons/io5";
// const [isMobile,setIsMobile] = useState()


const Work = () => {
  
  const [t, i18n] = useTranslation("global");
  
const features = [
  {
    image: IdealTemplate,
    name: t('work.projects.0.name'), // "Plataforma de Restaurante"
    social: <IoLogoGithub />,
    where: t('work.projects.0.where'), // "Solução Empresarial"
    date: <span>{t('work.projects.0.date')}</span>, // "Novembro 2023"
    href: 'https://ideal-restaurante-pedropaulo-git-pedropaulogits-projects.vercel.app/',
    github: 'https://github.com/PedroPaulo-Git/IdealRestaurante',
    description: t('work.projects.0.description'), // Descrição do projeto
  },
  {
    image: Template2,
    name: t('work.projects.1.name'), // "Landing Page Profissional"
    social: <IoLogoGithub />,
    where: t('work.projects.1.where'), // "Desenvolvimento Profissional"
    date: <span>{t('work.projects.1.date')}</span>, // "Agosto 2023"
    href: 'https://pedropaulo-git.github.io/Geison-Fisioterapeuta/',
    github: 'https://github.com/PedroPaulo-Git/Geison-Fisioterapeuta',
    description: t('work.projects.1.description'), // Descrição do projeto
  },
  {
    image: Template3,
    name: t('work.projects.2.name'), // "Portfolio Profissional"
    social: <IoLogoGithub />,
    where: t('work.projects.2.where'), // "Projeto de Software House"
    date: <span>{t('work.projects.2.date')}</span>, // "Junho 2023"
    href: 'https://pedropaulo-git.github.io/PortSoftware/',
    github: 'https://github.com/PedroPaulo-Git/PortSoftware',
    description: t('work.projects.2.description'), // Descrição do projeto
  },
  {
    image: Template5,
    name: t('work.projects.3.name'), // "Sistema de Gerenciamento de Pets"
    social: <IoLogoGithub />,
    where: t('work.projects.3.where'), // "Processo Seletivo"
    date: <span>{t('work.projects.3.date')}</span>, // "Dezembro 2023"
    href: 'https://github.com/PedroPaulo-Git/desafio-junior-1',
    github: 'https://github.com/PedroPaulo-Git/desafio-junior-1',
    description: t('work.projects.3.description'), // Descrição do projeto
  },
  {
    image: Template4,
    name: t('work.projects.4.name'), // "Aplicacao de Filmes"
    social: <IoLogoGithub />,
    where: t('work.projects.4.where'), // "Projeto Pessoal"
    date: <span>{t('work.projects.4.date')}</span>, // "Dezembro 2023"
    href: 'https://pedropaulo-git.github.io/MoviesRating/',
    github: 'https://github.com/PedroPaulo-Git/MoviesRating',
    description: t('work.projects.4.description'), // Descrição do projeto
  },
  {
    image: Template6,
    name: t('work.projects.5.name'), // "Jogo Pixelado"
    social: <IoLogoGithub />,
    where: t('work.projects.5.where'), // "Projeto Pessoal"
    date: <span>{t('work.projects.5.date')}</span>, // "Dezembro 2023"
    href: 'https://github.com/PedroPaulo-Git/CoinClick',
    github: 'https://github.com/PedroPaulo-Git/CoinClick',
    description: t('work.projects.5.description'), // Descrição do projeto
    mobileOnly: true,
  },
  {
    image: Template7,
    name: t('work.projects.6.name'), // "Dog Breed Matcher"
    social: <IoLogoGithub />,
    where: t('work.projects.6.where'), // "Projeto Pessoal"
    date: <span>{t('work.projects.6.date')}</span>, // "Dezembro 2023"
    href: 'https://github.com/PedroPaulo-Git/What-Breed-Is-My-Dog',
    github: 'https://github.com/PedroPaulo-Git/What-Breed-Is-My-Dog',
    description: t('work.projects.6.description'), // Descrição do projeto
  },
];
  const ref = useRef(null)
  const isInView = useInView(ref,{once:true})

useEffect(()=>{
  console.log(isInView)
},[isInView]);


  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center text-center">
          <p className="mt-2 text-2xl sm:text-2xl lg:text-4xl font-semibold bg-gradient-to-l from-gray-midlight to-black bg-clip-text text-transparent">
           {t('work.work_title')}
          </p>
          {/* <p className="mt-6 text-lg leading-8 text-gray-main">
            Uma coleção dos projetos mais impactantes, escolhidos para
            representar a qualidade e dedicação em cada detalhe. Explore alguns
            dos meus melhores resultados.
          </p> */}
          <p className="mt-6 text-lg leading-8 text-gray-main">{t('work.work_subtitle')}</p> 
        </div>
        <div ref={ref}  className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
         
          {features.map((feature, index) => (
           
              <motion.div
              // ${isMobile ? "block" : "hidden md:block"}
                key={feature.name}
                className={`relative p-4 bg-white rounded-xl  ${feature.mobileOnly ? 'block sm:hidden' : 'block'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.5, // Atraso progressivo para cada cartão
                }}
              >
                <div className="group relative">
                  <img src={feature.image} className="rounded-2xl" alt="" />
                  <a 
                    href={feature.href}
                    target="blank"
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-semibold px-4 py-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver Projeto
                  </a>
                </div>

                <dt className="text-2xl font-semibold leading-7 py-2 pt-4 text-gray-main justify-between flex">
                  {feature.name}
                  <a href={feature.github} className="mr-1 cursor-pointer hover:text-gray-light trans"> {feature.social} </a>
                </dt>
                <dt className="text-base font-semibold text-gray-main">
                  {feature.where}
                </dt>
                <dt className="text-sm font-normal leading-7 text-gray-midlight">
                  {feature.date}
                </dt>

                <dd className="mt-2 text-sm text-gray-midlight">
                  {feature.description}
                </dd>
              </motion.div>
            
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
export default Work;
