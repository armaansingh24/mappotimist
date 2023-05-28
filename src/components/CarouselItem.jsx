import React from "react";

const CarouselItem = ({ item }) => {
  return (
    <div className="relative w-full">
      <img
        src={item.backgroudImage}
        alt="slider"
        className="w-full h-[10rem] sm:h-[17rem] md:h-[14rem] xxmd:h-[450px] object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0">
        <div className="w-full  flex justify-between p-2 sm:p-0 sm:px-10 sm:py-4 items-center gap-3">
          <div className="my-2 sm:my-0 text-left md:w-full flex md:gap-3 flex-col">
            <p className="text-sm sm:text-xl font-semibold md:text-2xl ">
              {item.step}
            </p>
            <p className="text-lg sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {item.title}
            </p>
            <p
              color="black"
              className="text-[0.4rem] leading-[0.6rem] w-[169.6px] sm:w-[300px] sm:text-[.8rem] sm:leading-[1.1rem] md:text-[1rem] md:leading-[1.1rem] md:w-full"
            >
              {item.description}
            </p>
          </div>
          <div className="w-full ml-5 mt-5 sm:w-[40%] sm:ml-10 sm:mt-8 md:mt-4 md:w-[80%]">
            <img src={item.image} alt="" className="sm:w-[20%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
