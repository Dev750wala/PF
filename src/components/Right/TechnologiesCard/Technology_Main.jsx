import React, { useState } from 'react';
import MongoDB from './MongoDB';
import Express from './Express';
import HTML from './HTML';
import CSS from './CSS';
import JS from './JS';
import Python from './Python';
import ReactL from './React';
import Node from './Node';
import PostgresSQL from './PostgresSQL';
import CardHeading from './CardHeading';

const Technologies = () => {

  return (
    <div className='bg-transparent mx-auto' id='skills'>
      <CardHeading />
      <h1 className='block lg:hidden bg-transparent mb-14 font-bold pl-4'>Skills</h1>
      <div className='flex gap-5 flex-wrap pb-40 bg-transparent'>
        <HTML />
        <CSS />
        <JS />
        <Node />
        <Express />
        <MongoDB />
        <PostgresSQL />
        <ReactL />
        <Python />
      </div>
    </div>
  );
};

export default Technologies;
