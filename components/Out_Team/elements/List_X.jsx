import React, { useEffect } from 'react'
import Image from "next/image";
import whatsapp from '../../../public/flex-ui-assets/icons/whatsapp.png'
import facebook from '../../../public/flex-ui-assets/icons/facebook.png'
import IG from '../../../public/flex-ui-assets/icons/instagram.png'
import { db_out_team } from '../../../util/data'
import { Reorder } from "framer-motion"
import { useState } from 'react';

export default function List_X() {

  const [items, setItems] = useState(db_out_team.context)

  const [API, setAPI] = useState([])
  useEffect(() => {
      axios.get(db_out_team.context).then((res) => {
          setAPI(res.data)
      })
  }, [])

  return (
    <Reorder.Group axis="x" values={items} onReorder={setItems} className="flex flex-wrap justify-center">
      {items.filter((o) => o.status === 'Dev').map((item) => (
        <Reorder.Item value={item} data-aos="fade-up" className="relative w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
          <div className="absolute z-10 w-full h-[380px] top-0"></div>
          <div className="flex flex-col">
            <a href="#_" className="mx-auto">
              <div className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 relative h-[303.3px] w-[250px] overflow-hidden">
                <img src={db_out_team.wallpaper} alt='Out_team' className='h-[60%] w-full rounded-lg absolute z-0 bottom-0' />
                <img src={item.img} alt='Out_team' className='h-full w-full rounded-lg absolute object-cover' />
              </div>
            </a>

            <div className="text-center mt-6">
              <h1 className="dark:text-white text-gray-900 text-xl font-bold mb-1">
                {item.name}
              </h1>

              <div className="dark:text-white text-gray-700 font-light mb-2">
                {item.title}
              </div>

              <div className="dark:text-white text-gray-700 font-light mb-4">
                {item.profile}
              </div>

              <div className="flex items-center justify-center transition-opacity duration-300">
                <a href={`https://api.whatsapp.com/send/?phone=856${item.WA}`} target='_blank' className="flex rounded-full mr-2 opacity-50 hover:opacity-100 ">
                  <Image src={whatsapp} width={30} height={30} alt='WA' />
                </a>
                <a href={item.FB} target='_blank' className="flex rounded-full mr-2 opacity-50 hover:opacity-100 ">
                  <Image src={facebook} width={30} height={30} alt='FB' />
                </a>
                <a href={item.IG} target='_blank' className="flex rounded-full mr-2 opacity-50 hover:opacity-100 ">
                  <Image src={IG} width={30} height={30} alt='IG' />
                </a>
              </div>
            </div>
          </div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  )
}