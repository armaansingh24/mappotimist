import React from "react";
import pattern from "../assets/clientReviews/pattern.webp";
import pattern1 from "../assets/clientReviews/pattern1.webp";
import pattern2 from "../assets/clientReviews/pattern2.webp";
import pattern3 from "../assets/clientReviews/pattern3.webp";
import pattern4 from "../assets/clientReviews/pattern4.webp";
import curve1 from "../assets/clientReviews/curve1.webp";
import curve2 from "../assets/clientReviews/curve2.webp";
import { useEffect, useState } from "react";
import { reviews } from "../constants/index";
import ClientReviewsItem from "./ClientReviewsItem";
import { reviewImages1 } from "../constants/index";
import { reviewImages3 } from "../constants/index";
import { reviewImages2 } from "../constants/index";
import { reviewImages4 } from "../constants/index";
import { reviewImages5 } from "../constants/index";

const ClientReviews = () => {
  const data = reviews;
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndex1, setActiveIndex1] = useState(2);
  const [activeIndex2, setActiveIndex2] = useState(4);
  const [activeIndex3, setActiveIndex3] = useState(1);
  const [activeIndex4, setActiveIndex4] = useState(3);
  const [activeIndex5, setActiveIndex5] = useState(5);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [data.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex1((prevIndex) => (prevIndex + 1) % reviewImages1.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex2((prevIndex) => (prevIndex + 1) % reviewImages3.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex3((prevIndex) => (prevIndex + 1) % reviewImages4.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex4((prevIndex) => (prevIndex + 1) % reviewImages5.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex5((prevIndex) => (prevIndex + 1) % reviewImages2.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="w-[90%] mt-10 sm:mt-0 ml-[10%] mx-auto  relative   midxmd:overflow-visible z-30">
        <h2 className="font-poppins500 text-[30px] lmd:text-[47px] flex gap-2 flex-wrap sm:mt-24 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary p-1">
          Client Reviews
        </h2>
        <div className="w-full mt-[6%]">
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
            <div className="relative w-[715px] hidden midxmd:block midlg:hidden lg:block z-4">
              <div className="absolute left-[-3rem] top-4 rounded-full">
                {reviewImages1.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: activeIndex1 === index ? "block" : "none",
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
              <div className="absolute right-[1rem] top-[17.1rem] rounded-full">
                {reviewImages3.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: activeIndex2 === index ? "block" : "none",
                    }}
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="w-[30%] rounded-full"
                    />
                  </div>
                ))}
              </div>
              <div className="absolute right-20 top-[49.8%] ">
                {reviewImages4.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: activeIndex3 === index ? "block" : "none",
                    }}
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="w-[140px] rounded-none"
                    />
                  </div>
                ))}
              </div>
              <div>
                <img
                  src={curve1}
                  alt=""
                  className="absolute right-20 top-[49.8%] w-[140px] z-30"
                />
              </div>
              <div className="absolute -right-[21%] top-[31.3%] rounded-full">
                {reviewImages5.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: activeIndex4 === index ? "block" : "none",
                    }}
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="w-[15.8%] rounded-full"
                    />
                  </div>
                ))}
              </div>
              <div className="absolute -right-[16.3rem] bottom-0 z-10">
                {reviewImages2.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: activeIndex5 === index ? "block" : "none",
                    }}
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="w-[14.1%] rounded-none"
                    />
                  </div>
                ))}
              </div>
              <div>
                <img
                  src={curve2}
                  alt=""
                  className="absolute right-[9.4rem] -bottom-1 w-[10%] z-30"
                />
              </div>
              <img
                src={pattern1}
                alt=""
                className="absolute top-[-7rem] left-[35%]"
              />
              <img
                src={pattern4}
                alt=""
                className="absolute top-[-5rem] left-[39.5%]"
              />
              <img
                src={pattern2}
                alt=""
                className="absolute top-[-8rem] right-[12%]"
              />
              <img
                src={pattern4}
                alt=""
                className="absolute top-[-5.5rem] right-[16%] rounded-lg"
              />
              <img
                src={pattern3}
                alt=""
                className="absolute bottom-36 left-[-6%] rounded-lg"
              />
              <img src={pattern} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientReviews;
