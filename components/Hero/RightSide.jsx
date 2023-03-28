import Image from "next/image";
import React, { useState } from "react";
import icon1 from "../../public/flex-ui-assets/icons/woman.png";
import IMG2 from "../../public/flex-ui-assets/images/uxui/planet.png";
import GIF from "../../public/flex-ui-assets/gif/113616-world.gif";
import GIF1 from "../../public/flex-ui-assets/gif/Recording 2023-03-09 000518.gif";
import GIF2 from "../../public/flex-ui-assets/gif/animation_500_lezbmyq8.gif";
import GIF3 from "../../public/flex-ui-assets/gif/animation_500_lezztslk.gif";

export default function RightSide() {


  return (
    <>
      <div className="relative flex justify-center items-center dark:hidden">
        <Image src={GIF} className='z-1 rounded-full border-8 md:-translate-y-40 md:-translate-x-20' width={950} height={950} alt='Lightmode' />
        <span className="absolute gap-5 grid-cols-1">
          <div className="text-gray-800 dark:text-white font-bold translate-y-10 border-inherit border-2 border-gray-100/75 px-10 z-2 backdrop-blur-lg rounded-full p-2 mb-3">Application Development</div>
          <div className="text-gray-800 dark:text-white font-bold translate-y-10 border-inherit border-2 border-gray-100/75 px-10 z-2 backdrop-blur-lg rounded-full p-2">Website Development</div>
        </span>
      </div>

      <div className="relative flex justify-center items-center opacity-0 dark:opacity-100 md:-translate-y-10">
        <Image src={GIF3} className='z-1 rounded-full border-8 md:-translate-y-40 md:-translate-x-20' width={1100} height={1050} alt='darkmode'/>
        <span className="absolute gap-5 grid-cols-1">
          <div className="text-gray-800 dark:text-white font-bold translate-y-10 border-inherit border-2 border-gray-100/75 px-10 z-2 backdrop-blur-lg rounded-full p-2 mb-3">Application Development</div>
          <div className="text-gray-800 dark:text-white font-bold translate-y-10 border-inherit border-2 border-gray-100/75 px-10 z-2 backdrop-blur-lg rounded-full p-2">Website Development</div>
        </span>
      </div>
    </>
  );
}
