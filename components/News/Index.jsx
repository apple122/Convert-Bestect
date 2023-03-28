import React, { useEffect } from 'react'
import { db_news } from '../../util/data'
import Image from "next/image";
import { useState } from 'react';
import axios from 'axios';

export default function News() {

    const [API, setAPI] = useState([])
    useEffect(() => {
        axios.get(db_news.context).then((res) => {
            setAPI(res.data[2].context)
        })
    }, [])

    const [Page, nextPage] = useState(0)

    function scrollleft() {
        const isFirstSlide = Page === 0
        const newIndex = isFirstSlide ? API.filter((e) => e.status == true).length - 1 : Page - 1
        nextPage(newIndex)
    }

    function scrollright() {
        const islanSlide = Page === API.filter((e) => e.status == true).length - 1
        const newIndex = islanSlide ? 0 : Page + 1
        nextPage(newIndex)
    }

    function goToSlide(slideIndex) {
        nextPage(slideIndex)
    }

    return (
        API.filter((e) => e.status == true).length !== 0 ?
            <>

                <section id='News' data-aos="fade-up" className="relative py-[10%] z-10 gap-2 w-full overflow-hidden xl:px-10 flex flex-wrap justify-center dark:bg-black bg-white xl:-mt-[15%] -mt-[30%]">

                    <>
                        <div className="xl:absolute w-[80%] xl:w-full z-20 top-[21%] left-[24%]">
                            <a href="#contact" className="p-0.5 backdrop-blur-3xl hover:text-white text-black dark:text-white inline-flex items-center justify-center font-bold overflow-hidden group rounded-lg">
                                <span className="w-full h-full bg-gradient-to-br backdrop-blur-3xl from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                                <span className="relative px-5 py-2 transition-all ease-in-out backdrop-blur-3xl bg-white dark:bg-black rounded-lg group-hover:bg-opacity-0 duration-400">
                                    <span className="relative">News</span>
                                </span>
                            </a>
                        </div>
                        <div class="relative z-10 xl:w-[50%] w-[80%] max-h-[400px] h-auto bg-white border border-gray-200 rounded-lg shadow overflow-hidden object-cover dark:bg-gray-800 dark:border-gray-700">
                            {API.filter((e) => e.status == true).map((item, index) => (
                                index == Page ?
                                    <img data-aos="zoom-out" src={item.img} className='w-full' alt="" /> : ''
                            ))}


                            <div className="absolute z-30 bottom-[4%] left-[2%] flex justify-center xl:justify-start gap-3 w-full overflow-hidden">
                                {API.filter((e) => e.status == true).map((slide, slideIndex) => (
                                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`cursor-pointer bg-gray-${slideIndex == Page ? '800' : '400'} dark:bg-gray-${slideIndex == Page ? '100' : '600'} rounded-full p-2`}></div>
                                ))}
                            </div>
                        </div>
                        {API.filter((e) => e.status == true).map((item, index) => (
                            index == Page ?
                                <div data-aos="zoom-out-left" class="xl:absolute z-20 top-[60%] right-[15%] xl:w-[25%] w-[80%] text-start max-h-[300px] overflow-auto p-5 border text-black dark:text-white border-gray-200 dark:backdrop-blur-[90px] backdrop-blur-[200px] rounded-lg shadow">
                                    {(item.title).map((item) => (
                                        <p className='pb-2'>{item.text}</p>
                                    ))}
                                </div> : ''
                        ))}


                        <div className="xl:absolute z-30 bottom-[15%] left-[26%] flex justify-center xl:justify-start w-[80%]">
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

                    </>

                </section>
                <div className="p-[10%] xl:p-[5%]"></div>

            </>
        : ''

    )
}
