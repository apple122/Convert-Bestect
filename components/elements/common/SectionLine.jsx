import React from 'react';

export default function SectionLine({ children }) {
  return (
    <div data-aos="fade-up" className="relative w-5/6 mx-auto ">
      <div className="absolute left-0 w-full h-1 mx-auto bg-yellow-500 top-5"></div>
      <div className="absolute w-1/2 mx-auto text-center bg-white dark:bg-black left-1/4 ">
        <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-yellow-500 lg:text-5xl dark:text-white">
          {children}
        </h1>
      </div>
    </div>
  );
}
