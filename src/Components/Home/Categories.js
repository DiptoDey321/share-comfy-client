import React from 'react'

function Categories() {
    

    const categories = [
        {
            "name" : "Workspace Furniture",
            "img" : "https://i.ibb.co/KF0L9F4/workspace.png"
        },
        {
            "name" : "Kitchen Furniture",
            "img" : "https://i.ibb.co/bzdv8fG/kitchen.png"
        },
        {
            "name" : "Room Furniture",
            "img" : "https://i.ibb.co/zmjV4Mz/home.png"
        }
    ]
  return (
    <div className='mx-[5%] my-20'>
        <h2 className='text-3xl font-medium'>Browser Category</h2>
        <p className='text-black/50 mt-2'>Browser and choose the best deal for you</p>
        <div className="flex gap-x-10 mt-10">
        {
            categories.map(category => 
            <div className="w-full">
                <img className='w-full rounded-lg' src={category.img} alt="" srcset="" />
                <p className='text-xl font-medium text-black/60'>{category.name}</p>
            </div>
            )
        }
        </div>
    </div>
  )
}

export default Categories