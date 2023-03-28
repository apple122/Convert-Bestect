import React from 'react'

export default function Skeleton_navbar() {
    return (
        <nav className='select-none px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-gray-200 dark:border-gray-600'>
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="#" className="flex items-center">
                    <div className="h-[50px] w-[50px] bg-gray-200 mr-2 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-[30px] w-[100px] bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                </a>

                <div className="flex md:order-2">
                    <div className="h-[30px] w-[50px] bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                </div>
                <div className='items-center space-y-8 animate-pulse md:space-y-0 md:space-x-8 justify-between w-full md:flex md:w-auto md:order-1 hidden'>
                    <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                        <li>
                            <div className="h-[30px] w-[50px] bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        </li>
                        <li>
                            <div className="h-[30px] w-[50px] bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        </li>
                        <li>
                            <div className="h-[30px] w-[50px] bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        </li>
                        <li>
                            <div className="h-[30px] w-[50px] bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        </li>
                        <li>
                            <div className="h-[30px] w-[50px] bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        </li>
                        <li>
                            <div className="h-[30px] w-[50px] bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
