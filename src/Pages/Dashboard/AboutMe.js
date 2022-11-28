import React, { useContext} from 'react'
import { AuthContext } from '../../Authentication/Authentication'

function AboutMe() {
  const { mngoUser } = useContext(AuthContext)
 
  // console.log(user);
  return (
    <div>
         <h2 className='text-2xl font-bold'> Hello , <span className='text-green-700'>{mngoUser?.displayName}</span></h2>
         <h2 className='text-2xl font-bold text-black/50 mt-3'>Welcome to Share-comfy dashbard </h2>

         <div className="flex items-center gap-x-10 mt-3">
            <p className=' text-lg font-medium text-black/60'> Your Role :   
                <span className='text-green-700 font-bold tracking-widest capitalize'> {mngoUser?.role}</span>
            </p>
         </div>
    </div>
  )
}

export default AboutMe