import React, { useState, useEffect } from "react";
import IMG from "../../public/flex-ui-assets/logos/Logo_bestech.png";
import iconUp from "../../public/flex-ui-assets/icons/up-arrow.png";
import Toggle from "../elements/Darkmode/ThemeToggle";
import Image from "next/image";
import axios from "axios";
import { db_news } from '../../util/data'

export default function Navbar() {
  const [scrollY, setScrollY] = useState(10);
  const [active, setActive] = useState(0);
  function showButton() {
    setScrollY(window.pageYOffset);
  }
  function watchScroll() {
    window.addEventListener("scroll", showButton);
  }
  useEffect(() => {
    watchScroll();
    return () => {
      window.removeEventListener("scroll", showButton);
    };
  });

  const [nav, setNav] = useState(false);
  function ToggleBar() {
    if (nav === false) {
      setNav(true);
    } else {
      setNav(false);
    }
  }

  const [API, setAPI] = useState([])
  useEffect(() => {
    axios.get(db_news.context).then((res) => {
      setAPI(res.data[2].context)
    })
  }, [])

  return (
    <nav
      className={`select-none ${scrollY > 10 ? "bg-blue-800" : "bg-white"
        } px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-gray-200 dark:border-gray-600`}
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#" className="flex items-center">
          <Image src={IMG} width={50} height={50} alt="LOGO" />
          <span
            className={`ml-2 dark:text-white ${scrollY > 10 ? "text-white" : "text-black"
              } font-bold`}
          >
            Bestech SaaS Consultuncy
          </span>
        </a>

        <div className="flex md:order-2">
          <Toggle className="m-auto" />
          <button
            type="button"
            onClick={ToggleBar}
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full lg:flex md:w-auto md:order-1 ${nav === false ? "hidden" : "inline"
            }`}
        >
          <ul
            className={`${scrollY > 10
                ? "md:bg-blue-800 md:text-white bg-blue-100"
                : "bg-white"
              } flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}
          >
            <li onClick={() => setActive(0)}>
              <a
                href="#"
                className={`block py-2 text-lg pl-3 pr-4 md:hover:border-b-4 rounded md:rounded-none dark:hover:bg-gray-900 dark:md:hover:bg-black md:bg-transparent ${active === 0
                    ? scrollY > 10
                      ? "text-white bg-blue-700 md:border-b-4"
                      : "md:text-blue-700 text-white bg-blue-700 md:border-b-4"
                    : scrollY > 10
                      ? "text-gray-700 hover:bg-blue-50 md:text-white md:hover:bg-blue-800"
                      : "text-gray-700"
                  } md:p-0 dark:text-white`}
              >
                ໜ້າຫຼັກ
              </a>
            </li>

            {API.filter((e) => e.status === true).length !== 0 ?
              <li onClick={() => setActive(1)}>
                <a
                  href="#News"
                  className={`ANMCAL block py-2 text-lg pl-3 pr-4 md:hover:border-b-4 rounded md:rounded-none dark:hover:bg-gray-900 dark:md:hover:bg-black md:bg-transparent ${active === 1
                      ? scrollY > 10
                        ? "text-white bg-blue-700 md:border-b-4"
                        : "md:text-blue-700 text-white bg-blue-700 md:border-b-4"
                      : scrollY > 10
                        ? "text-gray-700 hover:bg-blue-50 md:text-white md:hover:bg-blue-800"
                        : "text-gray-700"
                    } md:p-0 dark:text-white`}
                >
                  ປະກາດ
                </a>
              </li>
              : ''}
            <li onClick={() => setActive(2)}>
              <a
                href="#services"
                className={`block py-2 text-lg pl-3 pr-4 md:hover:border-b-4 rounded md:rounded-none dark:hover:bg-gray-900 dark:md:hover:bg-black md:bg-transparent ${active === 2
                    ? scrollY > 10
                      ? "text-white bg-blue-700 md:border-b-4"
                      : "md:text-blue-700 text-white bg-blue-700 md:border-b-4"
                    : scrollY > 10
                      ? "text-gray-700 hover:bg-blue-50 md:text-white md:hover:bg-blue-800"
                      : "text-gray-700"
                  } md:p-0 dark:text-white`}
              >
                ບໍລິການ
              </a>
            </li>

            <li onClick={() => setActive(3)}>
              <a
                href="#performance"
                className={`block py-2 text-lg pl-3 pr-4 md:hover:border-b-4 rounded md:rounded-none dark:hover:bg-gray-900 dark:md:hover:bg-black md:bg-transparent ${active === 3
                    ? scrollY > 10
                      ? "text-white bg-blue-700 md:border-b-4"
                      : "md:text-blue-700 text-white bg-blue-700 md:border-b-4"
                    : scrollY > 10
                      ? "text-gray-700 hover:bg-blue-50 md:text-white md:hover:bg-blue-800"
                      : "text-gray-700"
                  } md:p-0 dark:text-white`}
              >
                ຜົນງານ
              </a>
            </li>
            <li onClick={() => setActive(4)}>
              <a
                href="#team"
                className={`block py-2 text-lg pl-3 pr-4 md:hover:border-b-4 rounded md:rounded-none dark:hover:bg-gray-900 dark:md:hover:bg-black md:bg-transparent ${active === 4
                    ? scrollY > 10
                      ? "text-white bg-blue-700 md:border-b-4"
                      : "md:text-blue-700 text-white bg-blue-700 md:border-b-4"
                    : scrollY > 10
                      ? "text-gray-700 hover:bg-blue-50 md:text-white md:hover:bg-blue-800"
                      : "text-gray-700"
                  } md:p-0 dark:text-white`}
              >
                ທີມງານ
              </a>
            </li>
            <li onClick={() => setActive(5)}>
              <a
                href="#about"
                className={`block py-2 text-lg pl-3 pr-4 md:hover:border-b-4 rounded md:rounded-none dark:hover:bg-gray-900 dark:md:hover:bg-black md:bg-transparent ${active === 5
                    ? scrollY > 10
                      ? "text-white bg-blue-700 md:border-b-4"
                      : "md:text-blue-700 text-white bg-blue-700 md:border-b-4"
                    : scrollY > 10
                      ? "text-gray-700 hover:bg-blue-50 md:text-white md:hover:bg-blue-800"
                      : "text-gray-700"
                  } md:p-0 dark:text-white`}
              >
                ກ່ຽວກັບ
              </a>
            </li>
            <li onClick={() => setActive(6)}>
              <a
                href="#contact"
                className={`block py-2 text-lg pl-3 pr-4 md:hover:border-b-4 rounded md:rounded-none dark:hover:bg-gray-900 dark:md:hover:bg-black md:bg-transparent ${active === 6
                    ? scrollY > 10
                      ? "text-white bg-blue-700 md:border-b-4"
                      : "md:text-blue-700 text-white bg-blue-700 md:border-b-4"
                    : scrollY > 10
                      ? "text-gray-700 hover:bg-blue-50 md:text-white md:hover:bg-blue-800"
                      : "text-gray-700"
                  } md:p-0 dark:text-white`}
              >
                ຕິດຕໍ່ຫາເຮົາ
              </a>
            </li>
          </ul>
        </div>
      </div>
      <a
        href="#"
        className={`fixed bottom-0 transition delay-150 duration-300 ease-in-out right-10 ${scrollY > 10 ? "-translate-y-5" : "translate-y-40"
          }`}
      >
        <Image src={iconUp} width={50} height={50} alt="Mode" />
      </a>
    </nav>
  );
}
