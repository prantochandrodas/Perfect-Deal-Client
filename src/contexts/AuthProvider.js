import { createContext } from "react";

import { createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import app from "../firebase/firebase-config";
export const AuthContext=createContext();
const auth=getAuth(app);
const AuthProvider = ({children}) => {

    // create user with email and password
    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password);
    }
    const user={
        disPlay:'hi'
    }

  const authInfo={user,createUser}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;