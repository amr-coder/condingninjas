import React from 'react';
import './Spotlight.css';

const Spotlight = () => {
  const newsArticles = [
    {
      imgSrc: "https://files.codingninjas.com/cxo-33141.png",
      alt: "",
     
      text: "Coding Ninjas Unconventional Approach Upskills 1L Students, Yields 2.2x Salary Increase",
    },
    {
      imgSrc: "https://files.codingninjas.com/hindustan-times-33144.png",
      alt: "",
     
      text: "Sustainable development through upskilling: India's engineering renaissance",
    },
    {
      imgSrc: "https://files.codingninjas.com/the-hindu-33146.png",
      alt: "",
     
      text: "Women in tech earn 7% more than men on average but men snag the highest salaries",
    },
    {
      imgSrc: "https://files.codingninjas.com/economic-times-33143.png",
      alt: "",
     
      text: "Tech grads sign up for 'bootcamps' to be more employable",
    },
    {
      imgSrc: "https://files.codingninjas.com/the-times-of-india-33147.png",
      alt: "",
     
      text: "Young professionals must embrace continuous upskilling in the age of AI",
    },
    {
      imgSrc: "https://files.codingninjas.com/money-control-33145.png",
      alt: "",
      
      text: "Generative AI courses in hot demand as more Indians flock to upskilling platforms",
    },
  ];

  return (
    <>
       <div className="wrapper-spotlight relative py-24 px-6">
      <div className="absolute border border-dashed border-gray-400 top-0 left-0 w-0 h-24"></div>
      <div className="pl-9">
        <div className="flex items-start gap-4 px-4">
          <img
            src="https://files.codingninjas.com/frame-1000003333-2-32237.svg"
            alt=""
            className="h-11 w-11 hidden sm:block"
          />
          <div>
            <h2 className="text-2xl font-semibold">Coding Ninjas in Spotlight</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 pt-16">
        <div className="text-center">
          <img
            src="https://files.codingninjas.com/news_ted-33207.webp"
            alt=""
            className="cursor-pointer w-full max-w-md mx-auto"
          />
        </div>
        <div className="flex flex-wrap gap-6">
          {newsArticles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start p-3 border border-gray-300 rounded-lg shadow-sm w-44 hover:shadow-lg transition cursor-pointer"
            >
              <img src={article.imgSrc} alt={article.alt} className="h-10" />
              <div className="text-sm mt-2">{article.text}</div>
            </a>
          ))}
        </div>
      </div>
      <div className="certificate-container bg-white grid gap-6 p-6 border-2 rounded-xl mt-16 max-w-7xl mx-auto">
      <div className="certificate-section flex flex-col md:flex-row gap-6 items-center text-center md:text-left">
        <img
          src="https://files.codingninjas.com/10920-sunrise-mentors-private-limited-coding-ninjas-_11zon-1714543245.webp"
          alt="certificate"
          className="certificate-img h-60 w-full md:w-96 rounded-lg shadow-lg"
        />
        <div className="certificate-details text-xl text-gray-700 md:text-2xl font-semibold mt-4 md:mt-0">
          We are an approved training partner of NSDC under their scheme for market led fee-based services
        </div>
      </div>
    </div>
    </div>
    
    </>
  );
};

export default Spotlight;
