import React from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Marquee from "./Marquee/Marquee";
import Services from "./Services/Services";
import Work from "./Work/Work";
import About from "./About/About";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div className="h-lvh ">
      <Header />
      <Hero />
      <Marquee />
      <Services />
      <About />
      {/* <Work /> */}
      <Footer/>
    </div>
  );
};
export default Home;
