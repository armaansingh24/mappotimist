import React from 'react';
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';
import { Routes,Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="w-full mx-auto relative overflow-hidden">
        <div className=" mx-auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
