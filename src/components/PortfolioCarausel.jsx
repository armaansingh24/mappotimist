import React from 'react'
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
SwiperCore.use([Pagination]);


const PortfolioCarausel = ({props,page}) => {
    console.log(page);
     const responsive = {
       desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 6,
         slidesToSlide: 4, // optional, default to 1.
       },
       tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 2,
         slidesToSlide: 2, // optional, default to 1.
       },
       mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 1,
         slidesToSlide: 1, // optional, default to 1.
       },
     };
     const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
       return (
         <div
           className="absolute carousel-button-group mb-4  gap-4 flex justify-end 
          items-center w-[100%]"
         >
           <button
             className={`absolute w-[2%] h-20 top-[-8rem]  left-0 text-center p-3`}
             onClick={() => previous()}
           >
             {" "}
             <AiOutlineArrowLeft className="text-[1.75rem] absolute top-6 left-0 right-0" />
           </button>
           <button onClick={() => next()}>
             <span
               className={`absolute w-[2%] h-20 top-[-8rem] ${
                 page === "portfolio" ? "text-black" : "text-white"
               } right-[0.3rem] text-center p-3`}
             >
               <AiOutlineArrowRight className="text-[1.75rem] absolute top-6 left-0 right-[-2rem]" />
             </span>
           </button>
         </div>
       );
     };
     const CustomDot = ({ onClick, active }) => {
       // onMove means if dragging or swiping in progress.
       // active is provided by this lib for checking if the item is active or not.
       return (
         <li
           className={`${active ? "opacity-1" : "opacity-[.5]"} ${
             page === "portfolio" ? "text-black" : "text-white"
           }`}
           onClick={() => onClick()}
         >
           •
         </li>
       );
     };
     const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

     const handleSlideChange = (swiper) => {
       setCurrentSlideIndex(swiper.realIndex);
       //  console.log(swiper.activeIndex);
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
            // slideToClickedSlide={true}
            // loopPreventsSliding={true}
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
            // modules={[Autoplay]}
            pagination={{ clickable: true }}
            // virtual={true}
            // direction="rtl"
            slidesPerView={3}
            // direction="ltr"
            className="swiper_container "
          >
            {portfolioImages.map((item, index) => (
              <SwiperSlide virtualIndex={index} key={index}>
                <PortfolioSlider
                  // image={image.image}
                  index={index}
                  item={item}
                  currentSlideIndex={currentSlideIndex}
                />
              </SwiperSlide>
            ))}

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
          <div className="mx-1 relative flex flex-col-reverse group">
            <Carousel
              responsive={responsive}
              arrows={false}
              renderButtonGroupOutside={true}
              customButtonGroup={<ButtonGroup />}
              autoPlay={props.deviceType !== "mobile" ? true : false}
              infinite={true}
              autoPlaySpeed={9000}
              sliderClass={true}
              showDots={true}
              dotListClass={
                "top-[15rem] ssm:top-[15rem] midxs:top-[16.7rem] translate-x-[-3%]"
              }
              customDot={<CustomDot />}
            >
              {portfolioImages.map((item, index) => (
                <PortfolioMobile
                  // image={image.image}
                  key={index}
                  index={index}
                  item={item}
                  currentSlideIndex={currentSlideIndex}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioCarausel