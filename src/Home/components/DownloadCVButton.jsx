import React from "react";
import cvFile from "../../assets/CurriculoPedro-2.pdf"; // Substitua pelo caminho do seu CV

const DownloadCVButton = () => {
    const driveLink = "https://drive.google.com/file/d/1bMqwD7C8z7Utdl4OmmYnWXkT-jWKmCvR/view"; // Link do seu CV no Google Drive

  return (
    <a
    className="flex"
      href={driveLink} // Link para o arquivo do CV
      download="Pedro CV.pdf" // Nome do arquivo ao ser baixado
    >
      <span className="w-[90px] py-3 cursor-pointer border rounded-full text-center font-semibold  bg-white">
        CV
      </span>
    </a>
  );
};

export default DownloadCVButton;
