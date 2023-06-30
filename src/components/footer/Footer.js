import React from 'react'
import { logo } from "../../assets/index";
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full h-auto py-20 border-b-[1px] border-b-black grid grid-cols-4 gap-8'>
      <div className='w-full h-full flex flex-col gap-8'>
        <img className='w-32' src={ logo } alt='logo'/>
        <div className='flex gap-4'>
          <span className='w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne transform hover:bg-opacity-40 hover:-translate-y-2 transition-all hover:text-designColor cursor-pointer duration-300'>
            <FaTwitter />
          </span>
          <span className='w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne transform hover:bg-opacity-40 hover:-translate-y-2 transition-all hover:text-designColor cursor-pointer duration-300'>
            <FaLinkedin />
          </span>
          <span className='w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne transform hover:bg-opacity-40 hover:-translate-y-2 transition-all hover:text-designColor cursor-pointer duration-300'>
            <FaGithub />
          </span>
        </div>
      </div>


      <div className='w-full h-full'>
        <h3 className='text-xl uppercase text-designColor tracking-wider'>
          Quick Links
        </h3>
      </div>
      <div className='w-full h-full'></div>
      <div className='w-full h-full'></div>
    </div>

  )
}

export default Footer