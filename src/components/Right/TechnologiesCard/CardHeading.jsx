import React from 'react';

const CardHeading = () => {
  return (
    <div className='mb-5 bg-transparent hidden lg:flex'>
      <h6 className='bg-transparent'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-return-right bg-transparent"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"
          />
        </svg>
      </h6>
      &nbsp;&nbsp;
      <h6 className='bg-transparent'>Technologies I've recently been working with</h6>
    </div>
  );
};

export default CardHeading;
