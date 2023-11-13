import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const ShareData = createContext(null)
const AuthContext = ({ children }) => {
    const [data, setData] = useState([]);
    const [user,setUser]=useState(null)
    useEffect(() => {

        fetch("http://localhost:5000/blog")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
       return signOut(auth)
    }


    const packageData = {
        data,
        createUser,
        user,
        setUser,
        logIn,
        logOut
    }


    return (
        <ShareData.Provider value={packageData} >
            {children}
        </ShareData.Provider>
    );
};

export default AuthContext;