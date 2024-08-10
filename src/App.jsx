// src/App.jsx
import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { Outlet } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const ref = useRef(null);

  useEffect(() => {
    let locoScroll;

    const initLocoScroll = () => {
      locoScroll = new LocomotiveScroll({
        el: ref.current,
        smooth: true,
        mobile: {
          smooth: true,
          breakpoint: 0,
        },
        tablet: {
          smooth: true,
          breakpoint: 0,
        },
      });

      // Update ScrollTrigger with locomotive scroll's scroll position
      locoScroll.on('scroll', ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(ref.current, {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: ref.current.style.transform ? 'transform' : 'fixed',
      });

      ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
      ScrollTrigger.refresh();
    };

    if (ref.current) {
      initLocoScroll();
    }

    return () => {
      if (locoScroll) {
        locoScroll.destroy();
      }
    };
  }, []);



  return (
    <div data-scroll-container ref={ref} className=' relative w-full h-full' id='main'>
      <Navbar />
      <main className='w-full h-full'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
