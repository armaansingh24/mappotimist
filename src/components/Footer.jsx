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
            <div className="flex flex-col gap-10 w-full">
              <p className="text-2xl">MappOptimist</p>
              <ul className="text-xl flex gap-1 flex-col">
                <li className="cursor-pointer">about</li>
                <li className="cursor-pointer">careers</li>
                <li className="cursor-pointer">privacy policies</li>
                <li className="cursor-pointer">terms & conditions</li>
              </ul>
            </div>
            <div className="flex gap-4 self-end justify-items-end">
              <img src={fb} alt=""  className="cursor-pointer" />
              <img src={slack} alt="" className="cursor-pointer" />
              <img src={insta} alt=""  className="cursor-pointer"/>
              <img src={linkedin} alt="" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
