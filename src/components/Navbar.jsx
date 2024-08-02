import React, { useEffect } from 'react'
import { IoIosMenu } from "react-icons/io";
// import Shery from "sheryjs";
import ServiceHoverNav from './subComponents/ServiceHoverNav';
import AboutHoverNav from './subComponents/AboutHoverNav';

const Navbar = () => {

  useEffect(() => {

    // Shery.mouseFollower();
    Shery.mouseFollower();

    Shery.makeMagnet(".magnet");

    const service = document.querySelector

  }, [])

  return (
    <div className='w-full grid place-items-center bg-white'>
      <div className='w-[90vw] flex justify-between py-3 px-3'>
        <div className='text-[17px] font-[700] hover-target'>
          logo
        </div>

        <div>
          <ul className='flex gap-9'>
            <li><a href='#' className=' hidden md:block '>home</a>
            </li>
            <li className='service'><a href='#' className='hidden md:block'>our service</a>
              <ServiceHoverNav />
            </li>
            <li className='about'><a href='#' className='hidden md:block'>about us</a>
              <AboutHoverNav />
            </li>
            <li><a href='#' className='hidden md:block'>contact us</a></li>
            <li><a href='#' className='hidden md:block'>faq</a></li>
            <button className="magnet sticky top-3 md:hidden sm:block" data-scroll data-scroll-sticky>
              <IoIosMenu size={35} />
            </button>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar