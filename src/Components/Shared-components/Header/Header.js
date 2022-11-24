import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav>
        <header className='flex justify-between px-10 items-center py-5'>
          <div className="logo">
            <img className='w-48' src="https://i.ibb.co/THXw8rZ/logo.webp" alt="" srcSet="" />
          </div>
          <div className="others-menu">
            <ul className='text-xl flex gap-x-5 font-medium mr-5'>
              <li></li>
              <li><Link>Blog</Link></li>
              <li> <Link to='/login'>Login</Link> </li>
            </ul>
          </div>
        </header>
      </nav>
    </div>
  )
}

export default Header