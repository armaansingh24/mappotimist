import React from "react";

const CarouselItem = ({ item }) => {
  return (
    <div className="relative w-full">
      <img
        src={item.backgroudImage}
        alt="slider"
        className="w-full h-[10rem] sm:h-[17rem] md:h-[19rem] xxmd:h-[390px] object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0">
        <div className="w-full flex justify-between p-2 xsm:p-0 xsm:px-2 sm:p-0 sm:px-10 sm:py-4  items-center gap-3">
          <div className="my-2 sm:my-0 text-left md:w-full flex gap-2 md:gap-3 flex-col">
            <p className="text-sm sm:text-xl font-semibold md:text-2xl xxmd:text-[36.75px] xxmd:leading-[55.12px]">
              {item.step}
            </p>
            <p className="text-lg sm:text-2xl sm:mt-[-10px] md:text-3xl text-transparent bg-clip-text bg-gradient-to-tl from-primary to-secondary xxmd:text-[36.75px] xxmd:leading-[55.12px]">
              {item.title}
            </p>
            <p
              color="black"
              className="text-[0.4rem] leading-[0.6rem] xsm:text-[.6rem] xsm:leading-[.8rme] xsm:w-[210px] w-[169.6px] sm:w-[300px] sm:text-[.8rem] sm:leading-[1.1rem] md:text-[1rem] md:leading-[1.1rem] md:w-full xxmd:text-[24px] xxmd:leading-[25px] "
            >
              {item.description}
            </p>
          </div>
          <div className="w-full xsm:w-full ml-5 mt-5 xsm:mt-0 xsm:ml-1  sm:w-[40%] sm:ml-10 sm:mt-8 md:mt-4 md:w-[80%] xxmd:w-[50%]">
            <img
              src={item.image}
              alt=""
              className="w-full xsm:w-[40%] sm:w-[20%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
