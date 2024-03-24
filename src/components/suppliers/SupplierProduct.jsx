import React from 'react'
import { useMyGeneralContext } from '../../context/AppContext'

const SupplierProduct = () => {
    const {backendDomain} =useMyGeneralContext()
  return (
    <div className='w-fit flex justify-between items-center h-[3rem] gap-4'>
        <div className='w-[3rem] h-[3rem] bg-blue-400 rounded-full overflow-hidden'>
            <img
                src={`${backendDomain}${backendDomain}`}
                className="h-full object-cover object-center w-full"
                alt=""
                />
        </div>
        <div className='flex flex-col justify-center'>
            <h1 className='font-heading font-semibold '>Product name</h1>
            <p>Category</p>
        </div>
    </div>
  )
}

export default SupplierProduct