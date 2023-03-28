import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';

const Toggle = () => {

  const [scrollY, setScrollY] = useState(0);
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

  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="p-2 transition duration-500 ease-in-out rounded-full">
      {theme === 'dark' ? (
        <FaSun
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-2xl text-gray-500 cursor-pointer dark:text-gray-400"
        />
      ) : (
        <FaMoon
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={`text-2xl ${scrollY > 10 ? 'text-white' : 'text-black'} cursor-pointer dark:text-gray-400`}
        />
      )}
    </div>
  );
};

export default Toggle;
