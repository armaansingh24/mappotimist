import React from "react";
import PortfolioCarausel from "./PortfolioCarausel";

const PortfolioSection = (props) => {
  return (
    <>
      <div
        className="bg-gradient-to-r from-secondary to-primary w-screen"
        id="Portfolio"
      >
        <div className="w-[90%] mx-auto p-10">
          <h2 className="font-poppins text-[30px] lmd:text-[48px] flex gap-2 flex-wrap mt-6">
            Our Portfolios
          </h2>
        </div>
        <div className="mx-auto ">
          <PortfolioCarausel props={props} page={""} />
        </div>
      </div>
    </>
  );
};

export default PortfolioSection;
