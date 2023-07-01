import React from "react";
import PortfolioNavbar from "../components/PortfolioNavbar";
import firstSection from "../assets/aboutUs/firstSection.png";
import secondSection from "../assets/aboutUs/secondSection.png";

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
        <div className="w-[90%] mx-auto  flex-col gap-4 hidden xxmd:flex mt-10">
          <div className="flex gap-10 items-center">
            <div className="w-[30%]">
              <img src={secondSection} alt="" className="w-full" />
            </div>
            <div className="w-[80%]">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-5xl pb-2 font-poppins">
                Building greater futures through innovation and collective
                knowledge
              </h3>
              <p className="text-base sm:text-xl font-poppins300 mt-6">
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
      </div>
    </>
  );
};

export default AboutUs;
