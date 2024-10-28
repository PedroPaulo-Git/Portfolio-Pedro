import React from 'react';
import { AiTwotoneMail } from "react-icons/ai";
const EmailButton = () => {
  const email = "receberpedro09@gmail.com"; // Substitua pelo seu e-mail
  const subject = "Assunto do E-mail"; // Substitua pelo assunto desejado
  const body = "Corpo do E-mail"; // Substitua pelo corpo desejado

  return (
    <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} className="w-[110px] py-3 border-4 border-gray-fulllight rounded-full text-center font-normal bg-gray-main text-sm leading-normal text-white flex justify-center items-center gap-2">
    <AiTwotoneMail /> Email
  </a>
  );
};

export default EmailButton;
