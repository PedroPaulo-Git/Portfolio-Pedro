import React from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Marquee from "./Marquee/Marquee";

const Home = () => {
  return (
    <div className="h-lvh ">
      <Header />
      <Hero/>
      <Marquee/>
    </div>
  );
};
export default Home;
