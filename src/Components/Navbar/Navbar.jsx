/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for props validation
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping, FaCaretDown } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Men's Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({ handleorderPoppup }) => {
  return (
    <div className="relative z-40 duration-200 bg-white shadow-md dark:bg-gray-900 dark:text-white">
      {/* Upper Navbar */}
      <div className="py-2 bg-primary/40">
        <div className="container flex items-center justify-between">
          <div>
            <a href="#" className="flex gap-2 text-2xl font-bold sm:text-3xl">
              <img src={Logo} alt="logo" className="w-10" />
              Shopsy
            </a>
          </div>
          {/* search bar and order button */}
          <div className="flex items-center justify-between gap-4">
            <div className="relative hidden group sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all
                        duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none
                        focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="absolute text-gray-500 -translate-y-1/2 group-hover:text-primary top-1/2 right-3" />
            </div>
            {/* order button */}
            <button
              onClick={() => handleorderPoppup()}
              className="flex items-center gap-3 px-4 py-1 text-white transition-all duration-200 rounded-full bg-gradient-to-r from-primary to-secondary group"
            >
              <span className="hidden transition-all duration-200 group-hover:block">Order</span>
              <FaCartShopping className="text-xl text-white cursor-pointer drop-shadow-sm " />
            </button>
            {/* DarkMode */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos = "zoom-in" className="flex justify-center">
        <ul className="items-center hidden gap-4 sm:flex">
          {Menu.map((data) => (
            <li key={data.id}>
              <a href={data.link} className="inline-block px-4 duration-200 hover:text-primary">
                {data.name}
              </a>
            </li>
          ))}
          {/* simple dropdown and links */}
          <li className="relative cursor-pointer group">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span className="transition-all duration-200 group-hover:rotate-180">
                <FaCaretDown />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white text-black p-2 shadow-md">
              {DropdownLinks.map((data) => (
                <li key={data.id}>
                  <a href={data.link} className="inline-block w-full p-2 rounded-md hover:bg-primary/20">
                    {data.name}
                  </a>
                </li>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Add PropTypes for props validation
Navbar.propTypes = {
  handleorderPoppup: PropTypes.func.isRequired,
};

export default Navbar;
