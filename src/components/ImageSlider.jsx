import React from 'react'

const ImageSlider = ({img}) => {
  return (
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    speed={1000}
    modules={[Autoplay]}
    className="mySwiper w-full h-full"
  >
    <SwiperSlide>
      <img src='https://plus.unsplash.com/premium_photo-1661780846403-f76bb9854746?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xlYW5pbmclMjBzZXJ2aWNlfGVufDB8fDB8fHww' className='w-full h-full rounded bg-center object-cover bg-no-repeat' />
    </SwiperSlide>
    <SwiperSlide>
      <img src='https://plus.unsplash.com/premium_photo-1661780846403-f76bb9854746?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xlYW5pbmclMjBzZXJ2aWNlfGVufDB8fDB8fHww' className='w-full h-full rounded bg-center object-cover bg-no-repeat' />
    </SwiperSlide>
    <SwiperSlide>
      <img src='https://plus.unsplash.com/premium_photo-1661780846403-f76bb9854746?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xlYW5pbmclMjBzZXJ2aWNlfGVufDB8fDB8fHww' className='w-full h-full rounded bg-center object-cover bg-no-repeat' />
    </SwiperSlide>
  </Swiper>
  )
}

export default ImageSlider