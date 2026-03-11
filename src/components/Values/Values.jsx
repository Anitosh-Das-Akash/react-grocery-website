import React from 'react'
import Heading from '../Heading/Heading.jsx'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from 'react-icons/fa'
import Basket from '../../assets/basket-full-vegetables.png'
import Button from '../Button/Button.jsx'

const Values = () => {

    const leftValues=value.slice(0,2).map(item=>{
        return(
            <div key={item.id} className='flex md:flex-row-reverse items-center gap-5 mt-15'>
                <div>
                    <span className='flex justify-center items-center w-15 h-15 rounded-full text-white text-3xl bg-gradient-to-b from-orange-400 to-orange-500'>{item.icon}</span>
                </div>
                <div className='md:text-right'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        )
    })
     const rightValues=value.slice(2).map(item=>{
        return(
            <div key={item.id} className='flex items-center gap-5 mt-15'>
                <div>
                    <span className='flex justify-center items-center w-15 h-15 rounded-full text-white text-3xl bg-gradient-to-b from-orange-400 to-orange-500'>{item.icon}</span>
                </div>
                <div>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        )
    })





  return (

    <section>
         <div className='max-w-[1400px] mx-auto px-10 py-20'>
            
            <Heading highlight='Our' heading='Values'/>

            <div className='flex md:gap-5 gap-15 mt-15 md:flex-row flex-col'>

                {/* left values */}
                <div className='md:min-h-100  flex flex-col justify-between'>
                    {leftValues}
                </div>
                <div className='md:flex w-1/2 hidden'>
                    <img src={Basket}/>
                </div>

                {/* right values */}
                <div className='md:min-h-100  flex flex-col justify-between'>
                
                    {rightValues}
                </div>
            </div>

            


        </div>
        

    </section>
   
  )
}

export default Values

const value=[
    {
        id:1,
        title:'Trust',
        para:'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaHeart/>
    },

    {
        id:2,
        title:'Always Fresh',
        para:'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaLeaf/>
    },

    {
        id:3,
        title:'Food Safety',
        para:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: <FaShieldAlt/>
    },
     {
        id:4,
        title:'100% Organic',
        para:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: <FaSeedling/>
    }
]