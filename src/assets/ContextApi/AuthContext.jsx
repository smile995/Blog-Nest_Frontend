import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/Firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const ShareData = createContext(null)
// eslint-disable-next-line react/prop-types
const AuthContext = ({ children }) => {
    
    const [loading, setLoading] = useState();
    const [user, setUser] = useState(null)
   

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
        
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
        
    }


    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, user => {
            setUser(user)
            setLoading(false)
        })
        return () => {
            unSubscribe()
            setLoading(false)
        }
    }, [])

    const packageData = {
        
        createUser,
        user,
        setUser,
        logIn,
        logOut,
        loading,setLoading
    }


    return (
        <ShareData.Provider value={packageData} >
            {children}
        </ShareData.Provider>
    );
};

export default AuthContext;