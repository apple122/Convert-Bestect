import React from "react";
import Article from "../elements/common/Article";
import { heroContent } from "../../util/data";
import { useState } from "react";
export default function LeftSide() {

  return (
    <div className="z-3 p-5 mx-auto h-80 md:h-screen -mt-20 md:-mt-0 flex justify-center items-center">
      <div className="relative z-10 -mx-10 flex justify-center">
        <div className="px-4 backdrop-blur-sm rounded mb-12 md:w-1/2 md:mb-0">
          <Article content={heroContent}/>
          <a href="#about" className="relative p-0.5 hover:text-white text-black dark:text-white inline-flex items-center justify-center font-bold overflow-hidden group rounded-full">
            <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative px-5 py-2 transition-all ease-in-out bg-white dark:bg-black rounded-full group-hover:bg-opacity-0 duration-400">
              <span className="relative">About us</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
