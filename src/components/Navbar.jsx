import React, { useState } from "react";
// import { HashRouter as Link  } from "react-router-dom";
import { Link } from "react-scroll";
import { navLinks } from "../constants";
import logo from "../assets/navbar/logo.png";
import eclips1 from "../assets/navbar/eclips1.png";
import eclips2 from "../assets/navbar/eclips2.png";
import eclips3 from "../assets/navbar/eclips3.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const genericHamburgerLine = `h-1 w-6 rounded-full bg-black transition ease transform duration-300`;
  return (
    <>
      <nav
        className={
          "flex items-center mx-auto mt-6 w-[90%] p-4 sm:p-0 absolute top-0 left-0 right-0 sm:relative z-10 text-black"
        }
      >
        <div className="w-full flex justify-between items-start  mx-auto ">
          <Link
            to="home"
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
            <p className="text-[18px] font-bold cursor-pointer xmd:flex hidden mdd:w-0">
              MappOptimist
            </p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-3 lmd:gap-2 lmd:text-[12px] md:gap-10 order-3 self-center">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="text-[20px]  cursor-pointer leading-[30px] group font-poppins 
                "
              >
                <Link
                  className="rounded-full py-1 px-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-white"
                  to={`${link.id}`}
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={1000}
               
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Nav Modal */}
          <div
            className={`${
              isOpen === true
                ? "bg-white h-auto"
                : " bg-transparent h-0 bg-none"
            } sm:hidden flex flex-1 justify-between order-1 w-[100%] rounded-lg relative z-10 transition-all duration-[1000ms] overflow-hidden h-auto linear`}
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
              className="flex flex-col h-12 w-12 rounded justify-center items-center group z-10"
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
                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
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
                      spy={true}
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
                to="/"
                className=""
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <img
                  src={logo}
                  alt="logo"
                  className={`${toggle === false ? "hidden" : "w-full block"}`}
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`${
          toggle === false
            ? "opacity-0 h-0"
            : "opacity-1 absolute left-0 top-0 bottom-0 right-0  bg-gradient-to-tl from-[rgba(0,0,0,.8)] to-[rgba(0,0,0,.8)] z-9 overflow-hidden cursor-pointer transition-all w-screen h-full duration-[2000ms] ease-in-out"
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
