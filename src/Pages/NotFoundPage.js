import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div>
       <div className="flex items-center justify-center w-full h-screen">
        <div className="flex flex-col items-center justify-center">
                <img className='w-[35%] mb-0 pb-0' src="https://i.ibb.co/YBhdCgx/404page.png" alt="" srcSet="" />
                <h2 className='text-[100px] font-mono text-lime-600 text-center mt-0 pt-0 leading-none'>404</h2>
                <button className='px-5 py-2 bg-cyan-600 text-white font-semibold rounded mt-3'>
                    <Link to="/">
                        Back to Home
                    </Link>
                </button>
            </div>
       </div>
    </div>
  )
}

export default NotFoundPage