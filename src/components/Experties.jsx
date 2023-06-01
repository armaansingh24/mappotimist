import React from "react";
import {expertiseItem} from "../constants/index";
import ExpertiseItem from "./ExpertiseItem";
import { useState } from "react";

const Experties = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleDivHeight = () => {
      setExpanded(!expanded);
    };
  return (
    <>
      <div className="mt-10 w-full">
        <h2 className="text-bold">Experties</h2>
        <div
          className={`grid grid-cols-2 gap-4 justify-between items-center mt-10 overflow-hidden ${
            expanded ? "h-full " : "h-[45rem]"
          }`}
        >
          {expertiseItem.map((item) => (
            <ExpertiseItem key={item.id} item={item} />
          ))}
        </div>
        <div className="mt-10 mx-auto w-full">
          <p onClick={toggleDivHeight} className="cursor-pointer text-center">
            {expanded ? "View Less" : "View More"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Experties;
