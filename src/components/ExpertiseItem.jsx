import React from "react";

const ExpertiseItem = ({ item }) => {
 
  return (
    <div
      className="w-full p-[0.15rem] group  rounded-lg  relative "
    >
      <div
        className="w-full h-full opacity-0 group-hover:opacity-100 absolute z-0 bg-gradient-to-bl from-secondary to-primary transition-all 
    ease duration-[500ms] inset-0 rounded-lg shadow-[1px_1px_10px_0px_#1CB5E0] "
      ></div>
      <div className="flex mx-auto items-center flex-col gap-0 bg-gray-100 rounded-lg relative z-1 overflow-hidden">
        <img
          src={item.image}
          alt=""
          className="w-[30%] lmd:w-[20%] mt-4 xxmd:w-[17%] relative z-10"
        />
        <p className="text-[50%] font-light sm:text-[58%] lmd:text-[60%]">
          {item.name}
        </p>
        <div className="w-[96%] text-[30%] leading-3 text-center sm:text-[37%] lmd:text-[41%] mb-3 relative group z-20">
          <p
            className={`transition-opacity duration-[500ms] opacity-100 group-hover:opacity-0`}
          >
            {item.desc}
          </p>
          <div
            className={`absolute top-0 left-0 transition-opacity duration-[500ms] opacity-0 group-hover:opacity-100`}
          >
            <span className="font-bold">Technologies -: </span>
            {item.hoverDesc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseItem;
