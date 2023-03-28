import React, { useEffect } from "react";
import style from "./preloader.module.css";
export default function Preloader() {
  useEffect(() => {
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };
    let preloader = select("#preloader");
    if (preloader) {
      window.addEventListener("load", () => {
        preloader.remove();
      });
    }
  }, []);
  return (
    <div
      id="preloader"
      className={`${style.preloader} bg-coolGray-500 opacity-50`}
    ></div>
  );
}
