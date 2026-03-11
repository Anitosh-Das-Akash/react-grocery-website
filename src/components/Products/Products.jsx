import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/ProductList.jsx'
import Cards from '../Cards/Cards.jsx';
import Button from '../Button/Button.jsx';
import { Link } from 'react-router-dom';
const Products = () => {

    const categories=['All','Fruits','Vegetables','Dairy','SeaFood'];
    const [activeTab, setActiveTab] = useState('All');

    let filteredItems=activeTab==='All'
    ? ProductList: ProductList.filter(item=>item.category===activeTab);

    const renderCards=filteredItems.slice(0,8).map(product=>{
        return (
            <Cards image={product.image} title={product.name} price={product.price}/>
        )

    })
  
    return(   
  
        <section>
        <div className='max-w-[1400px] mx-auto px-10 py-20'>

            <Heading highlight='Our' heading='Products'/>
            

            {/* tab */}
            <div className='flex flex-wrap gap-3 justify-center mt-10'>
                {
                categories.map(category=>{
                    return(
                        <button key={category} 
                        className={` rounded-lg px-5 py-2 text-lg cursor-pointer ${activeTab===category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-100'}`}
                        onClick={()=>setActiveTab(category)}>
                            {category}
                        </button>
                    )
                })
            }




            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-9 mt-20'>
                {renderCards}
            </div>
            <div className='mx-auto w-fit mt-15'>
            <Link to='/allproducts' className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg text-lg hover:scale-105 hover:to-orange-600 transition-all duration-300'>See All</Link>

            </div>
            

        </div>
    </section>
  )
}

export default Products


