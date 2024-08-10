import React from 'react'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section className='relative w-full h-full flex flex-col justify-center items-center bg-white mt-[20vh]' data-scroll data-scroll-speed='2'>
    <h1 className='uppercase tracking-tighter font-[500]'>our mostly famous services.</h1>
    <div className='py-3 px-4 w-full xl:w-[90%] grid place-items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-2 mt-5'>
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </div>
  </section>
  )
}

export default Services