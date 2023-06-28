import React from "react";
import { useNavigate } from "react-router-dom";

const PortfolioMobile = ({ item }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {

    navigate(`/portfolio/${item.id}`);
  };
  return (
    <div className="relative z-60">
      <img
        src={item.image}
        alt="slide_image"
        className={`${
          item.id === "Website1" || item.id === "Website2"
            ? "w-[68%] mt-44 mx-auto"
            : " w-[80%]  p-5 mr-0 ml-7  z-50"
        }`}
        onClick={handleReadMore}
      />
    </div>
  );
};

export default PortfolioMobile;
