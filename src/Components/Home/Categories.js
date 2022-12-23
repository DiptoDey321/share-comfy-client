import React from 'react'
import { Link } from 'react-router-dom'

function Categories() {
    

    const categories = [
        {
            "_id" : "workSpaceFurniture",
            "name" : "Workspace Furniture",
            "img" : "https://i.ibb.co/KF0L9F4/workspace.png"
        },
        {
            "_id" : "kitchenFurnture",
            "name" : "Kitchen Furniture",
            "img" : "https://i.ibb.co/bzdv8fG/kitchen.png"
        },
        {
            "_id" : "homeFurniture",
            "name" : "Home Furniture",
            "img" : "https://i.ibb.co/zmjV4Mz/home.png"
        }
    ]
  return (
    <div className='mx-[5%] my-20'>
        <h2 className='text-3xl font-medium'>Browser Category</h2>
        <p className='text-black/50 mt-2'>Browser and choose the best deal for you</p>
        <div className="flex gap-x-10 mt-10 flex-wrap gap-y-10 justify-center">
        {
            categories.map(category => 
            <div key={category._id} className="w-[377px]">
               <Link to={`/category/${category._id}`}>
                    <img className='w-full rounded-lg' src={category.img} alt="" srcSet="" />
                    <p className='text-xl font-medium text-black/60'>{category.name}</p>
               </Link>
            </div>
            )
        }
        </div>
    </div>
  )
}

export default Categories