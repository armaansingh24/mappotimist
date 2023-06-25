import React, { useState } from "react";
// import { HashRouter as Link  } from "react-router-dom";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { navLinks } from "../constants";
import logo from "../assets/navbar/logo.png";
import eclips1 from "../assets/navbar/eclips1.png";
import eclips2 from "../assets/navbar/eclips2.png";
import eclips3 from "../assets/navbar/eclips3.png";
import { VscNotebook } from "react-icons/vsc";
// import { HashLink as Link } from "react-router-hash-link";
import GetHired from "./GetHired";
import GetHire from "./GetHire";
import GetHiredMobile from "./GetHiredMobile";
import HireMobile from "./HireMobile";
import { SlClose } from "react-icons/sl";
import { useEffect } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const genericHamburgerLine = `h-1 w-6 rounded-full bg-black transition ease transform duration-300`;

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
    const handleScroll = (event) => {
      if (showForm || showForm2) {
        event.preventDefault();
        event.stopPropagation();
        event.returnValue = false;
        return false;
      }
    };

    window.addEventListener("mousewheel", handleScroll, { passive: false });
    window.addEventListener("DOMMouseScroll", handleScroll, { passive: false });
    window.addEventListener("touchmove", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("mousewheel", handleScroll);
      window.removeEventListener("DOMMouseScroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [showForm, showForm2]);

  return (
    <>
      <div className="bg-[#F7F5F8] w-screen -mt-10">
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
              }}
            >
              <img
                src={logo}
                alt="logo"
                className={`${
                  toggle === true
                    ? "hidden"
                    : "w-[15%] absolute sm:w-[50%] top-3 sm:relative sm:top-0 z-20"
                }`}
                loading="lazy"
              />
              <p className="text-[18px] font-poppins cursor-pointer xmd:flex xmd:flex-col xmd:gap-0 hidden mdd:w-0">
                <span className="mt-6">MappOptimist</span>
                <span className="text-[10px] -translate-y-4 text-black opacity-[0.5] italic">
                  We code the future
                </span>
              </p>
            </Link>
            <ul className="list-none hidden sm:flex flex-row  lmd:gap-2 lmd:text-[12px] md:gap-10 order-3 self-center z-50 relative">
              <li
                className="text-[20px]  cursor-pointer leading-[30px] group font-poppins 
                "
              >
                <Link
                  className="rounded-full py-1 px-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-white"
                  to={`Home`}
                  // spy={true}
                  smooth={true}
                  offset={100}
                  duration={1000}
                >
                  Home
                </Link>
              </li>
              <li
                className="text-[20px]  cursor-pointer leading-[30px] group font-poppins 
                "
              >
                <Link
                  className="rounded-full py-1 px-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-white"
                  to={`Portfolio`}
                  // spy={true}
                  smooth={true}
                  offset={100}
                  duration={1000}
                >
                  Portfolio
                </Link>
              </li>
              <li
                className="text-[20px]  cursor-pointer leading-[30px] group font-poppins 
                "
              >
                <div className="group gap-0 transition-all duration-500">
                  <Link
                    className="rounded-full py-1 px-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-white relative z-10 group overflow-hidden"
                    to={`Developer`}
                    // spy={true}
                    smooth={true}
                    offset={50}
                    duration={1000}
                  >
                    Developer
                  </Link>
                  <div className="hidden group-hover:block transition-all ease-in duration-500 z-0 absolute w-full">
                    <div className="w-16 h-10 rotate-90 bg-white rounded-full translate-x-8 z-0"></div>
                    <div className="absolute mt-2 py-2 bg-white rounded-lg shadow-2xl p-6 -translate-x-14 -translate-y-6">
                      <ul className="list-none flex flex-col items-start justify-center">
                        <li>
                          <button
                            className="px-4 py-2 text-gray-800 flex items-center justify-center gap-2"
                            onClick={() => {
                              setToggle(!toggle);
                              setIsOpen(!isOpen);
                              handleGetHired();
                            }}
                          >
                            <span>
                              <VscNotebook />
                            </span>
                            <span>Recruit Us</span>
                          </button>
                        </li>
                        <li>
                          <button
                            className="px-4 py-2 text-gray-800 flex items-center justify-center gap-2"
                            onClick={() => {
                              setToggle(!toggle);
                              setIsOpen(!isOpen);
                              handleGetHire();
                            }}
                          >
                            <span>
                              <VscNotebook />
                            </span>
                            <span>Get Employed</span>
                          </button>
                        </li>
                        <li>
                          <NavLink to="/orc-icr">
                            <button className="px-4 py-2 text-gray-800 flex items-center justify-center gap-2">
                              <span>
                                <VscNotebook />
                              </span>
                              <span>OCR/ICR</span>
                            </button>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li
                className="text-[20px]  cursor-pointer leading-[30px] group font-poppins 
                "
              >
                <Link
                  className="rounded-full py-1 px-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-white"
                  to={`Expertise`}
                  // spy={true}
                  smooth={true}
                  offset={450}
                  duration={1000}
                >
                  Expertise
                </Link>
              </li>
              <li
                className="text-[20px]  cursor-pointer leading-[30px] group font-poppins 
                "
              >
                <Link
                  className="rounded-full py-1 px-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-white"
                  to={`Contact Us`}
                  // spy={true}
                  smooth={true}
                  offset={10}
                  duration={1000}
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Nav Modal */}
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
                      ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                      : "opacity-50 group-hover:opacity-100"
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen
                      ? "-rotate-45 -translate-y-1 opacity-50 group-hover:opacity-100"
                      : "opacity-50 group-hover:opacity-100 "
                  }`}
                />
              </button>
              <div
                className={`${
                  !toggle ? "opacity-0 h-0" : "opacity-100 h-fit"
                }  justify-center items-center mx-auto transition-all duration-[2000ms] linear`}
              >
                <ul className="list-none flex justify-between items-start flex-col gap-4 mb-12 w-full mt-12 transform transition duration-1000">
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className="text-[20px] cursor-pointer font-poppins leading-[30px] py-1 px-3 rounded-full
               hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition duration-[2000ms] z-10"
                      onClick={() => {
                        setToggle(!toggle);
                        setIsOpen(!isOpen);
                      }}
                    >
                      <Link
                        to={`${link.id}`}
                        // spy={true}
                        smooth={true}
                        offset={100}
                        duration={1000}
                        onClick={() => {
                          setToggle(!toggle);
                          setIsOpen(!isOpen);
                        }}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end w-[13%]">
                <Link
                  to="Home"
                  className=""
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <img
                    src={logo}
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
      <div className="absolute -top-7 z-1">
        {showForm && (
          <div>
            <div className="hidden midFM:block">
              <div className="absolute top-20 right-20 text-[50px] text-white z-[80]">
                <button
                  onClick={() => {
                    setToggle(!toggle);
                    setIsOpen(!isOpen);
                    handleGetHired();
                  }}
                >
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
      <div className="absolute -top-5 z-1 ">
        {showForm2 && (
          <div>
            <div className="hidden midFM:block">
              <div className="absolute mt-3 right-20 text-[50px] text-white z-[80]">
                <button
                  onClick={() => {
                    setToggle(!toggle);
                    setIsOpen(!isOpen);
                    handleGetHire();
                  }}
                >
                  <SlClose />
                </button>
              </div>
              <GetHire />
            </div>
            <div className="block midFM:hidden mt-[45rem]">
              <div className="absolute mt-3 right-8 text-[28px] text-secondary z-[80]">
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
      <div
        className={`${
          toggle === false
            ? "opacity-0 h-0"
            : "opacity-1 absolute left-0 top-0 bottom-0 right-0  bg-gradient-to-tl from-[rgba(0,0,0,.8)] to-[rgba(0,0,0,.8)] z-10 overflow-hidden cursor-pointer transition-all w-screen h-full duration-[2000ms] ease-in-out"
        }`}
        onClick={() => {
          setToggle(!toggle);
          setIsOpen(!isOpen);
        }}
      ></div>
    </>
  );
};

export default Navbar;
