import edu from "../images/busy.webp";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import education from "../images/education.jfif";
import empowerment from "../images/empowerment.jfif";
import grant from "../images/grant.webp";
import medical from "../images/medical.jfif";


// import Carousel from "react-multi-carousel";

// import "react-multi-carousel/lib/styles.css";
import rice from "../images/rice.jpg";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Healthcare Outreach",
      description:
        "Providing medical supplies and healthcare support to rural communities in Nigeria.",
      imageUrl: medical,
    },
    {
      id: 2,
      title: "Educational Scholarships",
      description:
        "Offering scholarships to underprivileged Nigerian students to pursue higher education.",
      imageUrl: education,
    },
    {
      id: 3,
      title: "One Time Grant",
      description: "Providing a one-time financial grant to support individuals or communities in addressing urgent needs or kickstarting essential projects.",
      imageUrl:grant,
    },
   
    {
      id: 4,
      title: "Youth Empowerment",
      description:
        "Running skill acquisition programs to empower Nigerian youth with practical skills.",
      imageUrl: empowerment,
    },
    {
      id: 5,
      title: "Food Giveaways",
      
      description:
        "Providing food relief packages on the first Saturday of every month to support Nigerians in need.",
      imageUrl: rice,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
//   <Carousel responsive={responsive}>
  

 
// </Carousel>
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once while scrolling
      easing: "ease-in-out", // Easing function for animations
    });
  }, []);
  return (
    <div className="py-10 px-6 bg-[#1E1E2F] text-white md:px-10" id="projects">
      <h2 className="text-3xl font-bold text-center text-[#54A9CE] mb-8">
        Our Projects
      </h2>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              data-aos="fade-down"
              key={project.id}
              className="bg-white text-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#1E1E2F] mb-2">
                  {project.title}
                </h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  {project.description}
                </p>
              </div>


             
            </div>
          ))}
        </div>

        {/* Center the video */}
      </div>
    </div>
  );
};

export default Projects;
