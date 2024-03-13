import React, { useState } from 'react'
import Cart from './Cart'
import { useMyGeneralContext } from '../../context/AppContext'


const PageHeader = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const {cartNumber} =useMyGeneralContext()

  const NAV_LINKS=[
    {
      name:"Home",
      link:"/"   
    },
    // {
    //   name:"Products",
    //   link:""   
    // },
    
    {
      name:"Products",
      link:""   
    },
    {
      name:"Hiring",
      link:""   
    },
    {
      name:"About Us",
      link:"#about"
    },
    {
      name:"Testimonials",
      link:"#testimonials"   
    },
  ]

  return (
    <div className='w-full h-[7rem] bg-blue-300 '>
      <div className='mx-auto h-full w-[95%] flex justify-between'>
          {/* <div className='flex w-full items-center'> */}

              <div className='flex gap-4 items-center'>
                <p className='font-extrabold font-heading text-2xl mr-10'>Logo</p>
                <ul className='flex gap-8'>

                {
                  NAV_LINKS.map((link, index)=>{
                    return <a key={index} href={`${link.link}`}><li className='font-semibold text-lg'>{link.name}</li></a>
                  })
                  
                } 
                </ul>
              </div >
              {/* <div className='flex '> */}

                <div className=' flex items-center flex-1 justify-end h-full font-heading'>
                  <div className='relative w-[18rem]'>
                        <input 
                        className="relative pl-8 outline-none h-[2rem] rounded-lg py-5 shadow-[2px_2px_4px_rgba(0,0,0,0.1)] w-full mx-auto mt-2" 
                        type="text" 
                        placeholder='Search products'
                        ></input>
                        {/* __________ search icon _________ */}
                        <span className='absolute top-1/2 -translate-y-1/2 left-2 '>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                          </svg>
                        </span>
                  </div>
                {/* <div className='relative flex items-center h-full w-full '> */}

                  <button 
                  onClick={()=>setIsCartOpen(true)}
                  className='relative ml-4'>
                    {/* __________ cart button __________ */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    {/* ______ counter _____  */}
                    <span className='absolute bg-red-500 text-white -top-1 -right-2 rounded-full w-[1.2rem] h-[1.2rem] text-xs flex items-center justify-center'>{cartNumber}</span>

                  </button>

                  <button className='ml-8 font-semibold'>
                    <a className='hover:underline' href="">Login</a> /
                    <a className="hover:underline" href="">Signup</a>
                  </button>

                  <div className='w-[2.7rem] h-[2.7rem] bg-black ml-4 rounded-full '>

                  </div>
                {/* </div> */}
                </div>

              {/* </div> */}
          {/* </div> */}
        </div>


        {/* _____________________ cart modal  _______________________  */}
        <div className={`fixed z-10 bg-[rgba(0,0,0,0.3)] ${isCartOpen? "":"hidden" } inset-0`}>
          <Cart setIsCartOpen={setIsCartOpen}/>
        </div>
    </div>

  )
}

export default PageHeader