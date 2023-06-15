import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import PortfolioSection from "../components/PortfolioSection";
import Agencies from "../components/Agencies";
import ClientReviews from "../components/ClientReviews";
import Experties from "../components/Experties";
import ContactSection from "../components/ContactSection";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="w-full bg-white flex flex-col justify-center items-center text-black text-3xl my-auto mx-auto mt-20 sm:mt-1 p-2">
        <Navbar />
        <HeroSection />
        <About />
        <PortfolioSection />
        <Agencies />
        <div className="w-screen">
          <ClientReviews />
        </div>
        <Experties />
        <ContactSection />
      </div>
    </>
  );
};

export default Home;
