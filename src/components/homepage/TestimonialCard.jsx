import React from 'react'
import salah from '../../assets/salah.jpeg'

const TestimonialCard = () => {
  return (
    <div className='w-[76%] mx-auto rounded-lg overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.12)] flex '>
        <div className='w-[35rem] h-[29rem] flex-1'>
            <img src={salah}className='h-full object-cover w-full' alt="" />
        </div>
        <div className='flex-1 p-8'>
            <p className='text-lg text-gray-600 mb-2 font-body'>
                Description of the product. Lorem ipsum dolor sit amet, consectetur a dipiscing elit.
                Description of the product. Lorem ipsum dolor sit amet, consectetur a dipiscing elit.
                Description of the product. Lorem ipsum dolor sit amet, consectetur a dipiscing elit.
                Description of the product. Lorem ipsum dolor sit amet, consectetur a dipiscing elit.
                Description of the product. Lorem ipsum dolor sit amet, consectetur a dipiscing elit.
                Description of the product. Lorem ipsum dolor sit amet, consectetur a dipiscing elit.
            </p>
            <div className='flex gap-4'>
                <div className='w-[3.4rem] h-[3.4rem] bg-black rounded-full overflow-hidden'>
                    <img src={salah} className='w-full h-full' alt="" />
                </div>
                <div>
                    <p className='font-button font-semibold text-lg'>Salah</p>
                    <p className='text-sm text-gray-500 font-body'>CEO RW Finessers</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard