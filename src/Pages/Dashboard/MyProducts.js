import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../Authentication/Authentication'

function MyProducts() {

  const {mngoUser} = useContext(AuthContext)
  const navigate = useNavigate()
  // console.log(mngoUser);

  const [myProduct, setMyProduct] = useState([])
    useEffect(()=>{
        fetch(`https://share-comfy-server.vercel.app/userProducts/${mngoUser?.email}`,{
         
        })
        .then(res => res.json())
        .then(data => setMyProduct(data))
    },[mngoUser?.email])

    console.log(myProduct);

    const deleteProduct = (product) =>{
      const agree = window.confirm(`are you sure to delete ${product.name}`);
      if(agree){
          fetch(`https://share-comfy-server.vercel.app/product/${product._id}`,{
              method: "DELETE",
          })
          .then(res => res.json())
          .then(data => {
              if(data.deletedCount > 0){
                  toast.success("Deleted succefully!")
                  const remainingReview = myProduct
                  .filter(prod => prod._id !== product._id)
                  setMyProduct(remainingReview)
              }
          })
      }
    }

    const advertiseProduct = (product) =>{
      fetch('https://share-comfy-server.vercel.app/avertise',{
        method : 'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(product)
    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged){
            toast.success(` added to home successfully`)
            navigate('/')
        }
    })
    }
 
   
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
                {
                  myProduct?.map(product =>
                    <tr key={product._id}>
                      <td className='td-style'>
                        <div className="">
                          <img className='w-20 h-20' src={product?.picture} alt="" srcSet="" />
                        </div>
                      </td>
                      <td className='td-style'>{product?.name} </td>
                      <td className='td-style'> 
                        <button className='px-10 py-2 text-sm bg-green-700 text-white relative left-1/2 -translate-x-1/2 rounded-sm'>Sold</button>
                      </td>
                      <td className='td-style'>
                          <button onClick={()=> advertiseProduct(product)} className='px-10 py-2 text-sm bg-green-700 text-white relative left-1/2 -translate-x-1/2 rounded-sm'>Advertise Now</button>
                      </td>
                      <td className='td-style'>
                          <button onClick={()=>deleteProduct(product)} className='px-10 py-2 text-sm bg-red-700 text-white relative left-1/2 -translate-x-1/2 rounded-sm'>Delete</button>
                      </td>
                    </tr>  
                  )
                }
            </tbody>
        </table>
    </div>
  )
}

export default MyProducts