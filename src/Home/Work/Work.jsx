import React, { useRef, useEffect, useState } from "react";
import IdealTemplate from "../../assets/Works/IdealTemplete.png";
import PortSoftwareTemplate from "../../assets/Works/TemplatePORTSOFTWARE.png";
import CatalanoTemplate from "../../assets/Works/TemplateCATALANO.png";
import GrillTemplate from "../../assets/Works/TemplateGRILL.png";
import Template2 from "../../assets/Works/Templete3.png";
import Template3 from "../../assets/Works/Templeteport.png";
import Template4 from "../../assets/Works/Templete34.png";
import Template5 from "../../assets/Works/Templete5.png";
import Template6 from "../../assets/Works/TemplateGame.png";
import Template7 from "../../assets/Works/TemplateDog.png";
import Template8 from "../../assets/Works/TemplatePsico.png";
import Template9 from "../../assets/Works/TemplateReactNative.png";
import Template10 from "../../assets/Works/TemplateImportss.png";
import Template11 from "../../assets/Works/Template31Hamburgueria.png";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { IoLogoGithub } from "react-icons/io5";
import { IoArrowDown } from "react-icons/io5";

const Work = () => {
  const { t } = useTranslation("global");
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  const features = [
    {
      // PortSoftware - Prospecção e Tráfego
      image: PortSoftwareTemplate,
      name: (
        <span
          dangerouslySetInnerHTML={{ __html: t("work.projects.11.name") }}
        />
      ),
      social: <IoLogoGithub />,
      where: (
        <span
          dangerouslySetInnerHTML={{ __html: t("work.projects.11.where") }}
        />
      ),
      date: (
        <span dangerouslySetInnerHTML={{ __html: t("work.projects.11.date") }} />
      ),
      href: t("work.projects.11.href"),
      github: t("work.projects.11.github"),
      description: t("work.projects.11.description"),
    },
    {
      // Plataforma de Restaurante
      image: IdealTemplate,
      name: t("work.projects.0.name"),
      social: <IoLogoGithub />,
      where: (
        <span
          dangerouslySetInnerHTML={{ __html: t("work.projects.0.where") }}
        />
      ),
      date: (
        <span dangerouslySetInnerHTML={{ __html: t("work.projects.0.date") }} />
      ),
      href: t("work.projects.0.href"),
      github: t("work.projects.0.github"),
      description: t("work.projects.0.description"),
    },
    {
      // Landing Page de Consórcio - Catalano Motos
      image: CatalanoTemplate,
      name: (
        <span
          dangerouslySetInnerHTML={{ __html: t("work.projects.12.name") }}
        />
      ),
      social: <IoLogoGithub />,
      where: (
        <span
          dangerouslySetInnerHTML={{ __html: t("work.projects.12.where") }}
        />
      ),
      date: (
        <span dangerouslySetInnerHTML={{ __html: t("work.projects.12.date") }} />
      ),
      href: t("work.projects.12.href"),
      github: t("work.projects.12.github"),
      description: t("work.projects.12.description"),
    },
    {
      // Site Comercial - Grill Burgueria
      image: GrillTemplate,
      name: (
        <span
          dangerouslySetInnerHTML={{ __html: t("work.projects.13.name") }}
        />
      ),
      social: <IoLogoGithub />,
      where: (
        <span
          dangerouslySetInnerHTML={{ __html: t("work.projects.13.where") }}
        />
      ),
      date: (
        <span dangerouslySetInnerHTML={{ __html: t("work.projects.13.date") }} />
      ),
      href: t("work.projects.13.href"),
      github: t("work.projects.13.github"),
      description: t("work.projects.13.description"),
    },
    {
      // Landing Page Psicologia
      image: Template11,
      name: t("work.projects.10.name"),
      social: <IoLogoGithub />,
      where: (
        <span
          dangerouslySetInnerHTML={{ __html: t("work.projects.10.where") }}
        />
      ),
      date: (
        <span
          dangerouslySetInnerHTML={{ __html: t("work.projects.10.date") }}
        />
      ),
      href: t("work.projects.10.href"),
      github: t("work.projects.10.github"),
      description: t("work.projects.10.description"),
    },
    {
      // Vendas de Pods
      image: Template8,
      name: t("work.projects.7.name"),
      social: <IoLogoGithub />,
      where: t("work.projects.7.where"),
      date: (
        <span dangerouslySetInnerHTML={{ __html: t("work.projects.7.date") }} />
      ),
      href: t("work.projects.7.href"),
      github: t("work.projects.7.github"),
      description: t("work.projects.7.description"),
    },
    {
      // Landing Page Fisioterapia
      image: Template2,
      name: t("work.projects.1.name"),
      social: <IoLogoGithub />,
      where: t("work.projects.1.where"),
      date: (
        <span dangerouslySetInnerHTML={{ __html: t("work.projects.1.date") }} />
      ),
      href: t("work.projects.1.href"),
      github: t("work.projects.1.github"),
      description: t("work.projects.1.description"),
    },
    {
      // 31Hamburgueria
      image: Template9,
      name: t("work.projects.8.name"),
      social: <IoLogoGithub />,
      where: t("work.projects.8.where"),
      date: (
        <span dangerouslySetInnerHTML={{ __html: t("work.projects.8.date") }} />
      ),
      href: t("work.projects.8.href"),
      github: t("work.projects.8.github"),
      description: t("work.projects.8.description"),
    },
    
    // Projetos que aparecem quando clicar no botão
    ...(showMoreProjects ? [
      {
        // Sistema de Gerenciamento de Pets
        image: Template5,
        name: t("work.projects.3.name"),
        social: <IoLogoGithub />,
        where: t("work.projects.3.where"),
        date: (
          <span dangerouslySetInnerHTML={{ __html: t("work.projects.3.date") }} />
        ),
        href: t("work.projects.3.href"),
        github: t("work.projects.3.github"),
        description: t("work.projects.3.description"),
      },
      {
        // Aplicacao de Filmes
        image: Template4,
        name: t("work.projects.4.name"),
        social: <IoLogoGithub />,
        where: t("work.projects.4.where"),
        date: (
          <span dangerouslySetInnerHTML={{ __html: t("work.projects.4.date") }} />
        ),
        href: t("work.projects.4.href"),
        github: t("work.projects.4.github"),
        description: t("work.projects.4.description"),
      },
     
      {
        // Dog Breed Matcher
        image: Template7,
        name: t("work.projects.6.name"),
        social: <IoLogoGithub />,
        where: t("work.projects.6.where"),
        date: (
          <span dangerouslySetInnerHTML={{ __html: t("work.projects.6.date") }} />
        ),
        href: t("work.projects.6.href"),
        github: t("work.projects.6.github"),
        description: t("work.projects.6.description"),
        // mobileOnly: true,
      },
    
    ] : []),
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <div id="projects" className="py-24 pb-40 sm:pt-32 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center text-center">
          <p className="mt-2 text-2xl sm:text-2xl lg:text-4xl font-semibold bg-gradient-to-l from-gray-midlight to-black bg-clip-text text-transparent">
            {t("work.work_title")}
          </p>
          <p
            className="mt-6 text-lg leading-8 text-gray-main"
            dangerouslySetInnerHTML={{ __html: t("work.work_subtitle") }}
          />
        </div>
        
        <div
          ref={ref}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className={`relative p-4 bg-white rounded-xl ${
                  feature.mobileOnly ? "block sm:hidden" : "block"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                }}
              >
                <div className="group relative">
                  <img
                    src={feature.image}
                    className="rounded-2xl lg:h-[300px] lg:w-full"
                    alt=""
                  />
                  <a
                    href={feature.href}
                    target="blank"
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-semibold px-4 py-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Ver Projeto
                  </a>
                </div>

                <dt className="text-2xl font-semibold leading-7 py-2 pt-4 text-gray-main justify-between flex">
                  {feature.name}
                  <a
                    target="blank"
                    href={feature.github}
                    className="mr-1 cursor-pointer hover:text-gray-light trans"
                  >
                    {feature.social}
                  </a>
                </dt>
                <dt className="text-base font-semibold text-gray-main">
                  {feature.where}
                </dt>
                <dt className="text-sm font-normal leading-7 text-gray-midlight">
                  {feature.date}
                </dt>

                <dd className="mt-2 text-sm text-gray-midlight">
                  <span dangerouslySetInnerHTML={{ __html: feature.description }} />
                </dd>
              </motion.div>
            ))}
          </dl>

          {/* Botão para mostrar mais projetos */}
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              onClick={() => setShowMoreProjects(!showMoreProjects)}
              className="flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-300 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{showMoreProjects ? t("work.show_less") : t("work.show_more")}</span>
              <motion.div
                animate={{ rotate: showMoreProjects ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <IoArrowDown size={20} />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
