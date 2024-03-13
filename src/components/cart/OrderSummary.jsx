import React from 'react'

const OrderSummary = ({cartTotal, CART_ITEMS}) => {
  return (
    <div className='bg-[rgba(0,0,0,0.03)] shadow-inner w-[26rem] p-10 pt-14 h-full'>
        <div className=''>
            <h1 className='font-medium font-heading text-xl'>Order Summary</h1>
        </div>
        {/* ________ separator ________   */}
        <div className=''>
            <div className="border-t border-gray-300 my-4"></div>
        </div>
        

        <div className='my-8'>
            <label className='uppercase font-body font-medium text-sm'>Shipping address</label>
            <input 
            className=' pl-4 outline-none border border-gray-300 rounded-[5px] w-full h-[3.1rem] mt-2' 
            type="text" 
            placeholder='Enter shipping address'
            />
        </div>
        <div>
            <p className='uppercase font-medium font-body text-sm'>Items {CART_ITEMS.length}</p>
            <p>Ksh. {cartTotal}</p>
        </div>

        {/* ________ separator ________   */}
        <div className='my-10'>
            <div className="border-t border-gray-300 my-4"></div>
        </div>

        <div className='flex justify-between '>
            <p className='uppercase font-medium font-body text-sm'>Total cost</p>
            <p>Ksh. {cartTotal}</p>
        </div>

        <button
        className='mt-4 w-full uppercase shadow-[2px_2px_10px_rgba(0,0,0,0.1)] bg-[#ff9900] hover:bg-[#ff8029] transition-colors duration-300 text-white font-button border-none rounded-[1px] px-[20px] py-[10px] text-sm'
        >
            Checkout
        </button>

    </div>
  )
}

export default OrderSummary