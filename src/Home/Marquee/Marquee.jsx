import React from "react";
import { motion } from "framer-motion";
import Git from "../../assets/git.png";
import PostgreSQL from "../../assets/postgres.png";
import Typescript from "../../assets/ts.png";
import Node from "../../assets/node.png";
import Tailwind from "../../assets/tailwind.png";
import ReactLogo from "../../assets/react.png";
import Vercel from "../../assets/Vercel.png";
import Javascript from "../../assets/js.png";
import VueJs from "../../assets/vue.png";

const Marquee = () => {
  // vercel /vite
  const marquee = [
    Git,
    PostgreSQL,
    Typescript,
    Javascript,
    Tailwind,
    ReactLogo,
    VueJs,
    Node,
    // Vercel
  ];
  return (
    <div className="bg-[#f8f9fa] flex border-solid border-b-2 border-gray-fulllight rounded-b-[90px] text-6xl h-[23rem] items-center pt-10 -mt-20 overflow-x-hidden saturate-0">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-20 flex-shrink-0 pr-20 text-gray-main"
      >
        {marquee.map((image, index) => {
          return <img draggable="false" src={image} className="w-60" />;
        })}
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-20 flex-shrink-0 pr-20 text-gray-main "
      >
        {marquee.map((image, index) => {
          return <img draggable="false" src={image} className="w-60" />;
        })}
      </motion.div>
    </div>
  );
};
export default Marquee;
