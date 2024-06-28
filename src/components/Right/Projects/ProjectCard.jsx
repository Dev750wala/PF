import React, { useState } from 'react'
import { projects } from "../../../Data"
import TechButton from './TechButton';

const Card = () => {
  const [on, setOn] = useState(new Array(projects.length).fill(false));

  function handleHover(index) {
    const newHoverStates = [...on];
    newHoverStates[index] = !newHoverStates[index];
    setOn(newHoverStates);
  }

  return (
    projects.map((project, index) => (
      <a
        href={project.link}
        target="_blank"
        className="no-underline flex flex-col lg:flex-row items-center justify-between mb-14 rounded-lg p-3 bg-slate-500 bg-opacity-0 hover:bg-opacity-20 transition-colors"
        onMouseEnter={() => handleHover(index)}
        onMouseLeave={() => handleHover(index)}
        key={index}
      >
        <div className="p-2 w-44 bg-transparent lg:mt-0 lg:pt-0 flex lg:justify-center justify-start items-start pb-96">
          <img className="bg-transparent lg:mt-0 lg:pt-0 select-none" src={project.image} alt={project.title} />
        </div>
        <div className="w-80 mt-10 lg:mt-0 bg-transparent">
          <h6 className="font-extrabold bg-transparent flex items-center">
            <a href="#" className="no-underline bg-transparent text-gray-300 flex items-center pt-2 pb-2 mb-2">
              {project.title} &nbsp;
              <svg
                className={`transition-transform bi bi-arrow-up-right ${on[index] ? "translate-x-[4px] translate-y-[-4px]" : ""} bg-transparent`}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
              </svg>
            </a>
          </h6>
          <p className="bg-transparent text-sm pt-0 mt-0">{project.description}</p>
          <TechButton technologyNames={project.technologies}/>
        </div>
      </a>
    ))
  );
};

export default Card