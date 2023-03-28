import React, { useEffect } from "react";
import { ThemeProvider } from "../components/elements/Darkmode/ThemeContext";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import Aos from "aos";
import Navbar from "../components/Hero/Navbar";
import Hero from "../components/Hero"
import Out_team from "../components/Out_Team/Out_team";
import { useState } from "react";
import Contact from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";
import { About } from "../components/About/About";
import Skeleton_page from "../components/elements/skeleton/Skeleton_page";
import Skeleton_navbar from "../components/elements/skeleton/Skeleton_navbar";
import Service from "../components/Out-service/Our_Service"
import Performance from "../components/Performance/Index";
import 'flowbite-react'
import News from "../components/News/Index";


export default function index() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const [Time, setTime] = useState(1)
  if (Time === 1) {
    setTimeout(() => {
      setTime(Time + 1)
    }, 1000)
  } else if (Time === 2) {
    setTimeout(() => {
      setTime(Time + 1)
    }, 1000)
  } else if (Time === 3) {
    setTimeout(() => {
      setTime(Time + 1)
    }, 1000)
  } else if (Time === 4) {
    setTimeout(() => {
      setTime(Time + 1)
    }, 1000)
  }

  if (Time > 1) {
    return (
      <>
        <ThemeProvider>
          <div className={`SEO${Time === 4 ? 4 : 5}`}><Navbar /></div>
          <div className={`SEO${Time === 4 ? 4 : 5} overflow-hidden`}>
            <Hero />
            <News />
            <Service />
            <Performance />
            <Out_team />
            <About />
            <Contact />
            <Footer />
          </div>
        </ThemeProvider>
      </>
    );
  } else {
    return (
      <>
        <ThemeProvider>
          <Skeleton_navbar />
          <Skeleton_page />
        </ThemeProvider>
      </>
    );
  }

}
