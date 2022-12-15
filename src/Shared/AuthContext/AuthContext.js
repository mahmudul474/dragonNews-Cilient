import React, { createContext, useEffect, useState } from 'react'
import {
    createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import app from '../../Firebase_Config/Firebase'

export const UserContext = createContext()
const auth = getAuth(app)

const AuthContext = ({ children }) => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)


const createuser=(email,password)=>{
return createUserWithEmailAndPassword(auth,email,password)
}

const  login=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

  const googlelogin = (provaider) => {
    setLoading(true)
    return signInWithPopup(auth, provaider)
  }



  const updateUserProfile=(profile)=>{

    return updateProfile(auth.currentUser,profile)

  }


  const logout = () => {
setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curentUSer) => {
      setUser(curentUSer)
      setLoading(false)
    })
    return () => {
      unsubscribe()

    }
  }, [])

  const data = {
    googlelogin,
    createuser,
    user,
    updateUserProfile,
    logout,
    login,
    loading,
  }
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

export default AuthContext
