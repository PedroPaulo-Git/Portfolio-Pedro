import React from "react";
import IconApi from "../../../assets/About/api.png"; // add other icons as needed
import IconCertificate from "../../../assets/About/certificate.png"; // add other icons as needed
import IconBook from "../../../assets/About/book.png";
import IconSuccess from "../../../assets/About/success.png";
import IconWeb from "../../../assets/About/web.png";
const GridSkils = () => {
  return (
    <div className="lg:w-[30rem]  sm:w-[10rem] md:w-[30rem]">
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:w-full">
        <div className="h-32 z-10 flex justify-center items-center bg-white shadow-lg border-b">
          <img className="w-[4rem] object-contain" src={IconSuccess} alt="" />
        </div>
       
        <div className="h-32 p-2 text-center flex items-center bg-gray-50 shadow-lg border-b ">
            <div className="text-xl w-full">
            <span className="font-bold">10<span className="font-sans">+</span></span><br></br>
            <span  className="text-base text-gray-light"> Web Applications</span>
           
            </div>
      
        </div>

        <div className="h-32 flex justify-center items-center bg-white shadow-lg z-10 ">
          <img className="w-[4rem] object-contain" src={IconCertificate} alt="" />
        </div>

        <div className="h-32 p-2 text-center flex items-center bg-gray-50 ">
            <div className="text-xl w-full">
            <span className="font-bold">20<span className="font-sans">+</span></span><br></br>
            <span  className="text-base text-gray-light"> Web Applications</span>
           
            </div>
      
        </div>

        
        <div className="h-32 p-2 text-center flex items-center bg-gray-50 shadow-lg border-b">
            <div className="text-xl w-full ">
            <span className="font-bold">30<span className="font-sans">+</span></span><br></br>
            <span  className="text-base text-gray-light "> Web Applications</span>
           
            </div>
      
        </div>

        <div className="h-32 flex justify-center items-center bg-white  shadow-lg z-10 border-b" >
          <img className="w-[4rem] object-contain" src={IconBook} alt="" />
        </div>
        
        <div className="h-32 p-2 text-center flex items-center bg-gray-50 ">
            <div className="text-xl w-full">
            <span className="font-bold">50<span className="font-sans">+</span></span><br></br>
            <span  className="text-base text-gray-light"> Web Applications</span>
           
            </div>
      
        </div>

        <div className="h-32 flex justify-center items-center bg-white  shadow-lg z-10">
          <img className="w-[4rem] object-contain" src={IconWeb} alt="" />
        </div>
      </div>
    </div>
  );
};
export default GridSkils;
