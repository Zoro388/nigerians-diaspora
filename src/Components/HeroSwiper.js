// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper';
// import 'swiper/swiper-bundle.min.css';
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
  
const HeroSwiper = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once while scrolling
      easing: 'ease-in-out', // Easing function for animations
    });
  }, []);
  return (
    <Swiper
      modules={[Autoplay]} // Add Autoplay module
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000, // Slide delay in ms
        disableOnInteraction: false, // Continue autoplay after user interaction
      }}
      loop={true}
      pagination={{ clickable: true }}>
      <SwiperSlide >
        <div class="relative bg-cover bg-center h-screen text-white" id="hero" >
          <div class="absolute inset-0 bg-black bg-opacity-50"></div>
          <div class="container mx-auto px-4 h-full flex flex-col justify-center items-start relative z-10">
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              Connecting Nigerians in the Diaspora to Their Roots
            </h1>
            <p class="text-lg md:text-2xl lg:text-3xl mb-6">
              Strengthening the bond between Nigerians abroad and their homeland
              by keeping you informed, engaged, and empowered.
            </p>
            <div className="grid gap-4 md:flex items-center gap-6">
              <div className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg mr-4">
                <a href="#projects">Discover Our Impactful Projects</a>
              </div>
              <div className="bg-white hover:bg-gray-200 text-black font-bold py-3 px-6 rounded-lg">
                <a href="#blog">Stay Updated with the Latest News</a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="relative bg-cover bg-center h-screen text-white"
          id="bg2">
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              Bridging the Gap Between Nigerians Abroad and Home
            </h1>
            <p className="text-lg md:text-2xl lg:text-3xl mb-6">
              Stay connected with your roots. Explore the vibrant life of
              Nigeria, no matter where you are.
            </p>
            <div className="grid gap-4 md:flex items-center gap-6">
              <div className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg mr-4">
                <a href="#projects">Discover Our Impactful Projects</a>
              </div>
              <div className="bg-white hover:bg-gray-200 text-black font-bold py-3 px-6 rounded-lg">
                <a href="#blog">Stay Updated with the Latest News</a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="relative bg-cover bg-center h-screen text-white"
          id="bg3">
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
              Celebrating Our Culture, Connecting Our People
            </h1>
            <p className="text-lg md:text-2xl lg:text-3xl mb-6">
              Join us in preserving and sharing the vibrant culture of Nigeria
              with the world. Stay informed, stay engaged, stay connected.
            </p>
            <div className="grid gap-4 md:flex items-center gap-6">
              <div className="bg-green-600 text-white hover:bg-yellow-600  font-bold py-3 px-6 rounded-lg mr-4">
                <a href="#projects">Discover Our Impactful Projects</a>
              </div>
              <div className="bg-white hover:bg-gray-200 text-black font-bold py-3 px-6 rounded-lg">
                <a href="#blog">Stay Updated with the Latest News</a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSwiper;
