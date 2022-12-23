import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function AllSeller() {

    const [sellers, setSellers] = useState([])
    useEffect(()=>{
        fetch('https://share-comfy-server-coral.vercel.app/users/seller')
        .then(res => res.json())
        .then(data => setSellers(data))
       
    },[])

    const deleteUser = (seller) =>{
        const agree = window.confirm(`are you sure to delete ${seller.name}`);
        if(agree){
            fetch(`https://share-comfy-server-coral.vercel.app/user/${seller._id}`,{
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    // alert('Deleted successfully')
                    toast.success("Deleted succefully!")
                    const remainingReview = sellers
                    .filter(prod => prod._id !== seller._id)
                    setSellers(remainingReview)
                }
            })
        }
    }

  return (
    <div className='w-full overflow-x-auto'>
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
                sellers.length == 0 ? <p className='text-center text-sm py-5'>No seller available</p>:
                sellers?.map(seller =>
                    <tr key={seller._id}>
                        <td className='td-style'>{seller.displayName}</td>
                        <td className='td-style'>{seller.email}</td>
                        <td className='flex justify-center items-center td-style'>
                            <button onClick={()=> deleteUser (seller)} className='px-5 py-1 text-sm bg-red-600 text-white'>Delete</button>
                        </td>
                </tr>
                )
                }
            </tbody>
        </table>
    </div>
  )
}

export default AllSeller