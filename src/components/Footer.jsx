import React from "react";
import insta from "../assets/footer/insta.webp";
import fb from "../assets/footer/fb.webp";
import slack from "../assets/footer/slack.webp";
import linkedin from "../assets/footer/linkedin.webp";
import { Link } from "react-scroll";
import PrivacyPolicy from "../assets/footer/PrivacyPolicy.pdf";
const Footer = () => {
  
  return (
    <>
      <div className="w-screen bg-gradient-to-r from-primary to-secondary sm:h-[23rem] relative z-30">
        <div className="w-[90%] mx-auto flex h-full p-0">
          {/* <p className=''>MappOptimist</p> */}
          <div className="mt-10 text-white flex flex-col h-[80%] gap-20 items-end w-full mb-3">
            <div className="flex flex-col gap-10 w-full sm:flex-row sm:gap-0 sm:mr-20 midxs:justify-around midFM:mr-40">
              <p className="text-2xl sm:text-3xl">MappOptimist</p>
              <ul className="text-xl flex gap-1 flex-col sm:text-2xl mt-5">
                <Link to={"About"} smooth={true} offset={0} duration={1000}>
                  <li className="cursor-pointer">about</li>
                </Link>
                <li className="cursor-pointer">careers</li>
                <li className="cursor-pointer">
                  <a href={PrivacyPolicy} target="_blank" 
                  rel="noopener noreferrer"
                  >privacy policies</a>
                </li>
                <li className="cursor-pointer">terms & conditions</li>
              </ul>
            </div>
            <div className="flex gap-6 sm:gap-4 self-end justify-items-end h-full mt-5 sm:mt-4">
              <img
                src={fb}
                alt=""
                className="cursor-pointer h-[67%] sm:h-[90%] sm:w-[80%]"
              />
              <img
                src={slack}
                alt=""
                className="cursor-pointer h-[67%] sm:h-[90%] sm:w-[80%]"
              />
              <img
                src={insta}
                alt=""
                className="cursor-pointer h-[67%] sm:h-[90%] sm:w-[80%]"
              />
              <a
                href="https://www.linkedin.com/company/mappoptimist-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer h-[66%] sm:h-[89%] sm:w-[80%] mt-2 sm:mt-0"
              >
                <img src={linkedin} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
