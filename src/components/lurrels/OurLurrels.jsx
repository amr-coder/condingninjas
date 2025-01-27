import React, { useEffect } from "react";
import bannerImg from '../../assets/bannerImg.webp'
import './OurLurrels.css';
import SideTracker from "../sideTracker/SideTracker";
import Button from "../button/Button";
const OurLurrels = () => {     
  useEffect(() => {
    const headings = document.querySelectorAll(".heading");

    const options = {
      root: null, // Use viewport as root
      rootMargin: "0px",
      threshold: 0.5, // 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add responsive classes for larger text on different devices
          entry.target.classList.add(
            "text-white",
            "text-4xl",
            "sm:text-5xl",
            "md:text-6xl",
            "lg:text-7xl"
          );
          entry.target.classList.remove(
            "text-gray-500",
            "text-3xl",
            "sm:text-4xl",
            "md:text-5xl",
            "lg:text-6xl"
          );

          // Reset other headings to default size and color
          headings.forEach((heading) => {
            if (heading !== entry.target) {
              heading.classList.remove(
                "text-white",
                "text-4xl",
                "sm:text-5xl",
                "md:text-6xl",
                "lg:text-7xl"
              );
              heading.classList.add(
                "text-gray-500",
                "text-3xl",
                "sm:text-4xl",
                "md:text-5xl",
                "lg:text-6xl"
              );
            }
          });
        }
      });
    }, options);

    // Observe all headings
    headings.forEach((heading) => observer.observe(heading));

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
    <div className="h-full">
       <img
         src={bannerImg}
         alt="Banner"
         className="w-full  object-cover"
       />
    </div>
    <div className="min-h-screen flex flex-col justify-center items-center pt-32 component">
      <h2
        id="heading1"
        className="heading text-gray-500 text-6xl font-bold transition-all duration-300"
      >
       9 years of
      </h2>
      <h2
        id="heading2"
        className="heading text-gray-500 text-6xl font-bold transition-all duration-300"
      >
        transforming
      </h2>
      <h2
        id="heading3"
        className="heading text-gray-500 text-6xl font-bold transition-all duration-300"
      >
       tech careers
      </h2>
      <div
        id="heading3"
        className="heading text-gray-500 text-6xl font-bold transition-all duration-300"
      >
           <div className="flex justify-center item-center flex-col bg-indigo-600 rounded-xl b-20 mt-20 m-5">
              <img src="https://files.codingninjas.com/learner-32929.svg" alt="" className="h-20 w-20"/>
              
           </div>
           
      </div>
      <h1  className="heading text-gray-500   transition-all duration-300 font-bold text-6xl">1.5 Lac+ learners</h1>
       <p  className=" text-gray-500  text-3xl ">cracked dream roles at top tech companies</p>
       <SideTracker/>
       <div
        id="heading3"
        className="heading text-gray-500 text-6xl font-bold transition-all duration-300"
      >
           <div className="flex justify-center item-center flex-col bg-green-600 rounded-xl b-20 mt-20 m-5">
              <img src="https://files.codingninjas.in/placement-cell-fill-32935.svg" alt="" className="h-20 w-20"/>
              
           </div>
           
      </div>
      <h1  className="heading text-gray-500   transition-all duration-300 font-bold text-6xl">1,400 Alumni in MAANG</h1>
       <p  className=" text-gray-500  text-3xl ">& more in 103/111 Unicorns</p>
       <SideTracker/>
       <div
        id="heading3"
        className="heading  text-6xl font-bold transition-all duration-300"
      >
       <div className="flex justify-center item-center flex-col bg-pink-400 rounded-xl b-20 mt-20 m-5">
              <img src="https://files.codingninjas.com/average-ctc-fill-33072.svg" alt="" className="h-20 w-20 "/>
              
           </div>
           
      </div>
      <h1  className="heading text-gray-500   transition-all duration-300 font-bold text-6xl">1 Cr+ highest CTC</h1><br />
       <p  className=" text-gray-500  text-3xl ">after completing the course</p>
       <SideTracker/>
       <div
        id="heading3"
        className="heading  text-6xl font-bold transition-all duration-300"
      >
       <div className="flex justify-center item-center flex-col bg-blue-500 rounded-xl b-20 mt-20 m-5">
              <img src="https://files.codingninjas.com/hike-32944.svg" alt="" className="h-20 w-20 "/>
              
           </div>
           
      </div>
      <h1  className="heading text-gray-500   transition-all duration-300 font-bold text-6xl">128% average hike</h1><br />
       <p  className=" text-gray-500  text-3xl ">via our placement cell</p>
       <br /><br /><br />
       <Button/>
    </div>
    
  </>
    
    
  )
}

export default OurLurrels