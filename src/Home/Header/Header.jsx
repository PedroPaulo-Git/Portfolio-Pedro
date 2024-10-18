import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex flex-1 items-center justify-end md:justify-between px-16 py-12">
        <nav aria-label="Global" className="hidden md:block border-black">
          <div className="flex items-center gap-2 text-xs">
            <p>
              receberpedro09
              <span className="font-serif font-semibold">@</span>gmail.com
            </p>
            <span className="w-[100px] py-3.5 border rounded-full text-center">Copiar</span>
            <span className="w-[100px] py-3.5 border rounded-full text-center">CV</span>
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
