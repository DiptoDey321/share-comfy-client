import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../Authentication/Authentication'

function Header() {
  const { user , logOut } = useContext(AuthContext)
  const[showmenu, setShowmenu] = useState(false)

  const handleLogout = () =>{
    logOut()
    .then(()=>{})
    .catch(error => console.log(error))
  }
  return (
    <div>
      <nav>
        <header className='flex justify-between px-4 md:px-10 items-center py-3 sm:py-2 border-b relative'>
          <div className="logo">
            <Link to='/'><img className='w-[120px] sm:w-[200px] md:w-[300px]' src="https://i.ibb.co/31kB57B/logo.png" alt="" srcSet="" /></Link>
          </div>
          <div className="others-menu bg-[#f3f3f3] sm:bg-transparent">
            <button onClick={()=>  setShowmenu(!showmenu)} className='sm:hidden'>
                <svg className='' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 11H11V12H25V11Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M29 18H7V19H29V18Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M25 25H11V26H25V25Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <ul className={`${showmenu ? 'mt-[68px] shadow-lg ':'-translate-y-full sm:translate-y-0 mt-0'} text-lg sm:text-sm md:text-lg gap-x-8 gap-y-4 font-medium mr-5 text-black/70 flex flex-col sm:flex-row items-center absolute sm:static text-black sm:bg-transparent w-full top-0 sm:mt-0 z-10 bg-[#f3f3f3] left-0 pb-5 sm:pb-0`}>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/blog'>Blog</Link></li>
              {
                user ?<li> <Link to='/dashboard'>Dashboard</Link>  </li>: ''
              }
              {
                user ?  <li>  <button onClick={handleLogout} >Logout</button>  </li>
                : 
                <li> <button><Link to='/login'>Login</Link></button> </li>
              }  
            </ul>
          </div>
        </header>
      </nav>
    </div>
  )
}

export default Header