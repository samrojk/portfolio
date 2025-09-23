import React, { useState, useEffect } from "react";

// Icons ----------------------------------
import { FaArrowCircleUp } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandReactNative, TbPrompt } from "react-icons/tb";
import { FaReact, FaNodeJs, FaPython, FaFigma, FaRobot } from "react-icons/fa6";
import {
  SiGit,
  SiGithub,
  SiJavascript,
  SiTypescript,
  SiDjango,
  SiExpress,
  SiPostgresql,
  SiReactrouter,
  SiNetlify,
  SiFirebase,
  SiAppwrite,
  SiOpenai,
  SiNotion,
  SiMongodb,
} from "react-icons/si";

// Images ---------------------------------
import Img1 from "../assets/ninjatool1.webp";
import Img2 from "../assets/ninjatool2.webp";
import Img3 from "../assets/ninjatool3.webp";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("tab1"); // switch tabs
  const [current, setCurrent] = useState(0);

  // Image Import -------------------------
  const images = [Img1, Img2, Img3];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 sec
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="text-primary-dark dark:text-primary mx-[42px] justify-items-center mt-[86px]">
      {/* Heading */}
      <div>
        <h1 className="text-[42px] font-semibold tracking-wide">Projects</h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-[46px] mt-[28px]">
        <button
          onClick={() => setActiveTab("tab1")}
          className={`flex py-2 px-4.5 text-center font-medium rounded-xl border-2 border-primary-dark/20 dark:border-primary/20 transition-all duration-200 hover:border-primary-dark/40 hover:dark:border-primary/40 ${
            activeTab === "tab1"
              ? "bg-primary-dark text-primary border-primary-dark font-medium dark:text-primary-dark dark:bg-primary dark:border-primary"
              : "text-primary-dark/40 dark:text-primary/40"
          }`}
        >
          Featured
        </button>

        <button
          onClick={() => setActiveTab("tab2")}
          className={`flex py-2 px-4.5 text-center font-medium rounded-xl border-2 border-primary-dark/20 dark:border-primary/20 transition-all duration-200 hover:border-primary-dark/40 hover:dark:border-primary/40 ${
            activeTab === "tab2"
              ? "bg-primary-dark text-primary border-primary-dark font-medium dark:text-primary-dark dark:bg-primary dark:border-primary"
              : "text-primary-dark/40 dark:text-primary/40"
          }`}
        >
          App's
        </button>

        <button
          onClick={() => setActiveTab("tab3")}
          className={`flex py-2 px-4.5 text-center font-medium rounded-xl border-2 border-primary-dark/20 dark:border-primary/20 transition-all duration-200 hover:border-primary-dark/40 hover:dark:border-primary/40 ${
            activeTab === "tab3"
              ? "bg-primary-dark text-primary border-primary-dark font-medium dark:text-primary-dark dark:bg-primary dark:border-primary"
              : "text-primary-dark/40 dark:text-primary/40"
          }`}
        >
          UI Design's
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-[28px] p-4">
        {/* Tab-1 */}
        {activeTab === "tab1" && (
          <div className="grid grid-cols-3 gap-[16px]">
            {/* FeProject 1 */}
            <div>
              {/* Carousel */}
              <div className="border-2 border-primary-dark/20 hover:border-green-500/80 dark:border-primary/20 dark:hover:border-red-500/80 shadow-xl shadow-primary-dark/0 dark:hover:shadow-red-500/10 px-1 py-1 rounded-xl w-[320px] bg-primary-dark/2 dark:bg-primary/2.5 transition-colors duration-300 dark:hover:text-red-100 text-primary-dark/80 dark:text-primary hover:shadow-green-500/10 hover:text-green-800">
                <div className="relative w-full h-60 rounded-[8px] overflow-hidden">
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt="carousel"
                      className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
                        index === current ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>
                <div className="mt-[8px] px-[10px]">
                  <h1 className="text-[24px] font-semibold">Project Title</h1>
                  <p className="mt-[6px] h-[94px] font-light transition-colors duration-300 dark:hover:text-red-100/60 text-primary-dark/60 dark:text-primary/60 hover:text-green-800/80 text-[14.8px]">
                    This is a demo of the feature i have added here and i will
                    implement this to others too
                  </p>
                  <div className="inline-flex bg-primary-dark/4 dark:bg-primary/4 rounded-full items-center min-w-[28px]">
                    <span className="flex flex-row gap-[10px] px-2 py-[6px] text-primary-dark/60 dark:text-primary/70">
                      <FaReact />
                      <SiTypescript />
                      <SiMongodb />
                      <SiNetlify />
                      <SiAppwrite />
                      <FaFigma />
                    </span>
                  </div>
                  <div className="flex gap-2 mt-[10px] mb-[5px] font-medium">
                    <a
                      href="#"
                      className="flex flex-row items-center gap-[10px] bg-primary-dark/4 dark:bg-primary/4 rounded-full px-[10px] py-[2.5px] text-primary-dark/60 dark:text-primary/70 hover:text-green-800 dark:hover:text-red-100 transition-colors duration-200 text-[14px]"
                    >
                      Code
                      <SiGithub size={14} />
                    </a>
                    <a
                      href="#"
                      className="flex flex-row items-center gap-[10px] bg-primary-dark/4 dark:bg-primary/4 rounded-full px-[10px] py-[2.5px] text-primary-dark/60 dark:text-primary/70 hover:text-green-800 dark:hover:text-red-100 transition-colors duration-200 text-[14px]"
                    >
                      Preview
                      <FaArrowCircleUp size={14.5} className="rotate-45" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* FeProject 2 */}
            <div>
              {/* Carousel */}
              <div className="border-2 border-primary-dark/20 hover:border-green-500/80 dark:border-primary/20 dark:hover:border-red-500/80 shadow-xl shadow-primary-dark/0 dark:hover:shadow-red-500/10 px-1 py-1 rounded-xl w-[320px] bg-primary-dark/2 dark:bg-primary/2.5 transition-colors duration-300 dark:hover:text-red-100 text-primary-dark/80 dark:text-primary hover:shadow-green-500/10 hover:text-green-800">
                <div className="relative w-full h-60 rounded-[8px] overflow-hidden">
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt="carousel"
                      className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
                        index === current ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>
                <div className="mt-[8px] px-[10px]">
                  <h1 className="text-[24px] font-semibold">Project Title</h1>
                  <p className="mt-[6px] h-[94px] font-light transition-colors duration-300 dark:hover:text-red-100/60 text-primary-dark/60 dark:text-primary/60 hover:text-green-800/80 text-[14.8px]">
                    This is a demo of the feature i have added here and i will
                    implement this to others too
                  </p>
                  <div className="inline-flex bg-primary-dark/4 dark:bg-primary/4 rounded-full items-center min-w-[28px]">
                    <span className="flex flex-row gap-[10px] px-2 py-[6px] text-primary-dark/60 dark:text-primary/70">
                      <FaReact />
                    </span>
                  </div>
                  <div className="flex gap-2 mt-[10px] mb-[5px] font-medium">
                    <a
                      href="#"
                      className="flex flex-row items-center gap-[10px] bg-primary-dark/4 dark:bg-primary/4 rounded-full px-[10px] py-[2.5px] text-primary-dark/60 dark:text-primary/70 hover:text-green-800 dark:hover:text-red-100 transition-colors duration-200 text-[14px]"
                    >
                      Code
                      <SiGithub size={14} />
                    </a>
                    <a
                      href="#"
                      className="flex flex-row items-center gap-[10px] bg-primary-dark/4 dark:bg-primary/4 rounded-full px-[10px] py-[2.5px] text-primary-dark/60 dark:text-primary/70 hover:text-green-800 dark:hover:text-red-100 transition-colors duration-200 text-[14px]"
                    >
                      Preview
                      <FaArrowCircleUp size={14.5} className="rotate-45" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* FeProject 3 */}
            <div>
              {/* Carousel */}
              <div className="border-2 border-primary-dark/20 hover:border-green-500/80 dark:border-primary/20 dark:hover:border-red-500/80 shadow-xl shadow-primary-dark/0 dark:hover:shadow-red-500/10 px-1 py-1 rounded-xl w-[320px] bg-primary-dark/2 dark:bg-primary/2.5 transition-colors duration-300 dark:hover:text-red-100 text-primary-dark/80 dark:text-primary hover:shadow-green-500/10 hover:text-green-800">
                <div className="relative w-full h-60 rounded-[8px] overflow-hidden">
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt="carousel"
                      className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
                        index === current ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>
                <div className="mt-[8px] px-[10px]">
                  <h1 className="text-[24px] font-semibold">Project Title</h1>
                  <p className="mt-[6px] h-[94px] font-light transition-colors duration-300 dark:hover:text-red-100/60 text-primary-dark/60 dark:text-primary/60 hover:text-green-800/80 text-[14.8px]">
                    This is a demo of the feature i have added here and i will
                    implement this to others too
                  </p>
                  <div className="inline-flex bg-primary-dark/4 dark:bg-primary/4 rounded-full items-center min-w-[28px]">
                    <span className="flex flex-row gap-[10px] px-2 py-[6px] text-primary-dark/60 dark:text-primary/70">
                      <FaReact />
                    </span>
                  </div>
                  <div className="flex gap-2 mt-[10px] mb-[5px] font-medium">
                    <a
                      href="#"
                      className="flex flex-row items-center gap-[10px] bg-primary-dark/4 dark:bg-primary/4 rounded-full px-[10px] py-[2.5px] text-primary-dark/60 dark:text-primary/70 hover:text-green-800 dark:hover:text-red-100 transition-colors duration-200 text-[14px]"
                    >
                      Code
                      <SiGithub size={14} />
                    </a>
                    <a
                      href="#"
                      className="flex flex-row items-center gap-[10px] bg-primary-dark/4 dark:bg-primary/4 rounded-full px-[10px] py-[2.5px] text-primary-dark/60 dark:text-primary/70 hover:text-green-800 dark:hover:text-red-100 transition-colors duration-200 text-[14px]"
                    >
                      Preview
                      <FaArrowCircleUp size={14.5} className="rotate-45" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab-2 */}
        {activeTab === "tab2" && (
          <div className="grid grid-cols-3 gap-[16px]"></div>
        )}

        {/* Tab-3 */}
        {activeTab === "tab3" && (
          <div className="grid grid-cols-3 gap-[16px]"></div>
        )}
      </div>
    </div>
  );
};

export default Projects;
