import React from "react";

const ClientReviewsItem = ({ item }) => {
  return (
    <>
      <p className="text-[80%] sm:text-[100%] leading-relaxed mb-20 w-[85%] sm:w-[80%] font-poppins300">
        "{item.description}"
      </p>
      <div className="w-[90%] sm:w-[70%] rounded-lg h-full flex flex-col items-stretch justify-between">
        <div className="w-full bg-[#D9D9D9] flex rounded-2xl gap-5 justify-start">
          <img
            src={item.image}
            alt=""
            className="w-[25%] rounded-2xl object-cover h-[25%]"
          />
          <div className="w-full flex flex-col items-start justify-center">
            <p className="text-2xl sm:text-3xl font-poppins500 ml-2">
              {item.name}
            </p>
            <p className="text-base font-poppins500 ml-2">{item.date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientReviewsItem;
