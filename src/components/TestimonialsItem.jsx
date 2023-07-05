import React from "react";
import { AiFillStar } from "react-icons/ai";

const TestimonialsItem = ({ testimonial }) => {
  const stars = [];

  for (let i = 0; i < testimonial.rating; i++) {
    stars.push(<AiFillStar className="text-yellow-400" />);
  }
  for (let i = 0; i < 5 - testimonial.rating; i++) {
    stars.push(<AiFillStar className="text-[#7F838D]" />);
  }

  return (
    <div className="bg-[#FDFFE0]  sm:p-5 rounded-3xl mx-4 h-[20rem] midxs:h-[17rem] shadow-xl mb-10">
      <div className="flex flex-col p-4 gap-4">
        <div className="flex justify-between items-center">
          <div className="rounded-full flex items-center justify-start gap-4">
            <img
              src={testimonial.image}
              alt=""
              className="rounded-full w-[12%]"
            />
            <p className="text-sm sm:text-lg font-poppins">
              {testimonial.name}
            </p>
          </div>
          <div className="flex">
            {stars.map((star) => {
              return star;
            })}
          </div>
        </div>
        <div className="text-sm font-poppins500 flex flex-col gap-2">
          <p>{testimonial.testimonial}</p>
          <p className="text-sm text-gray-400 italic">
            Date: {testimonial.date} <sup>th</sup> {testimonial.monthYear}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsItem;
