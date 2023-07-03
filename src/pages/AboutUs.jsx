import React from "react";
import PortfolioNavbar from "../components/PortfolioNavbar";
import firstSection from "../assets/aboutUs/firstSection.png";
import secondSection from "../assets/aboutUs/secondSection.png";
import picture1 from "../assets/aboutUs/picture1.png";
import { SiFacebook } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineSlack } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { testimonials } from "../constants";
import TestimonialsItem from "../components/TestimonialsItem";
import R1 from "../assets/aboutUs/R1.png";
import ellips from "../assets/aboutUs/ellips.png";
import ellips2 from "../assets/aboutUs/ellips2.png";

const AboutUs = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 1.5,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="">
        <PortfolioNavbar />
      </div>
      <div className="w-screen mt-36 sm:mt-0 about">
        <div className="relative">
          <img src={firstSection} alt="firstSection" className="w-full" />
          <div className="absolute inset-0 w-[97%] sm:w-[90%] flex flex-col items-end justify-center">
            <div className="text-center">
              <p className="sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#F6D28C] to-[#FBE6BD] font-poppins">
                About Us
              </p>
              <p className="text-base sm:text-3xl text-white font-poppins">
                Innovating with passion,
              </p>
              <p className="text-base sm:text-3xl text-white font-poppins">
                delivering with precision
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-1 w-[90%] mx-auto mt-10 gap-4 xxmd:hidden  sm:grid-cols-2 items-center justify-center">
          <div className="sm:order-2 sm:w-full">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-2xl p-1 sm:text-4xl font-poppins">
              Building greater futures through innovation and collective
              knowledge
            </h3>
          </div>
          <div className="sm:row-span-2 sm:order-1 mx-auto my-auto">
            <img src={secondSection} alt="" className="" />
          </div>
          <div className="sm:order-3 sm:w-full">
            <p className="text-base sm:text-xl font-poppins300">
              MappOptimist is a leading IT & Fintech solution provider,
              dedicated to empowering businesses with cutting-edge technologies.
              We specialize in delivering end-to-end IT solutions, including web
              development, app development, UI/UX Design, and digital
              transformation services. We have a team of IIT qualified and
              experienced developers, we strive to provide our clients with
              tailored solutions that align with their business objectives and
              drive success.
            </p>
          </div>
          <div className="col-span-2 order-4 hidden sm:flex sm:w-full sm:flex-col gap-4">
            <p className="text-base sm:text-xl font-poppins300">
              We work closely with our clients to understand their needs, and we
              leverage our expertise to deliver customized solutions that meet
              and exceed their expectations.
            </p>
            <p className="text-base sm:text-xl font-poppins300">
              At MappOptimist, we are committed to staying ahead of the curve in
              technology trends and advancements. Our team is constantly
              learning and expanding our knowledge to ensure that we are
              equipped to tackle any IT challenge that comes our way. Whether
              you're a small business or a large enterprise, we have the
              expertise and experience to help you leverage technology to drive
              growth and success. Connect with us to learn more about how we can
              help your business thrive.
            </p>
          </div>
        </div>
        <div className="w-[80%] mx-auto  flex-col gap-4 hidden xxmd:flex mt-10">
          <div className="flex gap-10 items-center">
            <div className="w-[40%] mt-20">
              <img src={secondSection} alt="" className="w-full" />
            </div>
            <div className="w-[80%]">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-4xl pb-2 font-poppins">
                Building greater futures through innovation and collective
                knowledge
              </h3>
              <p className="text-base sm:text-lg font-poppins300 mt-6">
                MappOptimist is a leading IT & Fintech solution provider,
                dedicated to empowering businesses with cutting-edge
                technologies. We specialize in delivering end-to-end IT
                solutions, including web development, app development, UI/UX
                Design, and digital transformation services. We have a team of
                IIT qualified and experienced developers, we strive to provide
                our clients with tailored solutions that align with their
                business objectives and drive success.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-base sm:text-lg font-poppins300">
              We work closely with our clients to understand their needs, and we
              leverage our expertise to deliver customized solutions that meet
              and exceed their expectations.
            </p>
            <p className="text-base sm:text-lg font-poppins300">
              At MappOptimist, we are committed to staying ahead of the curve in
              technology trends and advancements. Our team is constantly
              learning and expanding our knowledge to ensure that we are
              equipped to tackle any IT challenge that comes our way. Whether
              you're a small business or a large enterprise, we have the
              expertise and experience to help you leverage technology to drive
              growth and success. Connect with us to learn more about how we can
              help your business thrive.
            </p>
          </div>
        </div>
        <div className="grid grid-rows-1 w-[90%] mx-auto mt-10 gap-4 xxmd:hidden sm:grid-cols-2 items-center justify-center">
          <div className="sm:order-2 sm:w-full flex flex-col items-start justify-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-2xl p-1 sm:text-4xl font-poppins">
              Yashvant Sikarvar
            </h2>
            <p className="text-xl sm:text-2xl p-1 font-poppins">Founder & CEO</p>
          </div>
          <div className="sm:row-span-2 sm:order-1 mx-auto my-auto">
            <img src={picture1} alt="" />
          </div>
          <div className="sm:order-3 sm:w-full flex flex-col gap-4 items-start justify-center">
            <div className="text-base sm:text-xl font-poppins300">
              <p>
                An IIT Graduate ranked 22nd in AIR, is a Gate and NET Qualified
                professional. With over 10+ years of extensive experience in the
                IT industry, he possesses a remarkable level of expertise.
                Driven by his curiosity and a relentless pursuit of excellence,
                he founded MappOptimist Technologies and currently serves as its
                CEO. Throughout his career, he has successfully ventured into
                various domains including Healthcare, Banking, E-commerce, Share
                Market, Gaming, Keyboard Applications, and various other.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/yash.sikarvar/"
                className="group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiFacebook className="text-[#7F838D] group-hover:text-primary" />
              </a>
              <a
                href="#"
                className="group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineSlack className="text-[#7F838D] group-hover:text-primary" />
              </a>
              <a
                href="https://instagram.com/yash_sikarvar?igshid=MzRlODBiNWFlZA=="
                className="group object-contain"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiInstagramFill className="text-[#7F838D] group-hover:text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/yashvant-sikarvar-52022064/"
                className="group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className="text-[#7F838D] group-hover:text-primary text-xl mt-1" />
              </a>
            </div>
          </div>
        </div>
        <div className="hidden xxmd:block mx-auto w-[80%] mt-20">
          <div className="flex gap-10 items-center justify-center">
            <div className="w-full flex flex-col items-start justify-center gap-5 ">
              <div>
                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-4xl font-poppins">
                  Yashvant Sikarvar
                </h3>
                <p className="text-2xl font-poppins">Founder & CEO</p>
              </div>
              <p className="text-lg">
                An IIT Graduate ranked 22nd in AIR, is a Gate and NET Qualified
                professional. With over 10+ years of extensive experience in the
                IT industry, he possesses a remarkable level of expertise.
                Driven by his curiosity and a relentless pursuit of excellence,
                he founded MappOptimist Technologies and currently serves as its
                CEO. Throughout his career, he has successfully ventured into
                various domains including Healthcare, Banking, E-commerce, Share
                Market, Gaming, Keyboard Applications, and various other.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/yash.sikarvar/"
                  className="group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiFacebook className="text-[#7F838D] group-hover:text-primary" />
                </a>
                <a
                  href="#"
                  className="group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineSlack className="text-[#7F838D] group-hover:text-primary" />
                </a>
                <a
                  href="https://instagram.com/yash_sikarvar?igshid=MzRlODBiNWFlZA=="
                  className="group object-contain"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiInstagramFill className="text-[#7F838D] group-hover:text-primary" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yashvant-sikarvar-52022064/"
                  className="group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin className="text-[#7F838D] group-hover:text-primary text-xl mt-1" />
                </a>
              </div>
            </div>
            <div className="w-[50%]">
              <img src={picture1} alt="" className="" />
            </div>
          </div>
        </div>

        <div className="w-screen testimonial py-10 mt-10 relative">
          <img
            src={R1}
            alt=""
            className="absolute -top-32 right-0 hidden midlg:block"
          />
          <img
            src={ellips}
            alt=""
            className="absolute right-0 w-[13%] sm:w-[10%] top-2 midlg:hidden"
          />
          <img
            src={ellips2}
            alt=""
            className="absolute right-[30%] w-[13%] sm:w-[10%] top-10 midlg:hidden"
          />
          <img
            src={ellips2}
            alt=""
            className="absolute right-32 sm:w-[10%] w-[13%] bottom-5 sm:bottom-2 midlg:hidden"
          />
          <img
            src={ellips2}
            alt=""
            className="absolute left-0 sm:w-[10%] w-[13%] bottom-20 sm:bottom-10 midlg:hidden"
          />
          <div className="w-[80%]  mx-auto">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-2xl p-1 sm:text-4xl font-poppins">
              Testimonial
            </h2>
            <p className="text-xl sm:text-2xl p-1 font-poppins">
              See what they say about us
            </p>
          </div>
          <div className="mt-10 w-[90%] sm:w-[95%] mx-auto h-full ">
            <Carousel
              responsive={responsive}
              arrows={false}
              infinite={true}
              sliderClass={true}
              showDots={false}
              autoPlay={true}
              autoPlaySpeed={4000}
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialsItem testimonial={testimonial} key={index} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
