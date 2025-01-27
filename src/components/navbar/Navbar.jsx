import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import logo from '../../assets/codingninjas.svg'
import Card from "../card/Card";
import ColgeCard from "../card/ColgeCard";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-gray-100 text-black">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Hamburger icon for mobile */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Logo and Navigation Items */}
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
               <img src={logo} alt="" className="h-28 w-28 "/>
              <div className="hidden sm:block sm:ml-6 ">
                 <div  className="flex space-x-4 mt-9">
                      {/* Dropdown */}
                  <div className="relative group">
                    <button className="text-black flex px-3 py-2 rounded-md text-sm font-medium">
                      Job Bootcamp
                       <FaCaretDown className="text-black mb-1 text-lg" />
                    </button>

                    {/* Dropdown content (hidden by default, shown on hover) */}
                    <div className="absolute left-0 hidden bg-white shadow-lg rounded-md w-96 group-hover:block">
                      <a
                        href="#"
                        className="block px-3 py-2 w-96 "
                      >
                       <Card/>
                      </a>
                      
                    </div>
                  </div>
                  <div className="relative group">
                    <button className="text-black flex  px-3 py-2 rounded-md text-sm font-medium">
                      IT Certificate
                       <FaCaretDown className="text-black mb-1 text-lg" />
                    </button>

                    {/* Dropdown content (hidden by default, shown on hover) */}
                    <div className="absolute left-0 hidden bg-white shadow-lg rounded-md w-96 group-hover:block">
                      <a
                        href="#"
                        className="block px-3 py-2 w-96"
                      >
                        <ColgeCard/>
                        
                      </a>
                      
                    </div>
                  </div>

                 
                  
                  

                </div>
                
              </div>
                  
            </div>
                  <div class="relative p-4 flex items-center justify-center">
                     <button class="absolute right-0 rounded  bg-red-500 text-xl text-white p-2 px-3">login</button>
                  </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
           
            <div className="relative group">
              <button className="text-black  bg-white rounded-md text-sm font-medium">
              Job Bootcamp
              </button>

              {/* Dropdown content */}
              <div className="absolute left-0 hidden  text-black shadow-lg rounded-md w-96 group-hover:block">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm  bg-white hover:bg-gray-200"
                >
                  <Card/>
                </a>
               
              </div>
            </div>
            <div className="relative group">
              <button className="text-black   rounded-md text-sm font-medium">
              IT Certificate
              </button>

              {/* Dropdown content */}
              <div className="absolute left-0 hidden bg-white text-black shadow-lg rounded-md w-96 group-hover:block">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-200"
                >
                 <ColgeCard/>
                </a>
                
              </div>
            </div>
              
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
