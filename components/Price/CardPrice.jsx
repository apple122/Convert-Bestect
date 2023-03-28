import React from "react";
export const CardPrice = (prop) => {
  return (
    <></>
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="flex flex-col pt-8 pb-8 bg-coolGray-50 rounded-md shadow-md hover:scale-105 transition duration-500">
        <div className="px-8 pb-8">
          <div className="flex flex-wrap items-center justify-between mb-6">
            <h3 className="mr-3 text-lg md:text-xl text-coolGray-800 font-medium">
              {prop.medium}
            </h3>
            {prop.popular ? (
              <span className="inline-block py-px px-2 text-xs leading-5 text-white bg-yellow-500 font-medium uppercase rounded-9xl">
                {prop.popular}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="mb-6">
            <span className="relative -top-10 right-1 text-3xl text-coolGray-900 font-bold">
              LAK
            </span>
            <span className="text-6xl md:text-7xl text-coolGray-900 font-semibold">
              {prop.price}
            </span>
            <span className="inline-block ml-1 text-coolGray-500 font-semibold">
              {prop.month}
            </span>
          </div>
          <p className="mb-6 text-coolGray-400 font-medium">
            {prop.basicfeatures}
          </p>
          <a
            className="inline-block py-4 px-7 mb-4 w-full text-base md:text-lg leading-6 text-yellow-50 font-medium text-center bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 rounded-md shadow-sm"
            href="#"
          >
            Get Started
          </a>
          <a
            className="inline-block py-3 px-7 w-full text-coolGray-500 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-100 focus:ring-opacity-50 rounded-md shadow-sm"
            href="#"
          >
            Learn more
          </a>
        </div>
        <div className="border-b border-coolGray-100" />
        <ul className="self-start px-8 pt-8">
          <li className="flex items-center mb-3 text-coolGray-500 font-medium">
            <img
              className="mr-3"
              //   src="flex-ui-assets/elements/pricing/checkbox-yellow.svg"
              src={prop.img}
              alt="image"
            />
            <span>{prop.list}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
