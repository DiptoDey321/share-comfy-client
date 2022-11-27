import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Authentication/Authentication'

function Myorders() {
  const [bookedData, SetBookedData] = useState([]);
  const {user} = useContext(AuthContext)
  // console.log(user?.email);

  useEffect(()=>{
      fetch(`http://localhost:5000/bookingProducts/${user?.email}`)
      .then(res => res.json())
      .then (data => SetBookedData(data))
  },[user])

  const paymentHandler =(data) =>{
    console.log(data);
  }

  

  console.log(bookedData);

  return (
    <div>
      <table className="table-auto w-full bg-white ">
            <thead>
                <tr>
                    <th className='text-left p-5 bg-slate-200 text-black/70'>Product Image</th>
                    <th className='text-left p-5 bg-slate-200 text-black/70'>Product name</th>
                    <th className='text-left p-5 bg-slate-200 text-black/70'>Price</th>
                    <th className='text-left p-5 bg-slate-200 text-black/70'>Billing</th>
                </tr>
            </thead>
            <tbody>
                { bookedData.length !== 0 &&
                  bookedData.map((data,i) =>
                    <tr key={i}>
                      <td className='td-style'>
                        <div className="w-20 h-20 relative left-1/2 -translate-x-1/2 rounded-sm"><img src={data?.picture} alt="" srcSet="" /></div>
                      </td>
                      <td className='td-style'>{data?.productName}</td>
                      <td className='td-style'>{data?.productPrice}</td>
                      <td className='td-style'>
                          <button onClick={()=> paymentHandler(data)} className='px-10 py-2 text-sm bg-green-700 text-white relative left-1/2 -translate-x-1/2 rounded-sm'>Pay</button>
                      </td>
                    </tr> )
                }
            </tbody>
        </table>
    </div>
  )
}

export default Myorders