import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const MentorshipSection = () => {
  const mentorshipData = [
    {
      imgSrc: "https://files.codingninjas.com/mock-interview-32171.webp",
      title: "Mock interview",
      desc1: "Nail coding assessments and technical challenges",
      desc2: "Gain insights into problem-solving and algorithmic thinking",
    },
    {
      imgSrc: "https://files.codingninjas.com/profile-review-32172.webp",
      title: "Profile review",
      desc1: "Get your profile & resume reviewed by industry leaders",
      desc2: "Focus on different aspects of your job search",
    },
    {
      imgSrc: "https://files.codingninjas.com/project-guidance-32173.webp",
      title: "Project guidance",
      desc1: "Career counselling with industry experts",
      desc2: "Get assistance on how to build real-time projects",
    },
  ];

  return (
    <div className="wrapper-spotlight max-w-5xl  mx-auto p-6">
      <div className="flex items-start gap-4 mb-8">
        <img
          src="https://files.codingninjas.com/group-1000003917-32266.svg"
          alt="one to one mentorship"
          className="h-16 w-20 p-3 border-2 rounded-lg shadow-md"
        />
        <div>
          <h2 className="text-3xl font-bold">1:1 Mentorship Sessions</h2>
          <p className="text-gray-600 text-base">
            Personalised guidance to prepare you for your interview needs
          </p>
        </div>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination]}
        className="pb-10"
      >
        {mentorshipData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="border rounded-lg shadow-lg p-2 m-4 bg-white">
              <img src={item.imgSrc} alt={item.title} className="w-full h-40 rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-base">{item.desc1}</p>
              <p className="text-gray-600 text-base">{item.desc2}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MentorshipSection;
