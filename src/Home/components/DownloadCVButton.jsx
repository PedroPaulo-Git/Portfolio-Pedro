import React from "react";

const DownloadCVButton = () => {
  const driveLink = "https://drive.google.com/file/d/1FdKXZ0dWAdJEUqmlfkcuvC40XaKCnbQ7/view?usp=sharing";
    // "https://drive.google.com/file/d/14Sk10FIoizuiwaFjfTrUCbN2O1SnXbdp/view?usp=sharing";

  return (
    <div className="flex border rounded-full p-0.5">
      <a
        className="flex border-black rounded-full"
        href={driveLink}
        target="blank"
        download="Pedro CV.pdf"
      >
        <span className="w-[90px] py-3 lg:py-4 cursor-pointer border rounded-full text-center font-semibold  bg-white">
          CV
        </span>
      </a>
    </div>
  );
};

export default DownloadCVButton;
