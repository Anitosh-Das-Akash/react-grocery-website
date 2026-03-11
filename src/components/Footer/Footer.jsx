import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const Footer = () => {
  return (
    <footer className='bg-zinc-100 py-20'>

        <div className='flex flex-wrap max-w-[1400px] mx-auto px-10 gap-y-12'>
            <div className='md:flex-1 md:basis-[300px] w-full'>

                <a href="#" className='text-3xl font-semibold'>
                    Gr<span className='text-orange-500 uppercase'>O</span>cify
                </a>

                <p className='text-zinc-600 mt-6 max-w-[350px]'>
                    Bred for a high content of beneficial substances. Our products are all fresh and healthy.


                </p>
                <p className='text-zinc-800 mt-6'>
                    2025 &copy; all rights reserved.
                </p>






            </div>

            <ul className='flex-1'>
                <li>
                    <h5 className='text-zinc-800 text-2xl font-bold'>Company</h5>
                </li>
                <li className='mt-6'>
                    <a href="#" className='text-zinc-800 hover:text-orange-500'>About</a>
                </li>
                <li className='mt-6'>
                    <a href="#" className='text-zinc-800 hover:text-orange-500'>FAQ'S</a>
                </li>
            </ul>

            <ul className='flex-1'>
                <li>
                    <h5 className='text-zinc-800 text-2xl font-bold'>Support</h5>
                </li>
                <li className='mt-6'>
                    <a href="#" className='text-zinc-800 hover:text-orange-500'>Support Center</a>
                </li>
                <li className='mt-6'>
                    <a href="#" className='text-zinc-800 hover:text-orange-500'>Feedback</a>
                </li>
                <li className='mt-6'>
                    <a href="#" className='text-zinc-800 hover:text-orange-500'>Contact Us</a>
                </li>
            </ul>

            <div className='md:flex-1 w-full'>
                <h5 className='text-zinc-800 text-2xl font-bold'>
                    Stay Connected
                </h5>
                <p className='text-zinc-600 mt-6'>
                    Questions or feedback?<br />
                    We will love to hear from you.
                </p>

                <div className='bg-white rounded-lg p-1 mt-6 flex '>
                    <input type="email" name="email" id="email" autoComplete='off' placeholder='Email Address' className='pl-4 h-[5vh] flex-1 focus:outline-none' />
                    <button className='bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl hover:to-orange-600 cursor-pointer'>
                        <IoIosArrowForward />

                    </button>
                </div>
            </div>
            
        </div>

    </footer>
  )
}

export default Footer