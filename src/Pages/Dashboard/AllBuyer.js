import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function AllBuyer() {
    
    const [buyers, setBuyers] = useState([])
    useEffect(()=>{
        fetch('https://share-comfy-server-coral.vercel.app/users/buyer')
        .then(res => res.json())
        .then(data => setBuyers(data))
       
    },[])

    const deleteUser = (buyer) =>{
        const agree = window.confirm(`are you sure to delete ${buyer.name}`);
        if(agree){
            fetch(`https://share-comfy-server-coral.vercel.app/user/${buyer._id}`,{
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    // alert('Deleted successfully')
                    toast.success("Deleted succefully!")
                    const remainingReview = buyers
                    .filter(prod => prod._id !== buyer._id)
                    setBuyers(remainingReview)
                }
            })
        }
    }

    console.log(buyers);
  return (
    <div className='overflow-x-auto'>
          <table className="table-auto w-full bg-white ">
            <thead>
                <tr>
                    <th className='text-left p-5 bg-slate-200 text-black/70'>Name</th>
                    <th className='text-left p-5 bg-slate-200 text-black/70'>Email</th>
                    <th className='text-left p-5 bg-slate-200 text-black/70'>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    buyers?.map(buyer =>
                        <tr key={buyer._id}>
                            <td className='td-style'>{buyer.displayName}</td>
                            <td className='td-style'>{buyer.email}</td>
                            <td className='flex justify-center items-center td-style'>
                                <button onClick={()=> deleteUser (buyer)} className='px-5 py-1 text-sm bg-red-600 text-white'>Delete</button>
                            </td>
                    </tr>
                    )
                }
               
            </tbody>
        </table>
    </div>
  )
}

export default AllBuyer