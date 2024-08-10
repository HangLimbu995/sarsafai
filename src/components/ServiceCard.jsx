import React from 'react';
import { FaBucket } from "react-icons/fa6";

const ServiceCard = () => {
    return (
            <div className='service-card relative max-w-[300px] w-full h-[70vh] md:h-[40vh] xl:h-[70vh]  flex justify-center rounded bg-white shadow-md shadow-blue-700 mt-5'>
            <div className='absolute w-full h-[30vh]'>
                <img src='https://hitechcleaning.com.np/wp-content/uploads/2023/02/file-365x192.jpeg' alt='cleaning.jpeg' className='absolute w-[100%] h-[100%] bg-center bg-cover bg-no-repeat rounded' />
            </div>
            <div className='service-tri absolute w-[90%] flex flex-col gap-3 bottom-3 p-2 ' >
                <h3 className='capitalize text-[#082680] text-[22px] font-[700] leading-[26px]'>Marble and Tiles Cleaning</h3>
                <p className='text-black font-[400] text-[16px] leading-[26px]  mt-2'>Hitech Cleaning and Placement Services Provides the best quality Hospitality Cleaning Services in Kathmandu, Nepal.</p>
                <a href='#' ><button className='px-4 py-2 rounded font-bold text-white mt-4 bg-blue-700'>Read more</button></a>
            </div>
        </div>
    );
}

export default ServiceCard;
