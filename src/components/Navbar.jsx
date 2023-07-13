import React, { useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import logo from "../assets/navbar/logo.webp";
import logo2 from "../assets/navbar/logo2.png";
import eclips1 from "../assets/navbar/eclips1.webp";
import eclips2 from "../assets/navbar/eclips2.webp";
import eclips3 from "../assets/navbar/eclips3.webp";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker ";

const Navbar = () => {
  const gaEventTracker = useAnalyticsEventTracker("Navbar");
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const genericHamburgerLine = `h-1 w-6 rounded-full bg-black transition ease transform duration-300`;

  return (
    <>
      <div className="w-screen">
        <nav
          className={
            " flex items-center mx-auto mt-6 w-[90%] p-4 sm:p-0 absolute top-0 left-0 right-0 sm:relative z-50 text-black sm:mt-10"
          }
        >
          <div className="w-full flex justify-between items-start  mx-auto ">
            <Link
              to="/"
              className="flex items-center cursor-pointer justify-end gap-1 sm:w-[15%] order-2 sm:justify-start bg-transparent"
              onClick={() => {
                window.scrollTo(0, 0);
                gaEventTracker("nav-Logo", "Cliked on nav from HomePage");
              }}
            >
              <img
                src={logo}
                alt="logo"
                className={`${
                  toggle === true
                    ? "hidden"
                    : "w-[15%] absolute sm:w-[35%] top-3 sm:relative sm:top-0 z-20"
                }`}
                loading="lazy"
              />
              <img
                src={logo2}
                alt="logo"
                className={`${
                  toggle === true
                    ? "hidden"
                    : "w-[15%] sm:hidden absolute sm:w-[35%] top-3 sm:relative sm:top-0 z-20"
                }`}
                loading="lazy"
              />
              <p className="text-[18px] font-poppins cursor-pointer xmd:flex xmd:flex-col xmd:gap-0 hidden mdd:w-0 text-white">
                <span className="mt-6">MappOptimist</span>
                <span className="text-[10px] -translate-y-4  opacity-[0.5] italic">
                  We code the future
                </span>
              </p>
            </Link>
            <ul className="list-none hidden sm:flex flex-row  lmd:gap-2 lmd:text-[12px] md:gap-4 order-3 self-center z-50 relative">
              <Link
                className="rounded-full  relative z-10"
                to={`Home`}
                smooth={true}
                offset={100}
                duration={1000}
                onClick={() => {
                  gaEventTracker("nav-Home", "Cliked on nav from HomePage");
                }}
              >
                <li
                  className="text-[20px]  cursor-pointer leading-[30px] group font-poppins text-white relative
                py-1 px-3"
                >
                  <div className="absolute w-full h-full inset-0 group-hover:border-2 rounded-full z-0"></div>
                  Home
                </li>
              </Link>
              <NavLink
                className="  rounded-full   relative z-10"
                to={`/about-us`}
                onClick={() => {
                  gaEventTracker("nav-About", "Cliked on nav from HomePage");
                }}
              >
                <li
                  className="text-[20px]  cursor-pointer leading-[30px] group font-poppins group text-white  relative
                py-1 px-3"
                >
                  <div className="absolute w-full h-full inset-0 group-hover:border-2 rounded-full z-0"></div>
                  About
                </li>
              </NavLink>
              <Link
                className="rounded-full  relative z-10"
                to={`Portfolio`}
                smooth={true}
                offset={100}
                duration={1000}
                onClick={() => {
                  gaEventTracker(
                    "nav-Portfolio",
                    "Cliked on nav from HomePage"
                  );
                }}
              >
                <li
                  className="text-[20px]  cursor-pointer leading-[30px] group font-poppins text-white relative
               py-1 px-3 "
                >
                  <div className="absolute w-full h-full inset-0 group-hover:border-2 rounded-full"></div>
                  Portfolio
                </li>
              </Link>
              <Link
                className="rounded-full  text-white relative z-10"
                to={`Expertise`}
                smooth={true}
                offset={450}
                duration={1000}
                onClick={() => {
                  gaEventTracker(
                    "nav-Expertise",
                    "Cliked on nav from HomePage"
                  );
                }}
              >
                <li
                  className="text-[20px]  cursor-pointer leading-[30px] group font-poppins relative
                py-1 px-3"
                >
                  <div className="absolute w-full h-full inset-0 group-hover:border-2 rounded-full"></div>
                  Expertise
                </li>
              </Link>
              <Link
                className="rounded-full   text-white relative z-10"
                to={`Contact Us`}
                smooth={true}
                offset={10}
                duration={1000}
                onClick={() => {
                  gaEventTracker(
                    "nav-Contact-US",
                    "Cliked on nav from HomePage"
                  );
                }}
              >
                <li
                  className="text-[20px]  cursor-pointer leading-[30px] group font-poppins relative
                py-1 px-3"
                >
                  <div className="absolute w-full h-full inset-0 group-hover:border-2 rounded-full"></div>
                  Contact Us
                </li>
              </Link>
            </ul>

            <div
              className={`${
                isOpen === true
                  ? "bg-white h-auto"
                  : " bg-transparent h-0 bg-none"
              } sm:hidden flex flex-1 justify-between order-1 w-[100%] rounded-lg relative z-40 transition-all duration-[1000ms] overflow-hidden h-auto linear`}
            >
              <img
                src={eclips1}
                alt="eclips-1"
                className={`${
                  toggle === false
                    ? "hidden"
                    : "absolute top-0 right-0 rounded-lg -z-1"
                }`}
              />
              <img
                src={eclips2}
                alt="eclips-2"
                className={`${
                  toggle === false
                    ? "hidden"
                    : "absolute top-[50%] left-[50%] rounded-lg -z-1"
                }`}
              />
              <img
                src={eclips3}
                alt="eclips-3"
                className={`${
                  toggle === false
                    ? "hidden"
                    : "absolute bottom-0 -left-2  -z-1 rounded-lg"
                }`}
              />
              <button
                className="flex flex-col gap-1 h-12 w-16 rounded justify-center items-center group z-50"
                onClick={() => {
                  setIsOpen(!isOpen);
                  setToggle(!toggle);
                }}
              >
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen
                      ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100 bg-black"
                      : "opacity-50 group-hover:opacity-100 bg-white"
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen
                      ? "opacity-0"
                      : "opacity-50 group-hover:opacity-100 bg-white"
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen
                      ? "-rotate-45 -translate-y-1 opacity-50 group-hover:opacity-100 bg-black"
                      : "opacity-50 group-hover:opacity-100 bg-white"
                  }`}
                />
              </button>
              <div
                className={`${
                  !toggle ? "opacity-0 h-0" : "opacity-100 h-fit"
                }  justify-center items-center mx-auto transition-all duration-[2000ms] linear`}
              >
                <ul className="list-none flex justify-between items-start flex-col gap-4 mb-12 w-full mt-12 transform transition duration-1000 ease-linear">
                  <Link
                    to={`Home`}
                    smooth={true}
                    offset={100}
                    duration={1000}
                    onClick={() => {
                      setToggle(!toggle);
                      setIsOpen(!isOpen);
                      gaEventTracker("nav-Home", "Cliked on nav from HomePage");
                    }}
                  >
                    <li
                      className="text-[20px] cursor-pointer font-poppins leading-[30px] py-1 px-3 rounded-full
               hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition duration-300 z-10"
                      onClick={() => {
                        setToggle(!toggle);
                        setIsOpen(!isOpen);
                      }}
                    >
                      Home
                    </li>
                  </Link>
                  <NavLink
                    to={`/about-us`}
                    onClick={() => {
                      setToggle(!toggle);
                      setIsOpen(!isOpen);
                      gaEventTracker(
                        "nav-About",
                        "Cliked on nav from HomePage"
                      );
                    }}
                  >
                    <li
                      className="text-[20px] cursor-pointer font-poppins leading-[30px] py-1 px-3 rounded-full
               hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition duration-300 z-10"
                      onClick={() => {
                        setToggle(!toggle);
                        setIsOpen(!isOpen);
                      }}
                    >
                      About
                    </li>
                  </NavLink>
                  <Link
                    to={`Portfolio`}
                    smooth={true}
                    offset={100}
                    duration={1000}
                    onClick={() => {
                      setToggle(!toggle);
                      setIsOpen(!isOpen);
                      gaEventTracker(
                        "nav-Portfolio",
                        "Cliked on nav from HomePage"
                      );
                    }}
                  >
                    <li
                      className="text-[20px] cursor-pointer font-poppins leading-[30px] py-1 px-3 rounded-full
               hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition duration-300 z-10"
                      onClick={() => {
                        setToggle(!toggle);
                        setIsOpen(!isOpen);
                      }}
                    >
                      Portfolio
                    </li>
                  </Link>
                  <Link
                    to={`Expertise`}
                    smooth={true}
                    offset={100}
                    duration={1000}
                    onClick={() => {
                      setToggle(!toggle);
                      setIsOpen(!isOpen);
                      gaEventTracker(
                        "nav-Expertise",
                        "Cliked on nav from HomePage"
                      );
                    }}
                  >
                    <li
                      className="text-[20px] cursor-pointer font-poppins leading-[30px] py-1 px-3 rounded-full
               hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition duration-300 z-10"
                      onClick={() => {
                        setToggle(!toggle);
                        setIsOpen(!isOpen);
                      }}
                    >
                      Expertise
                    </li>
                  </Link>
                  <Link
                    to={`Contact Us`}
                    smooth={true}
                    offset={100}
                    duration={1000}
                    onClick={() => {
                      setToggle(!toggle);
                      setIsOpen(!isOpen);
                    }}
                  >
                    <li
                      className="text-[20px] cursor-pointer font-poppins leading-[30px] py-1 px-3 rounded-full
               hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition duration-300 z-10"
                      onClick={() => {
                        setToggle(!toggle);
                        setIsOpen(!isOpen);
                        gaEventTracker(
                          "nav-Contact-US",
                          "Cliked on nav from HomePage"
                        );
                      }}
                    >
                      Contact Us
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="flex justify-end w-[13%]">
                <Link
                  to="Home"
                  className=""
                  onClick={() => {
                    window.scrollTo(0, 0);
                     gaEventTracker(
                       "nav-Logo",
                       "Cliked on nav from HomePage"
                     );
                  }}
                >
                  <img
                    src={logo2}
                    alt="logo"
                    className={`${
                      toggle === false ? "hidden" : "w-[80%] block"
                    }`}
                  />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
