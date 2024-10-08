import React from "react";
import PortfolioNavbar from "../components/PortfolioNavbar";
import firstSection from "../assets/aboutUs/firstSection.webp";
import secondSection from "../assets/aboutUs/secondSection.webp";
import picture1 from "../assets/aboutUs/picture1.webp";
import { SiFacebook } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { SiTwitter } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { testimonials } from "../constants";
import TestimonialsItem from "../components/TestimonialsItem";
import R1 from "../assets/aboutUs/R1.png";
import ellips from "../assets/aboutUs/ellips.png";
import ellips2 from "../assets/aboutUs/ellips2.png";
import pattern2 from "../assets/hero-section/pattern2.webp";
import bubble1 from "../assets/aboutUs/bubble1.png";
import bubble2 from "../assets/aboutUs/bubble2.png";
import bubble3 from "../assets/aboutUs/bubble3.png";
import bubble4 from "../assets/aboutUs/bubble4.png";
import { useEffect } from "react";
import ReactGA from "react-ga4";

const AboutUs = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "About Us",
      page: "/about-us",
      title: "About us",
    });
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 1.5,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <div className="bg-gradient-to-r from-primary to-secondary">
        <PortfolioNavbar page={`OCR-ICR`} />
      </div>
      <div className="w-screen mt-36 sm:mt-0 about">
        <div className="relative">
          <img
            src={firstSection}
            alt="Device and coding"
            className="w-screen hidden middle:block"
          />
          <div className="">
            <img
              src={pattern2}
              alt=""
              className=" absolute right-12 top-14 z-0"
            />
            <img src={bubble1} alt="" className="absolute left-20 top-5" />
            <img src={bubble1} alt="" className="absolute right-32 top-2" />
            <img src={bubble1} alt="" className="absolute right-24 bottom-2" />
            <img src={bubble2} alt="" className="absolute left-52 top-16" />
            <img src={bubble3} alt="" className="absolute left-44 top-44" />
            <img src={bubble4} alt="" className="absolute left-0 bottom-0" />
          </div>
          <div className=" bg-gradient-to-tr from-primary to-secondary middle:bg-none middle:absolute inset-0 w-[100%] middle:w-[90%] flex flex-col items-start middle:items-end justify-center p-20 middle:p-0">
            <div className="middle:text-center">
              <p className="middle:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#F6D28C] to-[#FBE6BD] font-poppins relative z-10">
                About Us
              </p>
              <p className="text-base middle:text-3xl text-white font-poppins relative z-10">
                Innovating with passion,
              </p>
              <p className="text-base middle:text-3xl text-white font-poppins relative z-10">
                delivering with precision
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-1 w-[90%] mx-auto mt-10 gap-4 xxmd:hidden  middle:grid-cols-2 items-center justify-center">
          <div className="middle:order-2 middle:w-full">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-2xl p-1 middle:text-4xl font-poppins">
              Building greater futures through innovation and collective
              knowledge
            </h3>
          </div>
          <div className="middle:row-span-2 middle:order-1 mx-auto my-auto">
            <img src={secondSection} alt="About MappOptimist" className="" />
          </div>
          <div className="middle:order-3 middle:w-full">
            <p className="text-base middle:text-xl font-poppins300">
              MappOptimist is a leading IT & Fintech solution provider,
              dedicated to empowering businesses with cutting-edge technologies.
              We specialize in delivering end-to-end IT solutions, including web
              development, app development, UI/UX Design and digital
              transformation services. We have a team of IIT qualified and
              experienced developers, we strive to provide our clients with
              tailored solutions that align with their business objectives and
              drive success.
            </p>
          </div>
          <div className="col-span-2 order-4 hidden middle:flex middle:w-full middle:flex-col gap-4">
            <p className="text-base middle:text-xl font-poppins300">
              We work closely with our clients to understand their needs, and we
              leverage our expertise to deliver customized solutions that meet
              and exceed their expectations.
            </p>
            <p className="text-base middle:text-xl font-poppins300">
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
              <img
                src={secondSection}
                alt="About MappOptimist"
                className="w-full"
              />
            </div>
            <div className="w-[80%]">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-4xl pb-2 font-poppins">
                Building greater futures through innovation and collective
                knowledge
              </h3>
              <p className="text-base middle:text-lg font-poppins300 mt-6">
                MappOptimist is a leading IT & Fintech solution provider,
                dedicated to empowering businesses with cutting-edge
                technologies. We specialize in delivering end-to-end IT
                solutions, including web development, app development, UI/UX
                Design and digital transformation services. We have a team of
                IIT qualified and experienced developers, we strive to provide
                our clients with tailored solutions that align with their
                business objectives and drive success.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-base middle:text-lg font-poppins300">
              We work closely with our clients to understand their needs, and we
              leverage our expertise to deliver customized solutions that meet
              and exceed their expectations.
            </p>
            <p className="text-base middle:text-lg font-poppins300">
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
        <div className="grid grid-rows-1 w-[90%] mx-auto mt-10 gap-4 xxmd:hidden middle:grid-cols-2 items-center justify-center">
          <div className="middle:order-2 middle:w-full flex flex-col items-start justify-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-2xl p-1 middle:text-4xl font-poppins">
              Yashvant Sikarvar
            </h2>
            <p className="text-xl middle:text-2xl p-1 font-poppins">
              Founder & CEO
            </p>
          </div>
          <div className="middle:row-span-2 middle:order-1 mx-auto my-auto">
            <img src={picture1} alt="Founder" />
          </div>
          <div className="middle:order-3 middle:w-full flex flex-col gap-4 items-start justify-center">
            <div className="text-base middle:text-xl font-poppins300">
              <p>
                An IIT Graduate ranked 22nd in AIR, is a Gate and NET Qualified
                professional. With over 10+ years of extensive experience in the
                IT industry, he possesses a remarkable level of expertise.
                Driven by his curiosity and a relentless pursuit of excellence,
                he founded MappOptimist Technologies and currently serves as its
                CEO. Throughout his career, he has successfully ventured into
                various domains including Healthcare, Banking, E-commerce, Share
                Market, Gaming, Keyboard Applications and various other.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/yash.sikarvar/"
                className="group"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  ReactGA.event({
                    category: "Social Media",
                    action: "Facebook",
                    label: "Clicked on Personal Facebook profile",
                  });
                }}
              >
                <SiFacebook className="text-[#7F838D] group-hover:text-primary" />
              </a>
              <a
                href="https://twitter.com/sikarvarsikarva"
                className="group"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  ReactGA.event({
                    category: "Social Media",
                    action: "Twitter",
                    label: "Clicked on Personal Twitter profile",
                  });
                }}
              >
                <SiTwitter className="text-[#7F838D] group-hover:text-primary" />
              </a>
              <a
                href="https://instagram.com/yash_sikarvar?igshid=MzRlODBiNWFlZA=="
                className="group object-contain"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  ReactGA.event({
                    category: "Social Media",
                    action: "Instagram",
                    label: "Clicked on Personal Instagram profile",
                  });
                }}
              >
                <RiInstagramFill className="text-[#7F838D] group-hover:text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/yashvant-sikarvar-52022064/"
                className="group"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  ReactGA.event({
                    category: "Social Media",
                    action: "Linkedin",
                    label: "Clicked on Personal Linkedin profile",
                  });
                }}
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
                Market, Gaming, Keyboard Applications and various other.
              </p>
              <div className="flex gap-4 relative z-50">
                <a
                  href="https://www.facebook.com/yash.sikarvar/"
                  className="group"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    ReactGA.event({
                      category: "Social Media",
                      action: "Facebook",
                      label: "Clicked on Personal Facebook profile",
                    });
                  }}
                >
                  <SiFacebook className="text-[#7F838D] group-hover:text-primary" />
                </a>
                <a
                  href="https://twitter.com/sikarvarsikarva"
                  className="group"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    ReactGA.event({
                      category: "Social Media",
                      action: "Twitter",
                      label: "Clicked on Personal Twitter profile",
                    });
                  }}
                >
                  <SiTwitter className="text-[#7F838D] group-hover:text-primary" />
                </a>
                <a
                  href="https://instagram.com/yash_sikarvar?igshid=MzRlODBiNWFlZA=="
                  className="group object-contain"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    ReactGA.event({
                      category: "Social Media",
                      action: "Instagram",
                      label: "Clicked on Personal Instagram profile",
                    });
                  }}
                >
                  <RiInstagramFill className="text-[#7F838D] group-hover:text-primary" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yashvant-sikarvar-52022064/"
                  className="group"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    ReactGA.event({
                      category: "Social Media",
                      action: "Linkedin",
                      label: "Clicked on Personal Linkedin profile",
                    });
                  }}
                >
                  <BsLinkedin className="text-[#7F838D] group-hover:text-primary text-xl mt-1" />
                </a>
              </div>
            </div>
            <div className="w-[50%]">
              <img src={picture1} alt="Founder" className="" />
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
            className="absolute right-0 w-[13%] middle:w-[10%] top-2 midlg:hidden"
          />
          <img
            src={ellips2}
            alt=""
            className="absolute right-[30%] w-[13%] middle:w-[10%] top-10 midlg:hidden"
          />
          <img
            src={ellips2}
            alt=""
            className="absolute right-32 middle:w-[10%] w-[13%] bottom-5 middle:bottom-2 midlg:hidden"
          />
          <img
            src={ellips2}
            alt=""
            className="absolute left-0 middle:w-[10%] w-[13%] bottom-20 middle:bottom-10 midlg:hidden"
          />
          <div className="w-[80%]  mx-auto">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-2xl p-1 middle:text-4xl font-poppins">
              Testimonial
            </h2>
            <p className="text-xl middle:text-2xl p-1 font-poppins">
              See what they say about us
            </p>
          </div>
          <div className="mt-10 w-[90%] middle:w-[95%] mx-auto h-full ">
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
