import React from "react";
import pattern from "../assets/clientReviews/pattern.png";
import pattern1 from "../assets/clientReviews/pattern1.png";
import pattern2 from "../assets/clientReviews/pattern2.png";
import pattern3 from "../assets/clientReviews/pattern3.png";
import pattern4 from "../assets/clientReviews/pattern4.png";
import { useEffect, useState } from "react";
import { reviews } from "../constants/index";
import ClientReviewsItem from "./ClientReviewsItem";
import { reviewImages1 } from "../constants/index";
import { reviewImages2 } from "../constants/index";
import { reviewImages3 } from "../constants/index";
import R1 from "../assets/clientReviews/R1.png";

// icons
import { AiFillInstagram } from "react-icons/ai";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { RiSlackFill } from "react-icons/ri";

const ClientReviews = () => {
  const data = reviews;
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 9000);

    return () => clearInterval(interval);
  }, [data.length]);
  return (
    <>
      <div className="w-[95%] ml-[10%] mx-auto  relative   midxmd:overflow-visible z-30">
        <img
          src={R1}
          alt=""
          className="absolute top-[-10%] sm:top-[-16.5%] right-0 sm:right-[5.5%] h-full z-20 block midxmd:hidden midlg:block midlg:h-screen midlg:top-[-18%] lg:hidden"
        />
        <h2 className="text-left font-medium mt-10 sm:mt-24 text-[100%]">
          ClientReviews
        </h2>
        <div className="w-full mt-[10%]">
          <div className="w-full flex justify-start items-end text-black text-3xl my-auto mx-auto sm:mt-1 xxmd:p-2">
            <div className="w-full midxmd:w-[45%] h-full midlg:w-full lg:w-[45%]">
              {data.map((item, index) => (
                <div
                  key={index}
                  style={{ display: activeIndex === index ? "block" : "none" }}
                >
                  <ClientReviewsItem item={item} />
                </div>
              ))}
            </div>
            <div className="relative w-[50%] hidden midxmd:block midlg:hidden lg:block">
              <div className="absolute left-[-3rem] top-4 rounded-full">
                {/* upper left image*/}
                {reviewImages2.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: activeIndex === index ? "block" : "none",
                    }}
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="w-[27%] rounded-full"
                    />
                  </div>
                ))}
              </div>
              {/* 3 rd row left */}
              <div className="absolute right-[3%] top-[50%] rounded-full">
                {reviewImages1.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: activeIndex === index ? "block" : "none",
                    }}
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="w-[30.5%] rounded-full"
                    />
                  </div>
                ))}
              </div>
              {/* 3 rd row right */}
              <div className="absolute right-[-35.8%] top-[50%] ">
                {reviewImages1.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: activeIndex === index ? "block" : "none",
                    }}
                  >
                    <img src={item.image} alt="" className="w-[29%]" />
                  </div>
                ))}
              </div>
              {/* 2nd row imaage */}
              <div className="absolute right-[-21.2%] top-[31.3%] rounded-full">
                {reviewImages3.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: activeIndex === index ? "block" : "none",
                    }}
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="w-[15.1%] rounded-full"
                    />
                  </div>
                ))}
              </div>
              {/* Fourth row image */}
              <div className="absolute right-[-29%] bottom-0 ">
                {reviewImages1.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: activeIndex === index ? "block" : "none",
                    }}
                  >
                    <img src={item.image} alt="" className="w-[10%]" />
                  </div>
                ))}
              </div>
              {/* Red Circle */}
              <img
                src={pattern1}
                alt=""
                className="absolute top-[-7rem] left-[35%]"
              />
              {/* red circle -inner circle */}
              <img
                src={pattern4}
                alt=""
                className="absolute top-[-5rem] left-[39.5%]"
              />
              {/* yellow pattern */}
              <img
                src={pattern2}
                alt=""
                className="absolute top-[-8rem] right-[12%]"
              />
              {/* yellow pattern inner circle */}
              <img
                src={pattern4}
                alt=""
                className="absolute top-[-5.5rem] right-[16%] rounded-lg"
              />
              {/* Red Curve pattern */}
              <img
                src={pattern3}
                alt=""
                className="absolute bottom-36 left-[-6%] rounded-lg"
              />
              <img src={pattern} alt="" />
            </div>
          </div>
          <div className="flex gap-10 mt-14 mb-[-11%]">
            <div className="relative group rounded-full">
              <span className="relative ">
                <BsFacebook className="text-[#7F838D] hover:bg-white" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-bl rounded-full from-secondary to-primary opacity-0 group-hover:opacity-100 "></span>
            </div>
            {/* <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100"></div>
              <BsFacebook className="relative z-10 text-white" />
              <span className="absolute inset-0 z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100"></span>
            </div> */}
            {/* <BsFacebook className="text-[90%] mt-[0.2rem] hover:bg-gradient-to-bl hover:from-secondary hover:to-primary rounded-full hover-text-transparent  text" /> */}
            <RiSlackFill />
            <AiFillInstagram />
            <RiLinkedinBoxFill />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientReviews;
