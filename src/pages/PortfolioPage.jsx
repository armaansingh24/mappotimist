import React from "react";
import { useLocation } from "react-router-dom";
import backgroudPortfolio from "../assets/portfolio/backgroudPortfolio.png";
import main from "../assets/portfolio/main.png";
import featureIcon from "../assets/portfolio/featureIcon.png";
import Group from "../assets/portfolio/Group.png";
import { useState } from "react";

const PortfolioPage = () => {
  const location = useLocation();
  const item = location.state?.item;
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <>
      <div className="w-full relative mb-10">
        <div className="">
          <div className="relative5 z-0 bg-gradient-to-r from-secondary via-secondary to-white">
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
                {/* <img src={item.image} alt="" /> */}
                {/* <p>{item.title}</p> */}
              </div>
            </div>
          </div>
        </div>
        {/* Feature section */}
        <div className="bg-gradient-to-r from-primary to-secondary w-screen pb-10">
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
              <div className="skew-x-6 bg-white w-full flex gap-2 rounded-sm p-1 items-center justify-center">
                <img
                  src={featureIcon}
                  alt=""
                  className="w-[50%] h-[50%] sm:w-[20%] sm:h-[20%]"
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
              <div className="skew-x-6 bg-white w-full flex gap-2 rounded-sm p-1  items-center justify-center">
                <img
                  src={featureIcon}
                  alt=""
                  className="w-[50%] h-[50%] sm:w-[20%] sm:h-[20%]"
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
              <div className="skew-x-6 bg-white w-full flex gap-2 rounded-sm p-1  items-center justify-center">
                <img
                  src={featureIcon}
                  alt=""
                  className="w-[50%] h-[50%] sm:w-[20%] sm:h-[20%]"
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
              <div className="skew-x-6 bg-white w-full flex gap-2 rounded-sm p-1  items-center justify-center">
                <img
                  src={featureIcon}
                  alt=""
                  className="w-[50%] h-[50%] sm:w-[20%] sm:h-[20%]"
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
              <div className="skew-x-6 bg-white w-full flex gap-2 rounded-sm p-1 items-center justify-center">
                <img
                  src={featureIcon}
                  alt=""
                  className="w-[50%] h-[50%] sm:w-[20%] sm:h-[20%]"
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
              <div className="skew-x-6 bg-white w-full flex gap-2 rounded-sm p-1  items-center justify-center">
                <img
                  src={featureIcon}
                  alt=""
                  className="w-[50%] h-[50%] sm:w-[20%] sm:h-[20%]"
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
            </div>
          </div>
          {/* desktop view cards */}
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
                className={`skew-x-12 bg-[#EAEAEA] w-[10rem] top-24 left-9 flex flex-col gap-2 rounded-lg p-1  absolute transition-all duration-1000 ease-in-out  
                  ${isFocused ? "h-16" : "h-40"}
                `}
                onFocus={handleFocus}
                onBlur={handleBlur}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
