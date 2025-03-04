import React from "react";
import Event from "../Components/Event";
import Hero from "../Components/Hero";
import { useContext } from "react";
import man from "../images/image 2.png";
import App from "../App";
import Blog from "../Components/Blog";

import CounterSection from "../Components/CounterSection";
import About from "../Components/About";
import Projects from "../Components/Projects";
import nlid from "../videos/document_5888497005738596081.mp4";
const Home = () => {
  return (
    <div>
      <Hero />
      <CounterSection />
      <About />
      <Projects />
      {/* <div className="w-full h-1/2">
        <img src={man} alt="nigerian-man-img" className="w-full" />
      </div> */}
      <div className="px-6 mt-14 h-auto bg-black  md:px-12 lg:px-24">
        {" "}
        <video
          className="w-full h-64 md:h-80"
          src={nlid}
          controls
          autoPlay></video>
      </div>
      <Blog />
    </div>
  );
};

export default Home;
