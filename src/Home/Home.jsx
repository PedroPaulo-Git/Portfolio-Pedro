import React from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Marquee from "./Marquee/Marquee";
import Services from "./Services/Services";
import Work from "./Work/Work";

const Home = () => {
  return (
    <div className="h-lvh ">
      <Header />
      <Hero/>
      <Marquee/>
      <Services/>
      <Work/>
    </div>
  );
};
export default Home;
