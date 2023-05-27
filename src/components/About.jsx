import React from "react";
import "../index.css";
import { useState } from "react";
// import { CarouselItem } from "./CarouselItem";
import { Carousel, Typography, Button } from "@material-tailwind/react";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Baseball",
      description:
        "Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher.",
      icon: require("../assets/about/slider1.png"),
    },
    {
      title: "Walking",
      description:
        "Walking (also known as ambulation) is one of the main gaits of terrestrial locomotion among legged animals. Walking is typically slower than running and other gaits. ",
      icon: require("../assets/about/slider1.png"),
    },
    {
      title: "Weights",
      description:
        "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
      icon: require("../assets/about/slider1.png"),
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
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
            <Carousel className="rounded-xl">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                  <div className="w-3/4 text-center md:w-2/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                      The Beauty of Nature
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 opacity-80"
                    >
                      It is not so much for its beauty that the forest makes a
                      claim upon men&apos;s hearts, as for that subtle
                      something, that quality of air that emanation from old
                      trees, that so wonderfully changes and renews a weary
                      spirit.
                    </Typography>
                    <div className="flex justify-center gap-2">
                      <Button size="lg" color="white">
                        Explore
                      </Button>
                      <Button size="lg" color="white" variant="text">
                        Gallery
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-full w-full">
                <img
                  src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                  alt="image 2"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                  <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                      The Beauty of Nature
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 opacity-80"
                    >
                      It is not so much for its beauty that the forest makes a
                      claim upon men&apos;s hearts, as for that subtle
                      something, that quality of air that emanation from old
                      trees, that so wonderfully changes and renews a weary
                      spirit.
                    </Typography>
                    <div className="flex gap-2">
                      <Button size="lg" color="white">
                        Explore
                      </Button>
                      <Button size="lg" color="white" variant="text">
                        Gallery
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-full w-full">
                <img
                  src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                  alt="image 3"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                  <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                      The Beauty of Nature
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 opacity-80"
                    >
                      It is not so much for its beauty that the forest makes a
                      claim upon men&apos;s hearts, as for that subtle
                      something, that quality of air that emanation from old
                      trees, that so wonderfully changes and renews a weary
                      spirit.
                    </Typography>
                    <div className="flex gap-2">
                      <Button size="lg" color="white">
                        Explore
                      </Button>
                      <Button size="lg" color="white" variant="text">
                        Gallery
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
