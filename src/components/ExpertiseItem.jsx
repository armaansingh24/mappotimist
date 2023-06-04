import React from "react";
import { useState } from "react";

const ExpertiseItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className="w-full p-[0.15rem] group  rounded-lg  relative "
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="w-full h-full opacity-0 group-hover:opacity-100 absolute z-0 bg-gradient-to-bl from-secondary to-primary transition-all 
    ease duration-[500ms] inset-0 rounded-lg shadow-[1px_10px_20px_1px_rgba(0,0,0,0.3)] "
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
            className={`transition-opacity duration-[500ms] ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            {item.desc}
          </p>
          <div
            className={`absolute top-0 left-0 transition-opacity duration-[500ms] ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            {item.hoverDesc}
            <hr
              className="h-[2px] border-none my-2 w-full bg-gradient-to-tr from-primary to-secondary mt-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseItem;
