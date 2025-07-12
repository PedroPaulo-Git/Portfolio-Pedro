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
import Template12 from '../../assets/Works/TemplateEPTA.png'
import Template13 from '../../assets/Works/TemplateBrasilBarbearia.png';
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { IoLogoGithub } from "react-icons/io5";
import { IoArrowDown } from "react-icons/io5";

const imageMap = {
  "IdealTemplete.png": IdealTemplate,
  "TemplatePORTSOFTWARE.png": PortSoftwareTemplate,
  "TemplateCATALANO.png": CatalanoTemplate,
  "TemplateGRILL.png": GrillTemplate,
  "Templete3.png": Template2,
  "Templeteport.png": Template3,
  "Templete34.png": Template4,
  "Templete5.png": Template5,
  "TemplateGame.png": Template6,
  "TemplateDog.png": Template7,
  "TemplatePsico.png": Template8,
  "TemplateReactNative.png": Template9,
  "TemplateImportss.png": Template10,
  "Template31Hamburgueria.png": Template11,
  "TemplateEPTA.png": Template12,
  "TemplateBrasilBarbearia.png":Template13
  // ...adicione todos os outros
};

const Work = () => {
  const { t } = useTranslation("global");
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  // Pega os projetos do idioma atual
  const projects = t("work.projects", { returnObjects: true });

  // Separe os projetos principais e os extras (3 últimos)
  const mainProjects = projects.slice(0, -3);
  const extraProjects = projects.slice(-3);

  // Mapeia os projetos principais
  const mainFeatures = mainProjects.map((project, index) => {
    const imageSrc = imageMap[project.image] || imageMap["IdealTemplete.png"];
    return {
      image: imageSrc,
      name: (<span dangerouslySetInnerHTML={{ __html: project.name }} />),
      social: <IoLogoGithub />,
      where: <span dangerouslySetInnerHTML={{ __html: project.where }} />,
      date: <span dangerouslySetInnerHTML={{ __html: project.date }} />,
      href: project.href,
      github: project.github,
      description: project.description,
    };
  });

  // Mapeia os extras
  const extraFeatures = extraProjects.map((project, index) => {
    const imageSrc = imageMap[project.image] || imageMap["IdealTemplete.png"];
    return {
      image: imageSrc,
      name: (<span dangerouslySetInnerHTML={{ __html: project.name }} />),
      social: <IoLogoGithub />,
      where: <span dangerouslySetInnerHTML={{ __html: project.where }} />,
      date: <span dangerouslySetInnerHTML={{ __html: project.date }} />,
      href: project.href,
      github: project.github,
      description: project.description,
    };
  });

  // Junta os features conforme o botão
  const features = showMoreProjects
    ? [...mainFeatures, ...extraFeatures]
    : mainFeatures;

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
