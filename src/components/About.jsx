import React from "react";
import "../index.css";
// import { CarouselItem } from "./CarouselItem";
import { Carousel, Typography, Button } from "@material-tailwind/react";

const About = () => {
  return (
    <>
      <div className="">
        <div className="waves bg-white mt-[60%] xms:mt-[51%] sm:mt-[46%] lmd:mt-[47%] md:mt-[33%] xmd:mt-[27%] w-screen z-1">
          <div className="wave wave3"></div>
        </div>

        <div className="bg-[#DBDCE6]">
          <div className="max-w-[90%] mx-auto">
            <div>
              <h2>
                Unleash your idea's potential with our comprehensive,
                innovative, and creative digital solutions.
              </h2>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default About;
