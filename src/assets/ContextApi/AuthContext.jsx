import { createContext, useEffect, useState } from "react";

export const ShareData = createContext(null)
const AuthContext = ({ children }) => {
    const [data, setData] = useState([]);
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
    


    const packageData = {
        data
    }


    return (
        <ShareData.Provider value={packageData} >
            {children}
        </ShareData.Provider>
    );
};

export default AuthContext;