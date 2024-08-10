import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <section className='relative w-full min-h-[100vh] h-full my-7 grid place-items-center'>
      <div className='w-full md:w-[80%]  grid place-items-center grid-cols-1 md:grid-cols-2'>
        <div>
          <h1 className='text-6xl leading-[5rem] font-bold'>Fill the form.<br />
            It's easy.</h1>
          <form className='form grid mt-9'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <input type='text' placeholder='Full Name' required />
              <input type='phone' placeholder='phone' required />
            </div>
            <input type='email' placeholder='Email' required />
            <textarea rows='8' placeholder='Write your message...' required />
            <button className='absolute w-auto py-2 px-4 bg-[#0077ED] -bottom-2 rounded text-white ' >Send Message</button>
          </form>
        </div>
        <div className='relative w-full h-full grid place-items-center'>
          <div className='relatvie grid gap-5 p-5 -ml-5' style={{borderLeft: '1px solid #A8A8A8'}}>
            <h3 className='leading-9 text-4xl font-bold'>Let's talk about <br /> everything.</h3>
            <p>We are always here to assist you. Whether you have questions about our products, need help with an order, or want to know more about our sustainable practices, we are just a call away. Reach out to us through the contact form or give us a call directly.</p>
            <Link to='/about-us' >   <button className='absolute bottom-[15vh] text-blue-700'>Read More &rarr;</button></Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact