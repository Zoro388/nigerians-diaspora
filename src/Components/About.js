import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles


const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once while scrolling
      easing: "ease-in-out", // Easing function for animations
    });
  }, []);

  const aboutInfo = [
    {
      title: "Our Mission",
      content:
        "To actively engage and collaborate with stakeholders in Nigeria to promote the welfare, economic empowerment,and political stability of Nigerians, by leveraging the skills, resources, and influence of the diaspora community. Through strategic initiatives such as community outreach, advocacy for good governance, youth empowerment programs, and partnerships with local organizations, we have already taken significant steps to address pressing societal challenges. As reflected on our website, we continue to spearhead capacity-building workshops, mentorship programs, and policy dialogues aimed at creating sustainable solutions for a better Nigeria.",
    },
    {
      title: "Our Vision",
      content:
        "To champion the welfare, growth, and political stability of Nigerians at home, leveraging the global expertise, resources, and influence of Nigerians in the diaspora to drive sustainable development, empower communities, and foster a prosperous and united Nigeria. This vision emphasizes the foundation's focus on supporting Nigerians within the country, while highlighting the role of the diaspora in contributing to this mission.",
    },
   
  ];
  return (
    <div className="grid gap-10" id="about">
      <section className="bg-white text-gray-800 py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2
            data-aos="flip-right"
            className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-8">
            About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6" data-aos="fade-up">
              <h3 className="text-2xl font-semibold text-gray-700">
                Who We Are
              </h3>
              <div className="bg-white p-6 border-l-4 border-green-600 rounded-l-lg shadow-md">
                <p className="text-lg leading-relaxed text-gray-600">
                  We are a dedicated foundation committed to supporting
                  Nigerians in Nigeria. Our mission is to connect, inform, and
                  empower Nigerians at home by providing essential resources,
                  timely updates, and fostering community engagement.
                  Established with the vision of building a stronger, more
                  united Nigeria, we aim to serve as a beacon of support,
                  leveraging the global diaspora to act as a bridge between
                  Nigeria and its citizens worldwide, working to promote
                  welfare, growth, and political stability within the country.
                </p>
                <p className="text-lg leading-relaxed text-gray-600 mt-4">
                  Established with the vision of fostering a united Nigerian
                  community abroad, we aim to be a beacon of support and a
                  bridge between Nigeria and its citizens living globally.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {aboutInfo.map((info, index) => (
                <div
                  data-aos="zoom-out"
                  key={index}
                  className="cursor-pointer relative bg-gray-100 p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-lg border-l-4 border-transparent hover:border-green-600 hover:bg-green-50">
                  <h3 className="text-2xl font-semibold text-gray-700 mb-3 hover:text-green-600 transition-colors duration-300">
                    {info.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-600 hover:text-gray-800 transition-colors duration-300">
                    {info.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              data-aos="fade-up"
              className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition duration-300">
              Learn More About Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
