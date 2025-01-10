import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.init';
const provider = new GoogleAuthProvider();

export const AuthContext= createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    
    const createNewuser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn=()=>{
       return signInWithPopup(auth,provider)
    }
    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,currentUser=>{
             console.log('Current User', currentUser);
             setUser(currentUser);
             setLoading(false)
         })
         return ()=>{ 
             unSubscribe()
         }
     },[])
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }





  const authInfo={
    createNewuser,logOut,loginUser,user,loading,googleSignIn
  }




    return (
        <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;