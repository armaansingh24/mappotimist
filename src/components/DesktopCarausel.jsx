import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const DesktopCarausel = ({ image, index, currentSlideIndex, item }) => {
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
        className="group  h-full z-9 mt-28 ml-10 cursor-pointer overflow-hidden relative rounded-3xl w-[80%]"
        onMouseEnter={handleHover}
        onMouseLeave={() => mainControls.start("hidden")}
      >
        <img
          src={item.image}
          onClick={handleReadMore}
          alt="slide_image"
          className={`z-[-10] ${
            index === currentSlideIndex ? "" : ""
          } transition-all delay-75 ease-in-out mr-16 midxmd:mr-10 mt-24 object-fill`}
        />
        <div
          className={`opacity-0 ${
            index === currentSlideIndex
              ? "group-hover:opacity-[1] group-hover:bg-[rgb(0,0,0,0.7)]"
              : ""
          } h-[13rem] mt-24 absolute inset-0 transition-all delay-75 ease-in-out rounded overflow-hidden w-full xl:w-[64%] midXl:w-[59.8%] xxl:w-[95.8%] hidden middleXmd:block`}
        >
          <div className="w-[80%] xxmd:w-[90%] h-[90%] md:h-auto flex items-center justify-center flex-col mx-auto  border-white border-2 rounded-2xl mt-[10%] md:mt-[16%] xxmd:mt-[12%] mr-3 gap-4 overflow-hidden">
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
              <p className="text-lg xxmd:text-3xl font-bold text-white transition delay-1000 ease-in-out p-2 midFM:p-0 mx-auto text-center mt-3">
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

export default DesktopCarausel;
