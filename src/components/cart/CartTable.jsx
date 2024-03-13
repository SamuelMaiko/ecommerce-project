import React from 'react'
import CartRow from './CartRow'

const CartTable = ({CART_ITEMS}) => {
  return (
    <table className='w-full font-body'>
        <tr className='uppercase text-xs text-gray-400 h-[3rem]'>
            <th className='text-left'>Product details</th>
            <th >Quantity</th>
            <th>Price</th>
            <th>Total</th>
        </tr>
        <tbody className=''>

        {
            CART_ITEMS.map((item, index)=>{
                return <CartRow key={index} {...item} />
            })
        }
        </tbody>
    </table>
  )
}

export default CartTable