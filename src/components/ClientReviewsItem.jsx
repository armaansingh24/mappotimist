import React from 'react'

const ClientReviewsItem = ({item}) => {
  return (
    <>
      <div className="w-[90%] sm:w-[70%] rounded-lg">
        <div className="text-[80%] sm:text-[100%] leading-relaxed mb-20 w-full">
          <p>"{item.description}"</p>
        </div>
        <div className="w-full bg-[#D9D9D9] flex rounded-2xl gap-10 xsm:gap-5 items-start">
          <img src={item.image} alt="" className="w-[25%] rounded-2xl object-cover h-[25%]" />
          <div className="w-full flex flex-col items-start justify-start">
            <p className="text-2xl sm:text-3xl font-bold ml-2">{item.name}</p>
            <p className="text-base font-bold ml-2">{item.date}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientReviewsItem