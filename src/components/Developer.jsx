import bgVideo from "../assets/developer/bgVideo.mp4";
import one from "../assets/developer/one.png";
import two from "../assets/developer/two.png";
import three from "../assets/developer/three.png";
import { useState } from "react";
import GetHired from "./GetHired";
import { SlClose } from "react-icons/sl";

const Developer = () => {
  const [showForm, setShowForm] = useState(false);

  const handleGetHired = () => {
    setShowForm(!showForm);
  };

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
          <h2 className="text-white font-poppins500 text-[30px] lmd:text-[48px]">
            Developer
          </h2>
          <div className="w-full flex flex-col midFM:flex-row gap-10 items-center justify-between mt-20">
            <div className="bg-white flex flex-col justify-between items-center midFM:w-[25%] rounded-3xl p-6 gap-3">
              <p className="text-3xl font-poppins500">Get People</p>
              <img src={one} alt="" />
              <p className="text-center text-xl font-poppins500">
                We Will Provide You Freelance As Well As Full Time Opportunity
                To Work With Us A/T Your Experience And Job Profile
              </p>
              <button
                className="bg-gradient-to-b from-secondary to-[#10669C] px-6 py-1 rounded-full text-white"
                onClick={handleGetHired}
              >
                Get Hired
              </button>
            </div>

            <div className="bg-white flex flex-col justify-between items-center midFM:w-[25%] rounded-3xl p-6 gap-3 h-[37rem]">
              <p className="text-3xl font-poppins500">Get People</p>
              <img src={two} alt="" className="mt-20" />
              <p className="text-center text-xl font-poppins500 mt-9">
                We Will Provide You Freelance As Well As Full Time Opportunity
                To Work With Us A/T Your Experience And Job Profile
              </p>
              <button className="bg-gradient-to-b from-secondary to-[#10669C] px-6 py-1 rounded-full text-white mb-2">
                Get Hired
              </button>
            </div>
            <div className="bg-white flex flex-col justify-between items-center midFM:w-[25%] rounded-3xl p-6 gap-3 h-[36rem]">
              <p className="text-3xl font-poppins500">OCR / ICR</p>
              <img src={three} alt="" className="mt-20" />
              <p className="text-center text-xl font-poppins500 mt-12">
                We Will Provide You Freelance As Well As Full Time Opportunity
                To Work With Us A/T Your Experience And Job Profile
              </p>
              <button className="bg-gradient-to-b from-secondary to-[#10669C] px-6 py-1 rounded-full text-white">
                Get Hired
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 z-1">
          {showForm && (
            <div>
              <div className="absolute top-20 right-20 text-[50px] text-white z-10">
                <button onClick={handleGetHired}>
                  <SlClose />
                </button>
              </div>
              <GetHired />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Developer;
