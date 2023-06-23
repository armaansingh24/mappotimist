import React from "react";
import PortfolioNavbar from "../components/PortfolioNavbar";
import First from "../assets/OcrIcr/First.png";

const OcrIcr = () => {
  return (
    <>
      <PortfolioNavbar />
      <div className="w-[90%] mt-32 mx-auto sm:mt-0">
        <div className="flex flex-col gap-6 justify-center items-center midxmd:flex-row midxmd:gap-20 h-screen">
          <div className="midxmd:order-2 midxmd:w-full">
            <img src={First} alt="" className="midxmd:w-full" />
          </div>
          <div className="flex flex-col gap-2 midxmd:w-full">
            <div>
              <h2 className="text-2xl midxmd:text-4xl font-poppins500 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                OCR & ICR(Handwritten)
              </h2>
              <p className="text-sm midxmd:text-lg font-poppins mt-1">
                Utilizing OCR/ICR technology to elevate the process experience.
              </p>
            </div>
            <div>
              <p className="text-sm midxmd:text-lg font-poppins">
                Use our OCR/ICR technology to enhance the efficiency, accuracy,
                and accessibility of document processing, data extraction, and
                information management across various industries and domains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OcrIcr;
