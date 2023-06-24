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
import { useEffect } from 'react';

function App() {
  return (
    <>
      <div className="w-full mx-auto relative overflow-hidden scroll-smooth">
        <div className=" mx-auto">
          <>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio/:itemId" element={<PortfolioPage />} />
              <Route path="/orc-icr" element={<OcrIcr />} />
            </Routes>
          </>
          {/* <GoToTop />
          <Whatsapp /> */}
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
