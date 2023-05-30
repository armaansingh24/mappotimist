import React from "react";
import image1 from "../assets/agencies/image1.png";
import "../index.css";
import wave1 from "../assets/agencies/wave1.png";

const Agencies = () => {
  return (
    <>
      <div className=" relative object-contain bg-no-repeat w-screen agencies bg-[url('https://img.freepik.com/free-photo/abstract-blue-geometric-shapes-background_24972-1841.jpg?w=1060&t=st=1684932147~exp=1684932747~hmac=d2625ef7bd40079dd5e0f224a61318a2cf6f7efd69ba12f788fa28c8a6900f9f')] agencies ">
        <img src={wave1} alt="" className="absolute top-[-17rem] left-[8rem] h-screen scale-[2]" />
        <div className="w-[70%] h-auto mx-auto mt-10 xxmd:mt-24 ">
          <h2 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary xxmd:text-5xl xxmd:w-[40%]">
            Available On Top Rated Gencies
          </h2>

          <div className="grid grid-cols-2 mt-[25%] mx-auto w-[100%] mr-[4rem]  shadow-sm shadow-black rounded-md items-center justify-between  p-5 mb-14 xxmd:grid-cols-4  xxmd:gap-24 xxmd:p-24 xxmd:mt-[10%]">
            <div className="w-full lmd:ml-[6rem] xxmd:ml-0">
              <img src={image1} alt="airbnb" />
            </div>

            <div className="w-full lmd:ml-[6rem] xxmd:ml-0">
              <img src={image1} alt="airbnb" />
            </div>

            <div className="w-full lmd:ml-[6rem] xxmd:ml-0">
              <img src={image1} alt="airbnb" />
            </div>

            <div className="w-full lmd:ml-[6rem] xxmd:ml-0">
              <img src={image1} alt="airbnb" />
            </div>

            <div className="w-full lmd:ml-[6rem] xxmd:ml-0">
              <img src={image1} alt="airbnb" />
            </div>

            <div className="w-full lmd:ml-[6rem] xxmd:ml-0">
              <img src={image1} alt="airbnb" />
            </div>

            <div className="w-full lmd:ml-[6rem] xxmd:ml-0">
              <img src={image1} alt="airbnb" />
            </div>

            <div className="w-full lmd:ml-[6rem] xxmd:ml-0">
              <img src={image1} alt="airbnb" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agencies;
