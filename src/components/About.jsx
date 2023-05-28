import React from "react";
import "../index.css";
import { carouselItems } from "../constants/index";
import { about } from "../constants/index";
import CountUp from "./CountUp";
import CarouselItem from "./CarouselItem";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";
import { useEffect, useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <div className="mt-6">
        <div className="waves bg-white mt-[60%] xms:mt-[51%] sm:mt-[46%] lmd:mt-[47%] md:mt-[33%] xmd:mt-[25%] w-screen z-1">
          <div className="wave wave3"></div>
        </div>

        <div className="bg-[#DBDCE6] mb-10">
          <div className="max-w-[90%] mx-auto grid grid-cols-1 xxmd:grid-cols-2 gap-5 ">
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 1.6 }}
              className="order-1 w-full"
            >
              <h2 className="w-full text-[30px] font-medium leading-8 xxmd:text-[48px] xxmd:leading-[72px]">
                Unleash your idea's potential with our comprehensive,
                innovative, and creative digital solutions.
              </h2>
            </motion.div>
            <motion.div
              className="w-full mx-auto h-full overflow-hidden order-2 xxmd:order-3 xxmd:col-span-2 xxmd:mb-10 z-9 relative xxmd:gap-10"
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 1.6 }}
            >
              <Carousel
                statusFormatter={() => {}}
                autoPlay="true"
                infiniteLoop="true"
                interval={8000}
                showStatus="false"
                renderArrowPrev={(onClickHandler, hasPrev, label) => {}}
                renderArrowNext={(onClickHandler, hasNext, label) => {}}
                showArrows="false"
                showThumbs="false"
                stopOnHover="true"
                showIndicators="true"
                renderThumbs={() => {}}
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                  const defStyle = {
                    marginLeft: 20,
                    color: "white",
                    cursor: "pointer",
                    innerWidth: "10px",
                    innerHeight: "10px",
                    borderRadius: "50%",
                    opacity: "0.8",
                  };
                  const style = isSelected
                    ? { ...defStyle, color: "#1CB5E0" }
                    : { ...defStyle };
                  return (
                    <span
                      style={style}
                      onClick={onClickHandler}
                      onKeyDown={onClickHandler}
                      value={index}
                      key={index}
                      role="button"
                      tabIndex={0}
                      aria-label={`${label} ${index + 1}`}
                    >
                      •
                    </span>
                  );
                }}
                className="-z-9"
                // numberOfSlides={4}
              >
                {carouselItems.map((item) => (
                  <CarouselItem key={item.id} item={item} />
                ))}
              </Carousel>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-6 w-full mx-auto order-2 mb-10 xxmd:w-[90%] "
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 1.6 }}
            >
              {about.map((item) => (
                <div className="font-Poppins xxmd:text-[36.75px]" key={item.id}>
                  <p
                  className="text-[25px] font-medium xxmd:text-[36.75px] xxmd:leading-[55.12px]">
                    <CountUp start={0} end={item.number} /> {item.symbol}
                  </p>
                  <p className="text-[25px] font-medium ">{item.title}</p>
                  <p className="text-[9px] leading-[12px] capitalize font-medium xxmd:text-[12.25px] xxmd:leading-[18.37px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
