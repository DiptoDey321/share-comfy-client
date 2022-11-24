import { GoogleAuthProvider } from 'firebase/auth'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Authentication/Authentication'

function Register() {
 
    const [error, setError] = useState('')
    const [accept, setAccept] = useState(false)
    const {createUser,prodiverLogin,updateUserProfile} = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn =() =>{
        prodiverLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        }).catch(error => console.log(error))
    }

    const handleRegisterForm = (event) =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const photoUrl = form.photo.value
        const password = form.password.value

        createUser(email,password)
        .then(result => {
            const user = result.user
            console.log(user)
            setError("")
            form.reset();
            handleUpdateUserProfile(name,photoUrl)
        })
        .catch(error =>{
            setError(error.message)
        })  
    }

    const handleUpdateUserProfile = (name, photoUrl) =>{
        const profile = {
            displayname : name,
            photoURL : photoUrl
        }
        updateUserProfile(profile)
        .then(()=>{})
        .catch(error => console.log(error))
    }

    const termsHandler = (event) =>{
        setAccept(event.target.checked);
    }
  return (
    <div>
    <section className="bg-gray-50 pt-10 pb-48">
        <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-[30rem] xl:p-0 ">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Create and account
                    </h1>
                    <div className="flex justify-center">
                        <button onClick={handleGoogleSignIn} className='flex items-center gap-x-3 border pl-2 pr-3 py-1.5 rounded-md'>
                            <svg className='w-8 h-8' xmlns="http://www.w3.org/2000/svg"
                                aria-label="Google" role="img"
                                viewBox="0 0 512 512"><rect
                                width="512" height="512"
                                rx="15%"
                                fill="#fff"/><path fill="#4285f4" d="M386 400c45-42 65-112 53-179H260v74h102c-4 24-18 44-38 57z"/><path fill="#34a853" d="M90 341a192 192 0 0 0 296 59l-62-48c-53 35-141 22-171-60z"/><path fill="#fbbc02" d="M153 292c-8-25-8-48 0-73l-63-49c-23 46-30 111 0 171z"/><path fill="#ea4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55z"/>
                            </svg>
                            <span className='text-sm'>Register with Google</span>
                        </button>  
                              
                    </div>

                    <div className="flex justify-center">
                       <div className="">
                            <span>-----</span>
                            <span className='text-slate-600'> Or </span>
                            <span>-----</span>
                       </div>
                    </div>
                    <form onSubmit={handleRegisterForm} className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Full Name</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="henry haon" required=""/>
                        </div>
                        <div>
                            <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900">Photo Url</label>
                            <input type="text" name="photo" id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="paste photo url" required=""/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required=""/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input onClick={termsHandler} id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required=""/>
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="font-light text-gray-500">I accept the <Link className="font-medium text-primary-600 hover:underline" href="#">Terms and Conditions</Link></label>
                            </div>
                        </div>
                        <p className='text-sm text-red-700 font-bold'>{error}</p>
                        <button style={{ backgroundColor: accept ? 'blue' : ' gray' }} disabled={!accept} type="submit" className="w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <Link to='/login' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                        </p>
                    </form>
                </div>
            </div>
         </div>
        </section>
    </div>
  )
}

export default Register