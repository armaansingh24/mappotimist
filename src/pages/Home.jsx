import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import PortfolioSection from "../components/PortfolioSection";
import Agencies from "../components/Agencies";
import ClientReviews from "../components/ClientReviews";
import Developer from "../components/Developer";
import Experties from "../components/Experties";
import ContactSection from "../components/ContactSection";


const Home = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center text-black text-3xl my-auto mx-auto  bg-[#F7F5F8]">
        <HeroSection />
        <About />
        <PortfolioSection />
        <Agencies />
        <Developer />
        <ClientReviews />
        <Experties />
        <ContactSection />
      </div>
    </>
  );
};

export default Home;
