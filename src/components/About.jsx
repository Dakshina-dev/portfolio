import React from "react";
import img from '../assets/image2.png'
// import { FaCode } from "react-icons/fa";
// import { FaGraduationCap } from "react-icons/fa6";
// import { FaLaptopCode } from "react-icons/fa";
import htmllogo from "../assets/htmlLogo.png"
import cssLogo from "../assets/cssLogo.png"
import jsLogo from "../assets/jsLogo.png"
import reactLogo from "../assets/reactLogo.png"
import tailwindLogo from "../assets/tailwindLogo.png"
import figmaLogo from "../assets/figmaLogo.png"
import vscodeLogo from "../assets/vscodeLogo.png"
import gitLogo from "../assets/gitLogo.png"



const About = () => {
  return (
    <div id="about" className="pt-10">
      <div className="flex flex-col my-10 p-2 gap-5 justify-center items-center">
        <p className="text-xl text-center">Introduction</p>
        <h2 className="text-6xl text-center">About me</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 lg:px-20 items-center">
          <div className="flex justify-center">
            <img src={img} alt="" className="size-[380px] md:size-[500px] lg:size-[550px] pt-5 py-10 px-5" />
          </div>
          <div className="flex flex-col justify-between items-start sm:items-center lg:items-start">
          <p className="text-justify sm:text-center lg:text-start px-5">
          I am an Entry Level Frontend Developer with a hands-on experience.
          I have privilege of collaborating with prestigious organizations,
          contributing to their success and growth.
        </p>
        <div className="flex flex-col gap-5 lg:gap-10 p-5">
          <h2 className="text-2xl sm:text-center lg:text-start">Languages & Tools I use:</h2>
          <div className="flex items-center flex-wrap gap-5 lg:gap-7">
            <img src={htmllogo} alt="" className="w-8 transition-transform hover:scale-110 " />
            <img src={cssLogo} alt="" className="w-8 transition-transform hover:scale-110" />
            <img src={jsLogo} alt="" className="w-8 transition-transform hover:scale-110" />
            <img src={reactLogo} alt="" className="w-10 transition-transform hover:scale-110" />
            <img src={tailwindLogo} alt="" className="w-10 transition-transform hover:scale-110" />
            <img src={figmaLogo} alt="" className="w-8 transition-transform hover:scale-110" />
            <img src={vscodeLogo} alt="" className="w-8 transition-transform hover:scale-110" />
            <img src={gitLogo} alt="" className="w-8 transition-transform hover:scale-110" />
          </div>
        </div>
        <div className="p-5 flex  flex-col gap-5 ">
        <h2 className="text-2xl sm:text-center lg:text-start">Educational Qualification:</h2>
        <p>Bachelor's Degree in Engineering (2021 Passed out)</p>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
