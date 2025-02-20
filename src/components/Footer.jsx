import React from 'react'
import { IoIosMail } from "react-icons/io";


const Footer = () => {
  return (
    <div>
      <div className=''>
        <h1 className='text-4xl font-semibold text-center'><a href="/">Dakshina.</a></h1>
        <div className='flex items-center justify-center gap-4'>
          <IoIosMail className='size-10'/>
          <a className='' href="mailto:dakshinamoorthy.be.com">dakshinamoorthy.be@gmail.com</a>
        </div>
        <div className='w-[80%] mx-[10%] h-[1px] bg-white mt-8'></div>
      </div>

      <div className='flex flex-col md:flex-row md:justify-between md:px-20 justify-center items-center gap-2 mt-5 mx-[10%] pt-5 py-8'>
        <p>© 2025 Dakshinamoorthy. All rights reserved.</p>
        <div className='flex gap-10'>
          <a  target="_blank" href="https://github.com/Dakshina-dev">Github</a>
          <a  target="_blank" href="#">LinkedIn</a>
        </div>
      </div>
    </div>
  )
}

export default Footer