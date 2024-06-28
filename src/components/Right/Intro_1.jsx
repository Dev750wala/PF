import React from 'react'
import { R_bio } from "../../Data"

const Intro = () => {
  return (
    <div className="mb-56 bg-transparent pl-3 lg:pr-20" id='about'>
          <h1 className='block lg:hidden bg-transparent mb-10 font-bold text-4xl'>About me</h1>
          {
            Object.keys(R_bio).map(key => {
              return <p key={key} className='text-gray-400 mb-4 bg-transparent text-lg'>{R_bio[key]}</p>
            })
          }       
    </div>
  )
}

export default Intro