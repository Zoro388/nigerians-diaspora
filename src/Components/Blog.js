import React, { useEffect, useState } from "react";
import blogs from "./BlogData";

import Reviews from "./Reviews";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
const Blog = () => {
  const categories = [
    "All categories",
    ...new Set(blogs.map((item) => item.purpose)),
  ];

  const [blog, setBlog] = useState(blogs);

  const changeCategories = (item) => {
    if (item == "All categories" || item == "") {
      setBlog(blogs);
      return;
    }
    const newItem = blogs.filter((blog) => blog.purpose == item);
    setBlog(newItem);
  };
  const [color, setColor] = useState(categories[0]);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once while scrolling
      easing: 'ease-in-out', // Easing function for animations
    });
  }, []);
  return (
    <div>
      <section className="px-3 py-2  bg-[#F8F8FB] md:px-20 py-20" id="blog" >
        <center>
          <div className="flex items-center justify-center gap-1 font-bold" >
            <div className="bg-green-500 h-1 w-10"></div>
            <p>Blog</p>
          </div>

          <div className="text-[#1E1E2F] text-2xl font-bold mt-6 md:text-3xl">
            <h1 data-aos="flip-right">Insights And perspective </h1>
          </div>
        </center>
        {/* #54A9CE */}
        <div>
          <div className="hidden grid grid-cols-2 gap-4  justify-center mt-6 overflow-hidden md:flex items-center font-semibold">
            {categories.map((eachCategory,index) => {
              return (
                <button key={index}
                  onClick={() => {
                    changeCategories(eachCategory);
                    setColor(eachCategory);
                  }}
                  className={
                    color == eachCategory
                      ? "border-b-2 border-green-600 p-3"
                      : "text-[#1E1E2F] p-3"
                  }>
                  {eachCategory}
                </button>
              );
            })}
          </div>
          <select
            name=""
            id=""
            onChange={(e) => {
              changeCategories(e.target.value);
            }}
            className="w-full p-3 font-bold mt-5 rounded md:hidden">
            <option value="">select a category</option>
            {categories.map((eachCategory,index) => {
              return (
                <option key={index}
                  value={eachCategory}
                  onClick={() => {
                    changeCategories(eachCategory);
                  }}>
                  {eachCategory}{" "}
                </option>
              );
            })}
          </select>
        </div>

      

        <section className="p-4 bg-gray-100">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blog.map((post) => (
      
        <div data-aos="zoom-in" className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:border-l-4 border-r-4 border-green-600">
    <img src={post.imageUrl} alt={post.title}  className="w-full  object-cover"/>
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-4">{post.description}</p>
    
      <Link  className="text-green-600 hover:underline"  to={"/Blog/" + post.id}> Read more </Link>
    </div>
  </div>
      ))}
    </div>
  </section>
        
      </section>

      

   

    

     

      <Reviews />
    </div>
  );
};

export default Blog;
