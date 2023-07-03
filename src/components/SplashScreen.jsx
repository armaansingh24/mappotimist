import React, { useEffect } from "react";
import logo from "../assets/navbar/logo.webp";

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
    <div className="splash-screen bg-gradient-to-r overflow-hidden from-primary to-secondary  w-screen h-screen flex items-center justify-center">
      <div className="logo overflow-hidden">
        <img src={logo} alt="Logo" className="w-[30%] mx-auto" />
      </div>
    </div>
  );
}

export default SplashScreen;
