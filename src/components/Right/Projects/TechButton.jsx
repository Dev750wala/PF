import React from 'react';

const TechButton = ({ technologyNames }) => {
    return (
        <div className='flex flex-row flex-wrap gap-2 mt-2 bg-transparent'>
            {
                technologyNames.map((tech, index) => (
                    <div key={index} className='flex justify-center items-center w-16 h-16 bg-transparent' style={{ backgroundColor: '#143fab' }}>
                        <p className='p-1 px-2 m-0 text-xs font-bold text-[#50C9CE]' style={{ backgroundColor: '#183656', borderRadius: "100px" }}>{tech}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default TechButton;
