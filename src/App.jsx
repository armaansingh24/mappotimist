import React from 'react';
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';
import OcrIcr from './pages/OcrIcr';
import {
  
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import GoToTop from './components/GoToTop';
import Whatsapp from './components/Whatsapp';
import Footer from './components/Footer';
import { useEffect,useState } from 'react';
import SplashScreen from "./components/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Simulate a delay before hiding the splash screen
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <div className="w-full mx-auto relative overflow-hidden scroll-smooth bg-white">
      {showSplash && <SplashScreen/>}
        <div className={`mx-auto ${showSplash?"opacity-0":"opacity-[1]"}`}>
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
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location]);

  return null;
}

export default App;
