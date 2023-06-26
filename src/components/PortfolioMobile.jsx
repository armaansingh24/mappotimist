import React from "react";
import { useNavigate } from "react-router-dom";

const PortfolioMobile = ({ item }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/splash");
    const timer = setTimeout(() => {
      navigate(`/portfolio/${item.id}`, { state: { item } });
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  };
  return (
    <div className="relative z-60">
      <img
        src={item.image}
        alt="slide_image"
        className={`${
          item.id === 4 || item.id === 5 ? "w-[68%] mt-44 mx-auto" : " w-[80%]  p-5 mr-0 ml-7  z-50"
        }`}
        onClick={handleReadMore}
      />
    </div>
  );
};

export default PortfolioMobile;
