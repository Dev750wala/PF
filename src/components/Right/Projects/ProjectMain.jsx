import React, { useState } from 'react'
import Card from './ProjectCard'

const ProjectMain = () => {

  var [ on, setOn ] = useState(false);

  function handleHover() {
    setOn(!on);
  }

  return (
    <div className='mb-56 bg-transparent mt-28' id='projects'>
      <h1 className='block lg:hidden bg-transparent mb-14 font-bold pl-4 text-4xl'>Projects</h1>
      <Card />

      <a onMouseEnter={handleHover} onMouseLeave={handleHover} href='https://github.com/Dev750wala?tab=repositories' target='_blank' className='no-underline font-bold'>
        <p className='flex flex-row pl-6 mb-10 bg-transparent'>
          View all projects 
          <svg className={`transition-transform ${on ? "translate-x-[4px]" : ""} font-extrabold`} style={{background: "transparent"}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
            <path className='bg-transparent' fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
          </svg>
        </p>
      </a>
    </div>
  )
}

export default ProjectMain