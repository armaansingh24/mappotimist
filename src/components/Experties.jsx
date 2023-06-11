import React from "react";
import { expertiseItem } from "../constants/index";
import ExpertiseItem from "./ExpertiseItem";
import { useState, useEffect } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import upper from "../assets/expertise/upper.png";
import lower from "../assets/expertise/lower.png";
import Ellipse1 from "../assets/expertise/Ellipse1.png";
import Ellipse2 from "../assets/expertise/Ellipse2.png";
import Ellipse3 from "../assets/expertise/Ellipse3.png";
import R1 from "../assets/expertise/R1.png";
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
      <div className="w-screen h-full relative">
        <img
          src={Ellipse1}
          alt=""
          className="absolute top-[23.2%] hidden xxmd:block z-10"
        />
        <img
          src={Ellipse2}
          alt=""
          className="absolute top-[38%] z-10 left-[28%] hidden xxmd:block"
        />

        <img
          src={Ellipse3}
          alt=""
          className={`absolute bottom-[24.3%] hidden xxmd:block z-10`}
        />
        <img
          src={R1}
          alt=""
          className="absolute top-[11%] right-1 z-5 hidden xxmd:block"
        />
        <img src={upper} alt="" className="w-full scale-[1.1] relative z-10" />
        <h2 className="text-bold w-[79%] font-poppins500  text-[30px] lmd:text-[48px] flex gap-2 flex-wrap mx-auto mb-[8%] xxmd:mt-[-9%]">
          Expertise
        </h2>
        <div
          className={`w-[90%] mx-auto grid grid-cols-2 gap-6 sm:grid-cols-3 p-5 sm:p-10 justify-between items-center mt-10 overflow-hidden transition-h duration-[1000ms] ease-in-out ${
            expanded
              ? "h-[133rem] msm:h-[127rem] ssm:h-[123rem] sm:h-[86rem] lmd:h-[83rem] xxmd:h-[75rem]"
              : "h-[60.4rem] msm:h-[51.6rem] ssm:h-[50rem] midxs:h-[65rem] sm:h-[35.8rem] lmd:h-[51rem] xxmd:h-[45rem] xmd:h-[44rem]"
          }`}
        >
          {expertiseItem.map(
            (item, index) =>
              item.id !== 15 && (
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
          <p
            onClick={toggleDivHeight}
            className="relative cursor-pointer text-center text-transparent bg-gradient-to-tr from-primary to-secondary bg-clip-text z-20"
          >
            {expanded ? "View Less" : "View More"}
          </p>
          <p
            className="relative cursor-pointer text-center bg-gradient-to-tr from-primary to-secondary bg-clip-text z-20"
            onClick={toggleDivHeight}
          >
            {!expanded ? (
              <AiOutlineDown className="mx-auto" />
            ) : (
              <AiOutlineUp className="mx-auto" />
            )}
          </p>
        </div>
        <img src={lower} alt="" className="scale-[1.1] relative mt-[-10%]" />
      </div>
    </>
  );
};

export default Experties;
