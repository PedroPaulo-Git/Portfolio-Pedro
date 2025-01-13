import React, { useRef, useEffect } from "react";
import programming from "../../../assets/About/tec.png"; // add other icons as needed
import IconCodingStudy from "../../../assets/About/coding-book.png"; // add other icons as needed
import IconBook from "../../../assets/About/book.png";
import IconSuccess from "../../../assets/About/success.png";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Certificate from "./Certificate";

const GridSkils = () => {
  const [t, i18n] = useTranslation("global");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div ref={ref} className="lg:w-[30rem] sm:w-[10rem] md:w-[30rem]">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:w-full">
          <div className="h-32 z-10 flex justify-center items-center bg-white shadow-lg border-b">
            <img
              className="w-[4rem] object-contain"
              src={IconSuccess}
              alt="Ícone de Troféu"
            />
          </div>

          <div className="h-32 p-2 text-center flex items-center bg-gray-50 shadow-lg border-b">
            <div className="text-xl w-full">
              <span
                className="font-bold"
                dangerouslySetInnerHTML={{ __html: t("about_grid.value1") }}
              />
              <br />
              <span className="text-base text-gray-light">
                {t("about_grid.label1")}
              </span>
            </div>
          </div>

          <div className="h-32 flex justify-center items-center bg-white shadow-lg z-10">
            <img
              className="w-[4rem] object-contain"
              src={programming}
              alt="Ícone de Certificado"
            />
          </div>

          <div className="h-32 p-2 text-center flex items-center bg-gray-50">
            <div className="text-xl w-full">
              <span
                className="font-bold"
                dangerouslySetInnerHTML={{ __html: t("about_grid.value2") }}
              />
              <br />
              <span className="text-base text-gray-light">
                {t("about_grid.label2")}
              </span>
            </div>
          </div>

          <div className="h-32 p-2 text-center flex items-center bg-gray-50">
            <div className="text-xl w-full">
              <span
                className="font-bold"
                dangerouslySetInnerHTML={{ __html: t("about_grid.value3") }}
              />
              <br />
              <span className="text-base text-gray-light">
                {t("about_grid.label3")}
              </span>
            </div>
          </div>

          <div className="h-32 flex justify-center items-center bg-white shadow-lg z-10">
            <img
              className="w-[4rem] object-contain"
              src={IconBook}
              alt="Ícone de Graduação"
            />
          </div>

          <div className="h-32 p-2 text-center flex items-center bg-gray-50">
            <div className="text-xl w-full">
              <span
                className="font-bold"
                dangerouslySetInnerHTML={{ __html: t("about_grid.value4") }}
              />
              <br />
              <span className="text-base text-gray-light">
                {t("about_grid.label4")}
              </span>
            </div>
          </div>

          <div className="h-32 flex justify-center items-center bg-white shadow-lg z-10">
            <img
              className="w-[3.2rem] object-contain"
              src={IconCodingStudy}
              alt="Ícone de Web"
            />
          </div>
        </div>

{/*         
        <div>
          <Certificate/>
        </div>
         */}

        {/* WHERE I PUT MY COMPONENT CERTIFICATES */}

      </div>
    </motion.div>
  );
};
export default GridSkils;
