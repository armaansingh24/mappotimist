import React from "react";
import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage";
import OcrIcr from "./pages/OcrIcr";
import { Route, Routes,useLocation } from "react-router-dom";
import GoToTop from "./components/GoToTop";
import Whatsapp from "./components/Whatsapp";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {showSplash && <SplashScreen />}
      <div className="w-full mx-auto relative overflow-hidden scroll-smooth bg-white">
        <div className={`mx-auto ${showSplash ? "opacity-0" : "opacity-[1]"}`}>
          <>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio/:itemId" element={<PortfolioPage />} />
              <Route path="/orc-icr" element={<OcrIcr />} />
            </Routes>
          </>
          <GoToTop />
          <Whatsapp />
          <Footer />
        </div>
      </div>
    </>
  );
}
export default App;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}