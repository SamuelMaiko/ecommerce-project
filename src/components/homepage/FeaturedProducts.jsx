import React from 'react'
import ProductCard from './ProductCard'


const FeaturedProducts = () => {
  return (
    <div className='w-[90%] mx-auto mt-14'>
        <div className=''>
            <h1 className='text-2xl font-semibold font-heading mb-4'>Featured Products</h1>
            <div className='grid grid-cols-3 gap-[1.35rem]'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

        </div>
    </div>
  )
}

export default FeaturedProducts