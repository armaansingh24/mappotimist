import React from "react";
import TypeWritter from "typewriter-effect";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";
import image1 from "../assets/hero-section/image1.webp";
import image2 from "../assets/hero-section/image2.webp";
import image3 from "../assets/hero-section/image3.webp";
import image4 from "../assets/hero-section/image4.webp";
import image5 from "../assets/hero-section/image5.webp";
import { motion, useInView, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
import Navbar from "./Navbar";
import background from "../assets/hero-section/background.png";
import techs from "../assets/hero-section/techs.png";
import main from "../assets/hero-section/main.png";
import pattern from "../assets/hero-section/pattern.png";
import pattern2 from "../assets/hero-section/pattern2.png";
import circle from "../assets/hero-section/circle.png";
import plus from "../assets/hero-section/plus.png";
import square from "../assets/hero-section/square.png";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);
  return (
    <>
      <div className=" w-screen relative -z-1 h-[190vh]  xsm:h-[150vh] sm:h-[160vh] lmd:h-[110vh]  bg-gradient-to-r from-primary to-secondary ">
        <div className="w-full h-full bg-gradient-to-r from-primary to-secondary absolute">
          <img
            src={background}
            alt=""
            className="absolute right-0 h-full hidden midFM:block"
          />
          <img
            src={techs}
            alt=""
            className="absolute left-2 bottom-10 sm:bottom-5 w-[20%]"
          />
          <img
            src={pattern}
            alt=""
            className="absolute right-9 bottom-44 md:bottom-36 md:right-20"
          />
          <img src={pattern2} alt="" className="absolute top-36 left-10" />
          <img
            src={plus}
            alt=""
            className="absolute left-[70%] md:left-[35%] top-36"
          />
          <img
            src={circle}
            alt=""
            className="absolute left-12 top-[62%] md:top-[50%]"
          />
          <img
            src={square}
            alt=""
            className="absolute left-[70%] md:right-[3%] top-36 hidden md:block"
          />
          <img
            src={square}
            alt=""
            className="absolute right-[10%] md:left-[43%] bottom-24 md:bottom-36"
          />
          <img
            src={plus}
            alt=""
            className="absolute right-[10%] md:right-[28%] bottom-[25%] md:bottom-32"
          />
        </div>
        <Navbar />
        <div
          className="w-[90%] flex flex-col justify-center h-fit mx-auto my-auto xxmd:mt-36 midxmd:mt-5 gap-2 md:flex-row lmd:justify-between items-center absolute inset-0 mt-36"
          id="home"
        >
          <motion.div
            className="md:order-2 flex items-center justify-center w-full mt-6 lmd:mt-0"
            ref={ref}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1.9 }}
          >
            <div className="w-full mx-auto flex items-center justify-center md:mt-44 ">
              <img src={main} alt="" className="w-[70%]" />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-4 w-full lmd:gap-6 items-start justify-start"
            ref={ref}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1.9 }}
          >
            <div className="w-full font-poppins lmd:text-[48px] leading-[50px] lmd:leading-[72px] flex flex-col ml-12">
              <h1 className="font-RobotoSlab text-[30px] lmd:text-[48px] flex gap-2 flex-wrap text-white">
                Transform your vision into digital reality with our
              </h1>
              <div className=" text-transparent bg-clip-text bg-gradient-to-r from-[#24BBE6] via-[#737FCF]  to-[#737FCF] lmd:text-[48px] -z-1 font-poppins ">
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
            <div className="flex justify-center flex-wrap items-center mx-auto gap-2 md:flex-row md:justify-start md:mx-0 mt-4">
              <Link to="Developer" smooth={true} offset={70} duration={1000}>
                <button className="flex items-center mt-2 gap-3 justify-center bg-gradient-to-r from-primary to-secondary py-[6px] px-[12px] rounded-full cursor-pointer text-[22px] font-medium text-white font-poppins500 ml-12">
                  Hire Talent
                  <span>
                    <BsArrowRightCircleFill className="text-white bg-black rounded-full" />
                  </span>
                </button>
              </Link>
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
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
