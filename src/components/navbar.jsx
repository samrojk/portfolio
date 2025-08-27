import React from "react";
import TMode from "./theme.jsx";
// import { FiLinkedin, FiYoutube, FiGithub } from "react-icons/fi"; //feature icons
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa6"; //font awesome 6

const navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-primary/40 dark:bg-primary-dark/50">
      {/* Main Nav */}
      <div className="mx-[42px] flex flex-row justify-between items-center">
        {/* Logo */}
        <div className="h-[68px] flex flex-row items-center">
          <span className="flex flex-row items-center">
            <TMode />
            <h1 className="text-center text-2xl font-semibold text-primary-dark dark:text-white cursor-default">
              Portfolio
            </h1>
          </span>
        </div>

        {/* Tabs */}
        <div className="flex flex-row text-primary-dark font-medium dark:text-primary gap-[48px] items-center">
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
      </div>
    </nav>
  );
};

export default navbar;
