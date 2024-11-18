import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/Firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from "axios";

export const ShareData = createContext(null)
// eslint-disable-next-line react/prop-types
const AuthContext = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState();
    const [user, setUser] = useState(null)
  
    useEffect(() => {
        setLoading(true)
       axios.get('http://localhost:5000/blogs')
       .then(res=>setData(res.data))
       setLoading(false)
    }, []);


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
        data,
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