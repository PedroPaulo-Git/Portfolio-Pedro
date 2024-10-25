import React from "react";
import { FaNode } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";
const Marquee = () => {
  return (
    <div className="bg-white flex text-6xl h-72 pt-10 -mt-20 z-0 py-auto justify-center overflow-x-hidden">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 50 }}
        className="flex items-center gap-52 "
      >
        <FaNode />
        <BiLogoPostgresql />
        <RiTailwindCssFill />
        <FaGitAlt />
        <FaGithub />
        <SiTypescript />
      </motion.div>
    </div>
  );
};
export default Marquee;
