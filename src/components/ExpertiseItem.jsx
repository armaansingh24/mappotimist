import React from 'react'

const ExpertiseItem = ({item}) => {
  return (
    <div className=" flex mx-auto items-center flex-col gap-0">
      <img src={item.image} alt="" className="w-[30%]" />
      <p className="text-[50%]">{item.name}</p>
      <p className="text-[30%] leading-3 text-center">{item.desc}</p>
    </div>
  );
}

export default ExpertiseItem