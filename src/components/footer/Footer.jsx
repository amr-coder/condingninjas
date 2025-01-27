import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
   <>
       <footer className="pt-24 pb-40 py-20 md:py-10 footer text-white  flex items-center">
    <div className="max-w-7xl mx-auto px-6 md:px-4 border-l-2">
      <div className="flex flex-col md:flex-row  gap-10">
        <div className="flex flex-col gap-8">
          <img
            src="https://files.codingninjas.com/new-cn-logos-31142.svg"
            alt="CN logo"
            className="w-36 h-7"
          />
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold">Contact us</h4>
            <div className="flex items-center gap-4">
              <img src="https://files.codingninjas.com/phone-31845.svg" alt="Phone" className="w-6 h-6" />
              <a href="tel:1800-123-3598" className="text-white">1800-123-3598</a>
            </div>
            <div className="flex items-center gap-4">
              <img src="https://files.codingninjas.com/email-fill-31846.svg" alt="Email" className="w-6 h-6" />
              <a href="mailto:contact@codingninjas.com" className="text-white">contact@codingninjas.com</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-20">
          <div>
            <h4 className="text-lg font-semibold mb-4">Coding Ninjas</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white">Careers</a></li>
              <li><a href="#" className="text-white">Privacy policy</a></li>
              <li><a href="#" className="text-white">Terms & conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white">Job Bootcamp</a></li>
              <li><a href="#" className="text-white">Code 360</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t pt-6">
        <p className="text-sm text-gray-500">Copyright &copy; Sunrise Mentors Pvt. Ltd.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#"><img src="https://files.codingninjas.com/group-48095591-31840.svg" alt="Instagram" className="w-7 h-7" /></a>
          <a href="#"><img src="https://files.codingninjas.com/app-facebook-1-31841.svg" alt="Facebook" className="w-8 h-8" /></a>
          <a href="#"><img src="https://files.codingninjas.com/app-twiter-31844.svg" alt="Twitter" className="w-7 h-7" /></a>
        </div>
      </div>
    </div>
  </footer>
  
   
   </>
  )
}

export default Footer