import React from 'react'
import './SideTracker.css';
const SideTracker = () => {
  return (
   <>
   <div className="wrappered h-auto w-auto pt-16">
   
    <div className='left-scroll-animation hidden md:block'>
      <div className="sideTrackers"></div>
    </div>
  </div>

  {/* <div className="pt-8 top-0 flex mb-0 flex-col md:flex-row gap-4 md:gap-8 wrapper">
    <div className="top-[275px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <img
        src="https://files.codingninjas.com/bootcampicon-32524.svg"
        alt="Side tracker notch icon"
        className="h-18 w-18 md:h-20 md:w-20"
      />
    </div>
    </div> */}
   </>
  );
};

export default SideTracker;
