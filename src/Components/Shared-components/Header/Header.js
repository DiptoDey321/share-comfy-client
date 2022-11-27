import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../Authentication/Authentication'

function Header() {
  const { user , logOut } = useContext(AuthContext)
  const handleLogout = () =>{
    logOut()
    .then(()=>{})
    .catch(error => console.log(error))
  }
  return (
    <div>
      <nav>
        <header className='flex justify-between px-10 items-center py-5 border-b'>
          <div className="logo">
            <Link to='/'><img className='w-[300px]' src="https://i.ibb.co/31kB57B/logo.png" alt="" srcSet="" /></Link>
          </div>
          <div className="others-menu">
            <ul className='text-lg flex gap-x-8 font-medium mr-5 text-black/70'>
              <li><Link>Home</Link></li>
              <li><Link>About Us</Link></li>
              <li><Link>Blog</Link></li>
              
                {
                  user ?<li> <Link to='/dashboard'>Dashboard</Link>  </li>: ''
                }
             
                <li> 
                {
                  user ? <button onClick={handleLogout} >Logout</button> : <button><Link to='/login'>Login</Link></button> 
                 } 
                </li>
            </ul>
          </div>
        </header>
      </nav>
    </div>
  )
}

export default Header