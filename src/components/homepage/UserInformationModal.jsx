import React, { useEffect } from 'react'
import { getCookie } from '../../Cookies/Cookie'

const UserInformationModal = ({setIsUserInfoOpen}) => {
    const email=getCookie("email")
    
  return (
    <div className='absolute px-8 p-4 pb-8 w-[38rem] h-[10rem rounded-lg bg-[#f5f5f5]  text-black top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
        <button onClick={()=>setIsUserInfoOpen(false)} className='absolute right-2 top-2 text-[#333] '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>
        <div className='pt-8'>
            <p className='flex items-center gap-28'>
                <span className='text-xl font-heading font-medium'>Email</span>
                <span className=' font-body text-lg'>{email}</span>
            </p>
        </div>

    </div>
  )
}

export default UserInformationModal