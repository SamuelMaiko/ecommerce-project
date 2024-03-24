import React from 'react'
import { useMyGeneralContext } from '../../context/AppContext'

const SupplierHeader = () => {
    const {backendDomain}=useMyGeneralContext()
  return (
    <div className="relative w-[90%] mx-auto h-[8rem] bg-blue-500 flex items-center">
        <div className='w-fit flex justify-center items-center gap-3'>
            <div className='w-[7rem] h-[7rem] bg-white rounded-full overflow-hidden'>
                <img
                src={`${backendDomain}${backendDomain}`}
                className="h-full object-cover object-center w-full"
                alt=""
                />
            </div>
            <div className='text-white'>
                <p>Supplier Supliers</p>
                <p className='text-sm text-gray-200'>supplier@gmail.com</p>
            </div>
        </div>
        {/* _____ chat icon start  */}
        <div className=' absolute right-0 -bottom-8 flex items-center justify-center w-[4rem] h-[4rem] bg-[#f5f5f5] hover:bg-[#d1cfcfea] transition-colors duration-300  text-gray-600 rounded-full overflow-hidden shadow-[2px_2px_4px_rgba(0,0,0,0.15)] cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
            </svg>
        </div>
        {/* _____ chat icon end  */}
    
    </div>
  )
}

export default SupplierHeader