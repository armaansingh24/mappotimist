import React from "react";
import insta from "../assets/footer/insta.png";
import fb from "../assets/footer/fb.png";
import slack from "../assets/footer/slack.webp";
import linkedin from "../assets/footer/linkedin.png";
import { NavLink as Link, useNavigate, useLocation } from "react-router-dom";
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
import useAnalyticsEventTracker from "./useAnalyticsEventTracker ";

const Footer = () => {
  const gaEventTracker = useAnalyticsEventTracker("Footer");
  const [showForm2, setShowForm2] = useState(false);
  const [showForm4, setShowForm4] = useState(false);

  const navigate = useNavigate();
  const loc = useLocation();

  const handleNavigation = () => {
    if (loc.pathname === "/about-us") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      navigate("/about-us");
    }
  };

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
            <div className="flex flex-col w-full sm:flex-row gap-0 sm:mr-20 midxs:justify-around items-start sm:items-center midFM:mr-40">
              <div className="flex flex-col items-center justify-center gap-10">
                <Link to="/" 
                  onClick={()=>{
                    if(window.location.pathname==="/"){
                       window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }
                  }}
                >
                  <div className="text-2xl sm:text-3xl flex items-center gap-4 sm:ml-32 midFM:ml-5">
                    <img src={logo} alt="logo" className="w-[7%] sm:w-[12%]" />
                    <p>MappOptimist</p>
                  </div>
                </Link>
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
              <ul className="text-xl flex gap-1 flex-col mt-20 ">
                <div
                  onClick={() => {
                    gaEventTracker(
                      "About Clicked Footer",
                      "About Clicked from Footer"
                    );
                    handleNavigation();
                  }}
                >
                  <li className="cursor-pointer">About</li>
                </div>
                <li
                  className="cursor-pointer hidden midFM:block"
                  onClick={() => {
                    handleGetHire();
                    gaEventTracker(
                      "Careers Clicked",
                      "Careers Clicked from Footer"
                    );
                  }}
                >
                  Careers
                </li>
                <li
                  className="cursor-pointer midFM:hidden"
                  onClick={() => {
                    handleGetHire1();
                    gaEventTracker(
                      "Careers Clicked",
                      "Careers Clicked from Footer"
                    );
                  }}
                >
                  Careers
                </li>
                <li className="cursor-pointer">
                  <a
                    href={PrivacyPolicy}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      gaEventTracker(
                        "Privacy Policies Clicked",
                        "Privacy Policies Clicked from Footer"
                      );
                    }}
                  >
                    Privacy Policies
                  </a>
                </li>
                <li className="cursor-pointer">
                  <a
                    href={termsAndCond}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      gaEventTracker(
                        "Terms & Conditions Clicked",
                        "Terms & Conditions Clicked from Footer"
                      );
                    }}
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="self-center justify-items-center h-full mt-5 sm:-mt-20 flex flex-col items-center justify-center mr-8 sm:gap-4 midxs:mr-20">
              <div>
                <p className="text-center text-base sm:text-xl ml-10 sm:ml-6">
                  Follow Us
                </p>
              </div>
              <div className="flex ml-10 gap-2 items-center justify-center">
                <a
                  href="https://www.facebook.com/profile.php?id=100093856182734&sk=about_details"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer w-[11%] sm:w-[7%] self-center"
                  onClick={() => {
                    gaEventTracker(
                      "Facebook Visited footer",
                      "Facebook Visited footer Clicked from Footer"
                    );
                  }}
                >
                  <img src={fb} alt="meta" />
                </a>
                <a
                  href="https://join.slack.com/t/mappoptimistworkspace/shared_invite/zt-1y2d2e3n9-73Lrc1VdxYMQ97RKAz393g"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    gaEventTracker(
                      "slack Visited footer",
                      "slack Visited footer Clicked from Footer"
                    );
                  }}
                >
                  <img
                    src={slack}
                    alt="slack"
                    className="cursor-pointer w-[80%] sm:w-[95%] self-center mx-auto"
                  />
                </a>
                <a
                  href="https://www.instagram.com/mappoptimist_technologies/?igshid=MjAxZDBhZDhlNA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer w-[11%] sm:w-[7%] self-center"
                  onClick={() => {
                    gaEventTracker(
                      "insta Visited footer",
                      "insta Visited footer Clicked from Footer"
                    );
                  }}
                >
                  <img src={insta} alt="insta" />
                </a>
                <a
                  href="https://www.linkedin.com/company/mappoptimist-technologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer w-[11%] sm:w-[7%] self-center"
                  onClick={() => {
                    gaEventTracker(
                      "Linkedin Visited footer",
                      "Linkedin Visited footer Clicked from Footer"
                    );
                  }}
                >
                  <img
                    src={linkedin}
                    alt="linkedin"
                    className="mt-0 translate-y-0"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs  sm:text-sm text-gray-300 mb-2 sm:mr-10">
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
            <div className="absolute top-12 right-8 text-[28px] text-secondary z-[70] middleXmd:top-20 middleXmd:right-12">
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
