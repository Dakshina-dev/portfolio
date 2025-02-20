import React, { useState } from 'react'
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import {HashLink as Link} from "react-router-hash-link"



const Header = () => {
  const [menu,setMenu] = useState(false)

  function menuButton(){
    setMenu(!menu)
  }
  return (
    <div className='fixed top-0 mx-0 left-0 right-0 my-auto lg:mx-auto lg:container bg-[#010e28]/80 z-50 '>
      <div className='flex justify-between items-center py-5 gap-2 lg:px-20 px-5'>
      <div>
        <h1 className='text-4xl font-semibold'><a href="/">Dakshina.</a></h1>
      </div>
        {menu ? 
        <ul className={`flex items-start flex-col pt-20  right-0 px-16 fixed h-full top-0 font-semibold bg-[#010e28]/90 md:hidden gap-5`}>
       <Link to="#" onClick={menuButton}>HOME</Link>
        <Link to="#about" onClick={menuButton} smooth>ABOUT ME</Link>
        <Link to="#portfolio" onClick={menuButton} smooth>MY WORK</Link>
        <Link to="#services" onClick={menuButton} smooth>SERVICES</Link>
        <Link to="#contact" onClick={menuButton} smooth>CONTACT ME</Link>
        
      </ul> : null}
      <ul className='justify-center font-semibold items-center hidden md:flex gap-10'>
      <Link to="#" smooth>HOME</Link>
      <Link to="#about" smooth>ABOUT ME</Link>
        <Link to="#portfolio" smooth>MY WORK</Link>
        <Link to="#services" smooth>SERVICES</Link>
        <Link to="#contact" smooth>CONTACT ME</Link>
        
        <li className='hidden lg:flex ml-10'><a className='border px-4 py-2 rounded-full flex hover:bg-white hover:text-[#010e28] transition-all ease-in-out duration-500  items-center gap-2 cursor-pointer' href="mailto:dakshinamoorthy.be.com"><SiMinutemailer className='size-6' />MAIL</a></li>
    </ul>  
  {menu ? <IoClose className='size-8 cursor-pointer md:hidden z-50 '  onClick={menuButton} />: <CgMenuRight className='size-8 cursor-pointer md:hidden'  onClick={menuButton}  />
}
    </div>
    </div>
  )
}

export default Header