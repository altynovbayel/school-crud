import React from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase";


export const AuthContext = React.createContext({})

export const AuthProvider = ({children}) => {
  const [users, setUsers] = React.useState()
  const [loading, setLoading] = React.useState(true)
  
  React.useEffect(() => {
    const Listen = onAuthStateChanged(auth, user => {
      if (user) {
        setLoading(false)
        setUsers({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL || '',
          id: user.uid,
        })
      }
    })
    return () => Listen()
  }, [])
  
  const value = {
    users,
    loading
  }
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}