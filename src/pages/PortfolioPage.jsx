import React from "react";
import { useLocation } from "react-router-dom";
import backgroudPortfolio from "../assets/portfolio/backgroudPortfolio.png";
import main from "../assets/portfolio/main.png";
import featureIcon from "../assets/portfolio/featureIcon.png";
import Group from "../assets/portfolio/Group.png";
import leftImage from "../assets/portfolio/leftImage.png";
import R1 from "../assets/portfolio/R1.png";
import R2 from "../assets/portfolio/R2.png";
import R3 from "../assets/portfolio/R3.png";
import R4 from "../assets/portfolio/R4.png";
import lower from "../assets/expertise/lower.png";
import Group1 from "../assets/portfolio/Group1.png";
import PortfolioCarausel from "../components/PortfolioCarausel";
import PortfolioNavbar from "../components/PortfolioNavbar";

// import { useState } from "react";

const PortfolioPage = (props) => {
  const location = useLocation();
  const item = location.state?.item;
  // const [isFocused, setIsFocused] = useState(false);

  // const handleFocus = () => {
  //   setIsFocused(true);
  // };

  // const handleBlur = () => {
  //   setIsFocused(false);
  // };

  return (
    <>
      <div className="w-full relative ">
        <PortfolioNavbar />
        <div className="">
          <div className="relative z-0 bg-gradient-to-r from-secondary via-secondary to-white">
            <img
              src={backgroudPortfolio}
              alt=""
              className=" object-cover h-[700px] w-screen  opacity-70"
            />
          </div>
          <div className="absolute inset-0 mt-32">
            <div className="flex items-center justify-center flex-col sm:flex-row w-[90%] mx-auto">
              <div className="w-full">
                <p className="font-poppins text-[30px] lmd:text-[48px] text-white">
                  We Provide{" "}
                </p>
                <p className="text-[#DF9507] lmd:text-[48px] -z-1 font-poppins ">
                  Great Service.
                </p>
              </div>
              <div className="">
                <img src={Group1} alt="" className="mx-auto" />
                {/* <p>{item.title}</p> */}
              </div>
            </div>
          </div>
        </div>
        {/* Feature section */}
        <div className="bg-gradient-to-br from-primary to-primary via-secondary w-screen pb-10">
          <div className="flex flex-col items-center justify-center p-1">
            <p className="text-lg sm:text-3xl font-poppins text-center text-white mt-20">
              Awesome Features
            </p>
            <p className="text-base text-center font-poppins500 sm:text-xl sm:w-[80%] mx-auto mt-2 text-white">
              {item.onhover}
            </p>
          </div>

          <div className="sm:mt-28 block midxmd:hidden">
            <div className="">
              <img src={main} alt="" className="w-[50%] mx-auto sm:w-[20%] " />
            </div>
            {/* mobile view cards */}
            <div className="grid grid-cols-2 gap-5 w-[90%] mx-auto items-center justify-center ">
              <div className="skew-x-6 bg-white w-full flex gap-2 rounded-lg p-2 items-center justify-center shadow-[-9px_13px_10px_0px_rgba(0,0,0,0.6)] ">
                <img
                  src={featureIcon}
                  alt=""
                  className="w-[50%] h-[50%] sm:w-[20%] sm:h-[20%]"
                />
                <div className="">
                  <p className="text-[7.97px] font-poppins xxmd:text-base">
                    {item.feature1}
                  </p>
                  <p className="text-[6px] font-poppins500 xxmd:text-[9px] mt-1">
                    {item.feature1Desc}
                  </p>
                </div>
              </div>
              <div className="skew-x-6 bg-white w-full flex gap-2 rounded-lg p-2  items-center justify-center shadow-[-9px_13px_10px_0px_rgba(0,0,0,0.6)]">
                <img
                  src={featureIcon}
                  alt=""
                  className="w-[50%] h-[50%] sm:w-[20%] sm:h-[20%]"
                />
                <div className="">
                  <p className="text-[7.97px] font-poppins xxmd:text-base">
                    {item.feature2}
                  </p>
                  <p className="text-[6px] font-poppins500 xxmd:text-[9px] mt-2">
                    {item.feature2Desc}
                  </p>
                </div>
              </div>
              <div className="skew-x-6 bg-white w-full flex gap-2 rounded-lg p-2  items-center justify-center  shadow-[-9px_13px_10px_0px_rgba(0,0,0,0.6)]">
                <img
                  src={featureIcon}
                  alt=""
                  className="w-[50%] h-[50%] sm:w-[20%] sm:h-[20%]"
                />
                <div className="">
                  <p className="text-[7.97px] font-poppins xxmd:text-base">
                    {item.feature3}
                  </p>
                  <p className="text-[6px] font-poppins500 xxmd:text-[9px] mt-2">
                    {item.feature3Desc}
                  </p>
                </div>
              </div>
              <div className="skew-x-6 bg-white w-full flex gap-2 rounded-lg p-2  items-center justify-center  shadow-[-9px_13px_10px_0px_rgba(0,0,0,0.6)]">
                <img
                  src={featureIcon}
                  alt=""
                  className="w-[50%] h-[50%] sm:w-[20%] sm:h-[20%]"
                />
                <div className="">
                  <p className="text-[7.97px] font-poppins xxmd:text-base">
                    {item.feature4}
                  </p>
                  <p className="text-[6px] font-poppins500 xxmd:text-[9px] mt-2">
                    {item.feature4Desc}
                  </p>
                </div>
              </div>
              <div className="skew-x-6 bg-white w-full flex gap-2 rounded-lg p-2 items-center justify-center  shadow-[-9px_13px_10px_0px_rgba(0,0,0,0.6)]">
                <img
                  src={featureIcon}
                  alt=""
                  className="w-[50%] h-[50%] sm:w-[20%] sm:h-[20%]"
                />
                <div className="">
                  <p className="text-[7.97px] font-poppins xxmd:text-base">
                    {item.feature5}
                  </p>
                  <p className="text-[6px] font-poppins500 xxmd:text-[9px] mt-2">
                    {item.feature5Desc}
                  </p>
                </div>
              </div>
              <div className="skew-x-6 bg-white w-full flex gap-2 rounded-lg p-2  items-center justify-center  shadow-[-9px_13px_10px_0px_rgba(0,0,0,0.6)]">
                <img
                  src={featureIcon}
                  alt=""
                  className="w-[50%] h-[50%] sm:w-[20%] sm:h-[20%]"
                />
                <div className="">
                  <p className="text-[7.97px] font-poppins xxmd:text-base">
                    {item.feature6}
                  </p>
                  <p className="text-[6px] font-poppins500 xxmd:text-[9px] mt-2">
                    {item.feature6Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ................................................... */}
          {/* desktop view cards */}
          {/* ................................................... */}
          <div className="hidden midxmd:block relative p-10">
            <div className="mb-1 mt-20">
              <img src={main} alt="" className="w-[50%] mx-auto sm:w-[12%] " />
            </div>
            <div className=" bg-white w-[20rem] top-10 left-56 flex gap-5 rounded-lg p-1 items-center justify-center absolute">
              <img
                src={Group}
                alt=""
                className="w-[50%] h-[50%] sm:w-[30%] sm:h-[30%] ml-2"
              />
              <div className="">
                <p className="text-[7.97px] font-poppins xxmd:text-base">
                  {item.feature1}
                </p>
                <p className="text-[6px] font-poppins500 xxmd:text-[9px]">
                  {item.feature1Desc}
                </p>
              </div>
            </div>
            <div className="bg-white w-[20rem] top-10 right-56 flex gap-5 rounded-lg p-1 items-center justify-center absolute">
              <img
                src={Group}
                alt=""
                className="w-[50%] h-[50%] sm:w-[30%] sm:h-[30%] ml-2"
              />
              <div className="">
                <p className="text-[7.97px] font-poppins xxmd:text-base">
                  {item.feature2}
                </p>
                <p className="text-[6px] font-poppins500 xxmd:text-[9px]">
                  {item.feature2Desc}
                </p>
              </div>
            </div>
            <div className="bg-white w-[18rem] top-60 right-72 flex flex-col gap-2 rounded-lg p-1 items-start justify-center absolute">
              <img
                src={Group}
                alt=""
                className="w-[50%] h-[50%] sm:w-[5%] sm:h-[5%] ml-2"
              />
              <div className="">
                <p className="text-[7.97px] font-poppins xxmd:text-base">
                  {item.feature3}
                </p>
                <p className="text-[6px] font-poppins500 xxmd:text-[9px]">
                  {item.feature3Desc}
                </p>
              </div>
            </div>
            <div className="bg-white w-[18rem] top-60 left-72 flex flex-col gap-2 rounded-lg p-1 items-start justify-center absolute">
              <img
                src={Group}
                alt=""
                className="w-[50%] h-[50%] sm:w-[5%] sm:h-[5%] ml-2"
              />
              <div className="">
                <p className="text-[7.97px] font-poppins xxmd:text-base">
                  {item.feature4}
                </p>
                <p className="text-[6px] font-poppins500 xxmd:text-[9px]">
                  {item.feature4Desc}
                </p>
              </div>
            </div>
            <div className="bg-white w-[20rem] -bottom-5 left-56 flex gap-5 rounded-lg p-1 items-center justify-center absolute">
              <img
                src={Group}
                alt=""
                className="w-[50%] h-[50%] sm:w-[30%] sm:h-[30%] ml-2"
              />
              <div className="">
                <p className="text-[7.97px] font-poppins xxmd:text-base">
                  {item.feature5}
                </p>
                <p className="text-[6px] font-poppins500 xxmd:text-[9px]">
                  {item.feature5Desc}
                </p>
              </div>
            </div>
            <div className="bg-white w-[20rem] -bottom-5 right-56 flex gap-5 rounded-lg p-1 items-center justify-center absolute ">
              <img
                src={Group}
                alt=""
                className="w-[50%] h-[50%] sm:w-[30%] sm:h-[30%] ml-2"
              />
              <div className="">
                <p className="text-[7.97px] font-poppins xxmd:text-base">
                  {item.feature6}
                </p>
                <p className="text-[6px] font-poppins500 xxmd:text-[9px]">
                  {item.feature6Desc}
                </p>
              </div>
            </div>
            {item.feature7.length !== 0 && (
              <div
                className={`skew-x-12 hover:skew-x-0 bg-[#EAEAEA] w-[10rem] top-24 left-9 flex flex-col gap-2 rounded-lg p-1  absolute transition-all duration-1000 ease-in-out  
                  h-16 overflow-hidden hover:h-40 shadow-[-9px_13px_10px_0px_rgba(0,0,0,0.6)]
                `}
                // onFocus={handleFocus}
                // onBlur={handleBlur}
                // tabIndex={0}
              >
                <img src={Group} alt="" className="mx-auto" />
                <div className="">
                  <p className="font-poppins text-base text-center">
                    {item.feature7}
                  </p>
                  <p className="text-[6px] font-poppins500 xxmd:text-[9px] mt-2">
                    {item.feature7Desc}
                  </p>
                </div>
              </div>
            )}
            {item.feature8.length !== 0 && (
              <div
                className={`skew-x-12 hover:skew-x-0 bg-[#EAEAEA] w-[10rem] bottom-24 right-9 flex flex-col gap-2 rounded-lg p-1  absolute transition-all duration-1000 ease-in-out  
                  h-16 overflow-hidden hover:h-40 shadow-[-9px_13px_10px_0px_rgba(0,0,0,0.6)]
                `}
                // onFocus={handleFocus}
                // onBlur={handleBlur}
                // tabIndex={0}
              >
                <img src={Group} alt="" className="mx-auto" />
                <div className="">
                  <p className="font-poppins text-base text-center">
                    {item.feature8}
                  </p>
                  <p className="text-[6px] font-poppins500 xxmd:text-[9px] mt-2">
                    {item.feature8Desc}
                  </p>
                </div>
              </div>
            )}
            {item.feature9.length !== 0 && (
              <div
                className={`skew-x-12 hover:skew-x-0 bg-[#EAEAEA] w-[10rem] top-24 right-9 flex flex-col gap-2 rounded-lg p-1  absolute transition-all duration-1000 ease-in-out  
                  h-16 overflow-hidden hover:h-40 shadow-[-9px_13px_10px_0px_rgba(0,0,0,0.6)]
                `}
                // onFocus={handleFocus}
                // onBlur={handleBlur}
                // tabIndex={0}
              >
                <img src={Group} alt="" className="mx-auto" />
                <div className="">
                  <p className="font-poppins text-base text-center">
                    {item.feature9}
                  </p>
                  <p className="text-[6px] font-poppins500 xxmd:text-[9px] mt-2">
                    {item.feature9Desc}
                  </p>
                </div>
              </div>
            )}
            {item.feature10.length !== 0 && (
              <div
                className={`skew-x-12 hover:skew-x-0 bg-[#EAEAEA] w-[10rem] bottom-24 left-9 flex flex-col gap-2 rounded-lg p-1  absolute transition-all duration-1000 ease-in-out  
                  h-16 overflow-hidden hover:h-40 shadow-[-9px_13px_10px_0px_rgba(0,0,0,0.6)]
                `}
                // onFocus={handleFocus}
                // onBlur={handleBlur}
                // tabIndex={0}
              >
                <img src={Group} alt="" className="mx-auto" />
                <div className="">
                  <p className="font-poppins text-base text-center">
                    {item.feature10}
                  </p>
                  <p className="text-[6px] font-poppins500 xxmd:text-[9px] mt-2">
                    {item.feature10Desc}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ................................................ */}
        {/* left image section */}
        {/* ................................................ */}

        <div className="w-[80%] mx-auto flex flex-col items-center justify-center gap-4 sm:flex-row sm:h-screen relative">
          <img
            src={R1}
            alt=""
            className="absolute  -top-[34.4%] -right-8 block sm:hidden z-0"
          />
          <img
            src={R2}
            alt=""
            className="absolute  -top-[2%] -right-44 hidden sm:block z-0"
          />
          <div>
            <img src={leftImage} alt="" />
          </div>
          <div className="flex flex-col items-center justify-center gap-3 relative z-10">
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-xl font-poppins500 sm:text-3xl">
                UI/UX Design
              </p>
              <p className="text-sm font-poppins300 text-center sm:text-sm sm:w-[70%]">
                We utilized tools like Zeplin and Figma to create a
                comprehensive UI/UX design. Our responsive designs cater to
                various screen sizes, and adhere to established design
                principles.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-xl font-poppins500 sm:text-3xl">
                Work Distribution
              </p>
              <p className="text-sm font-poppins300 text-center w-[95%] sm:text-sm sm:w-[70%]">
                Thoroughly analyzed the project requirements and allocated
                specific tasks to individuals to ensure timely completion.
                Employed the Divide and Conquer strategy to meet deadlines.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-xl font-poppins500 sm:text-3xl">Testing</p>
              <p className="text-sm font-poppins300 text-center w-[95%] sm:text-sm sm:w-[70%]">
                Developed a variety of test cases and thoroughly examined each
                one. Implemented the Beta version technique to ensure
                comprehensive coverage of edge cases.
              </p>
            </div>
          </div>
        </div>

        {/* ................................... */}
        {/* Right image section */}
        {/* .................................... */}

        <div className="relative">
          <img
            src={R4}
            alt=""
            className="absolute -top-20 z-0 block sm:hidden"
          />
          <div className="w-[80%] mx-auto flex flex-col items-start justify-center gap-4 sm:flex-row relative h-fit mt-20 sm:mt-0">
            <div className="sm:order-2 ">
              <img src={leftImage} alt="" className="" />
            </div>
            <div className="flex flex-col items-baseline justify-center gap-3 relative z-10">
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-xl font-poppins500 sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {item.rightImage1}
                </p>
                <p className="text-sm font-poppins300 text-center sm:text-sm sm:w-[70%]">
                  {item.rightImage1Desc}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 ">
                <p className="text-xl font-poppins500 sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {item.rightImage2}
                </p>
                <p className="text-sm font-poppins300 text-center w-[95%] sm:text-sm sm:w-[70%]">
                  {item.rightImage2Desc}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 mb-24">
                <p className="text-xl font-poppins500 sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {item.rightImage3}
                </p>
                <p className="text-sm font-poppins300 text-center w-[95%] sm:text-sm sm:w-[70%]">
                  {item.rightImage3Desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ................................................ */}
        {/* other portfolio */}
        {/* ................................................ */}
        <div className="relative w-screen" id="Portfolio">
          <img
            src={lower}
            alt=""
            className="scale-[1.3] w-screen relative z-10 block midFM:hidden"
          />
          <img
            src={R3}
            alt=""
            className="absolute -bottom-[20%] midFM:-top-[22%] z-0"
          />
          <div className="w-[90%] mx-auto p-10">
            <h2 className="font-poppins text-[30px] lmd:text-[48px] flex gap-2 flex-wrap bg-gradient-to-br from-secondary to-primary text-transparent bg-clip-text">
              Our Portfolios
            </h2>
          </div>
          <div className="mx-auto relative z-10">
            <PortfolioCarausel props={props} page={"portfolio"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
