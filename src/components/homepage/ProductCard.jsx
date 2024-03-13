import React from 'react'
import salah from '../../assets/salah.jpeg'


const ProductCard = () => {
  return (
    <div className='w-full p-[20px] rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)]'>
        <div className=''>
            <img src={salah} className='h-[12rem] object-cover w-full rounded-lg' alt="" />
            <h2 className='text-lg font-heading font-semibold mb-2'>Product Name</h2>
            <p className='text-sm text-gray-600 mb-2 font-body'>
                Description of the product. Lorem ipsum dolor sit amet, consectetur a dipiscing elit.
            </p>
            <p className='text-lg font-heading font-bold text-gray-800'>
                $19.99
            </p>

            <button className='font-button mt-4 px-4 py-2 bg-blue-500 text-white rounded
             hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:blue-blue-600'>
                Add to cart
            </button>
        </div>

    </div>
  )
}

export default ProductCard