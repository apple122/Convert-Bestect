import React, { useEffect } from 'react'
import { db_performance } from '../../util/data'
import Image from "next/image";
import { useState } from 'react';
import axios from 'axios';

export default function Performance() {

    const [API, setAPI] = useState([])
    useEffect(() => {
        axios.get(db_performance.context).then((res) => {
            setAPI(res.data[1].context)
        })
    }, [])

    const [Page, nextPage] = useState(0)
    const [LR, setLR] = useState('up')

    function scrollleft() {
        const isFirstSlide = Page === 0
        const newIndex = isFirstSlide ? API.length - 1 : Page - 1
        nextPage(newIndex)
        setLR('left')
    }

    function scrollright() {
        const islanSlide = Page === API.length - 1
        const newIndex = islanSlide ? 0 : Page + 1
        nextPage(newIndex)
        setLR('right')
    }

    function goToSlide(slideIndex) {
        nextPage(slideIndex)
    }


    return (
        <>
            <div data-aos='fade-up' className='w-full text-center' id='performance'>
                <p className='text-[32px] text-black dark:text-white font-bold underline underline-offset-8 '>Performance </p>
            </div>
            <section className="relative z-10 gap-20 overflow-hidden px-10 flex flex-wrap justify-center dark:bg-black bg-white py-20 lg:py-[120px] lg:px-[120px]">
                <div data-aos='fade-up' class="relative w-[50vh]">
                    <div id='content' class="relative h-56 scroll-smooth overflow-x-hidden flex justify-center rounded-lg md:h-96 duration-500">
                        {API.map((item, index) => (
                            index == Page ? <img data-aos={LR === 'right' ? 'fade-left' : 'fade-right'} src={item.img} className='object-cover bg-center bg-cover duration-500' alt="" /> : ''
                        ))}
                    </div>
                    <div className="flex top-4 justify-center gap-3 py-5 px-5 w-[50vh] overflow-hidden">
                        {API.map((slide, slideIndex) => (
                            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`cursor-pointer bg-gray-${slideIndex == Page ? '800' : '400'} dark:bg-gray-${slideIndex == Page ? '100' : '600'} rounded-full p-2`}></div>
                        ))}
                    </div>
                </div>
                <div data-aos='fade-left' class="relative w-[60vh] grid gap-5">
                    <div className="w-full text-start text-black dark:text-white">
                        <p>{Page + 1}/{API.length}</p>
                        {API.map((item, index) => (
                            index == Page ? <>
                                <p className='text-[28px]'>{item.title}</p><hr />&nbsp;
                                <p>{item.text}</p>
                            </> : ''
                        ))}

                    </div>
                    <div className="flex">
                        <button type="button" onClick={scrollleft} class="flex items-center justify-center h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg aria-hidden="true" class="w-5 h-5 dark:text-white sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                                <span class="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" onClick={scrollright} class="flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg aria-hidden="true" class="w-5 h-5 dark:text-white sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                <span class="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                </div>

            </section>

        </>
    )
}
