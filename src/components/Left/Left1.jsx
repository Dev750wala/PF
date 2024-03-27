import React from 'react';
import { L_bio } from "../../Data";
import { Link as ScrollLink } from 'react-scroll';

const Left1 = () => {
  return (
    <div className='mb-20 bg-transparent'>
      <div className='mb-20 bg-transparent'>
        <h1 className="font-bold bg-transparent">Dev Sadisatsowala</h1>
        <h5 className='mb-4 md:text-sm lg:text-xl bg-transparent text-base'>Web Development Trainee</h5>
        <p className="text-gray-400 bg-transparent">{L_bio.bio}</p>
      </div>

      <div className='bg-transparent lg:block hidden'>
        <h6 className='text-sm my-3 bg-transparent'>
          <ScrollLink className='font-bold bg-transparent no-underline text-gray-400 cursor-pointer tracking-widest text-xs' to="about" duration={500} offset={-120}>ABOUT</ScrollLink>
        </h6>
        <h6 className='text-sm my-3 bg-transparent'>
          <ScrollLink className='font-bold bg-transparent no-underline text-gray-400 cursor-pointer tracking-widest text-xs' to="skills" duration={500} offset={-120}>SKILLS</ScrollLink>
        </h6>
        <h6 className='text-sm my-3 bg-transparent'>
          <ScrollLink className='font-bold bg-transparent no-underline text-gray-400 cursor-pointer tracking-widest text-xs' to="projects" duration={500} offset={-100}>PROJECTS</ScrollLink>
        </h6>
        <h6 className='text-sm my-3 bg-transparent'>
          <ScrollLink className='font-bold bg-transparent no-underline text-gray-400 cursor-pointer tracking-widest text-xs' to="education" duration={500} offset={-100}>EDUCATION</ScrollLink>
        </h6>
      </div>
    </div>
  )
}

export default Left1;
