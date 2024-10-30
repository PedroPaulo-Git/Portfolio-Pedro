import React,{useRef,useEffect} from "react";
import IdealTemplate from "../../assets/Works/IdealTemplete.png";
import Template2 from "../../assets/Works/Templete3.png";
import Template3 from "../../assets/Works/Templeteport.png";
import Template4 from "../../assets/Works/Templete34.png";
import Template5 from "../../assets/Works/Templete5.png";
import Template6 from "../../assets/Works/TemplateGame.png";
import { useInView } from "framer-motion";
import { motion } from "framer-motion"

import { IoLogoGithub } from "react-icons/io5";
const features = [
  {
    image: IdealTemplate,
    name: "Plataforma de Restaurante",
    social: <IoLogoGithub />,
    where: "Solução Empresarial",
    date: <span>Novembro 202<span className="font-sans">4</span></span>,
    href:'https://ideal-restaurante-pedropaulo-git-pedropaulogits-projects.vercel.app/',
    github:'https://github.com/PedroPaulo-Git/IdealRestaurante',
    description:
      "Desenvolvimento de plataforma completa para restaurantes, com integração Stripe para pagamentos, dashboard administrativo e tecnologias modernas como React, Axios, Prisma e PostgreSQL para garantir alta performance e segurança.",
  },
  {
    image: Template2,
    name: "Landing Page Profissional",
    social: <IoLogoGithub />,
    where: "Desenvolvimento Profissional",
    date: <span>Agosto 202<span className="font-sans">4</span></span>,
    href:'https://pedropaulo-git.github.io/Geison-Fisioterapeuta/',
    github:'https://github.com/PedroPaulo-Git/Geison-Fisioterapeuta',
    description:
      "Landing page moderna e responsiva, criada com React e Tailwind para otimizar a experiência do usuário e garantir desempenho elevado. Focada em conversão e segurança, inclui integração com certificados SSL para proteger dados e fortalecer a presença digital da marca.",
  },
  {
    image: Template3,
    name: "Portfolio Profissional",
    social: <IoLogoGithub />,
    where: "Projeto de Software House",
    date:<span>Junho 202<span className="font-sans">4</span></span>,
    href:'https://pedropaulo-git.github.io/PortSoftware/',
    github:'https://github.com/PedroPaulo-Git/PortSoftware',
    description:
      "Portfólio pessoal desenvolvido com React, Vite e TailwindCSS, criado como parte da fundação da minha software house. Focado em design intuitivo e funcionalidade responsiva, o projeto demonstra expertise em soluções web e fortalece a identidade digital da marca.",
  },
  {
    image: Template5,
    name: "Sistema de Gerenciamento de Pets",
    social: <IoLogoGithub />,
    where: "Processo Seletivo",
    date:<span>Dezembro 202<span className="font-sans">3</span></span>,
    href:'https://github.com/PedroPaulo-Git/desafio-junior-1',
    github:'https://github.com/PedroPaulo-Git/desafio-junior-1',
    description:
      "Desenvolvimento de um sistema completo de gerenciamento de pets com funcionalidades CRUD, utilizando Next.js. O projeto foi criado para um processo seletivo, demonstrando experiência em desenvolvimento backend e frontend com foco em performance e escalabilidade.",
  },
  {
    image: Template4,
    name: "Aplicacao de Filmes",
    social: <IoLogoGithub />,
    where: "Projeto Pessoal",
    date: <span>Dezembro 2023</span>,
    href:'https://pedropaulo-git.github.io/MoviesRating/',
    github:'https://github.com/PedroPaulo-Git/MoviesRating',
    description:
      "Desenvolvimento de uma aplicação que realiza chamadas GET em uma API externa de filmes utilizando Axios. A aplicação exibe informações detalhadas sobre os filmes, incluindo avaliações por estrelas e dados relevantes, proporcionando uma experiência interativa e informativa ao usuário.",
    
  },
  {
    image: Template6,
    name: "Jogo Pixelado",
    social: <IoLogoGithub />,
    where: "Projeto Pessoal",
    date: <span>Dezembro 2023</span>,
    href: 'https://github.com/PedroPaulo-Git/CoinClick',
    github: 'https://github.com/PedroPaulo-Git/CoinClick',
    description:
    "Prototipo de um jogo pixelado em JavaScript, criado para demonstrar a logica de batalha. O jogo apresenta combates dinâmicos em um mundo retro, ilustrando conceitos fundamentais de programação e design de jogos.",
   
}

];

const Work = () => {
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
            Trabalhos Selecionados
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-main">
            Uma coleção dos projetos mais impactantes, escolhidos para
            representar a qualidade e dedicação em cada detalhe. Explore alguns
            dos meus melhores resultados.
          </p>
        </div>
        <div ref={ref}  className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature, index) => (
              <motion.div
              
                key={feature.name}
                className={`relative p-4 bg-white rounded-xl`}
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
