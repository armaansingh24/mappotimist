import React from "react";
import heroImage from "../assets/hero-section/heroImage.png";
import TypeWritter from "typewriter-effect";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";
import image1 from "../assets/hero-section/image1.png";
import image2 from "../assets/hero-section/image2.png";
import image3 from "../assets/hero-section/image3.png";
import image4 from "../assets/hero-section/image4.png";
import image5 from "../assets/hero-section/image5.png";

const HeroSection = () => {
  const [activeParagraph, setActiveParagraph] = useState(0);

  useEffect(() => {
    const totalParagraphs = 2;
    const timeout = setTimeout(() => {
      setActiveParagraph((prev) => (prev + 1) % totalParagraphs);
    }, 9000);

    return () => clearTimeout(timeout);
  }, [activeParagraph]);
  return (
    <>
      <div className="w-full flex flex-col justify-center h-fit mx-auto my-auto mt-1 md:mt-5 gap-2 md:flex-row lmd:justify-between items-center">
        <div
          className="md:order-2 flex items-center justify-center w-full mt-6 lmd:mt-0"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="2000"
        >
          <div className="w-full mx-auto flex items-center justify-center">
            <img
              src={heroImage}
              alt=""
              loading="lazy"
              className="sm:w-[60%] md:w-full xmd:w-[70%]"
            />
          </div>
        </div>

        <div
          className="flex flex-col gap-4 w-full lmd:gap-6"
          data-aos="fade-right"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="2000"
        >
          <div className="w-[300px] sm:w-full md:w-[392px] font-semibold lmd:text-[48px] leading-[50px] lmd:leading-[72px] flex flex-col ml-5">
            <h1 className="font-Poppins font-semibold text-[30px] lmd:text-[48px] flex gap-2 flex-wrap">
              <>Hire the perfect</> <>talent for your</>
            </h1>
            <div className="text-[#DF9507] font-bold lmd:text-[48px] -z-1 ">
              <TypeWritter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  strings: ["Company", "Organization", "Agency", "Firm"],
                }}
              />
            </div>
          </div>
          <div className="flex justify-center flex-wrap items-center mx-auto gap-2 md:flex-row sm:justify-between md:mx-0 md:w-[60%] mt-4">
            <button className="flex items-center gap-3 justify-center bg-gradient-to-r from-primary to-secondary py-[6px] px-[12px] rounded-full cursor-pointer text-[22px] font-medium text-white font-Poppins">
              Hire Talent
              <span>
                <BsArrowRightCircleFill className="text-white bg-black rounded-full" />
              </span>
            </button>
            <div className=" flex ml-10 mt-4 lmd:mt-2">
              <span className=" left-[-10px] ml-[-18px] z-1">
                <img src={image1} alt="" className=" w-12" />
              </span>
              <span className=" left-[-10px] ml-[-18px] z-1">
                <img src={image2} alt="" className=" w-12" />
              </span>
              <span className=" left-[-10px] ml-[-18px] z-1">
                <img src={image3} alt="" className=" w-12" />
              </span>
              <span className=" left-[-10px] ml-[-18px] z-1">
                <img src={image4} alt="" className=" w-12" />
              </span>
              <span className=" left-[-10px] ml-[-18px] z-1">
                <img src={image5} alt="" className=" w-12" />
              </span>
              <div className=" left-[-10px] ml-[-18px] z-1 w-12 h-12 rounded-full bg-[#5871D7] text-[14px] text-white flex items-center justify-center leading-[12px]">
                +100
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between w-full mt-6">
            <div>
              <div className="w-[2px] h-10 lmd:h-16 bg-[#6F6C90]"></div>
            </div>
            <div>
              {activeParagraph === 0 && (
                <p className="text-[8px] md:text-[15px] lmd:text-[17px] leading-[18px] capitalize flex items-center font-medium text-[#A0A3BD]">
                  Hire top-notch remote developers, designers, and product
                  managers with exceptional technical expertise and effective
                  communication skills. Our rigorous screening process
                  guarantees a highly skilled team that will streamline your
                  recruitment without the burden of high costs or legal
                  complexities. Transform your ideas into digital reality with
                  our innovative, optimized solutions.
                </p>
              )}
              {activeParagraph === 1 && (
                <p className="text-[8px] md:text-[15px] lmd:text-[17px] leading-[18px] capitalize flex items-center font-medium text-[#A0A3BD]">
                  Witness the realisation of your ideas into tangible success as
                  we guide your path from technologies to solutions. Our team of
                  trained experts provides cost-effective web and application
                  development services. At MappOptimist, we are dedicated to
                  transforming imagination into manifestation. Explore the power
                  of the digital world with our innovative digital solutions.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
