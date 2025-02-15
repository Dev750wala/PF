import React from 'react';
import Intro from './Intro_1';
import Technology_Main from './TechnologiesCard/Technology_Main';
import ProjectMain from './Projects/ProjectMain';
import Love_qoute from './Love_qoute';
import EducationMain from './Education/EducationMain';
// import { technologies } from '../../Data';
// import TechButton from './Technologies2/Bar';
import SkillDisplay from './Technologies2/Bar';
import CatFormIcon from '../CatFormIcon';

const Right_Div = () => {
  return (
    <div className="relative lg:w-1/2 md:mt-auto w-full ml-auto md:px-3 lg:px-11 z-50 bg-transparent">
      <Intro />
      {/* <Technology_Main /> */}
      {/* <TechButton technologies={technologies}/> */}
      <SkillDisplay />
      <ProjectMain />
      <EducationMain />
      <Love_qoute />
    </div>
  );
};

export default Right_Div