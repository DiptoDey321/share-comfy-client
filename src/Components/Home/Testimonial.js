import React from 'react'

function Testimonial() {
  return (
    <div className='mx-[10%] my-20 bg-slate-200 rounded-[10px] h-[400px] flex items-center'>
        <div className="w-1/3 h-full flex justify-center">
            <img className='h-full' src="https://i.ibb.co/qWfYFjF/jean-philippe-delberghe-Ry9-WBo3qmoc-unsplash-removebg-preview-removebg-preview.png" alt="" srcset="" />
        </div>
        <div className="w-2/3 h-full flex flex-col justify-center">
            <div className="w-[90%]">
                <h3 className='text-3xl font-medium'>Testimonial</h3> 
                <p>Customer review</p>
                <p className='mt-1'>✰ ✰ ✰ ✰</p>
                <div className="mx-auto mt-5">
                    <p className='text-black/60 font-medium'>5-star rating is 100%.So amazing and beautiful. Low price and its having goof customer communication and helpfull enviroment. It's exactly as i was hopping. perfcet for my needs</p>
                    <p className='mt-3'><span>LINDA</span> ---- <span className='text-sm text-black/60'>Designer</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial