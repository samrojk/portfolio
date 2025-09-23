import React from "react";
import HeroImg from "../assets/hero_img.webp";
import { FaCircleCheck } from "react-icons/fa6";

const hero = () => {
  return (
    <div className="text-primary-dark dark:text-primary mx-[42px] justify-items-center mt-[72px]">
      {/* Hero Text */}
      <div className="flex flex-row items-center gap-[86px]">
        <span className="flex flex-col gap-4">
          <h1 className="flex flex-row items-center gap-6 text-[54px] font-semibold tracking-wide">
            Samroj Khan{" "}
            <FaCircleCheck
              size={24}
              className="text-green-500 dark:text-primary/70 mt-[3px]"
              title="Verified"
            />
          </h1>
          <h2 className="text-[24px] font-semibold text-green-500 dark:text-red-500 tracking-tighter">
            Frontend Engineer | Product Designer | AI/ML Enthusiast
          </h2>
          <p className="flex flex-col gap-2 text-[20px] text-gray-700 dark:text-gray-400 tracking-tighter mt-[-6px]">
            <p>Building scalable web apps with React & Tailwind.</p>
            <p>
              Passionate about frontend performance & seamless user experiences.
            </p>
            <p>Exploring React Native & Machine Learning.</p>
          </p>
        </span>
        <img
          src={HeroImg}
          alt="Hero Img"
          className="rounded-full h-[280px] border-3 border-green-500 dark:border-red-500 shadow-xl shadow-green-500/20 dark:shadow-red-500/20 hover:shadow-green-500/30 hover:dark:shadow-red-500/30 transition-all duration-400"
        />
      </div>
    </div>
  );
};

export default hero;
