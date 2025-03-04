import React, { useState, useEffect } from "react";
// import logo from "../../public/images/logo (1).png";
import logo from "../images/logs.jpeg";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const toggleNav = () => {
    setShowNav(!showNav);
  };
  const [active, setActive] = useState("home");

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 200;
      setIsScrolled(show);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {/* <nav
        className={
          isScrolled
            ? "z-10 hidden md:flex md:items-center md:justify-between md:px-20 py-6 md:fixed left-0 right-0 bg-black shadow-lg duration-[300ms]"
            : "hidden md:flex bg-black md:items-center md:justify-between md:px-20 py-6 shadow-lg duration-[300ms] "
        }>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="flex gap-6 md:items-center md:justify-between text-white">
          <li>
            {" "}
            <Link  to="/"
              className={
                active == "home"
                  ? "text-[#54A9CE] font-bold"
                  : "text-white font-bold md:text-[#1e1e1e]"
              }
              onClick={() => {
                setActive("home");
              }} >
              Home
            </Link>{" "}
          </li>
          
          <li
            className={
              active == "blog"
                ? "text-[#54A9CE] font-bold"
                : "text-white font-bold md:text-[#1e1e1e]"
            }
            onClick={() => {
              setActive("blog");
            }}>
            {" "}
            <a href="#blog">Blog</a>{" "}
          </li>

          <li>
            {" "}
            <Link
              className={
                active == "contact"
                  ? "text-[#54A9CE] font-bold"
                  : "text-white font-bold md:text-[#1e1e1e]"
              }
              onClick={() => {
                setActive("contact");
              }}>
              Contact
            </Link>{" "}
          </li>
        </ul>

        <div className="">
          <a href="#get-started">
            {" "}
            <button className="bg-gray-200 rounded text-[#1e1e2f] px-6 py-2 font-bold">
              Get Started
            </button>
          </a>{" "}
        </div>
      </nav> */}
      <nav
        className={
          isScrolled
            ? "z-10 hidden md:flex md:items-center md:justify-between md:px-20 py-6 md:fixed left-0 right-0 bg-green-800 shadow-lg duration-[300ms] text-white"
            : "hidden md:flex bg-green-800 md:items-center md:justify-between md:px-20 py-6 shadow-lg duration-[300ms] text-white"
        }>
        <Link to="/">
        <img src={logo} alt="logo" className="w-20 h-auto" />

          {/* Adjust size if needed */}
        </Link>
        <ul className="flex gap-6 md:items-center md:justify-between">
          <li>
            <Link
              to="/"
              className={
                active === "home"
                  ? "text-yellow-300 font-bold"
                  : "text-white font-bold md:text-gray-200"
              }
              onClick={() => setActive("home")}>
              Home
            </Link>
          </li>
         
          <li>
            <a href="#about"  className={
                active === "about"
                  ? "text-yellow-300 font-bold"
                  : "text-white font-bold md:text-gray-200"
              }
              onClick={() => setActive("about")}>
              {/* <Link
                // to="#blog"
               > */}
                About
              {/* </Link> */}
            </a>
          </li>
          <li>
            <a href="#blog"  className={
                  active === "blog"
                    ? "text-yellow-300 font-bold"
                    : "text-white font-bold md:text-gray-200"
                }
                onClick={() => setActive("blog")}>
              {/* <Link
                // to="#blog"
               > */}
                Blog
              {/* </Link> */}
            </a>
          </li>

          <li>
            <Link
              to="/team"
              className={
                active === "team"
                  ? "text-yellow-300 font-bold"
                  : "text-white font-bold md:text-gray-200"
              }
              onClick={() => setActive("team")}>
             Team
            </Link>
          </li>
          
          <li>
            <a href="#projects"  className={
                  active === "projects"
                    ? "text-yellow-300 font-bold"
                    : "text-white font-bold md:text-gray-200"
                }
                onClick={() => setActive("projects")}>
              {/* <Link
                // to="#blog"
               > */}
               Projects 
              {/* </Link> */}
            </a>
          </li>
          <li>
            <Link
              to="/contact"
              className={
                active === "contact"
                  ? "text-yellow-300 font-bold"
                  : "text-white font-bold md:text-gray-200"
              }
              onClick={() => setActive("contact")}>
              Contact
            </Link>
          </li>
        </ul>

        <div>
          <a href="#about">
            <button className="bg-yellow-500 rounded text-white px-6 py-2 font-bold hover:bg-yellow-600 transition duration-300">
              Get Started
            </button>
          </a>
        </div>
      </nav>

    
      <div
  className={
    showNav
      ? "z-50 px-4 py-4 gap-4 bg-black h-full  md:hidden"
      : "z-50 px-4 py-4 gap-4 mb-40 h-full bg-black md:hidden"
  }>
  <nav className="flex items-center justify-between border">
    <Link to="/">
    <img src={logo} alt="logo" className="w-20 h-auto" />

    </Link>
    {showNav ? (
      <div
        className="grid gap-1"
        onClick={() => {
          toggleNav();
        }}>
        <div className="h-1 w-5 bg-white"></div>
        <div className="h-1 w-6 bg-white"></div>
        <div className="h-1 w-6 bg-white"></div>
      </div>
    ) : (
      ""
    )}
    {showNav ? (
      ""
    ) : (
      <div
        className="font-bold text-3xl text-white z-20"
        onClick={() => {
          toggleNav();
        }}>
        x
      </div>
    )}
  </nav>
  <ul
  className={
    showNav
      ? "grid gap-6 md:items-center py-4 text-white bg-green-800 px-6 absolute right-0 left-0 top-[-390px] h-auto duration-[300ms]"
      : "grid gap-6 md:items-center py-10 text-white bg-green-800 px-8 absolute right-0 left-0 top-[-16px] h-auto duration-[300ms] z-10"
  }>

    <li>
      <Link
        to="/"
        className={
          active === "home"
            ? "text-yellow-300 font-bold"
            : "text-white font-bold md:text-gray-200"
        }
        onClick={() => {
          setActive("home");
          setShowNav(true);
        }}>
        Home
      </Link>
    </li>
    <li>
      <a href="#about" className={
          active === "about"
            ? "text-yellow-300 font-bold"
            : "text-white font-bold md:text-gray-200"
        }
        onClick={() => {
          setActive("about");
          setShowNav(true);
        }}>
        About
      </a>
    </li>
    <li>
      <a href="#blog" className={
          active === "blog"
            ? "text-yellow-300 font-bold"
            : "text-white font-bold md:text-gray-200"
        }
        onClick={() => {
          setActive("blog");
          setShowNav(true);
        }}>
        Blog
      </a>
    </li>
    <li>
      <a href="#projects" className={
          active === "projects"
            ? "text-yellow-300 font-bold"
            : "text-white font-bold md:text-gray-200"
        }
        onClick={() => {
          setActive("projects");
          setShowNav(true);
        }}>
        Projects
      </a>
    </li>
    <li>
      <Link
        to="/contact"
        className={
          active === "contact"
            ? "text-yellow-300 font-bold"
            : "text-white font-bold md:text-gray-200"
        }
        onClick={() => {
          setActive("contact");
          setShowNav(true);
        }}>
        Contact
      </Link>
    </li>
    <li>
      <Link
        to="/team"
        className={
          active === "team"
            ? "text-yellow-300 font-bold"
            : "text-white font-bold md:text-gray-200"
        }
        onClick={() => {
          setActive("team");
          setShowNav(true);
        }}>
     Team
      </Link>
    </li>
    <li>
      <a href="#get-started">
        <button className="bg-yellow-500 rounded text-white px-6 py-2 font-bold hover:bg-yellow-600 transition duration-300">
          Get Started
        </button>
      </a>
    </li>
  </ul>
</div>

    </div>
  );
};
export default NavBar;

// import React, { useState } from "react";

// import { MdDelete } from 'react-icons/md';
// import { FaBars } from 'react-icons/fa';
// import "../Styles/Nav.css"
// const Navbar = () => {
//
//   return <header className="px-12 py-6 relative md:static">
// <nav className="nav">
//   <Link to="/">
//   <img src={logo} alt="logo-img" />
//   </Link>

//   <ul className="md:flex items-center gap-8 static sm:bg-black absolute">
//     <li> <Link >Home</Link> </li>
//
//
//
//

//   </ul>

//   <div className="hidden md:block">
//     <button className="bg-gray-200 rounded text-[#1e1e2f] px-6 py-2" >Get Started</button>
//   </div>

//   <div className="block md:hidden">
//     <FaBars className="w-30 "/>
//   </div>
// </nav>

//   </header>;
// };

// export default Navbar;
