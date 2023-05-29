import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import image1 from "../assets/portfolio/image1.png";
import image2 from "../assets/portfolio/image2.png";
import image3 from "../assets/portfolio/image3.png";
import image4 from "../assets/portfolio/image4.png";
import image5 from "../assets/portfolio/image5.png";

const PortfolioSection = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-secondary to-primary w-screen mt-[-rem]">
        <div className="w-[90%] mx-auto p-10">
          <h2>Our Portfolios</h2>
        </div>
        <div className="w-[90%] mx-auto slider">
          <div className="container">
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
              className="swiper_container"
            >
              <SwiperSlide>
                <img src={image1} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image2} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image3} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image4} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image5} alt="slide_image" />
              </SwiperSlide>

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
        </div>
      </div>
    </>
  );
}

export default PortfolioSection