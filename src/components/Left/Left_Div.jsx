// Left_Div.js
import React from 'react';
import Left1 from './Left1';
import Left2 from './Left2';

const Left_Div = () => {
  return (
    <div className="lg:fixed lg:w-1/3 md:w-1/2 w-full px-2.5 lg:px-16 lg:pl-4 bg-transparent z-10 mr-2 lg:mr-5">
      <Left1 />
      <Left2 />
    </div>
  );
};

export default Left_Div;
