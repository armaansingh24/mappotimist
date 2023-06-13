import React from 'react'
import { useNavigate } from 'react-router-dom';

const PortfolioMobile = ({item}) => {
     const navigate = useNavigate();

     const handleReadMore = () => {
       navigate(`/portfolio/${item.id}`, { state: { item } });
     };


  return (
    <div>
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