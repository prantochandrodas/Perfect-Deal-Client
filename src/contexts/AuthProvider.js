import { createContext } from "react";

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from "../firebase/firebase-config";
export const AuthContext=createContext();
const auth=getAuth(app);
const AuthProvider = ({children}) => {

    // create user with email and password
    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password);
    }

    const login=(email,password)=>{
        // setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    
      //logout
      const logout=()=>{
        // setLoading(true);
       return signOut(auth);
    }
    //update profile
    const updateUserDetails=()=>{

    }
    const user={
        disPlay:'hi'
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