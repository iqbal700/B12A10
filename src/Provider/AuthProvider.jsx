import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';


export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

const registerwithEmailPass = (email, pass) => {
  
  return createUserWithEmailAndPassword(auth, email, pass)

}

 const handlegoogleSignIn = () => {

    return signInWithPopup(auth, googleProvider )
 }


 useEffect(() => {
   const unSubscribe = onAuthStateChanged(auth, (currentuser) => {

       setUser(currentuser);
       setLoading(false)
   })
    return ()=> {
       unSubscribe()
    }
 }, [])



  const authData =  {
        registerwithEmailPass,
        user,
        setUser,
        handlegoogleSignIn,
        loading
       
  }

  return <AuthContext value={authData}>
      {children}
  </AuthContext>


};

export default AuthProvider;