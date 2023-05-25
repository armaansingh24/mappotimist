import React from "react";
import HeroSection from "../components/HeroSection";
// import './components/Component.css'

const Home = () => {
  return (
    <div className=" w-full flex justify-center items-center text-black text-3xl my-auto mx-auto mt-20 sm:mt-1 p-2 ">
      <HeroSection />
      {/* <div class="waves">
        <div class="wave wave1"></div>
      </div> */}
    </div>
  );
};

export default Home;
