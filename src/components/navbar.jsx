import React from "react";
import TMode from "./theme.jsx";
// import { FiYoutube, FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa6";

const navbar = () => {
  return (
    <nav className="mx-[42px] flex flex-row justify-between items-center">
      <div className="h-[68px] flex flex-row items-center bg-primary dark:bg-primary-dark">
        <span className="flex flex-row items-center">
          <TMode />
          <h1 className="text-center text-2xl font-semibold text-primary-dark dark:text-white cursor-default">
            Portfolio
          </h1>
        </span>
      </div>

      <div className="flex flex-row text-primary-dark dark:text-primary gap-[48px] items-center">
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

        <span className="flex flex-row gap-[18px] px-4 py-2.5 border-2 rounded-full border-primary-dark/10 dark:border-primary/10">
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
    </nav>
  );
};

export default navbar;
