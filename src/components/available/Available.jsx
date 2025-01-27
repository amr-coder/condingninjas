import React, { useEffect } from "react";
import bannerImg from '../../assets/bannerImg.webp'

const Available = () => {
    useEffect(() => {
        const headings = document.querySelectorAll(".headings");
    
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
                "text-yellow-600",
                "text-6xl",
                "sm:text-2xl",
                "md:text-3xl",
                "lg:text-5xl"
              );
              entry.target.classList.remove(
                "text-gray-500",
                "text-6xl",
                "sm:text-2xl",
                "md:text-3xl",
                "lg:text-5xl"
              );
    
              // Reset other headings to default size and color
              headings.forEach((heading) => {
                if (heading !== entry.target) {
                  heading.classList.remove(
                    "text-yellow-600",
                    "text-6xl",
                    "sm:text-2xl",
                    "md:text-3xl",
                    "lg:text-5xl"
                  );
                  heading.classList.add(
                    "text-gray-500",
                    "text-6xl",
                    "sm:text-2xl",
                    "md:text-3xl",
                    "lg:text-5xl"
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
    <div className="min-h-screen flex flex-col justify-center items-start pt-22 gap-64 component pb-0 py-16 px-32">

      <h1  className="headings text-gray-500   transition-all duration-300 font-bold text-5xl">Resolve doubts any time through chat, voice notes or calling.</h1>
       
      
      <h1  className="headings text-gray-500   transition-all duration-300 font-bold text-5xl">500+ dedicated Teaching Assistants to resolve  your doubts quickly</h1>
       
      <h1  className="headings text-gray-500   transition-all duration-300 font-bold text-5xl">5/5 rating for 90% doubt resolutions</h1><br />
       
     
     
     
    </div>
   
   </>
  )
}

export default Available