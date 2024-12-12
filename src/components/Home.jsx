import Left_Div from "./Left/Left_Div";
import Right_Div from "./Right/Right_Div";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col lg:flex-row justify-between mt-24 lg:mt-28 lg:px-20 bg-transparent">
        <Left_Div />
        <Right_Div />
      </div>
    </>
  );
};

export default Home;
