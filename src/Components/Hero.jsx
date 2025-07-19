import React from 'react'
import { Typewriter } from 'react-simple-typewriter';


const Hero = () => {
    return (
        <div className='text-white max-w-[1240px] w-full m-auto h-screen' >
            <div className='flex flex-col justify-center items-center font-medium h-full'>
                <p className='text-[#00df9a] font-bold md:text-2xl sm:text-xl text-lg'>
                    GROWING WITH DATA ANALYTICS
                </p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                    Grow with data.
                </h1>
                <div className='flex items-center justify-center md:py-6 sm:py-4 py-2 text-2xl font-bold '>
                    <p>
                        Fast, flexible financing for

                    </p>
                    <span className='text-[#00df9a] font-bold pl-1'>
                        <Typewriter
                            words={['BTB', 'BTC', 'SASS']}
                            loop
                            cursor
                            cursorStyle="|"
                            typeSpeed={120}
                            deleteSpeed={100}
                            delaySpeed={1000}
                        />
                    </span>
                </div>
                <p className='text-gray-500 text-center w-[70%] pt-5 md:text-xl sm:text-lg text-base'>
                    Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.
                </p>
                <button className='bg-[#00df9a] w-[200px] rounded p-4 text-black font-bold mt-6 hover:bg-white transition cursor-pointer '>
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default Hero