import React from 'react'

const Header = () => {
    return (
        <div className="text-white max-w-[1240px] w-full flex items-center justify-between h-25 mx-auto ">
            <h1 className='text-[#00df9a] text-3xl font-bold'>
                REACT.
            </h1>
            <ul className="flex items-center font-medium ">
                <li className='px-3  hover:text-[#00df9a] cursor-pointer'>Home</li>
                <li className='px-3  hover:text-[#00df9a] cursor-pointer'>Account</li>
                <li className='px-3  hover:text-[#00df9a] cursor-pointer'>Sign In</li>
                <li className='px-3 bg-white text-black py-[6px] rounded hover:text-[#00df9a] cursor-pointer transition'>Get Started</li>
            </ul>
        </div>
    )
}

export default Header