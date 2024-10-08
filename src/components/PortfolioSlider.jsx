import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker ";

const PortfolioSlider = ({ index, currentSlideIndex, item }) => {
  const gaEventTracker = useAnalyticsEventTracker("Portfolio");
  const ref = useRef(null);
  const mainControls = useAnimation();
  const navigate = useNavigate();
  const handleReadMore = () => {
    mainControls.start("visible");
    navigate(`/portfolio/${item.id}`);
  };

  const handleHover = () => {
    mainControls.start("visible");
  };

  useEffect(() => {
    mainControls.start("hidden");

    return () => {
      mainControls.stop();
    };
  }, [mainControls, index, currentSlideIndex]);
  return (
    <>
      <div
        className="group w-fit  h-full z-9 mt-4 middleXmd:ml-20 cursor-pointer overflow-hidden relative rounded-3xl "
        onMouseEnter={handleHover}
        onMouseLeave={() => mainControls.start("hidden")}
      >
        <img
          src={item.image}
          onClick={() => {
            handleReadMore();
            gaEventTracker(
              `Clicked on ${item.title}`,
              "Clicked on Portfolio Carausel"
            );
          }}
          alt={item.title}
          className={`z-[-10] ${
            index === currentSlideIndex ? "" : ""
          } transition-all  delay-75 ease-in-out midFM:mr-20 midFM:ml-2 middleXmd:ml-2 object-fill w-[90%]`}
        />
        <div
          className={`opacity-0 ${
            index === currentSlideIndex
              ? "group-hover:opacity-[1] group-hover:bg-[rgb(0,0,0,0.7)]"
              : ""
          } h-[35rem] mt-2 absolute inset-0 transition-all delay-75 ease-in-out rounded-[3rem] overflow-hidden w-[96%] middleXmd:w-[90%] xl:w-[78%] midXl:w-[72.7%]  midxmd:ml-[01rem] hidden middleXmd:block`}
        >
          <div className="w-[80%] xxmd:w-[90%] h-[90%] md:h-auto flex items-center justify-center flex-col mx-auto  border-white border-2 rounded-2xl mt-[10%] md:mt-[16%] xxmd:mt-[50%] mr-[0.9rem] gap-4 overflow-hidden">
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: -150 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg xxmd:text-3xl font-bold text-white transition delay-1000 ease-in-out p-2 midFM:p-0 mx-auto text-center mt-2">
                {item.title}
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
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center justify-center gap-4 w-full p-2"
            >
              <p className="hidden xxmd:block text-lg font-bold text-white w-full mx-auto mt-3">
                {item.onhover}
              </p>
              <button
                className="sm:text-base xxmd:text-xl text-white font-light border-[1px] p-1 xxmd:p-2 rounded-lg border-white mx-auto midxmd:mb-3"
                onClick={() => {
                  handleReadMore();
                  gaEventTracker(
                    `Clicked on ${item.title}`,
                    "Clicked on Portfolio Carausel"
                  );
                }}
              >
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
