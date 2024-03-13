import React from 'react'

const SendEmailForm = () => {
  return (
    <form className='w-[43rem]'>
        <input 
        className='pl-4 outline-none border border-gray-300 rounded-[5px] w-full h-[3.1rem] transition-all duration-300 focus:border-[#ffcc66] focus:ring-2 focus:ring-[#ffd699]'
        type="text" 
        placeholder='Your name'
        />
        <div className='flex gap-2'>
        <input 
            className='pl-4 outline-none border border-gray-300 rounded-[5px] w-full h-[3.1rem] mt-8 transition-all duration-300 focus:border-[#ffcc66] focus:ring-2 focus:ring-[#ffd699]'
            type="text" 
            placeholder='Email Address'
        />
        <input 
            className='pl-4 outline-none border border-gray-300 rounded-[5px] w-full h-[3.1rem] mt-8 transition-all duration-300 focus:border-[#ffcc66] focus:ring-2 focus:ring-[#ffd699]'
            type="text" 
            placeholder='Subject'
        />
        </div>


        <textarea 
        rows={7}
        className='pl-4 p-2 outline-none border border-gray-300 rounded-[5px] w-full mt-8 transition-all duration-300 focus:border-[#ffcc66] focus:ring-2 focus:ring-[#ffd699]'
        placeholder='Enter message here'
        ></textarea>

        <button
        type="submit"
        className='mt-4 shadow-[2px_2px_10px_rgba(0,0,0,0.1)] bg-[#ff9900] hover:bg-[#ff8029] transition-colors duration-300 text-white font-button border-none rounded-[5px] px-[20px] py-[10px] text-[18px]'
        >
            Send Message 
        </button>
                
        </form>
  )
}

export default SendEmailForm