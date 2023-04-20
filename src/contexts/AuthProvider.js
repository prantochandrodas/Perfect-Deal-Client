import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from "../firebase/firebase-config";
export const AuthContext=createContext();
const auth=getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true);


    // create user with email and password
    const createUser=(email,password,role)=>{
       return createUserWithEmailAndPassword(auth,email,password,role);
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

  // google
    const createUserWithGoogle=(provider)=>{
      setLoading(true);
      return signInWithPopup(auth,provider);
    }

    //update user
    const updateUser = (userInfo) =>{
      console.log(userInfo);
        return updateProfile(auth.currentUser, userInfo);
    }

  const authInfo={user,createUser,login,logout,updateUser,loading,createUserWithGoogle}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;