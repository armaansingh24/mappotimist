import React, { useEffect } from "react";
import logo from "../assets/navbar/logo.webp";

function SplashScreen() {
//   useEffect(() => {
//     // Disable scrolling on mount
//     document.body.style.overflow = "hidden";

//     // Enable scrolling on unmount
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, []);

  return (
    <div className=" bg-gradient-to-br overflow-hidden from-secondary to-secondary via-white w-screen h-screen flex items-center justify-center">
      <div className="logo overflow-hidden">
        <img src={logo} alt="Logo" className="w-[30%] mx-auto" />
      </div>
    </div>
  );
}

export default SplashScreen;
