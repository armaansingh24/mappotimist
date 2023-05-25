import React from 'react';
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';
import { Routes,Route } from 'react-router-dom';
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className='w-full max-w-7xl mx-auto p-4 relative overflow-hidden'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
