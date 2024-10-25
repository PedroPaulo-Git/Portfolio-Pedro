import React from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Marquee from "./Marquee/Marquee";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="h-lvh ">
      <Header />
      <Hero/>
      <Marquee/>
      <Services/>
    </div>
  );
};
export default Home;
