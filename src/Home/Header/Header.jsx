import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex flex-1 items-center justify-between px-4 py-12 sm:px-16 sm:py-12 ">
        <nav aria-label="Global" className=" md:block border-black">
          <div className="flex items-center gap-2 text-xs">
            <p className="hidden md:block text-gray-light">
              receberpedro09
              <span className="font-serif font-semibold">@</span>gmail.com
            </p>
            <span className="w-[90px] py-3.5 border rounded-full text-center font-semibold hidden sm:block bg-white">Copiar</span>
            <span className="w-[90px] py-3.5 border rounded-full text-center font-semibold bg-gray-main sm:hidden text-white">Email</span>
            <span className="w-[90px] py-3.5 border rounded-full text-center font-semibold  bg-white">CV</span>
          </div>
        </nav>

        <div className="flex items-center gap-4 text-sm">
          <div className="sm:flex">
            <div className="flex sm:gap-2 text-gray-light">
              <a className="cursor-pointer">LinkedIn</a>
              <span className="font-serif">/</span>
              <a className="cursor-pointer">Git Hub</a>
              <span className="font-serif">/</span>
              <a className="cursor-pointer">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
