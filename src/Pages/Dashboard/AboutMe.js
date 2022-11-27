import React, { useContext } from 'react'
import { AuthContext } from '../../Authentication/Authentication'

function AboutMe() {
  const { user } = useContext(AuthContext)
  // console.log(user);
  return (
    <div>
         <h2 className='text-2xl font-bold'> Hello , <span className='text-green-700'>{user?.displayName}</span></h2>
         <h2 className='text-2xl font-bold text-black/50 mt-3'>Welcome to Share-comfy dashbard </h2>

         <div className="flex items-center gap-x-10 mt-3">
            <p className=' text-lg font-medium text-black/60'> Your Role :   
                <span className='text-green-700 font-bold tracking-widest'> Admin</span>
            </p>
            <p className='text-lg flex items-center gap-x-3'>Your status : 
              <span className='flex items-center gap-x-3'>
                <span>verified</span>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11L19.56 8.22004L19.9 4.54004L16.29 3.72004L14.4 0.540039L11 2.00004L7.6 0.540039L5.71 3.72004L2.1 4.53004L2.44 8.21004L0 11L2.44 13.78L2.1 17.47L5.71 18.29L7.6 21.47L11 20L14.4 21.46L16.29 18.28L19.9 17.46L19.56 13.78L22 11ZM9 16L5 12L6.41 10.59L9 13.17L15.59 6.58004L17 8.00004L9 16Z" fill="#5566FF"/>
                </svg>    
              </span>
            </p>
         </div>
    </div>
  )
}

export default AboutMe