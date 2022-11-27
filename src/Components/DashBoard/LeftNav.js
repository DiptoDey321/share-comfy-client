import React from 'react'
import { Link } from 'react-router-dom'

function LeftNav() {
  return (
    <div className='bg-white shadow-sm h-fit w-full rounded-[10px]' >
        <ul className=''>
            <li><Link to='/dashboard'><button  className='w-full p-3 text-black/80 cursor-pointer hover:bg-slate-200 rounded-[10px] pl-5 font-medium text-left'>About Me</button></Link></li>

            <li><Link to='/dashboard/all-Seller'><button className='w-full text-left p-3 text-black/80 cursor-pointer hover:bg-slate-200 rounded-[10px] pl-5 font-medium'>All Seller</button> </Link></li>

            <li><Link to='/dashboard/all-buyer'><button className='w-full text-left p-3 text-black/80 cursor-pointer hover:bg-slate-200 rounded-[10px] pl-5 font-medium'>All Buyer</button></Link></li>

            <li><Link to='/dashboard/add-product'><button className='w-full text-left p-3 text-black/80 cursor-pointer hover:bg-slate-200 rounded-[10px] pl-5 font-medium'>Add a Product</button></Link></li>

            <li><Link to='/dashboard/my-product'><button className='w-full text-left p-3 text-black/80 cursor-pointer hover:bg-slate-200 rounded-[10px] pl-5 font-medium'>My products</button></Link> </li>

            <li><Link to='/dashboard/my-order'><button className='w-full text-left p-3 text-black/80 cursor-pointer hover:bg-slate-200 rounded-[10px] pl-5 font-medium'>My Order</button></Link></li>
        </ul>
    </div>
  )
}

export default LeftNav