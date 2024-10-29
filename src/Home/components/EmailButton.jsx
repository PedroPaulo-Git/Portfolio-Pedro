import React from 'react';
import { AiTwotoneMail } from "react-icons/ai";
const EmailButton = () => {
  const email = "receberpedro09@gmail.com";
  const subject = "Gostaria de entrar em contato"; 
  const body = ""; 

  return (<>
  <a
        href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
        className=" w-[110px] py-3 border-4 z-0 border-gray-fulllight rounded-full text-center font-normal bg-gray-main text-sm leading-normal text-white flex flex-col justify-center items-center gap-2"
      >
        <div className="flex items-center gap-1 relative group">
          <AiTwotoneMail /> Email
          <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gray-fulllight scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </div>
       
      </a>
  </>
  );
};

export default EmailButton;
