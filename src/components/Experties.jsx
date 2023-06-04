import React from "react";
import { expertiseItem } from "../constants/index";
import ExpertiseItem from "./ExpertiseItem";
import { useState, useEffect } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Experties = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleDivHeight = () => {
    setExpanded(!expanded);
  };
  const [isAbove640px, setIsAbove640px] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsAbove640px(window.innerWidth > 640);
    };

    handleResize(); // Check initial screen size

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="mt-10 w-full h-full">
        <h2 className="text-bold">Experties</h2>
        <div
          className={`w-full grid grid-cols-2 gap-6 sm:grid-cols-3 p-5 sm:p-10 justify-between items-center mt-10 overflow-hidden transition-h duration-[1000ms] ease-in-out ${
            expanded
              ? "h-[70rem]"
              : "h-[53.4rem] msm:h-[48.2rem] ssm:h-[49rem] midxs:h-[48rem] sm:h-[35.8rem] lmd:h-[36rem] xmd:h-[38rem]"
          }`}
        >
          {expertiseItem.map(
            (item, index) =>
              item.id != 15 && (
                <ExpertiseItem key={item.id} item={item} index={index} />
              )
          )}
          {isAbove640px && (
            <ExpertiseItem
              key={expertiseItem[14].id}
              item={expertiseItem[14]}
              index={14}
            />
          )}
        </div>
        <div className="mt-10 mx-auto w-full">
          <p onClick={toggleDivHeight} className="cursor-pointer text-center">
            {expanded ? "View Less" : "View More"}
            {!expanded ? <AiOutlineDown className="mx-auto" /> : <AiOutlineUp className="mx-auto"/>}
          </p>
        </div>
      </div>
    </>
  );
};

export default Experties;
