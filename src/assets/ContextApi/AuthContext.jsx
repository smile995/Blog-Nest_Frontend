import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/Firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const ShareData = createContext(null)
const AuthContext = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState();
    const [user, setUser] = useState(null)
    if (loading===true) {
        <p>loding</p>
    }
    useEffect(() => {

        fetch("http://localhost:5000/blog")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(true)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
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
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const packageData = {
        data,
        createUser,
        user,
        setUser,
        logIn,
        logOut,
        loading
    }


    return (
        <ShareData.Provider value={packageData} >
            {children}
        </ShareData.Provider>
    );
};

export default AuthContext;