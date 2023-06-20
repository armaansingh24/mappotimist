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
    // console.log(page);
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
        <div className="relative z-0 h-[10rem]" onClick={onClick} style={dotStyle}>
          •
        </div>
      );
    };
     const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
      // const swiperRef = useRef(null);

     const handleSlideChange = (swiper) => {
       setCurrentSlideIndex(swiper.realIndex);
       //  console.log(swiper.activeIndex);
     };
    //  const handleClickItem = (index) => {
    //    if (swiperRef.current) {
    //      swiperRef.current.swiper.slideTo(index);
    //    }
    //  };

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
            className="swiper_container mr-20"
            // goToSlide={handleClickItem}
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
          <div className="mx-1 relative flex flex-col-reverse group z-50">
            <Carousel
              responsive={responsive}
              arrows={false}
              renderButtonGroupOutside={true}
              customButtonGroup={<ButtonGroup className="z-10" />}
              autoPlay={props.deviceType !== "mobile" ? true : false}
              infinite={true}
              autoPlaySpeed={9000}
              sliderClass={true}
              showDots={true}
              dotListClass={
                "top-[15rem] ssm:top-[20rem] midxs:top-[16.7rem] translate-x-[-3%] relative -z-10"
              }
              customDot={<CustomDot className="mt-20" />}
            >
              {portfolioImages.map((item, index) => (
                <PortfolioMobile
                  // image={image.image}
                  key={index}
                  index={index}
                  item={item}
                  currentSlideIndex={currentSlideIndex}
                  className="w-[50%] h-[100%]"
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