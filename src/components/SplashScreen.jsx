import React, { useEffect } from "react";
import SplashLogo from "../assets/SplashLogo.png";

function SplashScreen() {
  useEffect(() => {
    const body = document.body;
    window.scrollTo({ top: 0, left: 0 });
    body.classList.add("no-scroll");

    return () => {
      body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div className="splash-screen bg-gradient-to-br overflow-hidden from-secondary to-secondary via-white w-screen h-screen flex items-center justify-center">
      <div className="logo overflow-hidden">
        <img src={SplashLogo} alt="Logo" className="w-[30%] mx-auto" />
      </div>
    </div>
  );
}

export default SplashScreen;
