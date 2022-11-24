import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from "../firebase/firebase-config";
export const AuthContext=createContext();
const auth=getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true);


    // create user with email and password
    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password);
    }

    const login=(email,password)=>{
         setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    
      //logout
      const logout=()=>{
         setLoading(true);
       return signOut(auth);
    }

  // ovserver 
  useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth,currentUser=>{
     
          setUser(currentUser);
          setLoading(false);
      });
      return()=>unsubscribe();
  },[]);

    //update profile
    const updateUserDetails=()=>{

    }
  

  const authInfo={user,createUser,login,logout}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;