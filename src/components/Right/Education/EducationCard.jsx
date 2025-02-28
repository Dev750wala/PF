import React, {useState} from 'react'
import { education } from "../../../Data"

const EducationCard = () => {

  var [on, setOn] = useState(new Array(education.length).fill(false));

  function handleHover(index) {
    const newHoverStates = [...on];
    newHoverStates[index] = !newHoverStates[index];
    setOn(newHoverStates);
  };

  return (
    education.map((edu, index) => (
      <div 
        className={`flex flex-col lg:flex-row justify-between mb-14 rounded-lg p-3 hover:bg-slate-500 bg-opacity-0 hover:bg-opacity-20 transition-colors ${on[index] ? "" : "bg-transparent"}`} 
        key={index}
        onMouseEnter={() => handleHover(index)}
        onMouseLeave={() => handleHover(index)}
        id='education'
      >
        <div className='p-0 bg-transparent'>
          <p className='bg-transparent md:pl-0 lg:pl-6 text-gray-400 lg:pt-2 tracking-wider'>{edu.year}</p>
        </div>
        <div className='w-80 bg-transparent'>
          <h6 className='font-extrabold bg-transparent py-2'>
            {edu.name}
          </h6>
          <p className='bg-transparent text-sm'>
            {edu.description}
          </p>
        </div>
      </div>
    ))
  );
}


export default EducationCard;
