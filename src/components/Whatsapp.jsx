import React from "react";
import { useEffect, useState } from "react";
import whatsapp from "../assets/whatsapp.png";

const Whatsapp = () => {
  const [isVisiable, setIsVisiable] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisiable(true);
    } else {
      setIsVisiable(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);
  return (
    <>
      {isVisiable && (
        <div>
          <a
            href="https://wa.me/918171977577?text="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={whatsapp}
              alt=""
              className="w-12 sm:w-20 flex justify-center items-center rounded-full fixed bottom-10 sm:bottom-20 left-2 sm:left-6 z-40 cursor-pointer"
            />
          </a>
        </div>
      )}
    </>
  );
};

export default Whatsapp;
