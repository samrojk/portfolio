import React from "react";
import { useState } from "react";
import TMode from "./theme.jsx";
// import { FiLinkedin, FiYoutube, FiGithub } from "react-icons/fi"; //feature icons
import { SiLeetcode } from "react-icons/si";
import { IoClose, IoMenu } from "react-icons/io5";
import { FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa6"; //font awesome 6

const navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-primary/40 dark:bg-primary-dark/50">
      {/* Main Nav */}
      <div className="mx-[26px] md:mx-[42px] flex flex-row justify-between items-center relative">
        {/* Logo */}
        <div className="h-[68px] flex flex-row items-center">
          <span className="flex flex-row items-center">
            <TMode />
            <h1 className="text-center text-[20px] md:text-[24px] font-semibold text-primary-dark dark:text-white cursor-default">
              Portfolio
            </h1>
          </span>
        </div>

        {/* Tabs */}
        <div className="hidden md:flex flex-row text-primary-dark font-medium dark:text-primary gap-[48px] items-center">
          <a href="#" className="hover:underline underline-offset-2">
            About
          </a>
          <a href="#" className="hover:underline underline-offset-2">
            Skills
          </a>
          <a href="#" className="hover:underline underline-offset-2">
            Projects
          </a>
          <a href="#" className="hover:underline underline-offset-2">
            Contact
          </a>

          {/* Socials */}
          <span
            title="Social Links"
            className="flex flex-row gap-[18px] px-4 py-2.5 rounded-full bg-primary-dark/2 dark:bg-primary/1 border-2 border-primary-dark/3 dark:border-primary/3 hover:bg-primary-dark/6 hover:dark:bg-primary/6 transition-colors duration-400"
          >
            <a href="https://github.com/samrojk" target="blank_">
              <FaGithub
                size={24}
                className="hover:scale-116 transition-all duration-200"
              />
            </a>

            {/* <a href="https://www.youtube.com" target="blank_">
            <FaYoutube
              size={24}
              className="hover:scale-116 transition-all duration-200"
            />
          </a> */}

            <a href="https://www.linkedin.com/in/samrojkhan" target="blank_">
              <FaLinkedin
                size={24}
                className="hover:scale-116 transition-all duration-200"
              />
            </a>

            <a href="https://leetcode.com" target="blank_">
              <SiLeetcode
                size={24}
                className="hover:scale-116 transition-all duration-200"
              />
            </a>
          </span>
        </div>
        <button
          className="md:hidden text-primary-dark dark:text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
      </div>

      {/* Responsive Menu */}
      {menuOpen && (
        <div className="absolute top-[68px] right-[42px] bg-primary/90 dark:bg-primary-dark/90 border-2 border-primary-dark/10 dark:border-primary/10 rounded-xl p-6 flex flex-col gap-4 text-primary-dark dark:text-primary md:hidden">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Skills
          </a>
          <a href="#" className="hover:underline">
            Projects
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
          <div className="flex flex-row gap-6 mt-2">
            <FaGithub size={24} />
            <FaLinkedin size={24} />
            <SiLeetcode size={24} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default navbar;
