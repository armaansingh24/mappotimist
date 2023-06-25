import React from "react";
import { agencies } from "../constants/index";
import "../index.css";
import wave1 from "../assets/agencies/wave1.webp";

const Agencies = () => {
  return (
    <>
      <div className=" relative object-contain bg-no-repeat w-screen agencies bg-[url('https://img.freepik.com/free-photo/abstract-blue-geometric-shapes-background_24972-1841.jpg?w=1060&t=st=1684932147~exp=1684932747~hmac=d2625ef7bd40079dd5e0f224a61318a2cf6f7efd69ba12f788fa28c8a6900f9f')] agencies overflow-hidden z-10">
        <img
          src={wave1}
          alt=""
          className="absolute top-[-30rem] left-[7rem] h-full scale-[2] hidden xxmd:block z-0 select-none"
        />
        <div className="block midxs:hidden text-[30px] mt-10 mb-20 ml-10 w-[80%] font-poppins500">
          Available On Top Rated Agencies
        </div>
        <div className="hidden midxs:block w-[79%] mx-auto  mt-10 h-auto z-30 relative">
          <h2 className="font-Poppins font-poppins500 text-[30px] lmd:text-[48px] flex gap-2 flex-wrap h-[10rem] z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary xxmd:text-5xl xxmd:w-[40%] select-none">
            Available On Top Rated Agencies
          </h2>
        </div>
        <div className="w-[70%]  mx-auto  xxmd:mt-24 z-0 ">
          <div className="grid grid-cols-2 gap-12 shadow-[10px_20px_50px_-10px_rgba(0,0,0,0.6)] rounded-md  justify-between  p-8 mb-16 xxmd:grid-cols-4">
            {agencies.map((agency) => (
              <div
                className="flex items-center justify-center w-full "
                key={agency.id}
              >
                <img
                  src={agency.image}
                  alt=""
                  key={agency.id}
                  className="sm:w-[50%] xsm:w-[70%] xxmd:w-[90%] midxmd:w-[70%]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Agencies;
