import React from 'react'

function AllBuyer() {
  return (
    <div>
          <table class="table-auto w-full bg-white ">
            <thead>
                <tr>
                    <th className='text-left p-5 bg-slate-200 text-black/70'>Name</th>
                    <th className='text-left p-5 bg-slate-200 text-black/70'>Email</th>
                    <th className='text-left p-5 bg-slate-200 text-black/70'>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='td-style'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td className='td-style'>Malcolm Lockyer</td>
                    <td className='flex justify-center items-center td-style'>
                        <button className='px-5 py-1 text-sm bg-red-600 text-white'>Delete</button>
                    </td>
                </tr>
                <tr>
                    <td className='td-style'>Witchy Woman</td>
                    <td className='td-style'>The Eagles</td>
                    <td className='td-style'>1972</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default AllBuyer