import React, { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/virtual";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { EffectCoverflow, Pagination, Navigation, Virtual } from "swiper";
import SwiperCore from "swiper";
import { portfolioImages } from "../constants/index";
import PortfolioMobile from "./PortfolioMobile";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PortfolioSlider from "./PortfolioSlider";
import DesktopCarausel from "./DesktopCarausel";
import DesktopCarauselTwo from "./DesktopCarauselTwo";
SwiperCore.use([Pagination]);

const PortfolioCarausel = ({ page }) => {
  useEffect(() => {
    if (page === "portfolio") {
      const elements = document.getElementsByClassName(
        "swiper-pagination-bullet"
      );
      if (elements.length > 0) {
        for(let i=0; i<elements.length; i++){
          elements[i].style.backgroundColor = "black";
        }
      }
    }
  }, [page]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    return (
      <div
        className="absolute carousel-button-group mb-4 gap-4 flex justify-end 
          items-center w-[100%] h-fit z-10 bottom-0"
      >
        <button
          className={`absolute w-[2%] h-full ${
            page === "portfolio" ? "text-black" : "text-white"
          } -top-[15rem]  left-0 text-center p-3 z-[100]`}
          onClick={() => previous()}
        >
          {" "}
          <AiOutlineArrowLeft className="text-[1.75rem] absolute top-6 left-0 right-0" />
        </button>
        <button onClick={() => next()}>
          <span
            className={`absolute w-[2%] h-20 -top-[15rem] ${
              page === "portfolio" ? "text-black" : "text-white"
            } right-[0.3rem] text-center p-3 z-[100]`}
          >
            <AiOutlineArrowRight className="text-[1.75rem] absolute top-6 left-0 right-[-2rem]" />
          </span>
        </button>
      </div>
    );
  };
  const CustomDot = ({ onClick, active }) => {
    const dotStyle = {
      opacity: active ? 1 : 0.5,
      color: page === "portfolio" ? "black" : "white",
      marginLeft: "5px",
      marginRight: "5px",
      marginTop: "150px",
    };

    return (
      <div
        className="relative z-0 h-[1rem]"
        onClick={onClick}
        style={dotStyle}
      >
        •
      </div>
    );
  };
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);


  const handleSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.realIndex);
  };
  

  return (
    <>
      <div className="w-[90%] mx-auto slider">
        <div className="container hidden sm:block mb-10">
          <Swiper
            modules={[EffectCoverflow, Pagination, Navigation, Virtual]}
            effect={"coverflow"}
            onSlideChange={handleSlideChange}
            centeredSlides={true}
            loop={true}
            coverflowEffect={{
              rotate: 14,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            autoplay={{
              delay: 100,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              stopOnLastSlide: false,
              waitForTransition: true,
            }}
            pagination={{ clickable: true }}
            slidesPerView={3}
            className="swiper_container mr-20"
          >
            {portfolioImages.map((item, index) => {
              if (item.id === "Website1") {
                return (
                  <SwiperSlide virtualIndex={index} key={index}>
                    <DesktopCarausel
                      index={index}
                      item={item}
                     
                      currentSlideIndex={currentSlideIndex}
                    />
                  </SwiperSlide>
                );
              }
              if (item.id === "Website2") {
                return (
                  <SwiperSlide virtualIndex={index} key={index}>
                    <DesktopCarauselTwo
                      index={index}
                      item={item}
                      currentSlideIndex={currentSlideIndex}
                    />
                  </SwiperSlide>
                );
              }

              return (
                <SwiperSlide virtualIndex={index} key={index}>
                  <PortfolioSlider
                    index={index}
                    item={item}
                    id={item.id}
                    currentSlideIndex={currentSlideIndex}
                  />
                </SwiperSlide>
              );
            })}

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <AiOutlineArrowLeft
                  name="arrow-forward-outline"
                  className={`${
                    page === "portfolio" ? "text-black" : "text-white"
                  }`}
                ></AiOutlineArrowLeft>
              </div>
              <div className="swiper-button-next slider-arrow">
                <AiOutlineArrowRight
                  name="arrow-back-outline"
                  className={`${
                    page === "portfolio" ? "text-black" : "text-white"
                  } absolute top-[1.2rem] right-[.2rem]`}
                ></AiOutlineArrowRight>
              </div>
              <div className="swiper-pagination" />
            </div>
          </Swiper>
        </div>
        <div className="sm:hidden mb-12 ">
          <div className="mx-1 relative flex flex-col-reverse group z-50">
            <Carousel
              responsive={responsive}
              arrows={false}
              renderButtonGroupOutside={true}
              customButtonGroup={<ButtonGroup className="z-10" />}
              infinite={true}
              sliderClass={true}
              showDots={true}
              dotListClass={
                "top-[15rem] ssm:top-[19rem] midms:top-[20.7rem] middlems:top-[22rem] xsm:top-[24rem] translate-x-[-3%] relative -z-10"
              }
              customDot={<CustomDot className="mt-20" />}
            >
              {portfolioImages.map((item, index) => {
                return (
                  <PortfolioMobile

                    key={index}
                    index={index}
                    item={item}
                    currentSlideIndex={currentSlideIndex}
                    className="w-[50%] h-[100%]"
                  />
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioCarausel;
