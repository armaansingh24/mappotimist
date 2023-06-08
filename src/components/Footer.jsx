import React from "react";
import insta from "../assets/footer/insta.png";
import fb from "../assets/footer/fb.png";
import slack from "../assets/footer/slack.png";
import linkedin from "../assets/footer/linkedin.png";

const Footer = () => {
  return (
    <>
      <div className="w-screen bg-gradient-to-r from-primary to-secondary h-[23rem]">
        <div className="w-[90%] mx-auto flex h-full p-0">
          {/* <p className=''>MappOptimist</p> */}
          <div className="mt-10 text-white flex flex-col h-[80%] gap-20 items-end w-full">
            <div className="flex flex-col gap-10 w-full sm:flex-row sm:gap-0 sm:mr-20 midxs:justify-around midxs:mr-40">
              <p className="text-2xl sm:text-3xl">MappOptimist</p>
              <ul className="text-xl flex gap-1 flex-col sm:text-2xl">
                <li className="cursor-pointer">about</li>
                <li className="cursor-pointer">careers</li>
                <li className="cursor-pointer">privacy policies</li>
                <li className="cursor-pointer">terms & conditions</li>
              </ul>
            </div>
            <div className="flex gap-4 self-end justify-items-end midxs:mt-10">
              <img src={fb} alt="" className="cursor-pointer h-[67%] sm:h-[90%] sm:w-[80%]" />
              <img src={slack} alt="" className="cursor-pointer h-[67%] sm:h-[90%] sm:w-[80%]" />
              <img src={insta} alt="" className="cursor-pointer h-[67%] sm:h-[90%] sm:w-[80%]" />
              <img
                src={linkedin}
                alt=""
                className="cursor-pointer h-[66%] sm:h-[89%] sm:w-[80%]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
