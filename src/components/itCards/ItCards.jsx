import React from 'react'
import './ItCards.css'
const ItCards = () => {

    const courses = [
        {
          title: 'Training and Internship Certification in Advanced DSA',
          link: 'https://www.codingninjas.com/careercamp/student-training-cum-internship-certification-dsa/?utm_source=internal&utm_medium=internal&utm_campaign=homepage_new_courses',
          banner: 'https://files.codingninjas.com/space-gray-from-figma-1733395549.webp',
          logo: 'https://files.codingninjas.in/frame-2087323803-1731448120.svg',
          offeredBy: 'E&ICT Academy, IIT Guwahati',
          duration: '6 months',
          icons: [
            'https://files.codingninjas.com/image-7-1733478713.webp',
            'https://files.codingninjas.com/image-8-1733478712.webp',
            'https://files.codingninjas.com/image-9-1733478711.webp',
            'https://files.codingninjas.com/image-591-1733478709.webp',
          ],
        },
        {
          title: 'Training and Internship Certification in Data Analytics',
          link: 'https://www.codingninjas.com/careercamp/student-training-cum-internship-certification-data-analytics/?utm_source=internal&utm_medium=internal&utm_campaign=homepage_new_courses',
          banner: 'https://files.codingninjas.com/space-gray-from-figma-1733395549.webp',
          logo: 'https://files.codingninjas.in/frame-2087323803-1731448120.svg',
          offeredBy: 'E&ICT Academy, IIT Guwahati',
          duration: '6 months',
          icons: [
            'https://files.codingninjas.com/microsoft-excel-1727278090.webp',
            'https://files.codingninjas.com/mysql-1727278092.webp',
            'https://files.codingninjas.com/python-1727278094.webp',
            'https://files.codingninjas.com/power-bi-1727278093.webp',
          ],
        },
      ];
  return (
      
       <>
   
        <div className="wrapper flex flex-col md:flex-row gap-7 px-4 md:px-8">
          {/* Certification Course Card */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl shadow-lg w-72 "
          >
            {/* Card Header with Banner and Logo */}
            <div className="relative">
              <img
                src="https://files.codingninjas.com/space-gray-from-figma-1733395549.webp"
                alt="Course Banner"
                className="rounded-t-2xl w-full h-40 object-cover"
              />
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-1 shadow-md">
                <img
                  src="https://files.codingninjas.in/frame-2087323803-1731448120.svg"
                  alt="Course Logo"
                  className="w-12 h-12"
                />
              </div>
            </div>
    
            {/* Card Content */}
            <div className="p-6 pt-10">
              <h4 className="text-lg font-semibold text-gray-800">
                PG Certification in Data Analytics
              </h4>
              <p className="text-sm text-gray-600 mt-3">
                E&amp;ICT Academy, IIT Guwahati
              </p>
    
              {/* Footer */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t">
                {/* Icons */}
                <div className="flex items-center gap-3">
                  <img
                    src="https://files.codingninjas.com/chatgpt-home-page-v3-1733408297.webp"
                    alt="ChatGPT"
                    className="w-6 h-6"
                  />
                  <img
                    src="https://files.codingninjas.com/home-page-v3-app-1733395395.svg"
                    alt="App Icon"
                    className="w-6 h-6"
                  />
                  <img
                    src="https://files.codingninjas.com/google-analytics-1733395394.svg"
                    alt="Google Analytics"
                    className="w-6 h-6"
                  />
                </div>
    
                {/* Duration */}
                <span className="text-sm text-gray-500">6 months</span>
              </div>
            </div>
          </a>
        </div>
        {/* // ---------------div for flex It Cards------------------------- */}
        <div className="wrapper flex flex-col gap-5 p-5 md:p-8  ">
        <p className='text-white w-52 rounded-full mt-8 bg-yellow-700 px-2 py-0.5 md:px-3 md:py-1 flex items-center justify-center text-xs md:text-sm'>
        For Graduates
      </p>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-7">
          {courses.map((course, index) => (
            <a
              key={index}
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl shadow-lg "
            >
              {/* Card Header */}
              <div className="relative">
                <img
                  src={course.banner}
                  alt="Course Banner"
                  className="w-full h-40 object-cover rounded-t-2xl"
                />
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-md">
                  <img src={course.logo} alt="Course Logo" className="w-12 h-12" />
                </div>
              </div>
  
              {/* Card Content */}
              <div className="p-6 pt-10">
                <h4 className="text-lg font-semibold text-gray-800">{course.title}</h4>
                <p className="text-sm text-gray-600 mt-3">{course.offeredBy}</p>
  
                {/* Footer */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t">
                  {/* Icons */}
                  <div className="flex items-center gap-3">
                    {course.icons.map((icon, idx) => (
                      <img key={idx} src={icon} alt={`Icon ${idx}`} className="w-6 h-6" />
                    ))}
                  </div>
                  {/* Duration */}
                  <span className="text-sm text-gray-500">{course.duration}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
       
      </div>
      </>
      );
    };
    
   


export default ItCards