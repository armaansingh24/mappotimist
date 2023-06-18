import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const PortfolioSlider = ({ image, index, currentSlideIndex,item }) => {
  const ref = useRef(null);
  const mainControls = useAnimation();
   const navigate = useNavigate();

   const handleReadMore = () => {
     navigate(`/portfolio/${item.id}`, { state: { item } });
   };

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
        className="group  h-full z-9 mt-4 cursor-pointer overflow-hidden relative rounded-3xl w-full"
        onMouseEnter={handleHover}
        onMouseLeave={() => mainControls.start("hidden")}
      >
        <img
          src={item.image}
          alt="slide_image"
          className={`z-[-10] ${
            index === currentSlideIndex ? "" : ""
          } transition-all delay-75 ease-in-out ml-1 midxmd:ml-20 sm:w-[40%] object-fill`}
        />
        <div
          className={`opacity-0 ${
            index === currentSlideIndex
              ? "group-hover:opacity-[1] group-hover:bg-[rgb(0,0,0,0.7)]"
              : ""
          } h-[35rem] mt-1 absolute inset-0 transition-all delay-75 ease-in-out rounded-[3rem] overflow-hidden w-full xmd:w-[64%] xl:w-[64%] midxmd:ml-[5.3rem]`}
        >
          <div className="w-[80%] xxmd:w-[90%] h-[90%] md:h-auto flex items-center justify-center flex-col mx-auto md:p-[3.4rem] xxmd:p-5 midxmd:p-2 border-white border-2 rounded-2xl mt-[10%] md:mt-[16%] xxmd:mt-[40.1%] gap-4 overflow-hidden">
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
              <p className="text-lg xxmd:text-3xl font-bold text-white transition delay-1000 ease-in-out p-2 midFM:p-0 mx-auto text-center">
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
              className="flex flex-col items-center justify-center gap-4 w-full"
            >
              <p className="hidden xxmd:block text-lg font-bold text-white w-full mx-auto midxmd:ml-3 mt-3">
                {item.onhover}
              </p>
              <button
                className="sm:text-base xxmd:text-xl text-white font-light border-[1px] p-1 xxmd:p-2 rounded-lg border-white mx-auto midxmd:mb-3"
                onClick={handleReadMore}
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
