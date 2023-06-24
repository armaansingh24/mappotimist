import React from 'react'
import whatsapp from "../assets/whatsapp.gif"
const Whatsapp = () => {
  return (
    <>
      <div>
        <a
          href="https://wa.me/918171977577?text="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={whatsapp}
            alt=""
            className="w-20 flex justify-center items-center rounded-full fixed bottom-20 left-6 z-40 cursor-pointer"
          />
        </a>
      </div>
    </>
  );
}

export default Whatsapp