// import background from "../assets/developer/background.webm";
import bgVideo from "../assets/developer/bgVideo.mp4";
import one from "../assets/developer/one.webp";
import two from "../assets/developer/two.webp";
import three from "../assets/developer/three.webp";
import { useState, useEffect } from "react";
import GetHired from "./GetHired";
import GetHire from "./GetHire";
import GetHiredMobile from "./GetHiredMobile";
import HireMobile from "./HireMobile";
import { SlClose } from "react-icons/sl";
import { Tilt } from "react-tilt";
import { Link } from "react-scroll";
import { Link as HLink } from "react-router-dom";

import ellips1 from "../assets/developer/ellips1.webp";
import ellips2 from "../assets/developer/ellips2.webp";
import ellips3 from "../assets/developer/ellips3.webp";
import ellips4 from "../assets/developer/ellips4.webp";
import ellips5 from "../assets/developer/ellips5.webp";
import ellips6 from "../assets/developer/ellips6.webp";
import ellips7 from "../assets/developer/ellips7.webp";

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
    const body = document.body;
    const modalOpen = showForm || showForm2 || showForm3 || showForm4;

    if (modalOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    return () => {
      body.style.overflow = "auto";
    };
  }, [showForm, showForm2, showForm3, showForm4]);

  return (
    <>
      <div id="Developer" className="w-screen relative z-0">
        <div className="relative z-0 w-full">
          <video
            autoPlay
            muted
            loop
            className="bg-transparent w-screen mb-24 hidden midFM:h-screen midlg:block
      scale-[1.3]"
          >
            <source src={bgVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="midlg:absolute midlg:inset-0 w-[90%] mx-auto mt-14 mb-24">
          <img
            src={ellips1}
            alt=""
            className="absolute left-0 top-4 z-10 block midlg:hidden"
          />
          <img
            src={ellips2}
            alt=""
            className="absolute right-3 top-16 z-10 block midlg:hidden"
          />
          <img
            src={ellips3}
            alt=""
            className="absolute right-0 top-[33%] z-10 block midlg:hidden"
          />
          <img
            src={ellips4}
            alt=""
            className="absolute left-0 top-[43%] z-10 block midlg:hidden"
          />
          <img
            src={ellips5}
            alt=""
            className="absolute right-0 bottom-[28%] z-10 block midlg:hidden"
          />
          <img
            src={ellips6}
            alt=""
            className="absolute left-0 bottom-[15%] z-10 block midlg:hidden"
          />
          <img
            src={ellips7}
            alt=""
            className="absolute right-0 bottom-[0%] z-10 block midlg:hidden"
          />
          <h2 className="text-black midlg:text-white font-poppins text-[30px] lmd:text-[48px] text-left midlg:ml-20">
            Developer
          </h2>
          <div className="w-full flex flex-col midlg:flex-row gap-10 items-center justify-evenly mt-[10%] relative z-20">
            <div className="sm:w-[50%]  midlg:w-[25%] ">
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="card"
              >
                <div className="bg-white flex flex-col justify-between items-center rounded-3xl p-6 gap-3 midlg:h-[32.7rem] shadow-[10px_20px_50px_-10px_rgba(0,0,0,0.6)]">
                  <p className="text-2xl font-poppins500">
                    Recruit Developer(s){" "}
                  </p>
                  <img src={one} alt="" className="midFM:w-[80%]" />
                  <p className="text-center text-lg font-poppins500">
                    If you are interested in looking for a skilled
                    professional(s) to bring expertise and efficiency to your
                    project. Contact us for details!
                  </p>
                  <Link to="Developer">
                    <button
                      className="hidden midFM:block bg-gradient-to-l text-xl from-secondary to-[#10669C] px-6 py-1 rounded-full text-white mb-2"
                      onClick={handleGetHired}
                    >
                      Recruit
                    </button>
                  </Link>
                  <button
                    className="block midFM:hidden bg-gradient-to-l text-xl from-secondary to-[#10669C] px-6 py-1 rounded-full text-white mb-2"
                    onClick={handleGetHired1}
                  >
                    Recruit
                  </button>
                </div>
              </Tilt>
            </div>
            <div className="sm:w-[50%]  midlg:w-[25%] ">
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="card"
              >
                <div className="bg-white flex flex-col justify-between items-center  rounded-3xl p-6 gap-3 h-full midlg:h-[32.7rem] shadow-[10px_20px_50px_-10px_rgba(0,0,0,0.6)]">
                  <p className="text-2xl font-poppins500">Share Thoughts</p>
                  <img src={two} alt="" className="mt-12 midFM:w-[80%]" />
                  <p className="text-center text-lg font-poppins500 mt-9">
                    Share your ideas with us. We can turn your concepts into
                    reality with our expertise and ignite them with our
                    knowledge.
                  </p>
                  <Link
                    to="Contact Us"
                    smooth={true}
                    offset={10}
                    duration={1000}
                  >
                    <button className=" bg-gradient-to-l text-xl from-secondary to-[#10669C] px-6 py-1 rounded-full text-white mb-2">
                      Connect Us
                    </button>
                  </Link>
                </div>
              </Tilt>
            </div>
            <div className="sm:w-[50%] midlg:w-[25%] ">
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="card"
              >
                <div className="bg-white flex flex-col justify-between items-center rounded-3xl p-6 gap-3  h-full midlg:h-[32.5rem] shadow-[10px_20px_50px_-10px_rgba(0,0,0,0.6)]">
                  <p className="text-2xl font-poppins500"> OCR/ICR</p>
                  <img src={three} alt="" className="mt-12 midFM:w-[80%]" />
                  <p className="text-center text-lg font-poppins500 mt-6">
                    Harness the potential of automation with our
                    state-of-the-art OCR/ICR solutions, boasting over 90%
                    accuracy to effortlessly enhance your productivity.
                  </p>
                  <HLink to="/orc-icr">
                    <button className="bg-gradient-to-l text-xl from-secondary to-[#10669C] px-4 py-1 rounded-full text-white mt-2 mb-2">
                      View More
                    </button>
                  </HLink>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute inset-0 z-[60] ${
          showForm || showForm2 || showForm3 || showForm4
            ? "pointer-events-auto"
            : "pointer-events-none"
        } `}
      >
        {showForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-[rgb(0,0,0,0.76)] scrollbar-hide overflow-x-hidden overflow-y-auto">
            <div className="absolute top-20 right-20 text-[50px] text-white z-[70]">
              <button onClick={handleGetHired}>
                <SlClose />
              </button>
            </div>
            <div className="bg-transparent h-full w-full mx-auto p-6 rounded-lg">
              <GetHired />
            </div>
          </div>
        )}

        {showForm3 && (
          <div className="fixed inset-0 flex items-center justify-center bg-[rgb(0,0,0,0.76)] scrollbar-hide overflow-x-hidden overflow-y-auto">
            <div className="absolute top-12 right-8 text-[28px] text-secondary z-[70]">
              <button onClick={handleGetHired1}>
                <SlClose />
              </button>
            </div>
            <div className="bg-transparent h-full w-full mx-auto p-6 rounded-lg">
              <GetHiredMobile />
            </div>
          </div>
        )}

        {showForm2 && (
          <div className="fixed inset-0 flex items-center justify-center bg-[rgb(0,0,0,0.76)] scrollbar-hide overflow-x-hidden overflow-y-auto w-full">
            <div className="absolute top-20 right-20 text-[50px] text-white z-[70]">
              <button onClick={handleGetHire}>
                <SlClose />
              </button>
            </div>
            <div className="bg-transparent h-full w-full mx-auto p-6 rounded-lg">
              <GetHire />
            </div>
          </div>
        )}
        {showForm4 && (
          <div className="fixed inset-0 flex items-center justify-center bg-[rgb(0,0,0,0.76)] scrollbar-hide overflow-x-hidden overflow-y-auto">
            <div className="absolute top-12 right-8 text-[28px] text-secondary z-[70]">
              <button onClick={handleGetHire1}>
                <SlClose />
              </button>
            </div>
            <div className="bg-transparent h-full w-full mx-auto p-6 rounded-lg">
              <HireMobile />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Developer;
