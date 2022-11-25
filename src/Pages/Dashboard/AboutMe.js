import React from 'react'

function AboutMe() {
  return (
    <div>
         <h2 className='text-2xl font-bold'> Hello , <span className='text-green-700'>Name of person</span></h2>
         <h2 className='text-2xl font-bold text-black/50 mt-3'>Welcome to Share-comfy dashbard </h2>

         <div className="flex items-center gap-x-10 mt-10">
            <p className=' text-lg font-medium'> Your Role :   
                <span> Admin</span>
            </p>
            <p className='text-lg'>Your status : verified</p>
         </div>
    </div>
  )
}

export default AboutMe