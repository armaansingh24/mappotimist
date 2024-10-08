import React from "react";
import "../index.css";
import { carouselItems } from "../constants/index";
import { about } from "../constants/index";
import CountUp from "./CountUp";
import CarouselItem from "./CarouselItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const About = () => {
  const [isVisiable, setIsVisiable] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  const listenToScroll = () => {
    let heightToHidden = 110;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisiable(true);
    } else {
      setIsVisiable(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);
  return (
    <>
      <motion.div
        className="w-screen -mt-12 sm:-mt-6 relative z-0 "
        id="About"
        ref={ref}
        variants={{
          hidden: { opacity: 1, y: 0 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="visible"
        animate={mainControls}
        transition={{ duration: 1.6 }}
      >
        <motion.div
          className="bg-[#DBDCE6] pt-10"
          ref={ref}
          variants={{
            hidden: { opacity: 1, y: 0 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="visible"
          animate={mainControls}
        >
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
              <h2 className="w-[90%] text-[30px] font-poppins500 leading-8 xxmd:text-[40px] xxmd:leading-[72px]">
                Unleash your idea's potential with our comprehensive, innovative
                and creative digital solutions.
              </h2>
            </motion.div>
            <motion.div
              className="w-full mx-auto h-full overflow-hidden order-2 xxmd:order-3 xxmd:col-span-2 xxmd:mb-10 z-9 relative xxmd:gap-10 font-poppins500"
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
                emulateTouch={true}
                statusFormatter={() => {}}
                autoPlay="true"
                infiniteLoop="true"
                interval={4000}
                showStatus="false"
                renderArrowPrev={(onClickHandler, hasPrev, label) => {}}
                renderArrowNext={(onClickHandler, hasNext, label) => {}}
                showArrows="false"
                showThumbs="false"
                stopOnHover="true"
                showIndicators="true"
                renderThumbs={() => {}}
                dotposition="bottom"
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                  const defStyle = {
                    marginLeft: 10,
                    marginRight: 10,
                    fontSize: "27px",
                    color: "rgb(107 114 128)",
                    cursor: "pointer",
                    opacity: "0.8",
                  };
                  const style = isSelected
                    ? { ...defStyle, color: "#000046" }
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
                <div
                  className="font-poppins500 xxmd:text-[36.75px]"
                  key={item.id}
                >
                  <div className="text-[25px] font-medium xxmd:text-[36.75px] xxmd:leading-[55.12px]">
                    {isVisiable && (
                      <div>
                        <CountUp start={0} end={item.number} /> {item.symbol}
                      </div>
                    )}
                  </div>
                  <p className="text-[25px] font-medium ">{item.title}</p>
                  <p className="text-[9px] leading-[12px] capitalize font-medium xxmd:text-[12.25px] xxmd:leading-[18.37px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;
