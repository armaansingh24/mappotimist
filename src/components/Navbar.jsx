import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import logo from "../assets/navbar/logo.png";
import menu from "../assets/navbar/menu.png";
import close from "../assets/navbar/close.png";
import eclips1 from "../assets/navbar/eclips1.png";
import eclips2 from "../assets/navbar/eclips2.png";
import eclips3 from "../assets/navbar/eclips3.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  return (
    <>
      <nav
        className={
          "flex items-center mx-auto mt-6 w-full p-4 sm:p-0 absolute top-0 left-0 right-0 sm:relative z-10"
        }
      >
        <div className="w-full flex justify-between items-start  mx-auto ">
          <Link
            to="/"
            className="flex items-center cursor-pointer justify-center gap-1 sm:w-[15%] order-2 sm:justify-start"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logo}
              alt="logo"
              className={`${toggle === true ? "hidden" : "flex w-[50%]"}`}
              loading="lazy"
            />
            <p className="text-[18px] font-bold cursor-pointer xmd:flex hidden mdd:w-0">
              MappOptimist
            </p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-3 lmd:gap-5 md:gap-10 order-3 self-center">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="text-[20px] font-semibold cursor-pointer font-poppins leading-[30px] group
                "
              >
                <a
                  className="rounded-full py-1 px-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-500 ease-in-out"
                  href={`#${link.id}`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Nav Modal */}
          <div className="sm:hidden flex flex-1 justify-between order-1 w-[100%] bg-white rounded-lg relative z-10 transition-all duration-1000 overflow-hidden">
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
              className="flex flex-col h-12 w-12 rounded justify-center items-center group"
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
                !toggle ? "opacity-0 h-0" : "opacity-100 h-auto"
              }  justify-center items-center mx-auto transition-all duration-1000 ease-in-out`}
            >
              <ul className="list-none flex justify-between items-start flex-col gap-4 mb-12 w-full mt-12 transform transition duration-1000">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className="text-[20px] font-semibold cursor-pointer font-poppins leading-[30px] py-1 px-3 rounded-full
               hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition duration-500 z-10"
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
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
            : "opacity-1 absolute left-0 top-0 bottom-0 right-0  bg-gradient-to-tl from-[rgba(0,0,0,.8)] to-[rgba(0,0,0,.8)] z-9 overflow-hidden cursor-pointer h-screen w-screen transition-all duration-[2000] ease-in-out"
        }`}
        onClick={() => setToggle(!toggle)}
      ></div>
    </>
  );
};

export default Navbar;
