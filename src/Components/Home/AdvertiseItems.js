import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function AdvertiseItems() {
  
    const [advertiseProduct, setAdvertiseProduct] = useState([])
    useEffect(()=>{
        fetch("https://share-comfy-server-coral.vercel.app/avertise")
        .then(res => res.json())
        .then(data => setAdvertiseProduct(data))
    },[])
    console.log(advertiseProduct);
  return (
    <div className="">
        {
            advertiseProduct.length !== 0 &&
            <div className="mx-[5%] my-10">
                <h2 className='text-3xl font-medium'>Newly Arrived products</h2>
                <p className='text-black/50 mt-2'>See our lateast products and buy ASAP before Sold out</p>
                <div className='mt-12 flex flex-wrap gap-10 justify-center'>
                    {
                        advertiseProduct.map(product =>
                            <div key={product._id} className="w-[310px] bg-slate-200 flex flex-col justify-center items-center rounded-[10px] shadow-md">
                                <div className='w-[250px] h-[300px] flex items-center justify-center'>
                                    <img className='w-full' src={product.picture} alt="" />
                                </div>
                                <div className="bg-slate-50 w-full px-3 rounded-b-[10px]">
                                    <p className='text-sm font-bold pt-3 text-green-800'>$ {product?.resellPrice}</p>
                                    <h4 className='text-base capitalize font-medium text-black/50'>{product?.name}</h4>
                                    
                                    <div className="flex justify-center">
                                        <Link to={`/category/${product.category}`}>
                                        <button className='my-4 text-sm bg-black text-white px-6 py-2 rounded-md'>View more</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            )   
                    }
                </div>
    </div>
        }
    </div>
  )
}

export default AdvertiseItems