import React from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";


const NavItemsComponent = ({item}) => {
  return (
    <div className=' nav-items border-b-[1px] border-[#E9EAEE] mb-4 font-[500]  text-[17px] capitalize  flex gap-1 items-center'>
    <div><IoIosArrowRoundUp className='arrow rotate-90 size-6'/></div>
    <div className='nav-item text-gray-500'>{item}</div>
    </div>
  )
}

export default NavItemsComponent