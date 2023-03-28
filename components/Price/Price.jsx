import React from "react";
// import { CardPrice } from "./CardPrice";
 import Image from "next/image";
 import {AiFillCheckCircle} from "react-icons/ai"
export const Price = () => {
  const Prices = [
    {
      size: "Trial",
      price: "0",
      month: "/ ເດືອນ",
      pop: "FREE",
      popular: "ຮ່ວມທົດລອງໃຊ້ຟຣີໃນຊວງກຳລັງພັດທະນາ",
      details: [
        {
          des: "Post Of Sale - POS",
          src: "flex-ui-assets/elements/pricing/checkbox-yellow.svg",
        },
        {
          des: "Inventory",
          src: "flex-ui-assets/elements/pricing/checkbox-yellow.svg",
        },
        {
          des: "Store-Front",
          src: "flex-ui-assets/elements/pricing/checkbox-yellow.svg",
        },
      ],
    },
    {
      size: "Regular",
      price: "390,000",
      month: "/ ເດືອນ",
      pop: "",
      popular: "ໃນໄວໆນີ້",
      details: [
        {
          des: "Inventory",
          src: "flex-ui-assets/elements/pricing/checkbox-yellow.svg",
        },
        {
          des: "Post Of Sale - POS",
          src: "flex-ui-assets/elements/pricing/checkbox-yellow.svg",
        },
      ],
    },
    {
      size: "Premium",
      price: "690,000",
      month: "/ ເດືອນ",
      pop: "",
      popular: "ໃນໄວໆນີ້",
      details: [
        {
          des: "Post Of Sale - POS",
          src: "flex-ui-assets/elements/pricing/checkbox-yellow.svg",
        },
        {
          des: "Inventory",
          src: "flex-ui-assets/elements/pricing/checkbox-yellow.svg",
        },
        {
          des: "Store-Front",
          src: "flex-ui-assets/elements/pricing/checkbox-yellow.svg",
        },
      ],
    },
  ];
  return (
    <>
     <div>
       <section
         id="prices"
         className="py-20 xl:py-24 text-coolGray-900 dark:text-white"
       >
         <div className="container px-4 mx-auto">
           <div data-aos="fade-up" className="text-center">
             <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-coolGray-900 bg-yellow-500 dark:text-white font-medium uppercase rounded-9xl">
               Pricing
             </span>
             <h3 className="mb-4 text-3xl md:text-5xl sm:text-sm text-coolGray-900 dark:text-white font-bold tracking-tighter">
               ຕອນນີ້ລະບົບຂອງພວກເຮົາກຳລັງເຂົ້າສູ່ການພັດທະນາຢູ່
             </h3>
           </div>
           <div
             data-aos="fade-up"
             className="flex flex-wrap justify-center -mx-4"
           >
             {Prices.map((e, index) => (
               <div key={index} className={`w-full md:w-1/2 lg:w-1/3 p-4`}>
                 <div
                   className={`flex flex-col pt-8 pb-8 bg-coolGray-50 rounded-md shadow-md ${
                     e.popular === "ໃນໄວໆນີ້"
                       ? "cursor-not-allowed bg-colordisable"
                       : "hover:scale-105 transition duration-500"
                   }`}
                 >
                   <div className="px-8 pb-8">
                     <div className="flex flex-wrap items-center justify-between mb-6">
                       <h3 className="mr-3 text-lg md:text-xl font-body font-medium">
                         {e.size}
                       </h3>
                       {e.pop ? (
                         <span className="inline-block py-px px-2 text-xs leading-5 text-white bg-yellow-500 font-medium uppercase rounded-9xl">
                           {e.pop}
                         </span>
                       ) : (
                         ""
                       )}
                     </div>
                     <div className="mb-6 text-center">
                       <span className="relative -top-10 right-1 text-2xl text-coolGray-900 font-bold">
                         LAK
                       </span>
                       <span className="text-4xl md:text-4xl text-coolGray-900 font-semibold">
                         {e.price}
                       </span>
                       <span className="inline-block ml-1 text-coolGray-500 font-semibold">
                         {e.month}
                       </span>
                     </div>
                     <p
                       className={`mb-6 ${
                         e.popular === "ໃນໄວໆນີ້"
                           ? "text-blue-500"
                           : "text-green-700"
                       }  font-normal text-xl`}
                     >
                       {e.popular}
                     </p>
                     <button
                       disabled={e.popular === "ໃນໄວໆນີ້" ? true : false}
                       onClick={() => {}}
                       className={`${
                         e.popular === "ໃນໄວໆນີ້" ? "cursor-not-allowed" : ""
                       } block py-4 px-7 mb-4 w-full text-base md:text-lg
                       ${
                         e.popular === "ໃນໄວໆນີ້"
                           ? ""
                           : "hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                       } leading-6 text-yellow-50 font-medium text-center bg-yellow-500  rounded-md shadow-sm`}
                     >
                       ເລີ່ມຕົ້ນໃຊ້ງານ
                     </button>
                     <button
                       disabled={e.popular === "ໃນໄວໆນີ້" ? true : false}
                       onClick={() => {}}
                       className={`${
                         e.popular === "ໃນໄວໆນີ້" ? "cursor-not-allowed" : ""
                       } inline-block py-3 px-7 w-full text-coolGray-500 font-medium text-center bg-white
                     ${
                       e.popular === "ໃນໄວໆນີ້"
                         ? ""
                         : "hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-100 focus:ring-opacity-50"
                     } rounded-md shadow-sm`}
                     >
                       ເພີ່ມເຕີມ
                     </button>
                   </div>
                   <div className="border-b border-coolGray-100" />
                   <ul className="self-start px-8 pt-8">
                     {e.details.map((val, key) => (
                       <li
                         key={key}
                         className="flex items-center mb-3 text-coolGray-500 font-medium"
                       >
                       < AiFillCheckCircle className="mr-3 text-yellow-500 text-2xl"  rc={val.src} alt="image" />
                         <span>{val.des}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </section>
   </div>
    </>
  );
};
