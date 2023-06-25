import React from 'react'

const Wave = () => {
  return (
    <>
      <div className="w-screen relative z-0 bg-secondary">
        <div className="waves w-screen bg-gradient-to-r from-secondary  to-white">
          <div className="wave wave3"></div>
        </div>
      </div>
    </>
  );
}

export default Wave;