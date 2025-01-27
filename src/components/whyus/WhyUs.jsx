import React from 'react'
import liveOne from '../../assets/live-one.png';
import standford from '../../assets/stanford.png';
import placement from '../../assets/placement.png';

import './WhyUs.css';
const WhyUs = () => {
  return (
    <>
        
        <div className="container-whyUs flex flex-col items-center justify-center px-4 md:px-8 lg:px-16">
  <img
    src="https://files.codingninjas.com/why-us-mobile-33890.svg"
    alt=""
    className="w-full md:w-2/3 mt-16 md:mt-32"
  />
  <div className="row flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-x-36 mt-16 md:mt-36">
    <div className="p-2 col-6 video-containers pb-3 w-full lg:w-1/2">
      <div className="relative video-container">
        <video
          id="whyus-video"
          playsInline
          muted
          className="h-[240px] md:h-[340px] w-full rounded-lg"
          src="https://files.codingninjas.com/1-1-doubt-support-with-subtitle-2-33136.mp4"
        ></video>
        <div
          id="volume-button"
          className="absolute top-2 right-2 flex flex-col justify-center items-center h-8 w-10"
        >
          <div
            role="img"
            aria-label="Volume button"
            className="h-6 w-6 bg-gray-600 rounded-full muted"
          ></div>
        </div>
      </div>

      <div className="flex flex-row  mt-6 md:mt-12 mb-6 md:mb-12 items-center justify-between">
        <div className="flex flex-col gap-2 md:gap-4">
          <div className="text-xl text-orange-500 md:text-lg font-semibold">Ankush Singla</div>
          <div className="text-base text-gray-500 ">
            Co-Founder of Coding Ninjas | Mentor
          </div>
        </div>

        <div className="relative h-8 md:h-10 w-8 md:w-10 rounded-full">
          <div
            className="h-full w-full rounded-full"
            style={{ background: 'conic-gradient(rgb(131, 132, 133) 33.6661%, rgb(26, 26, 26) 0deg)' }}
          ></div>
          <div
            id="progress-inner"
            className="h-7 md:h-9 w-7 md:w-9 flex flex-col justify-center items-center text-xs md:text-sm absolute top-0 left-0 rounded-full bg-white"
          >
            19
          </div>
        </div>
      </div>
    </div>

    <div className="col-6 w-full lg:w-1/2">
      <div className="row flex flex-col items-center lg:items-start">
        <div className="icons-text-grid h-16 w-full md:w-80 bg-gray-700 rounded mb-6 md:mb-16 p-3 flex items-center justify-start text-white text-lg md:text-xl font-thin">
          <img src={liveOne} alt="" className="h-10 md:h-12 w-10 md:w-12" />
          Fastest 1:1 doubt support
        </div>
        <div className="icons-text-grid h-16 w-full md:w-80 bg-gray-700 rounded mb-6 md:mb-16 p-3 flex items-center justify-start text-white text-lg md:text-xl font-thin">
          <img src={standford} alt="" className="h-10 md:h-12 w-10 md:w-12" />
          Stanford/IIT/MAANG faculty
        </div>
        <div className="icons-text-grid h-16 w-full md:w-80 bg-gray-700 rounded mb-6 md:mb-16 p-3 flex items-center justify-start text-white text-lg md:text-xl font-thin">
          <img src={placement} alt="" className="h-10 md:h-12 w-10 md:w-12" />
          Placement assistance
        </div>
      </div>
    </div>
  </div>
  {/* ------------------------- table make it responsible on mobile size---------------------------------------- */}
<div className="advantages-section-wrapper pt-44 pb-30 py-24 px-4  w-3/4">
      <div className="content-grid text-center">
        <h2 className="text-2xl font-semibold mb-8 text-blue-700">The Coding Ninjas Advantage</h2>
        <div className="my-11 md:my-11 advantages border-2 p-6 rounded-2xl">
          <table className="w-full text-left h-80 text-white">
            <thead>
              <tr className="table-header py-8 px-4">
                <th></th>
                <th className="py-8 px-10">
                  <img src="https://files.codingninjas.com/new-cn-logos-32028.svg" alt="CN logo" className="w-8 h-8" />
                </th>
                <th className='font-semibold text-base'>Free resources</th>
                <th className='font-semibold text-base'>Other courses</th>
              </tr>
            </thead>
            <tbody>
              {[
                "Structured + problem solving based",
                "Fastest 1:1 doubt support",
                "Integrated prep platform",
                "Profiles highlighted on Naukri",
              ].map((item, index) => (
                <tr key={index} className="p-16 px-8 border-b">
                  <td className="pl-8 text-base">{item}</td>
                  <td className='pl-10'>
                    <img src="https://files.codingninjas.com/check-fill-32029.svg" alt="Checked icon" className="w-5 h-5 " />
                  </td>
                  <td className='pl-8'>
                    <span className="material-icons text-red-500"><svg
      className="w-6 h-6 text-gray-600"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg></span>
                  </td>
                  <td className='pl-8'>
                    <span className="material-icons text-green-500"><svg
      className="w-6 h-6 text-gray-600"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg></span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="my-4 mt-10">
          <img src="https://files.codingninjas.in/cn-advantage-line-32174.svg" alt="divider line" className="w-full h-2" />
        </div>
        <div className="progress-bar-container py-9 mb-2 px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 mb-3">
            <img src="https://files.codingninjas.com/new-cn-logos-31142.svg" alt="CN logo" className="w-36 h-6" />
            <div className="flex items-center gap-2 text-sm font-bold bg-gradient-to-r  from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">Your dream role, faster and with confidence!
              <img src="https://files.codingninjas.com/fi_3649458-32034.svg" alt="Lightning icon" className="w-4 h-4" />
            </div>
          </div>
          <div className="bg-gray-300 h-1 w-full">
            <div className="bg-gradient-to-r  from-purple-500 via-pink-500 to-yellow-500  h-1 w-4/5"></div>
          </div>
        </div>
        <div className="progress-bar-container py-9  px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 text-sm font-bold text-white">Others
              
              </div>
            <div className="flex items-center gap-2 text-sm  text-gray-400">Average role, under-confident

              
            </div>
          </div>
          <div className="bg-gray-500 h-1 w-full">
            <div className="bg-white   h-1 w-4/5"></div>
          </div>
        </div>
        </div>
     
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6 items-center">
          <button className="bg-orange-700 text-white py-3 px-6 rounded-lg text-lg font-semibold">
            Explore Offerings
            <img src="https://files.codingninjas.com/arrow-double-down-32073.svg" alt="Double arrow down" className="inline ml-2 w-6 h-6 rotate-180" />
          </button>
        </div>
      </div>
    </div>
</div>


    </>
  )
}

export default WhyUs