import { createContext } from "react";

export const ShareData = createContext(null)
const AuthContext = ({ children }) => {
    const name = 'amar sonal bangla '


    const packageData = {
        name
    }


    return (
        <ShareData.Provider value={packageData} >
            {children}
        </ShareData.Provider>
    );
};

export default AuthContext;