import React, { createContext, useEffect, useState } from 'react'
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app)

function Authentication({children}) {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [mngoUser, SetMngoUser] = useState([])

  
  useEffect(()=>{
    fetch(`https://share-comfy-server.vercel.app/user/${user?.email}`)
    .then(res => res.json())
    .then(data =>SetMngoUser(data))
  },[user?.email])

  console.log(mngoUser);

  const prodiverLogin = (provider) =>{
    setLoading(true);
    return signInWithPopup(auth,provider);
  }

  const createUser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const signIn =(email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }

  const updateUserProfile = (profile) =>{
    return updateProfile(auth.currentUser, profile)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
      // console.log("user inside state change", currentUser);
      setUser(currentUser)
      setLoading(false);
    });
    return()=>{unsubscribe()} 
  },[])

  const logOut = () =>{
    setLoading(true);
    return signOut(auth)
  }
  // const user = {display : "Dipto"}
  const authInfo = {user, prodiverLogin ,logOut ,createUser, signIn, loading ,updateUserProfile,mngoUser}
  return (

    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default Authentication