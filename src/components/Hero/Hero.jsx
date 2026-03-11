import React from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button'
const Hero = () => {
  return (
    
        <section>
            <div className='max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center md:pt-20 pt-35 min-h-screen'>

                {/* hero content */}
                <div className='flex-1'>
                    <span className='bg-orange-100 text-orange-500 text-lg px-5 md:mt-5 mt-4 py-2 rounded-full'>Export Best Quality...</span>
                    <h1 className='md:text-7xl/20 text-5xl/14 mt-5 font-bold'>Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span><br />In Your City.</h1>

                    <p className='text-lg text-zinc- mt-5 max-w-[530px] mb-10'>
                        Bred for a high content of beneficial substances. Our products are all fresh and healthy.
                    </p>
                    <Button content='Shop Now'/>

                </div>

                {/* hero image */}
                <div className='flex-1'>
                    <img src={Grocery} alt="Hero Image" />
                </div>

            </div>

        </section>
    
  )
}

export default Hero