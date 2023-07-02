import React from 'react'
import { AiFillStar } from "react-icons/ai";

const TestimonialsItem = ({ testimonial }) => {
  return (
    <div className="bg-[#FDFFE0]  p-10 rounded-3xl mx-4">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="rounded-full">
            <img
              src={testimonial.image}
              alt=""
              className="rounded-full w-[30%]"
            />
          </div>
          <div className="flex ">
            <AiFillStar className="text-yellow-400" />
            <AiFillStar className="text-yellow-400" />
            <AiFillStar className="text-yellow-400" />
            <AiFillStar className="text-yellow-400" />
            <AiFillStar className="text-yellow-400" />
          </div>
        </div>
        <div className="text-lg font-poppins500 flex flex-col gap-2">
          <p>{testimonial.testimonial}</p>
          <p>Date: {testimonial.date}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsItem