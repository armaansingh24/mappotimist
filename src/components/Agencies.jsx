import React from "react";
import { agencies } from "../constants/index";
import "../index.css";
import wave1 from "../assets/agencies/wave1.png";

const Agencies = () => {
  return (
    <>
      <div className=" relative object-contain bg-no-repeat w-screen agencies bg-[url('https://img.freepik.com/free-photo/abstract-blue-geometric-shapes-background_24972-1841.jpg?w=1060&t=st=1684932147~exp=1684932747~hmac=d2625ef7bd40079dd5e0f224a61318a2cf6f7efd69ba12f788fa28c8a6900f9f')] agencies ">
        <img
          src={wave1}
          alt=""
          className="absolute top-[-17rem] left-[8rem] h-screen scale-[2] hidden xxmd:block"
        />
        <div className="w-[79%] mx-auto  mt-10 h-auto z-10">
          <h2 className="leading-12  h-[10rem] sm:text-4xl md:text-5xl md:mt-2 sm:w-[50%] z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary xxmd:text-5xl xxmd:w-[40%] ">
            Available On Top Rated Agencies
          </h2>
        </div>
        <div className="w-[70%]  mx-auto  xxmd:mt-24 z-0 ">
          <div className="grid grid-cols-2 h-[75vh]  shadow-[10px_20px_50px_-10px_rgba(0,0,0,0.6)] rounded-md  justify-between gap-6 p-8 mb-14 xxmd:grid-cols-4  xxmd:gap-24 xxmd:p-24 xxmd:mt-[10%]">
            {agencies.map((agency) => (
              <div
                className="w-full h-full flex items-center justify-center"
                key={agency.id}
              >
                <img src={agency.image} alt="" key={agency.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Agencies;
