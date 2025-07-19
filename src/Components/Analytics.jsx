import React from 'react'
import Laptop from '../assets/laptop.jpg';
const Analytics = () => {
  return (
    <div className=' bg-white'>
       <div className='max-w-[1240px] w-full mx-auto grid md:grid-cols-2'>
         <div className='flex flex-col justify-center'>
            <img src={Laptop} alt="" />
        </div>
        <div className='flex flex-col justify-center p-4 md:p-0'>
            <div className='text-[#00df9a] font-bold text-2xl'> 
                DATA ANALYTICS DASHBOARD
            </div>
            <h1 className='font-bold my-1.5 text-4xl '>Manage Data Analytics Centrally</h1>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className='font-bold text-xl bg-black text-[#00df9a] py-3 w-[180px] rounded-lg my-4 cursor-pointer hover:bg-[#00df9a] hover:text-black '>Get Started</button>
        </div>
       </div>
    </div>
  )
}

export default Analytics