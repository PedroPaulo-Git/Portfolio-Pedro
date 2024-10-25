import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex flex-1 items-center justify-between px-4 py-12 sm:px-16 sm:py-12 ">
        <nav aria-label="Global" className=" md:block border-black">
          <div className="flex items-center gap-2 text-xs">
            <p className="hidden md:block">
              receberpedro09
              <span className="font-serif font-semibold">@</span>gmail.com
            </p>
            <span className="w-[90px] py-3.5 border rounded-full text-center hidden sm:block bg-white">Copiar</span>
            <span className="w-[90px] py-3.5 border rounded-full text-center bg-gray-main sm:hidden text-white">Email</span>
            <span className="w-[90px] py-3.5 border rounded-full text-center  bg-white">CV</span>
          </div>
        </nav>

        <div className="flex items-center gap-4 text-sm">
          <div className="sm:flex">
            <div className="flex sm:gap-2">
              <p>LinkedIn</p>
              <span className="font-serif">/</span>
              <p>Git Hub</p>
              <span className="font-serif">/</span>
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
