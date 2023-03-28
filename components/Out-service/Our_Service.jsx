import React, { useEffect, useState } from "react";
import Image from "next/image";
import Integrations from "../../public/flex-ui-assets/icons/digital.png";
import online from "../../public/flex-ui-assets/icons/online-shopping.png";
import Enticing from "../../public/flex-ui-assets/icons/smartphone.png";
import mobile from "../../public/flex-ui-assets/icons/coding.png";
import IG from "../../public/flex-ui-assets/icons/instagram.png";
import WA from "../../public/flex-ui-assets/icons/whatsapp.png";
import FB from "../../public/flex-ui-assets/icons/facebook.png";
import Money from "../../public/flex-ui-assets/icons/funds.png";
import features from "../../public/flex-ui-assets/images/uxui/features-image.png";
import { db_news } from '../../util/data'
import axios from "axios";

export default function Our_Service() {

  const [API, setAPI] = useState([])
    useEffect(() => {
        axios.get(db_news.context).then((res) => {
            setAPI(res.data[2].context)
        })
    }, [])

  return (
    <div data-aos="fade-up" className={`md:flex justify-center grid-cols-2 gap-4 w-full ${API.filter((e) => e.status === true).length !== 0 ? '' : '-mt-64'} pb-[5%]`}>
      <div className="w-full md:h-screen md:flex justify-center items-center" id="services">
        <div className="text-start w-96 text-black md:p-0 p-5 dark:text-white text-xl backdrop-blur-sm rounded">
          <p className='font text-3xl font-bold underline decoration-sky-500/30 py-2'>Our Service</p>
          <p className='mb-5'>We provide domestic and international ICT services as consultants, system development, application development, and system maintenance. We cooperate with development companies to provide ICT services to overseas customers.</p>
          <div className="gap-4">
            <a href="https://api.whatsapp.com/send/?phone=8562056395659&text&type=phone_number&app_absent=0" target='_blank' className='mr-2'>
              <Image
                src={WA}
                width={30}
                height={30} alt='IMG1' />
            </a>
            <a href="https://www.facebook.com/BesTech.la" target='_blank' className='mr-2'>
              <Image
                src={FB}
                width={30}
                height={30} alt='IMG2' />
            </a>
            <a href="https://www.instagram.com/bbestech/" target='_blank' className='mr-2'>
              <Image
                src={IG}
                width={30}
                height={30} alt='IMG3' />
            </a>
          </div>
        </div>
      </div>
      <div className="select-none w-full h-full md:h-full pt-20 lg:py-0 relative grid-cols-4 2xl:mt-0 mt-10">
        <div className="absolute z-1 lg:top-0 top-20">
          <Image src={features} alt='IMG' />
        </div>
        <div className="z-2 lg:absolute w-full overflow-hidden top-20 px-10 md:px-0 2xl:flex justify-start items-center ">
          <div className="p-2">
            <div className="border-2 animationscal backdrop-blur-3xl dark:text-white text-black rounded-lg mb-5 p-5 lg:h-642xl-32 2xl:w-40 w-full 2xl:block flex justify-center items-center">
              <p className='lg:mb-5 2xl:w-full w-1/2'>Website Development</p>
              <Image
                src={Integrations}
                width={120}
                height={100}
                class='animationsCOLOR' alt='IMG4' />
            </div>
            <div className="border-2 animationscal backdrop-blur-3xl dark:text-white text-black rounded-lg mb-5 p-5 lg:h-642xl-32 2xl:w-40 w-full 2xl:block flex justify-center items-center">
              <p className='lg:mb-5 2xl:w-full w-1/2'>Application Development</p>
              <Image
                src={mobile}
                width={120}
                height={100}
                class='animationsCOLOR' alt='IMG5' />
            </div>
          </div>
          <div className="p-2 2xl:mt-64">
            <div className="border-2 animationsTB backdrop-blur-3xl dark:text-white lg:text-white text-black rounded-lg mb-5 p-5 2xl:h-96 h-32 2xl:w-40 w-full 2xl:block flex justify-center items-center">
              <p className='2xl:mb-20 2xl:w-full w-1/2'>Provide consultancy on the problem system development</p>
              <Image
                src={Money}
                width={120}
                height={100}
                class='animationsCOLOR' alt='IMG6' />
            </div>
          </div>
          <div className="p-2 2xl:-mt-52">
            <div className="border-2 animationsTB3 backdrop-blur-3xl dark:text-white lg:text-white text-black rounded-lg mb-5 p-5 2xl:h-96 h-32 2xl:w-40 w-full 2xl:block flex justify-center items-center">
              <p className='2xl:mb-20 2xl:w-full w-1/2'>POINT OF SALSE - POS</p>
              <Image
                src={online}
                width={120}
                height={100}
                class='animationsCOLOR' alt='IMG7' />
            </div>
          </div>
          <div className="p-2 2xl:mt-20">
            <div className="border-2 animationsTB3-5 backdrop-blur-3xl dark:text-white lg:text-white text-black rounded-lg mb-5 p-5 2xl:h-96 h-32 2xl:w-40 w-full 2xl:block flex justify-center items-center">
              <p className='2xl:mb-20 2xl:w-full w-1/2'>ONLINE STORE-FRONT</p>
              <Image
                src={Enticing}
                width={120}
                height={100}
                class='animationsCOLOR' alt='IMG8' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
