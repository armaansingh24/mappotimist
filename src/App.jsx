import React from 'react';
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';
import { Routes,Route } from 'react-router-dom';
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="w-full mx-auto relative overflow-hidden">
        <div className="max-w-[90%] mx-auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
