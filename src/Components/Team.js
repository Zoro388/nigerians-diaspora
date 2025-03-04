import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import joy from "../images/joy.jpeg"
import emma from "../images/emmmanuel.jpeg"
import blessing from "../images/blessing.jpeg"


const Team= () => {
    const teamMembers = [
        {
          name: "Dr. Blessing Anyaiwe onyekachi",
          title: "President/founder",
          image: blessing, // Add the path to the image
        },
        {
          name: "Barr. Edeh Emmanuel Chizaram",
          title: "Legal adviser",
          image: emma,
        },
        {
          name: "MRS JOY ONYEMAKONOR ODIAKA.",
          title: " Secretary of the organisation",
          image:joy,
        },
       
      ];
      useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: true, // Whether animation should happen only once while scrolling
          easing: 'ease-in-out', // Easing function for animations
        });
      }, []);
  return (
    <div className="bg-green-800 py-12 px-6 md:px-0 border">
      <h2 className="text-center text-white text-4xl font-bold mb-8">Meet Our Team</h2>
      <div className="container mx-auto md:flex items-center justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div data-aos="zoom-out"  key={index} className="w-full bg-white shadow-lg rounded-lg overflow-hidden mb-8">
            <img src={member.image} alt={member.name} className="w-full  object-cover h-80" />
            <div className="p-6">
              <h3 className="text-lg font-bold text-green-900">{member.name}</h3>
              <p className="text-gray-700">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
