import React from 'react'

const Footer = () => {
  return (
    <div className='w-full py-2 px-4 grid place-items-center'>
      <div className='xl:w-[90%] w-full p-2 bg-red-50'>
        <div className='w-full sm:flex-col md:flex justify-around'>
          <div className='md:w-[24%] sm:w-full h-full py-2 px-4 flex flex-col gap-4'>
            <div><span className='text-green-700 font-bold text-[25px]'>SarSafai</span></div>
            <div><p>We are committed to the best quality in the field of industrial cleaning, home and garden cleaning. We work with a passion of taking challenges.</p></div>
            <div>
              <p>Let's connect with our socials</p>
              <div>
                <ul className='flex gap-3'>

                  {
                    [['face', 'facebook.com'], ['ins', 'instagram.com']].map((item, index) => (
                      <li key={item + index}><a href={`${item[1]}`} target='_blank'>{item[0]}</a></li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
          <div>service</div>
          <div>quick link</div>
          <div> add & quote</div>
        </div>
        <div className='w-full py-2 px-4 mt-7 grid place-items-center border-t border-red-500'>
          <div className='w-[80%] grid place-items-center'>
            <p className='font-[700]'>2022 &#169; All rights	&#174; reserved by <span className='text-green-700 font-bold text-[18px]'>SarSafai</span>.Designed by <span className='text-blue-700 font-bold text-[18px]'>WebStark</span> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer 