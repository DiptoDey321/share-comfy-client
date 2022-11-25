import React from 'react'
import { Link } from 'react-router-dom'

function LeftNav() {
  return (
    <div className='bg-white shadow-sm h-fit w-full rounded-[10px]' >
        <ul className=''>
            <li className='p-3 text-black/80 cursor-pointer hover:bg-slate-200 rounded-[10px] pl-5 font-medium'><Link to='/dashboard'>About Me</Link></li>
            <li className='p-3 text-black/80 cursor-pointer hover:bg-slate-200 rounded-[10px] pl-5 font-medium'><Link to='/dashboard/allSeller'> All Seller </Link></li>
            <li className='p-3 text-black/80 cursor-pointer hover:bg-slate-200 rounded-[10px] pl-5 font-medium'><Link to='/dashboard/allbuyer'>All Buyer</Link></li>
            <li className='p-3 text-black/80 cursor-pointer hover:bg-slate-200 rounded-[10px] pl-5 font-medium'><Link to='/dashboard/addproduct'>Add a Product</Link></li>
            <li className='p-3 text-black/80 cursor-pointer hover:bg-slate-200 rounded-[10px] pl-5 font-medium'>My products </li>
            <li className='p-3 text-black/80 cursor-pointer hover:bg-slate-200 rounded-[10px] pl-5 font-medium'>My Order</li>
        </ul>
    </div>
  )
}

export default LeftNav