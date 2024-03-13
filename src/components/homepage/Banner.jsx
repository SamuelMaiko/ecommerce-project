import React from 'react'
import salah from '../../assets/salah.jpeg'

const Banner = () => {
  const bannerStyles={
    // backgroundColor:"red"
    background: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${salah})`,
    backgroundSize:'cover',
    backgroundPosition:'center',
    color:"#fff",
    padding:"100px 0"
  }

  return (
    <div className='w-[90%] mx-auto mt-14'>
      <div style={bannerStyles} className='relative w-full bg-green-200 h-[500px] rounded-lg shadow-[2px_2px_4px_rgba(0,0,0,0.1)]'>
        <h1 className='text-[36px] mb-[20px] font-heading font-bold text-center mt-5'>
          Discover the Finest Raw Materials for Your Industry
        </h1>
        <p className='text-[20px] mb-[30px] font-body text-center'>
          Explore our wide range of high-quality raw materials sourced from trusted suppliers around the globe.
        </p>
        <div className='w-full flex flex-col items-center'>

        <button className='inline bg-[#f0f0f0] text-[18px] hover:bg-[#d9d9d9] text-black transition-colors duration-300 rounded-lg py-2 px-3 mt-4 font-button'>
          Shop Now
        </button>
        <button className='relative button flex items-center gap-2 pr-10 bg-[#f0f0f0] text-[16px] hover:bg-[#d9d9d9] text-black transition-all duration-300 rounded-lg py-2 px-3 mt-4 font-button'>
          Learn more

          {/* ______ arrow icon __________ */}
          <span className='arrow flex items-center justify-center '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </span>
        </button>
        </div>
      </div>

      <div className='absolute bottom-7 left-1/2 -translate-x-1/2 flex gap-3'>
        <p className='bg-white w-[0.5rem] h-[0.5rem] rounded-full hover:scale-125 transition-all duration-300 cursor-pointer'></p>
        <p className='bg-white w-[0.5rem] h-[0.5rem] rounded-full hover:scale-125 transition-all duration-300 cursor-pointer'></p>
        <p className='bg-white w-[0.5rem] h-[0.5rem] rounded-full hover:scale-125 transition-all duration-300 cursor-pointer'></p>
      </div>

    </div>
  )
}

export default Banner