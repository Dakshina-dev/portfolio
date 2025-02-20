import React from "react";
import img1 from "../assets/netflix.jpeg";
import img2 from "../assets/ecommerce.jpg";
import img3 from "../assets/eduapp.png";
import { BiNavigation } from "react-icons/bi";


const Portfolio = () => {
  return (
    <div id="portfolio" className="pt-10">
      <div>
        <div className="flex flex-col my-10 p-2 gap-8 justify-center items-center">
          <p className="text-xl text-center">My portfolio</p>
          <h2 className="text-6xl text-center">My latest work</h2>
          <p className="text-center">
            Welcome to my web development portfolio! Explore a collection of
            projects showcasing my expertise in front-end development.
          </p>
          <div>
            <div  className="flex flex-wrap gap-10 lg:gap-20 justify-center my-10">
            <a className="relative" target="_blank" href="https://dakshina-project1.netlify.app/">
            <img src={img1} alt="" className="size-64 rounded-lg" />
                <div className="absolute bottom-5 left-8 px-6 py-3 bg-white flex items-center gap-4 rounded-lg ">
                  <h2 className="text-black">Netflix Clone</h2>
                  <BiNavigation className="fill-black border-2 border-black rounded-full p-1 size-8"/>
                </div>
              </a>
              <a className="relative" target="_blank" href="https://dakshina-eduapp.netlify.app/">
                <img src={img3} alt="" className="size-64 rounded-lg" />
                <div className="absolute bottom-5 left-8 px-6 py-3 bg-white flex items-center gap-4 rounded-lg ">
                  <h2 className="text-black">Edutech Site</h2>
                  <BiNavigation className="fill-black border-2 border-black rounded-full p-1 size-8"/>
                </div>
              </a>
              <a className="relative" target="_blank" href="">
                <img src={img2} alt="" className="size-64 rounded-lg" />
                <div className="absolute bottom-5 left-8 px-6 py-3 bg-white flex items-center gap-4 rounded-lg ">
                  <h2 className="text-black">Ecommerce Site</h2>
                  <BiNavigation className="fill-black border-2 border-black rounded-full p-1 size-8"/>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
