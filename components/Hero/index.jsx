import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
function Hero() {
  return (
    <>
      <div data-aos="fade-up" className="flex select-none transition-all w-full">
        <div className="z-3 p-5 pb-52 pt-40 md:pt-0 flex items-center">
          <LeftSide />
        </div>
        <div className="z-1 md:pt-40 md:inline hidden h-52 text-center right-0 absolute top-1/5 md:top-auto">
          <RightSide />
        </div>
      </div>
    </>
  );
}
export default Hero;
