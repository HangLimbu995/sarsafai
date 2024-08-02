import React, { useEffect } from 'react'
import Home from './pages/Home'
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import LogRocket from 'logrocket';

const App = () => {

  LogRocket.init('kdqtij/sarsafai')

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    return () => {
      if(scroll) scroll.destroy();
    };
  }, [])

  return (
   <div data-scroll-container className='relative w-full h-full'  >
 <Navbar />
 <Home />
 <Footer />
    </div>
  )
}

export default App