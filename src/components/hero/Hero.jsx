import React from 'react'
import './Hero.css';

import Button from '../button/Button';
const Hero = () => {
  return (
    <section className="hero-section text-gray-300 flex flex-col justify-center items-center">
  {/* Hero Text */}
  <h6 className="mt-28 mb-8 font-sans font-bold text-xl sm:text-2xl lg:text-3xl text-center">
    Restricted by opportunities?
  </h6>
  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center mb-8">
    Get the tech career <br /> you deserve. Faster.
  </h1>
  <p className="text-center text-sm sm:text-base lg:text-lg mb-8">
    Well-organized coding courses that get you there faster with confidence.
  </p>
  <Button/>
  {/* Video */}
  <br /><br /><br />
  <div className="w-full max-w-4xl px-4">
    <video
      autoPlay
      muted
      loop
      playsInline
      id="videoContainer"
      className="w-full rounded-lg"
      src="https://files.codingninjas.com/episodic-promo_7-sec-1728388305.mp4"
    >
      Your browser does not support the video tag.
    </video>
  </div>
</section>

  )
}

export default Hero