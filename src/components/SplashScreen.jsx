import React, { useEffect } from "react";
import SplashLogo from "../assets/SplashLogo.gif";

function SplashScreen() {
  useEffect(() => {
    // Disable scrolling on mount
    document.body.style.overflow = "hidden";

    // Enable scrolling on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className=" bg-gradient-to-br overflow-hidden from-secondary to-secondary via-white w-screen h-screen flex items-center justify-center">
      <div className="logo overflow-hidden">
        <img src={SplashLogo} alt="Logo" className="w-[30%] mx-auto" />
      </div>
    </div>
  );
}

export default SplashScreen;
