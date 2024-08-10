// src/Home.jsx
import React, { useEffect, useRef } from 'react';
import './style.css'; // Import CSS for styling
import ServiceCard from '../components/ServiceCard';
import FAQ from '../components/FAQ';


const Home = () => {



  return (
    <div className='w-full min-h-[100vh]'>
      <div className='w-full h-full'>
        <header className='w-full py-2 '>
          <div className='bubble-gradient w-[200px] h-[500px] top-5 left-[70%]'> {/* bubble design */}</div>
          <div className='bubble-gradient w-[100px] h-[150px] top-[45%] left-[35%] '> {/* bubble design */}</div>
          <div className='w-full h-full flex md:flex flex-col justify-between'>
            <div className='w-full h-full grid place-items-center'>
              <div className='w-full sm:w-[100%] md:w-[80%] grid place-items-center' data-scroll data-scroll-speed='-4'>
                <div className='relative w-full min-h-[50vh] flex flex-col justify-center items-center text-center leading-tight px-2 sm:-mt-[90px] xl:mt-0' >
                  <h1 className='big-logo uppercase absolute top-[10%] md:top-[23%] xl:top-[10%] left-0 xl:left-9 font-bold'>SarSafai</h1>
                  <h1 className='font-bold leading-tight'>Professional Cleaning Services.</h1>
                  <p className='text-[16px]'>Reliable, Efficient, and Affordable Cleaning Solutions</p>
                  <a href='/contact-us'>
                    <button className='bg-green-700 py-2 px-4 rounded mt-5 text-white'>Contact Us</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className='relative w-full h-full flex flex-col justify-center items-center bg-white mt-[20vh]' data-scroll data-scroll-speed='2'>
          <div className='backdrop'></div>
          <h1 className='uppercase tracking-tighter font-[500]'>our mostly famous services.</h1>
          <div className='py-3 px-4 w-full xl:w-[90%] grid place-items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-2 mt-5'>
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </section>

        <section>
          <div className='relative w-full h-full mt-5 flex justify-center'>
            <div className='inherit w-full md:w-[90%] mt-5 flex justify-center'>
              <FAQ />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
