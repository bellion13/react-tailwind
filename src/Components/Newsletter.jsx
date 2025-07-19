import React from 'react'

const Newsletter = () => {
    return (

        <div className='text-white md:p-0 h-55'>
            <div className='max-w-[1240px] w-full mx-auto flex flex-col md:flex-row justify-between items-center bg-[#000300] p-4 md:p-10'>
                <div className='flex flex-col justify-center md:p-0 w-full'>
                    <h1 className='text-3xl font-bold'>
                        Want tips & tricks to optimize your flow?
                    </h1>
                    <p className='my-2'>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='flex flex-col justify-center md:p-0 w-full md:w-auto mt-6 md:mt-0'>
                    <div className='flex items-center justify-center md:justify-start'>
                        <input
                            className='py-2 px-4 bg-white text-black focus:outline-none rounded-lg '
                            type='email'
                            placeholder='Enter Email'
                        />
                        <button className='bg-[#00df9a] text-black font-bold py-2 px-4 rounded-lg ml-2 hover:bg-[#00df9a]/80 transition duration-300 cursor-pointer w-26'>
                            Notify Me
                        </button>
                    </div>
                    <div className='flex items-center justify-center md:justify-start'>
                        <p className='text-gray-400 text-sm '>
                            We care bout the protection of your data.
                            <span className='text-[#00df9a] underline cursor-pointer'>Privacy Policy.</span>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Newsletter