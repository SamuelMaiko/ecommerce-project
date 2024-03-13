import React, { useEffect, useRef, useState } from 'react'
import { useMyGeneralContext } from '../../context/AppContext'

const CartRow = ({name, quantity, price}) => {
    const [itemQuantity, setItemQuantity] = useState(quantity)
    const [itemPrice, setItemPrice] = useState(price)
    const [total, setTotal] = useState(()=>itemQuantity*itemPrice)

    const {setCartTotal, setIncrease}=useMyGeneralContext()

    const tot=useRef(total)
    useEffect(()=>{
        const increase=total-tot.current
        // setCartTotal(0)
        setTotal(itemQuantity*itemPrice)
        if (increase!==0){
            setIncrease(increase)
        }
        tot.current=total
        // else{
        //     setCartTotal((current)=>current+increase)
        // }
    },[itemQuantity])
  return (
    <tr className='h-[3rem]'>
        <td className='text-left'>{name}</td>
        <td className='flex gap-1 justify-center'>
            <button onClick={()=>setItemQuantity((current)=> current-1)} className='text-xl'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>

            </button>
            <input 
            className='w-[2rem] outline-none border border-gray-300 text-center'
            value={itemQuantity}
            onChange={(e)=>setItemQuantity(e.target.value)}
            type="text" />
            <button onClick={()=>setItemQuantity((current)=> current+1)} className='text-xl'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </td>
        <td className='text-center'>Ksh. {price}</td>
        <td className='text-center'>Ksh. {total}</td>
    </tr>
  )
}

export default CartRow