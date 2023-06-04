import React from 'react'

const ClientReviewsItem = ({item}) => {
  return (
    <>
      <div className="w-[70%] rounded-lg">
        <div className="text-[100%] leading-relaxed mb-20 w-full">
          <p>"{item.description}"</p>
        </div>
        <div className="w-full bg-[#D9D9D9] flex rounded-2xl gap-5">
          <img src={item.image} alt="" className="w-[25%] rounded-2xl" />
          <div className="w-full flex flex-col items-start justify-center">
            <p className="text-3xl font-bold">{item.name}</p>
            <p className="text-base font-bold">{item.date}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientReviewsItem