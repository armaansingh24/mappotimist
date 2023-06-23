import bgVideo from "../assets/developer/bgVideo.mp4";
import one from "../assets/developer/one.png";
import two from "../assets/developer/two.png";
import three from "../assets/developer/three.png";
import { useState, useEffect } from "react";
import GetHired from "./GetHired";
import GetHire from "./GetHire";
import GetHiredMobile from "./GetHiredMobile";
import HireMobile from "./HireMobile";
import { SlClose } from "react-icons/sl";
import { Tilt } from "react-tilt";

const Developer = () => {
  const [showForm, setShowForm] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [showForm3, setShowForm3] = useState(false);
  const [showForm4, setShowForm4] = useState(false);

  const handleGetHired = () => {
    setShowForm(!showForm);
  };

  const handleGetHire = () => {
    setShowForm2(!showForm2);
  };
  const handleGetHired1 = () => {
    setShowForm3(!showForm3);
  };

  const handleGetHire1 = () => {
    setShowForm4(!showForm4);
  };
  useEffect(() => {
    if (showForm || showForm2) {
      // Add the class to disable scrolling
      document.documentElement.classList.add("disable-scrolling");
    } else {
      // Remove the class to enable scrolling
      document.documentElement.classList.remove("disable-scrolling");
    }
  }, [showForm, showForm2]);

  return (
    <>
      <div id="Developer" className="w-screen relative z-0">
        <div className="relative z-0 w-full">
          <video
            autoPlay
            muted
            loop
            className="bg-transparent w-screen mb-24 hidden midFM:h-screen midFM:block scale-[1.3]"
          >
            <source src={bgVideo} type="video/mp4" className="z-0 relative" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="midFM:absolute midFM:inset-0 w-[90%] mx-auto mt-14">
          <h2 className="text-black midFM:text-white font-poppins500 text-[30px] lmd:text-[48px]">
            Developer
          </h2>
          {/* First Card */}
          <div className="w-full flex flex-col midFM:flex-row gap-10 items-center justify-evenly mt-[10%]">
            <div className="midFM:w-[25%]">
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="card"
              >
                <div className="bg-white flex flex-col justify-between items-center rounded-3xl p-6 gap-3">
                  <p className="text-2xl font-poppins500">Recruit Us</p>
                  <img src={one} alt="" className="midFM:w-[80%]" />
                  <p className="text-center text-lg font-poppins500">
                    If you are a client, hiring for a skilled professional(s) to
                    bring expertise and efficiency to your project. Contact us
                    for details!
                  </p>
                  <button
                    className="bg-gradient-to-l text-xl from-secondary to-[#10669C] px-6 py-1 rounded-full text-white mb-2"
                    onClick={handleGetHired}
                  >
                    Recruit
                  </button>
                </div>
              </Tilt>
            </div>
            {/* second card */}
            <div className="midFM:w-[25%] ">
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="card"
              >
                <div className="bg-white flex flex-col justify-between items-center  rounded-3xl p-6 gap-3 h-full midFM:h-[31.7rem]">
                  <p className="text-2xl font-poppins500">Get Employed</p>
                  <img src={two} alt="" className="mt-12 midFM:w-[80%]" />
                  <p className="text-center text-lg font-poppins500 mt-9">
                    If you are a freelancer seeking engaging projects, let's
                    collaborate and bring your vision to life!
                  </p>
                  <button
                    className="bg-gradient-to-l text-xl from-secondary to-[#10669C] px-6 py-1 rounded-full text-white mb-2"
                    onClick={handleGetHire}
                  >
                    Get Hired
                  </button>
                </div>
              </Tilt>
            </div>
            {/* Third card */}
            <div className="midFM:w-[25%] ">
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="card"
              >
                <div className="bg-white flex flex-col justify-between items-center rounded-3xl p-6 gap-3  h-full midFM:h-[31.5rem]">
                  <p className="text-2xl font-poppins500"> OCR/ICR</p>
                  <img src={three} alt="" className="mt-12 midFM:w-[80%]" />
                  <p className="text-center text-lg font-poppins500 mt-9">
                    Unlock the power of automation with our cutting-edge OCR/ICR
                    solutions and enhance your productivity effortlessly.
                  </p>
                  <button className="bg-gradient-to-l text-xl from-secondary to-[#10669C] px-6 py-1 rounded-full text-white mb-2">
                    View More
                  </button>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
        <div className="absolute top-0 z-1">
          {showForm && (
            <div>
              <div className="hidden midFM:block">
                <div className="absolute top-20 right-20 text-[50px] text-white z-40">
                  <button onClick={handleGetHired}>
                    <SlClose />
                  </button>
                </div>
                <GetHired />
              </div>
              <div className="block midFM:hidden mt-20">
                <div className="absolute top-24 right-8 text-[28px] text-secondary z-40">
                  <button onClick={handleGetHired}>
                    <SlClose />
                  </button>
                </div>
                <GetHiredMobile />
              </div>
              <div
                className="opacity-1 absolute left-0 top-0 bottom-0 right-0  bg-gradient-to-tl from-[rgba(0,0,0,.8)] to-[rgba(0,0,0,.8)] z-9 overflow-hidden cursor-pointer transition-all w-screen h-[200vh] duration-[2000ms] ease-in-out"
                onClick={handleGetHired1}
              ></div>
            </div>
          )}
        </div>
        <div className="absolute -top-2 z-1 ">
          {showForm2 && (
            <div>
              <div className="hidden midFM:block">
                <div className="absolute mt-3 right-20 text-[50px] text-white z-40">
                  <button onClick={handleGetHire}>
                    <SlClose />
                  </button>
                </div>
                <GetHire />
              </div>
              <div className="block midFM:hidden mt-[45rem]">
                <div className="absolute mt-3 right-8 text-[28px] text-secondary z-50">
                  <button onClick={handleGetHire1}>
                    <SlClose />
                  </button>
                </div>
                <HireMobile />
              </div>
              <div className="hidden midFM:block">
                <div
                  className="opacity-1 absolute left-0 top-0 bottom-0 right-0  bg-gradient-to-tl from-[rgba(0,0,0,.8)] to-[rgba(0,0,0,.8)] z-9 overflow-hidden cursor-pointer transition-all w-screen h-[200vh] duration-[2000ms] ease-in-out"
                  onClick={handleGetHire}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Developer;
