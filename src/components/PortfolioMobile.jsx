import React from 'react'
import { useNavigate } from 'react-router-dom';

const PortfolioMobile = ({item}) => {
     const navigate = useNavigate();

     const handleReadMore = () => {
      console.log(item.id);
       navigate(`/portfolio/${item.id}`, { state: { item } });
     };


  return (
    <div className="relative z-40">
      <img
        src={item.image}
        alt="slide_image"
        className="w-[80%]  p-5 mr-0 ml-7"
        onClick={handleReadMore}
      />
    </div>
  );
}

export default PortfolioMobile