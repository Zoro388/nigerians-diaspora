import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bene from "../images/bene.mp4";
import bene1 from "../images/bene1.mp4";

import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
const Reviews = () => {
  
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const testimonial = [
    {
      vid: bene,
    },
    {
      vid: bene1,
    },
  ];
  //   <Carousel responsive={responsive}>

  // </Carousel>
  return (
    <div className="px-7 py-10  bg-[#F8F8FB] md:px-20 py-20">
      <div>
        <div>
          <div className="flex items-center  gap-2 font-bold">
            <div className="bg-[#F4DD0A] h-1 w-10"></div>
            <p>Testimonials</p>
          </div>

          <h1 className="font-bold text-2xl mb-4">What beneficiaries Says </h1>
        </div>


        <Carousel responsive={responsive}>
          {testimonial.map((item, index) => {
            return (
              <div key={index} className="bg-black  h-auto">
                <video className="w-full h-64 md:h-80" src={item.vid} controls></video>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
