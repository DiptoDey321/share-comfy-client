import React from 'react'

function AdvertiseItems() {
    const products=[
        {
            "name" : "Wooden chair",
            "des" : " Made with segun wood . used for 1years..still looks like new",
            "img" : "https://i.ibb.co/nRjRT06/chair.png",
            "price" : "120"
        },
        {
            "name" : "Book Self",
            "des" : " Wood made furniture. Small but beautifull. You can use it beside of bed",
            "img" : "https://i.ibb.co/SN1SMvF/bookself.png",
            "price" : "220"
        },
        {
            "name" : "Sofa set",
            "des" : "Made of Malaysian wood and Austrilian form. very comfortable and light weight.",
            "img" : "https://i.ibb.co/m90HLtQ/sofa.png",
            "price" : "360"
        },
        {
            "name" : "Tea table",
            "des" : "Having a beautifull modern chair with a little chair. Fit to anywhere",
            "img" : "https://i.ibb.co/NnSG48N/kara-eads-buhmhprfo3g-unsplash-removebg-preview.png",
            "price" : "250"
        },
        {
            "name" : "Study table-chair",
            "des" : "A beautiful and smart table along with the chair. all are made of goof wood",
            "img" : "https://i.ibb.co/82kRjDd/study-table.png",
            "price" : "650"
        },

    ]
  return (
    <div className="mx-[5%] my-10">
        <h2 className='text-3xl font-medium'>Newly Arrived products</h2>
        <p className='text-black/50 mt-2'>See our lateast products and buy ASAP before Sold out</p>
        <div className='mt-12 flex flex-wrap gap-10 justify-center'>
        {
            products.map(product =>
                <div className="w-[310px] bg-slate-200 flex flex-col justify-center items-center rounded-[10px] shadow-md">
                    <div className='w-[200px] h-[300px] flex items-center justify-center'>
                        <img className='w-full' src={product.img} alt="" />
                    </div>
                    <div className="bg-slate-50 w-full px-3 rounded-b-[10px]">
                        <p className='text-sm font-bold pt-3 text-green-800'>${products[0].price}</p>
                        <h4 className='text-base capitalize font-medium text-black/50'>{products[0].name}</h4>
                        <p className='text-sm mt-2 text-black/70'>{(products[0].des).lenght >70 ? (products[0].des).slice(0,70) : products[0].des}</p>
                        <div className="flex gap-x-3">
                            <button className='my-4 text-sm bg-black text-white px-6 py-2 rounded-md'>Buy Now</button>
                            <button className='my-4 text-sm bg-green-700 text-white px-4 py-2 rounded-md'>view details</button>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
    </div>
  )
}

export default AdvertiseItems