import React from 'react';
import Left_Div from './components/Left/Left_Div';
import Right_Div from './components/Right/Right_Div';

function App() {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row justify-evenly mt-24 lg:mt-28 bg-transparent">
      <Left_Div />
      <Right_Div />
    </div>
  );
}

export default App;


// mt-24 lg:mt-28