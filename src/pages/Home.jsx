import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
// import './components/Component.css'

const Home = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center text-black text-3xl my-auto mx-auto mt-20 sm:mt-1 p-2">
        <HeroSection />
        {/* <About /> */}
      </div>
    </>
  );
};

export default Home;
