import React from 'react'
import SplashLogo from "../assets/SplashLogo.gif";
const Loader = () => {
  return (
    <div className=" bg-gradient-to-br overflow-hidden from-secondary to-secondary via-white w-screen h-screen flex items-center justify-center">
      <div className="overflow-hidden">
        <img src={SplashLogo} alt="Logo" className="w-[30%] mx-auto" />
      </div>
    </div>
  );
}

export default Loader