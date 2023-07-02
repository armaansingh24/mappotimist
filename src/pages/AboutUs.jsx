import React from "react";
import PortfolioNavbar from "../components/PortfolioNavbar";
import firstSection from "../assets/aboutUs/firstSection.png";
import secondSection from "../assets/aboutUs/secondSection.png";
import picture1 from "../assets/aboutUs/picture1.png";
import picture2 from "../assets/aboutUs/picture2.png";
import { SiFacebook } from "react-icons/si";
import { BsSlack, BsLinkedin } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

const AboutUs = () => {
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
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-2xl p-1 sm:text-4xl font-poppins">
              Yashvant Sikarvar
            </h3>
            <p className="text-2xl p-1 sm:text-4xl font-poppins">
              Founder & CEO
            </p>
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
            <div className="flex gap-6">
              <a href="#" className="group">
                <SiFacebook className="text-[#7F838D] group-hover:text-primary" />
              </a>
              <a href="#" className="group">
                <BsSlack className="text-[#7F838D] group-hover:text-primary" />
              </a>
              <a href="#" className="group">
                <RiInstagramFill className="text-[#7F838D] group-hover:text-primary" />
              </a>
              <a href="#" className="group">
                <BsLinkedin className="text-[#7F838D] group-hover:text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="hidden xxmd:block mx-auto w-[80%] mt-20">
          <div className="flex gap-10 items-start">
            <div className="w-full flex flex-col items-start justify-center gap-5 ">
              <div>
                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-4xl font-poppins">
                  Yashvant Sikarvar
                </h3>
                <p className="text-2xl  sm:text-2xl font-poppins">
                  Founder & CEO
                </p>
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
              <div className="flex gap-6">
                <a href="#" className="group">
                  <SiFacebook className="text-[#7F838D] group-hover:text-primary" />
                </a>
                <a href="#" className="group">
                  <BsSlack className="text-[#7F838D] group-hover:text-primary" />
                </a>
                <a href="#" className="group">
                  <RiInstagramFill className="text-[#7F838D] group-hover:text-primary" />
                </a>
                <a href="#" className="group">
                  <BsLinkedin className="text-[#7F838D] group-hover:text-primary" />
                </a>
              </div>
            </div>
            <div className="w-[50%]">
              <img src={picture1} alt="" className="" />
              {/* <img src={picture2} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
