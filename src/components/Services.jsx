import React from 'react'
import { FaCode } from "react-icons/fa6";
import { GiPaintBrush } from "react-icons/gi";



const Services = () => {
  return (
    <div id='services' className='pt-10'>
      <div className="flex flex-col my-10 p-2 gap-5 justify-center items-center">
      <p className="text-xl text-center">What I Offer</p>
      <h2 className="text-6xl text-center">My Services</h2>
      <div className='flex flex-col md:flex-row gap-8 p-5'>
        <div className='flex flex-col justify-center gap-2 items-start border rounded-lg p-5 md:min-w-60 hover:border-b-4 hover:border-r-4 hover:bg-[#19002c]/20 transition-all ease-in-out'>
          <div className='bg-[#ff758c] rounded-full p-2'><FaCode className='size-8'/></div>
          <h2 className='text-lg font-semibold'>Frontend Development</h2>
          <p>Web development is the process of building, programming...</p>
          <button>Read more...</button>
        </div>
        <div className='flex flex-col justify-center gap-2 items-start border rounded-lg p-5 md:min-w-60 hover:border-b-4 hover:border-r-4 hover:bg-[#19002c]/20 transition-all ease-in-out'>
          <div className='bg-[#ff758c] rounded-full p-2'><GiPaintBrush className='size-8' /></div>
          <h2 className='text-lg font-semibold'>UI/UX Design</h2>
          <p>Ui/Ux designing is the process of building, programming...</p>
          <button>Read more...</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Services