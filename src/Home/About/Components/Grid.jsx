import React from "react";
import IconApi from "../../../assets/About/api.png"; // add other icons as needed

const GridSkils = () => {
  return (
    <div className="w-[30rem]">
      <div className="grid  grid-cols-1 lg:grid-cols-4 w-full shadow-xl">
        <div className="h-32 flex justify-center items-center bg-white shadow-lg ">
            <img className="w-1/2 object-contain" src={IconApi} alt="" />
        </div>
        <div className="h-32  bg-gray-100 shadow-inner-deep"></div>
        <div className="h-32 bg-white shadow-lg"></div>
        <div className="h-32 bg-gray-100 shadow-inner-deep"></div>

        <div className="h-32 bg-gray-100 shadow-inner-deep"></div>
        <div className="h-32 bg-whiteshadow-lg "></div>
        <div className="h-32 bg-gray-100 shadow-inner-deep"></div>
        <div className="h-32 bg-white shadow-lg "></div>
      </div>
    </div>
  );
};
export default GridSkils;
