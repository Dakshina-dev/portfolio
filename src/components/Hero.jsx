import React from 'react'
import img from '../assets/image1.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { PiDownloadSimpleBold } from "react-icons/pi";
import resume from "../assets/resume.pdf"


const Hero = () => {
  return (
    <div className='mt-24' id='hero'>
      <div className='flex flex-col justify-center items-center gap-4 py-5 text-center'>
        <div  className='w-52'>
        <img src={img} alt="profileImg" className='rounded-full  border pt-1 mb-5 lg:mb-10'/>
        </div>
        <div>
          <p className='text-3xl px-2'>Hi..! I'm Dakshinamoorthy</p>
        </div>
        <div>
          <h2 className='text-6xl'>Frontend Web Developer</h2>
        </div>
        <div>
          <h2 className='text-xl px-2'>with a strong foundation in HTML, CSS, JavaScript and React Js.</h2>
        </div>
        <div className='flex flex-col sm:flex sm:flex-row items-center gap-5 py-8'>
          <button className='flex justify-center items-center border rounded-full  bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] px-6 py-3 gap-2 bg-'>Contact Me<FaArrowRightLong /></button>
          <a href={resume} download  className='cursor-pointer flex justify-center bg-white text-[#010e28] font-semibold items-center border rounded-full  px-6 py-3 gap-2'>My Resume<PiDownloadSimpleBold className='fill-[#010e28]' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero