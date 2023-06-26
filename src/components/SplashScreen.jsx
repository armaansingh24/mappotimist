import React from "react";
import logo from "../assets/navbar/logo.webp"

function SplashScreen({ logoSrc }) {
  return (
    <div className="splash bg-gradient-to-br from-secondary to-secondary via-white w-screen h-screen flex items-center justify-center">
      <div className="logo">
        <img src={logo} alt="Logo" className="w-[50%] mx-auto" />
      </div>
    </div>
  );
}

export default SplashScreen;
