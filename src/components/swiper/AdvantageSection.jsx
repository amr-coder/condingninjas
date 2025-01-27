import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Paypal from '../../assets/paypal.png';
const AdvantageSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: 'linear'
  };

  return (
     <>
            <div className="flex items-center justify-center relative mb-11 mt-16">
        <h2 className="text-2xl font-semibold text-black">Our Ninjas at top tech companies</h2>
        <div className="absolute right-0 cursor-pointer">
          <button className=" text-orange-600 px-6 py-2 rounded-md flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 13l-4-4 4-4" />
              <path d="M5 17l4-4-4-4" />
            </svg>
            <span>Download placement report</span>
          </button>
        </div>
      </div>
      <div className="advantage-section">
      <Slider {...settings}>
        <div>
        <div className="absolute top-0 left-0 w-8 h-8 rounded-full overflow-hidden">
                  <img
                    alt=""
                    className="w-full h-full object-cover"
                    src={Paypal}
                  />
                </div>
                <div className="bg-white border-2 border-gray-300 rounded-xl py-4 px-2 flex flex-col items-center gap-3">
                  <div className="w-24 h-24 mb-4">
                    <img
                      alt=""
                      className="w-full h-full object-contain"
                      src="https://files.codingninjas.com/amitesh_paypal-32683.png"
                    />
                  </div>
                  <div className="text-sm font-semibold">CS/IT</div>
                </div>
        </div>
        <div>
        <div className="absolute top-0 left-0 w-8 h-8 rounded-full overflow-hidden">
                  <img
                    alt=""
                    className="w-full h-full object-cover"
                    src={Paypal}
                  />
                </div>
                <div className="bg-white border-2 border-gray-300 rounded-xl py-4 px-2 flex flex-col items-center gap-3">
                  <div className="w-24 h-24 mb-4">
                    <img
                      alt=""
                      className="w-full h-full object-contain"
                      src="https://files.codingninjas.com/kashish_google-32687.png"
                    />
                  </div>
                  <div className="text-sm font-semibold">CS/IT</div>
                </div>
        </div>
        <div>
        <div className="absolute top-0 left-0 w-8 h-8 rounded-full overflow-hidden">
                  <img
                    alt=""
                    className="w-full h-full object-cover"
                    src={Paypal}
                  />
                </div>
                <div className="bg-white border-2 border-gray-300 rounded-xl py-4 px-2 flex flex-col items-center gap-3">
                  <div className="w-24 h-24 mb-4">
                    <img
                      alt=""
                      className="w-full h-full object-contain"
                      src="https://files.codingninjas.com/yash_aws-32699.png"
                    />
                  </div>
                  <div className="text-sm font-semibold">CS/IT</div>
                </div>
        </div>
        <div>
        <div className="absolute top-0 left-0 w-8 h-8 rounded-full overflow-hidden">
                  <img
                    alt=""
                    className="w-full h-full object-cover"
                    src={Paypal}
                  />
                </div>
                <div className="bg-white border-2 border-gray-300 rounded-xl py-4 px-2 flex flex-col items-center gap-3">
                  <div className="w-24 h-24 mb-4">
                    <img
                      alt=""
                      className="w-full h-full object-contain"
                      src="https://files.codingninjas.com/ruchika_citi_bank-32691.png"
                    />
                  </div>
                  <div className="text-sm font-semibold">Non-CS/IT</div>
                </div>
        </div>
        <div>
        <div className="absolute top-0 left-0 w-8 h-8 rounded-full overflow-hidden">
                  <img
                    alt=""
                    className="w-full h-full object-cover"
                    src={Paypal}
                  />
                </div>
                <div className="bg-white border-2 border-gray-300 rounded-xl py-4 px-2 flex flex-col items-center gap-3">
                  <div className="w-24 h-24 mb-4">
                    <img
                      alt=""
                      className="w-full h-full object-contain"
                      src="	https://files.codingninjas.com/naveen_optum-32719.png"
                    />
                  </div>
                  <div className="text-sm font-semibold">Non-CS/IT</div>
                </div>
        </div>
        <div>
        <div className="absolute top-0 left-0 w-8 h-8 rounded-full overflow-hidden">
                  <img
                    alt=""
                    className="w-full h-full object-cover"
                    src={Paypal}
                  />
                </div>
                <div className="bg-white border-2 border-gray-300 rounded-xl py-4 px-2 flex flex-col items-center gap-3">
                  <div className="w-24 h-24 mb-4">
                    <img
                      alt=""
                      className="w-full h-full object-contain"
                      src="https://files.codingninjas.com/sonu_uber-32695.png"
                    />
                  </div>
                  <div className="text-sm font-semibold">CS/IT</div>
                </div>
        </div>
        <div>
        <div className="absolute top-0 left-0 w-8 h-8 rounded-full overflow-hidden">
                  <img
                    alt=""
                    className="w-full h-full object-cover"
                    src={Paypal}
                  />
                </div>
                <div className="bg-white border-2 border-gray-300 rounded-xl py-4 px-2 flex flex-col items-center gap-3">
                  <div className="w-24 h-24 mb-4">
                    <img
                      alt=""
                      className="w-full h-full object-contain"
                      src="https://files.codingninjas.com/shourya_microsoft-32693.png"
                    />
                  </div>
                  <div className="text-sm font-semibold">CS/IT</div>
                </div>
        </div>
      </Slider>
      
       
    </div>
    
     </>
  );
};

export default AdvantageSection;
