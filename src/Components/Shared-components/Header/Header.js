import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav>
        <header className='flex justify-between px-10 items-center py-5 border-b'>
          <div className="logo">
            <Link to='/'><img className='w-48' src="https://i.ibb.co/THXw8rZ/logo.webp" alt="" srcSet="" /></Link>
          </div>
          <div className="others-menu">
            <ul className='text-lg flex gap-x-8 font-medium mr-5 text-black/70'>
              <li></li>
              <li><Link to='/dashboard'>Dashboard</Link></li>
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