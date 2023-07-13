import React from "react";
import { expertiseItem } from "../constants/index";
import ExpertiseItem from "./ExpertiseItem";
import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import upper from "../assets/expertise/upper.webp";
import lower from "../assets/expertise/lower.webp";
import Ellipse1 from "../assets/expertise/Ellipse1.webp";
import Ellipse2 from "../assets/expertise/Ellipse2.webp";
import Ellipse3 from "../assets/expertise/Ellipse3.webp";
import R1 from "../assets/expertise/R1.webp";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker ";

const Experties = () => {
  const gaEventTracker = useAnalyticsEventTracker("Button");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);
  const [expanded, setExpanded] = useState(false);

  const toggleDivHeight = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="w-screen h-full relative midxmd:-mt-44" id="Expertise">
        <img
          src={Ellipse1}
          alt=""
          className="absolute top-28 sm:top-[23.2%] w-[30%]  sm:w-[10%] z-10"
        />
        <img
          src={Ellipse2}
          alt=""
          className="absolute top-[38%] z-10 left-[28%] w-[40%] sm:w-[15%]"
        />

        <img
          src={Ellipse3}
          alt=""
          className={`absolute bottom-[24.3%] w-[30%] z-10 sm:w-[10%]`}
        />
        <img
          src={R1}
          alt=""
          className="absolute top-[11%] right-1 z-5 hidden xxmd:block"
        />
        <img src={upper} alt="" className="w-full scale-[1.1] relative z-10" />
        <motion.h2
          className="h-[4rem] text-bold w-[79%] font-poppins500  text-[30px] lmd:text-[48px] flex gap-2 flex-wrap mx-auto xxmd:mt-[-9%] relative z-30 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1.6 }}
        >
          Expertise
        </motion.h2>
        <div
          className={`w-[90%] mx-auto grid grid-cols-2 gap-6 sm:grid-cols-3 p-5 sm:p-10 justify-between items-center mt-10 overflow-hidden transition-h duration-[1000ms] ease-in-out ${
            expanded
              ? "h-[203rem] msm:h-[157rem] ssm:h-[143rem] sm:h-[106rem] lmd:h-[103rem] xxmd:h-[87rem]"
              : "h-[60.4rem] msm:h-[51.6rem] ssm:h-[50rem] midxs:h-[65rem] sm:h-[35.8rem] lmd:h-[51rem] xxmd:h-[45rem] xmd:h-[45rem]"
          }`}
        >
          {expertiseItem.map((item, index) => (
            <ExpertiseItem key={item.id} item={item} index={index} />
          ))}
        </div>
        <div className="mt-10 mx-auto w-full">
          <p
            onClick={() => {
              toggleDivHeight();
              gaEventTracker(
                "Expertise View More btn",
                "Clicked on Expertise View More btn"
              );
            }}
            className="relative cursor-pointer text-center text-transparent bg-gradient-to-tr from-primary to-secondary bg-clip-text z-20"
          >
            {expanded ? "View Less" : "View More"}
          </p>
          <p
            className="relative cursor-pointer text-center bg-gradient-to-tr from-primary to-secondary bg-clip-text z-50"
            onClick={() => {
              toggleDivHeight();
              gaEventTracker(
                "Expertise View More btn",
                "Clicked on Expertise View More btn"
              );
            }}
          >
            {!expanded ? (
              <AiOutlineDown className="mx-auto" />
            ) : (
              <AiOutlineUp className="mx-auto" />
            )}
          </p>
        </div>
        <img
          src={lower}
          alt=""
          className="w-full scale-[1.1] relative mt-[-10%]  z-10"
        />
      </div>
    </>
  );
};

export default Experties;
