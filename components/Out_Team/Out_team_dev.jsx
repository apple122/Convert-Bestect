import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { db_out_team } from '../../util/data'
import Image from "next/image";
import whatsapp from '../../public/flex-ui-assets/icons/whatsapp.png'
import facebook from '../../public/flex-ui-assets/icons/facebook.png'
import IG from '../../public/flex-ui-assets/icons/instagram.png'

export default function Out_team_dev() {

    const [API, setAPI] = useState([])
    const [APIHW, setHW] = useState([])
    useEffect(() => {
        axios.get(db_out_team.context).then((res) => {
            setAPI(res.data[0].context)
            setHW(res.data[0])
        })
    }, [])

    return (
        <div className="container max-w-7xl px-4">
            <div data-aos="fade-up" className="flex flex-wrap justify-center text-center mb-10">
                <div className="w-full lg:w-screen px-4">
                    <h1 className="dark:text-white text-gray-900 text-4xl font-bold mb-8">
                        Developer Teams
                    </h1>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {API.filter((o) => o.status === 'Dev').map((item) => (
                    <div data-aos="fade-up" className="relative w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="absolute z-10 w-full h-[380px] top-0"></div>
                        <div className="flex flex-col">
                            <a href="#_" className="mx-auto">
                                <div className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 relative h-[303.3px] w-[250px] overflow-hidden">
                                    <img src={APIHW.wallpaper} alt='Out_team' className='h-[60%] w-full rounded-lg absolute z-0 bottom-0' />
                                    <img src={item.img} alt='Out_team' className='h-full w-full rounded-lg absolute z-10 object-cover' />
                                </div>
                            </a>

                            <div className="text-center mt-6">
                                <h1 className="dark:text-white text-gray-900 text-xl font-bold mb-1">
                                    {item.name}
                                </h1>

                                <div className="dark:text-white text-gray-700 font-light mb-2">
                                    {item.title}
                                </div>

                                <div className="dark:text-white text-gray-700 font-light mb-2">
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
                    </div>
                ))}
            </div>
        </div>
    )
}
