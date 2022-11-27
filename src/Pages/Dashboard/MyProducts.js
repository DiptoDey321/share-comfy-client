import React from 'react'

function MyProducts() {
  return (
    <div>
      <h2 className='text-2xl font-medium text-black/70 mb-10'>Your Added product for Sell : </h2>
      <table className="table-auto w-full bg-white ">
            <thead>
                <tr>
                    <th className='text-left p-5 bg-slate-200 text-black/70'>Product Image</th>
                    <th className='text-left p-5 bg-slate-200 text-black/70'>Product name</th>
                    <th className='text-left p-5 bg-slate-200 text-black/70'>Sale Status</th>
                    <th className='text-left p-5 bg-slate-200 text-black/70'>Advertise</th>
                    <th className='text-left p-5 bg-slate-200 text-black/70'>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='td-style'>
                      <div className="w-20 h-20 bg-lime-600"></div>
                    </td>
                    <td className='td-style'>The Sliding Mr. Bones </td>
                    <td className='td-style'> 
                      <button className='px-10 py-2 text-sm bg-green-700 text-white relative left-1/2 -translate-x-1/2 rounded-sm'>Sold</button>
                    </td>
                    <td className='td-style'>
                        <button className='px-10 py-2 text-sm bg-green-700 text-white relative left-1/2 -translate-x-1/2 rounded-sm'>Advertise Now</button>
                    </td>
                    <td className='td-style'>
                        <button className='px-10 py-2 text-sm bg-red-700 text-white relative left-1/2 -translate-x-1/2 rounded-sm'>Delete</button>
                    </td>
                </tr>
                <tr>
                <td className='td-style'>
                      <div className="w-20 h-20 bg-red-600"></div>
                    </td>
                    <td className='td-style'>Witchy Woman</td>
                    <td className='td-style'> 
                      <button className='px-10 py-2 text-sm bg-orange-600 text-white relative left-1/2 -translate-x-1/2 rounded-sm'>Available</button>
                    </td>
                    <td className='td-style'>
                        <button className='px-10 py-2 text-sm bg-green-700 text-white relative left-1/2 -translate-x-1/2 rounded-sm'>Advertise Now</button>
                    </td>
                    <td className='td-style'>
                        <button className='px-10 py-2 text-sm bg-red-700 text-white relative left-1/2 -translate-x-1/2 rounded-sm'>Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default MyProducts