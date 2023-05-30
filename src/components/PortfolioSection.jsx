import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { portfolioImages } from "../constants/index";
import image1 from "../assets/portfolio/image1.png";
import image2 from "../assets/portfolio/image2.png";
import image3 from "../assets/portfolio/image3.png";
import image4 from "../assets/portfolio/image4.png";
import image5 from "../assets/portfolio/image5.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PortfolioSlider from "./PortfolioSlider";

const PortfolioSection = (props) => {
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
          className="absolute w-[2%] h-20 top-[-8rem] text-white left-0 text-center p-3"
          onClick={() => previous()}
        >
          {" "}
          <AiOutlineArrowLeft className="text-[1.75rem] absolute top-6 left-0 right-0" />
        </button>
        <button onClick={() => next()}>
          <span className="absolute w-[2%] h-20 top-[-8rem] text-white right-[0.3rem] text-center p-3">
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
        className={`${active ? "opacity-1" : "opacity-[.5]"} text-white translate-y-[10rem]]`}
        onClick={() => onClick()}
      >
        •
      </li>
    );
  };
  return (
    <>
      <div className="bg-gradient-to-r from-secondary to-primary w-screen">
        <div className="w-[90%] mx-auto p-10">
          <h2 className="font-bold text-center sm:text-left">Our Portfolios</h2>
        </div>
        <div className="w-[90%] mx-auto slider">
          <div className="container hidden sm:block">
            <Swiper
              effect={"coverflow"}
              slidesPerView={3}
              // grabCursor={true}
              centeredSlides={true}
              loop={true}
              // slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 10,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container h-auto"
            >
              {portfolioImages.map((image) => (
                <SwiperSlide>
                  <PortfolioSlider image={image.image} key={image.id} />
                </SwiperSlide>
              ))}

              <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                  <AiOutlineArrowLeft
                    name="arrow-forward-outline"
                    className="text-white"
                  ></AiOutlineArrowLeft>
                </div>
                <div className="swiper-button-next slider-arrow">
                  <AiOutlineArrowRight
                    name="arrow-back-outline"
                    className="text-white"
                  ></AiOutlineArrowRight>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          </div>
          <div className="sm:hidden p-4 mb-3">
            {/* whole card is not visible check prodata and procard */}
            <div className="mx-1 relative flex flex-col-reverse group">
              <Carousel
                responsive={responsive}
                arrows={false}
                renderButtonGroupOutside={true}
                customButtonGroup={<ButtonGroup />}
                // autoPlay={props.deviceType !== "mobile" ? true : false}
                infinite={true}
                // autoPlaySpeed={9000}
                sliderClass={true}
                showDots={true}
                dotListClass={true}
                customDot={<CustomDot />}
              >
                <img
                  src={image1}
                  alt="slide_image"
                  className="w-[80%]  p-5 mr-0 ml-7"
                />
                <img
                  src={image2}
                  alt="slide_image"
                  className="w-[80%]  p-5 mr-0 ml-7"
                />
                <img
                  src={image3}
                  alt="slide_image"
                  className="w-[80%]  p-5 mr-0 ml-7"
                />
                <img
                  src={image4}
                  alt="slide_image"
                  className="w-[80%]  p-5 mr-0 ml-7"
                />
                <img
                  src={image5}
                  alt="slide_image"
                  className="w-[80%]  p-5 mr-0 ml-7"
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioSection;
