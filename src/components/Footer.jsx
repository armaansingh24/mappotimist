import React from "react";
import insta from "../assets/footer/insta.webp";
import fb from "../assets/footer/fb.webp";
import slack from "../assets/footer/slack.webp";
import linkedin from "../assets/footer/linkedin.png";
import { NavLink as Link } from "react-router-dom";
import PrivacyPolicy from "../assets/footer/PrivacyPolicy.pdf";
import { useState, useEffect } from "react";
import GetHire from "./GetHire";
import HireMobile from "./HireMobile";
import { SlClose } from "react-icons/sl";
import location from "../assets/footer/location.png";
import call from "../assets/footer/call.png";
import message from "../assets/footer/message.png";
import logo from "../assets/navbar/logo.webp";
import termsAndCond from "../assets/footer/termsAndCond.pdf";

const Footer = () => {
  const [showForm2, setShowForm2] = useState(false);
  const [showForm4, setShowForm4] = useState(false);

  const handleGetHire = () => {
    setShowForm2(!showForm2);
  };

  const handleGetHire1 = () => {
    setShowForm4(!showForm4);
  };

  useEffect(() => {
    const body = document.body;
    const modalOpen = showForm2 || showForm4;

    if (modalOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    return () => {
      body.style.overflow = "auto";
    };
  }, [showForm2, showForm4]);
  return (
    <>
      <div className="w-screen bg-gradient-to-r from-primary to-secondary sm:h-[30rem] relative z-30 flex flex-col items-center">
        <div className="w-[90%] mx-auto flex h-full p-0">
          <div className="mt-10 text-white flex flex-col h-[80%] gap-20 items-end w-full mb-3">
            <div className="flex flex-col gap-10 w-full sm:flex-row sm:gap-0 sm:mr-20 midxs:justify-around items-start sm:items-center midFM:mr-40">
              <div className="flex flex-col items-center justify-center gap-10">
                <div className="text-2xl sm:text-3xl flex items-center gap-4 sm:ml-32 midFM:ml-5">
                  <img src={logo} alt="" className="w-[7%] sm:w-[12%]" />
                  <p>MappOptimist</p>
                </div>
                <div className="text-xl hidden sm:block self-center">
                  <ul className="flex flex-col gap-3">
                    <li className="flex  items-center justify-start gap-4">
                      <img src={location} alt="" />
                      <p>Sultanpur, New Delhi 110030</p>
                    </li>
                    <li className="flex  items-center justify-start gap-4">
                      <img src={call} alt="" />
                      <p>+91 8171977577</p>
                    </li>
                    <li className="flex  items-center justify-start gap-4">
                      <img src={message} alt="" />
                      <p>info@mappoptimist.com</p>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="text-xl flex gap-1 flex-col sm:text-2xl mt-20 ">
                <Link to="/about-us">
                  <li className="cursor-pointer">About</li>
                </Link>
                <li
                  className="cursor-pointer hidden midFM:block"
                  onClick={handleGetHire}
                >
                  Careers
                </li>
                <li
                  className="cursor-pointer midFM:hidden"
                  onClick={handleGetHire1}
                >
                  Careers
                </li>
                <li className="cursor-pointer">
                  <a
                    href={PrivacyPolicy}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policies
                  </a>
                </li>
                <li className="cursor-pointer">
                  <a
                    href={termsAndCond}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="self-center justify-items-center h-full mt-5 sm:-mt-20 flex flex-col items-center justify-center sm:gap-4 midxs:mr-20">
              <div>
                <p className="text-center text-base sm:text-xl midFM:ml-6">
                  Follow Us
                </p>
              </div>
              <div className="flex ml-10 gap-4 items-baseline">
                <a
                  href="https://www.facebook.com/profile.php?id=100093856182734&sk=about_details"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer w-[11%] sm:w-[75%]"
                >
                  <img src={fb} alt="" />
                </a>
                <a
                  href="https://join.slack.com/t/mappoptimistworkspace/shared_invite/zt-1y2d2e3n9-73Lrc1VdxYMQ97RKAz393g"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={slack}
                    alt=""
                    className="cursor-pointer w-[11%] sm:w-[70%]"
                  />
                </a>
                <a
                  href="https://www.instagram.com/mappoptimist_technologies/?igshid=MjAxZDBhZDhlNA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer w-[11%] sm:w-[75%]"
                >
                  <img src={insta} alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/company/mappoptimist-technologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer w-[15%] sm:w-[90%] mt-2 sm:mt-0"
                >
                  <img src={linkedin} alt="" className="mt-0 translate-y-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs  sm:text-sm text-gray-300 mb-2 mr-10">
          Copyright © 2023-24 MappOptimist Technologies LLP
        </p>
      </div>
      <div
        className={`absolute inset-0 z-[60] ${
          showForm2 || showForm4 ? "pointer-events-auto" : "pointer-events-none"
        } `}
      >
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

export default Footer;
