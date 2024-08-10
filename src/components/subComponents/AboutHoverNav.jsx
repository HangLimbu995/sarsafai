import React from 'react'



const AboutHoverNav = () => {

    return (
        <div className='about-dropdown w-full max-h-[50vh] absolute top-[50px] left-0 flex justify-center p-4 bg-white' style={{ zIndex: 9 }}>
            <div className='relative about-item w-[80%]  flex justify-around items-center flex-wrap'>
                {aboutData.map((item) => (
                    <div key={item.id} className='relative about-drop-item md:max-w-[30%] sm:max-w-full w-full h-[30vh] bg-red-300 '>
                        <img src={item.img} className='w-full h-full brightness-50 rounded-md' />
                        <div className='absolute bottom-0 text-[#d9d9dd] p-1'>
                            <h3 className='capitalize'>{item.h3}</h3>
                            <p className='text-[16px]'>{item.p}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

const aboutData = [
    {
        id: 1,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQ3rfaxk-5YUoKQeYh4aQhAZQHlKXvUL3_w&usqp=CAU',
        h3: 'how we work',
        p: 'With the best team and best quipment we will clean all your shit away.And we are also best in the town. Inside all ktm valley.',
    },
    {
        id: 2,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQ3rfaxk-5YUoKQeYh4aQhAZQHlKXvUL3_w&usqp=CAU',
        h3: 'how we work',
        p: 'With the best team and best quipment we will clean all your shit away.And we are also best in the town. Inside all ktm valley.',
    },
    {
        id: 3,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQ3rfaxk-5YUoKQeYh4aQhAZQHlKXvUL3_w&usqp=CAU',
        h3: 'how we work',
        p: 'With the best team and best quipment we will clean all your shit away.And we are also best in the town. Inside all ktm valley.',
    },
]


export default AboutHoverNav