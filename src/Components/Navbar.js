import { faHeadphonesSimple } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import jahid from "../iamges/MyImage.png";
import "./Navbar.css";

const Navbar = ({ backgroundHome }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //
  const activeStyle = {
    color: "#d87d4a",
    borderBottom: "2px solid #d87d4a",
  };

  const menuItems = (
    <>
      <li className="hover:text-[#d87d4a]">
        <NavLink
          to="/home"
          title="Our product"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li className="hover:text-[#d87d4a]">
        <a
          href="#about"
          title="Our product"

          // style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          About
        </a>
        {/* <NavLink
                    to="/portfolio"
                    title="Our product"

                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                    About
                </NavLink> */}
      </li>
      <li className="hover:text-[#d87d4a]">
        <a
          href="#projects"
          aria-label="Product pricing"
          title="Product pricing"
          // style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Projects
        </a>
        {/* <NavLink
                    to="/team"
                    aria-label="Product pricing"
                    title="Product pricing"
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                    Projects
                </NavLink> */}
      </li>
      <li className="hover:text-[#d87d4a]">
        <NavLink
          to="/blogs"
          title="Blogs"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Blogs
        </NavLink>
      </li>
      <li className="hover:text-[#d87d4a]">
        <a
          href="#contact"
          aria-label="About us"
          title="About us"
          // class=" tracking-wide text-gray-700 transition-colors duration-200 "
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Contact
        </a>
      </li>
    </>
  );

  //change navbar color while scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={
        color
          ? "nav-bg sticky top-0  font-bold"
          : `${backgroundHome} sticky top-0    font-bold`
      }
      // className='bg-black fixed right-0 left-0 font-bold '
    >
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ">
        <div class="flex items-center justify-between">
          <div class="avatar">
            <div class="w-12 rounded-full ring ring-slate-600 ring-offset-base-100 ring-offset-2">
              <img src={jahid} />
            </div>
          </div>
          <ul class=" items-center hidden space-x-6 lg:flex uppercase">
            {menuItems}
          </ul>
          <div class="lg:hidden text-black">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div class="avatar">
                      <div class="w-12 rounded-full ring ring-slate-600 ring-offset-base-100 ring-offset-2">
                        <img src={jahid} />
                      </div>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">{menuItems}</ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
