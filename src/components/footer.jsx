import React from "react";
import { FaFileDownload, FaFire, FaInstagram } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandReactNative, TbPrompt } from "react-icons/tb";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaFigma,
  FaRobot,
  FaLinkedin,
  FaYoutube,
  FaGithub,
  FaSquareXTwitter,
} from "react-icons/fa6";
import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiDjango,
  SiPostgresql,
  SiGit,
  SiNetlify,
  SiReactrouter,
  SiFirebase,
  SiAppwrite,
  SiOpenai,
  SiNotion,
  SiMongodb,
  SiLeetcode,
} from "react-icons/si";

const footer = () => {
  return (
    <footer className="mt-[86px]">
      <div className="mx-[120px] flex flex-row justify-between items-center text-primary-dark dark:text-white bg-primary dark:bg-primary-dark h-[200px]">
        {/* Branding Text */}
        <div title="Click on the chrome dino!" className="flex flex-row">
          <span className="flex flex-col gap-[8px]">
            <h1 className="text-[28px] font-semibold text-primary-dark/80 dark:text-white/80 cursor-default">
              Samroj Khan
            </h1>
            <p className="text-[14px] w-[300px] text-primary-dark/40 dark:text-white/40">
              Not Just a Developer | A Digital Craftsman Turning Ideas Into
              Experiences.
            </p>
          </span>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-col gap-[6px]">
          <h1 className="text-[18px] font-medium text-primary-dark/80 dark:text-white/80 cursor-default">
            Tech Stack
          </h1>
          <div
            title="Current Tech Stack"
            className="flex flex-row gap-[16px] px-4 py-2.5 rounded-full bg-primary-dark/1 dark:bg-primary/1 border-2 border-primary-dark/3 dark:border-primary/3 hover:bg-primary-dark/2 hover:dark:bg-primary/3 transition-colors duration-400"
          >
            <SiJavascript
              size={20}
              className="hover:scale-116 transition-all duration-200 hover:text-yellow-500"
            />
            <FaReact
              size={20}
              className="hover:scale-116 transition-all duration-200 hover:text-blue-400"
            />
            <RiTailwindCssFill
              size={20}
              className="hover:scale-116 transition-all duration-200 hover:text-cyan-400"
            />
            <SiExpress
              size={20}
              className="hover:scale-116 transition-all duration-200 hover:text-gray-400"
            />
            <SiMongodb
              size={20}
              className="hover:scale-116 transition-all duration-200 hover:text-emerald-400"
            />
            <FaNodeJs
              size={20}
              className="hover:scale-116 transition-all duration-200 hover:text-green-600"
            />
            <FaFigma
              size={20}
              className="hover:scale-116 transition-all duration-200 hover:text-red-500"
            />
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-[6px]">
          <h1 className="text-[18px] font-medium text-primary-dark/80 dark:text-white/80 cursor-default">
            Social Link's
          </h1>
          <div
            title="Social Media Links"
            className="flex flex-row gap-[16px] px-4 py-2.5 rounded-full bg-primary-dark/1 dark:bg-primary/1 border-2 border-primary-dark/3 dark:border-primary/3 hover:bg-primary-dark/2 hover:dark:bg-primary/3 transition-colors duration-400 w-fit"
          >
            <a href="https://github.com/samrojk" target="blank_">
              <FaGithub
                size={20}
                className="hover:scale-116 transition-all duration-200"
              />
            </a>
            <a href="https://www.linkedin.com/in/samrojkhan" target="blank_">
              <FaLinkedin
                size={20}
                className="hover:scale-116 transition-all duration-200"
              />
            </a>
            <a href="https://www.instagram.com" target="blank_">
              <FaInstagram
                size={20}
                className="hover:scale-116 transition-all duration-200"
              />
            </a>
            <a href="https://www.x.com" target="blank_">
              <FaSquareXTwitter
                size={20}
                className="hover:scale-116 transition-all duration-200"
              />
            </a>
          </div>
        </div>

        {/* Download Resume */}
        <div>
          <a
            title="Download my resume!"
            href="/Samroj_Khan_Resume.pdf"
            download
            className="flex flex-row items-center gap-[10px] text-[16px] font-medium border-2 border-primary-dark/20 hover:border-green-500/80 dark:border-primary/20 dark:hover:border-red-500/80 shadow-xl shadow-primary-dark/0 dark:hover:shadow-red-500/10 px-[16px] py-[10px] rounded-[10px] w-fit bg-primary-dark/2 dark:bg-primary/2.5 transition-colors duration-300 dark:hover:text-red-100 text-primary-dark/80 dark:text-primary hover:shadow-green-500/10 hover:text-green-800 hover:bg-green-800/8 dark:hover:bg-red-100/4 cursor-pointer"
          >
            Download CV
            <FaFileDownload size={18} />
          </a>
        </div>
      </div>

      {/* Separator Line */}
      <div className="mx-[120px]">
        <hr className="text-primary-dark/12 dark:text-primary/12" />
      </div>

      {/* Copyright Text */}
      <div className="mx-[120px] text-[14px] flex flex-row justify-center gap-[4px] text-primary-dark/30 dark:text-white/30 pt-[20px] pb-[40px]">
        © 2025 Samroj Khan — Ideas Can’t Be Copyrighted, Only Ignited.{" "}
        <FaFire
          size={16}
          className="mt-[2px] hover:text-green-500 dark:hover:text-red-500 transition-colors duration-500"
        />
      </div>
    </footer>
  );
};

export default footer;
