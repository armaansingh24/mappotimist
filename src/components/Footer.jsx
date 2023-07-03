import React from "react";
import insta from "../assets/footer/insta.webp";
import fb from "../assets/footer/fb.webp";
import slack from "../assets/footer/slack.webp";
import linkedin from "../assets/footer/linkedin.webp";
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
                <div className="text-2xl sm:text-3xl flex items-center gap-4 sm:ml-10">
                  <img src={logo} alt="" className="w-[7%] sm:w-[10%]" />
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
              <ul className="text-xl flex gap-1 flex-col sm:text-2xl mt-16">
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
                <li className="cursor-pointer">Terms & Conditions</li>
              </ul>
            </div>
            <div className="self-end justify-items-end h-full mt-5 sm:-mt-20 flex flex-col items-center justify-center gap-4">
              <div>
                <p className="text-center">Follow Us</p>
              </div>
              <div className="flex gap-6 sm:gap-4 ">
                <a
                  href="https://www.facebook.com/profile.php?id=100093856182734&sk=about_details"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer h-[67%] sm:h-[90%] sm:w-[80%]"
                >
                  <img src={fb} alt="" />
                </a>
                <img
                  src={slack}
                  alt=""
                  className="cursor-pointer h-[67%] sm:h-[90%] sm:w-[80%]"
                />
                <a
                  href="https://www.instagram.com/mappoptimist_technologies/?igshid=MjAxZDBhZDhlNA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer h-[67%] sm:h-[90%] sm:w-[80%]"
                >
                  <img src={insta} alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/company/mappoptimist-technologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer h-[66%] sm:h-[89%] sm:w-[80%] mt-2 sm:mt-1"
                >
                  <img src={linkedin} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs  sm:text-sm text-white ">
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
