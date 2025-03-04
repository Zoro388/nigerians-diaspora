import React, { useEffect } from "react";
import Swal from "sweetalert2";
import AOS from 'aos';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { PiTiktokLogoLight } from "react-icons/pi";

import 'aos/dist/aos.css'; // Import AOS styles
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once while scrolling
      easing: 'ease-in-out', // Easing function for animations
    });
  }, []);
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 data-aos="zoom-in" className="text-3xl font-bold mb-6 text-gray-800">
          We Would Like to Hear from You
        </h2>
        <p data-aos="zoom-in" className="text-gray-600 mb-8">
          Please fill out the form below to get in touch with us. We’ll get back
          to you as soon as possible.
        </p>
        <form data-aos="zoom-in-right"
          className="bg-white shadow-lg rounded-lg p-8 space-y-6 animate__animated animate__fadeIn animate__delay-1s"
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
            Swal.fire({
              title: "Success!",
              text: "Your message has been sent successfully.",
              icon: "success",
              confirmButtonText: "OK",
              timer: true,
              timer: 2000,
            });
          }}
          //   method="POST"
        >
          <div  className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                placeholder="john.doe@example.com"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
              placeholder="Your message here..."
              required></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-800 text-white font-bold rounded-lg hover:bg-green-600 transition duration-300">
            Send Message
          </button>
        </form>

        <div className="flex space-x-4 items-center justify-center gap-4 bg-black py-4">
            <a
              href="https://www.facebook.com/profile.php?id=100088184146741&mibextid=ZbWKwL"
              className="text-white hover:text-gray-300 transition duration-300">
              <FaFacebook size={40} />
            </a>
           
            <a
              href="https://www.instagram.com/voice_ofnigeriansindiaspora?igsh=MTVyM3FvYWMzc3l0MQ=="
              className="text-white hover:text-gray-300 transition duration-300">
              <FaInstagram size={40} />
            </a>
            <a
              href="https://www.tiktok.com/@voicenigeriansindiaspora?_t=8pT1XDOHu8U&_r=1"
              className="text-white hover:text-gray-300 transition duration-300">
              <PiTiktokLogoLight size={40} />
            </a>
            

           
          </div>
      </div>
    </section>
  );
};

export default Contact;
