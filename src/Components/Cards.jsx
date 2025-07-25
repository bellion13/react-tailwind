import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
const Cards = () => {
    return (
        <div className='bg-white w-full py-[10rem] px-4' >
            <div className='max-w-[1240px] mx-auto px-4 grid grid-cols-1 gap-24 md:grid-cols-3 md:gap-8'>
                <div className='w-full shadow-2xl flex justify-center items-center flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Single} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold' >$149</p>
                    <div className='text-center font-medium w-full'>
                        <p className='py-2 border-b mx-8 mt-8 border-t' >500 GB Storage</p>
                        <p className='py-2 border-b mx-8' >1 Granted User</p>
                        <p className='py-2 border-b mx-8' >Send up to 2 GB</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 cursor-pointer hover:bg-black hover:text-[#00df9a]'>Start Trial</button>
                </div>
                <div className='bg-gray-200 w-full shadow-2xl flex justify-center items-center flex-col p-4 my-0 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-6rem] bg-transparent' src={Double} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Partnership</h2>
                    <p className='text-center text-4xl font-bold' >$199</p>
                    <div className='text-center font-medium w-full'>
                        <p className='py-2 border-b mx-8 mt-8 border-t' >1 TB Storage</p>
                        <p className='py-2 border-b mx-8' >3 Granted User</p>
                        <p className='py-2 border-b mx-8' >Send up to 10 GB</p>
                    </div>
                    <button className='hover:bg-[#00df9a] hover:text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 cursor-pointer bg-black text-[#00df9a]'>Start Trial</button>
                </div>
                <div className='w-full shadow-2xl flex justify-center items-center flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Triple} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
                    <p className='text-center text-4xl font-bold'>$299</p>
                    <div className='text-center font-medium w-full'>
                        <p className='py-2 border-b mx-8 mt-8 border-t' >5 TB Storage</p>
                        <p className='py-2 border-b mx-8' >10 Granted User</p>
                        <p className='py-2 border-b mx-8' >Send up to 20 GB</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 cursor-pointer hover:bg-black hover:text-[#00df9a]'>Start Trial</button>
                </div>
                
            </div>
        </div>
        

    )
}

export default Cards