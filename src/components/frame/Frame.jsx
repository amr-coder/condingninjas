import React from 'react'
import './Frame.css';
import iconBootCamp from'../../assets/bootcamp.svg'
const Frame = () => {
  return (
    <>
     
  <section className="container bg-orange-50">
  <div className="wrapper h-auto w-auto pt-16">
    <h1 className='flex items-center justify-center text-4xl md:text-6xl lg:text-7xl xl:text-8xl pb-8 md:pb-16 font-bold text-neutral-300 text-center leading-tight'>
      OUR OFFERINGS
    </h1>
    <div className='left-scroll-animation hidden md:block'>
      <div className="sideTracker"></div>
    </div>
  </div>

  <div className="pt-8 top-0 flex mb-0 flex-col md:flex-row gap-4 md:gap-8 wrapper">
    <div className="top-[275px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <img
        src="https://files.codingninjas.com/bootcampicon-32524.svg"
        alt="Side tracker notch icon"
        className="h-18 w-18 md:h-20 md:w-20"
      />
    </div>

    <div className="frame-icon-text gap-3 md:gap-4 flex items-center ml-2 md:ml-4">
      <p className='font-bold text-sm md:text-lg'>Job Bootcamp</p>
      <p className='bg-blue-100 rounded-r-full text-gray-900 px-2 py-0.5 md:px-3 md:py-1 flex items-center justify-center text-xs md:text-sm'>
        For Graduates
      </p>
    </div>
  </div>
   {/* --------------------check chat gpt code-------------------------- */}
   <div className="relative container wrapper  bg-orange-50">
   <div className='left-scroll-animation hidden md:block'>
      <div className="sideTracker"></div>
    </div>
    
      {/* Courses Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-12">
        {/* Full Stack Web Development */}
        <a
          href="https://www.codingninjas.com/job-bootcamp-web-development?utm_source=internal&utm_medium=internal&utm_campaign=homepage_new_courses"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-1/3 bg-white rounded-lg shadow-lg transform  transition-transform"
        >
          <div className="flex items-center bg-indigo-50 gap-4 px-6 py-8">
            <img
              src="https://files.codingninjas.com/layer-1-1734090969.svg"
              alt="Full Stack Web Development"
              className="h-14 w-14  bg-white rounded-full"
            />
            <h3 className="text-xl font-semibold">Full Stack Web Development</h3>
          </div>
          <div className="flex justify-between px-6 py-4 bg-gray-100 rounded-b-lg text-sm text-gray-600">
            <span>140+ Hrs of content</span>
            <span>600+ Problems</span>
            <span>10k+ Learners</span>
          </div>
        </a>

        {/* Data Analytics */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-1/3 bg-white rounded-lg shadow-lg transform  transition-transform"
        >
          <div className="flex items-center bg-indigo-50 gap-4 px-6 py-8">
            <img
              src="https://files.codingninjas.com/data-analytics-1-1734090968.svg"
              alt="Data Analytics"
              className="h-14 w-14 bg-white rounded-full "
            />
            <h3 className="text-xl font-semibold">Data Analytics</h3>
          </div>
          <div className="flex justify-between px-6 py-4 bg-gray-100 rounded-b-lg text-sm text-gray-600">
            <span>100+ Hrs of content</span>
            <span>300+ Problems</span>
            <span>2000+ Learners</span>
          </div>
        </a>
      </div>
    </div>
    <div className="section-2 mt-10">
    <div className="pt-8 mt-8 top-0 flex flex-col md:flex-row gap-4 md:gap-8 wrapper">
    <div className="top-[275px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <img
        src="https://files.codingninjas.com/frame-1000004112-1733471037.svg"
        alt="Side tracker notch icon"
        className="h-18 w-18 md:h-20 md:w-20"
      />
    </div>

    <div className=" gap-3  md:gap-4 flex flex-col items-center ml-2 md:ml-4">
      <p className='font-bold text-sm md:text-lg'>IT Certifications</p>
      <p className='text-white rounded-full mt-8 bg-yellow-700 px-2 py-0.5 md:px-3 md:py-1 flex items-center justify-center text-xs md:text-sm'>
        For Graduates
      </p>
    </div>
    </div>
    </div>
</section>
  
   

       
    </>
    
  )
}

export default Frame