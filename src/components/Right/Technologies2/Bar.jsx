import React from 'react'
import { technologies } from '../../../Data'

const SkillDisplay = () => {
    return (

        <div className='bg-transparent pl-4'>
            <div className='bg-transparent py-10 mb-10'>
                <h3 className='bg-transparent font-bold text-gray-300 text-9xl lg:text-7xl'>My tech stack</h3>
            </div>

            <div className='bg-transparent flex flex-row flex-wrap justify-start items-center gap-3 my-56 py-32'>
                {
                    technologies.map((technology, index) => (
                        <div key={index} id='skills' className='flex flex-row justify-start items-start bg-transparent' style={{ backgroundColor: '#143fab' }}>
                            <button className='p-1 px-3 m-0 text-base font-extrabold text-[#50C9CE] select-none' style={{ backgroundColor: '#183656', borderRadius: "100px" }}>
                                {technology.name}
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>


    )
}

export default SkillDisplay
