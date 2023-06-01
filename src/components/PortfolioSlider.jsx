import React from "react";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const PortfolioSlider = ({ image, index, currentSlideIndex }) => {
  const ref = useRef(null);
  const mainControls = useAnimation();

  const handleHover = () => {
    mainControls.start("visible");
  };

  useEffect(() => {
    mainControls.start("hidden"); // Start with the hidden state

    return () => {
      mainControls.stop(); // Clean up the animation when the component unmounts
    };
  }, [mainControls, index, currentSlideIndex]);
  return (
    <>
      <div
        className="group w-full h-auto z-9 mt-4 cursor-pointer "
        onMouseEnter={handleHover}
        onMouseLeave={() => mainControls.start("hidden")}
      >
        <img
          src={image}
          alt="slide_image"
          className={`z-[-10] ${
            index === currentSlideIndex ? "hover:scale-[1.06]" : ""
          } transition-all delay-500 ease-in-out rotate-`}
        />
        <div
          className={`opacity-0 ${
            index === currentSlideIndex
              ? "group-hover:opacity-[1] group-hover:bg-[rgb(0,0,0,0.6)]"
              : ""
          } xxmd:h-auto absolute top-[1.09rem] bottom-[3.3rem] lmd:bottom-[3.62rem] md:bottom-[5.4rem] xxmd:bottom-[4.8rem] left-[-0.01rem]  right-0 group-hover:scale-[1.06] transition-all delay-500 ease-in-out rounded-3xl`}
        >
          <div className="w-[90%] xxmd:w-[89%] h-[90%] md:h-auto flex items-center justify-center flex-col mx-auto md:p-[3.4rem] xxmd:p-10 border-white border-2 rounded-2xl mt-[3%] md:mt-[16%] xxmd:mt-[15%] gap-4">
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: -150 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg xxmd:text-3xl font-bold text-white transition delay-1000 ease-in-out ">
                John Cooper
              </p>
            </motion.div>
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: 150 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center justify-center gap-4 w-full"
            >
              <p className="hidden xxmd:block text-lg font-bold text-white w-full">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                id magni a facilis fugiat tempore error deleniti accusamus
                numquam. Enim?
              </p>
              <button className="sm:text-base xxmd:text-xl text-white font-light border-[1px] p-1 xxmd:p-2 rounded-lg border-white">
                Read More
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioSlider;
