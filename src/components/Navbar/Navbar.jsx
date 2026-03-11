import React, { useEffect, useState } from 'react'
import { GoHeartFill } from "react-icons/go";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";





const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu=()=>{
    console.log("Clicked");
    setShowMenu(!showMenu);
  }

useEffect(() => {

  const handleScroll= () => {
    setIsScrolled(window.scrollY>10)
    
  }

  window.addEventListener('scroll',handleScroll)
  return ()=> window.removeEventListener('scroll',handleScroll);
}, [])



  return (
    <div>
        <header className={`bg-white fixed top-0 right-0 left-0 z-50 ${isScrolled?"drop-shadow-[0_4px_25px_rgba(0,0,0,.9)]":''}`}>
          <nav className='max-w-[1400px] items-center px-10 mx-auto md:h-[14vh] h-[12vh] flex justify-between'>
            {/* logo */}
            <a href="#" className='text-3xl font-semibold'>
              Gr<span className='text-orange-500 uppercase'>O</span>cify
            </a>

            {/* desktop menu */}
            <ul className='md:flex items-center gap-x-15 hidden'>
              <li>
                <a href="#" className='font-semibold tracking-wider text-orange-500' >Home</a>
              </li>
              <li>
                <a href="#"className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
              </li>
              <li>
                <a href="#"className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Processes</a>
              </li>
              <li>
                <a href="#"className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
              </li>
            </ul>

            {/* icon bar */}

            <div className='flex justify-between items-center gap-x-5'>

              <div className='md:flex p-1 border-2 border-orange-500 rounded-full hidden'>
                <input type="text" name="text" id="text" placeholder='Search...' autoComplete='off'
                className='flex-1 h-[5vh] px-3 focus:outline-none' />
              <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white h-10 w-10 flex justify-center items-center rounded-full text-xl'>

                <IoSearch />


              </button>


              </div>

              
              <a href="#" className='text-zinc-800 text-2xl'>
               <GoHeartFill/>
 
              </a>
              <a href="#" className='text-zinc-800 text-2xl'>
               <HiMiniShoppingBag />

 
              </a>

              {/* hamburger */}

              <a href="#" className='text-zinc-800 text-3xl md:hidden' onClick={toggleMenu}>
                {showMenu?<TbMenu3 />:<TbMenu2 />}


              </a>
            </div>

             <ul className={`bg-orange-500/15 backdrop-blur-xl shadow-xl rounded-xl p-10 top-30 -left-full transform -translate-x-1/2  flex flex-col gap-y-12 items-center gap-x-15 md:hidden absolute transition-all duration-500 ${showMenu ? 'left-1/2':" "}`}>
              <li>
                <a href="#" className='font-semibold tracking-wider text-orange-500' >Home</a>
              </li>
              <li>
                <a href="#"className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
              </li>
              <li>
                <a href="#"className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Processes</a>
              </li>
              <li>
                <a href="#"className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
              </li>
              <li className='flex p-1 border-2 border-orange-500 rounded-full md:hidden'>
                <input type="text" name="text" id="text" placeholder='Search...' autoComplete='off'
                className='flex-1 h-[5vh] px-3 focus:outline-none' />
              <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white h-10 w-10 flex justify-center items-center rounded-full text-xl'>

                <IoSearch />


              </button>


              </li>
            </ul>
          </nav>
        </header>
    </div>
  )
}

export default Navbar