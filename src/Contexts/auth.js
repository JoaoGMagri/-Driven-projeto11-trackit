import { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({children}){
    
    const [token, setToken] = useState(null);
    const [imageUser, setImageUser] = useState("");
    const [update, setUpdate] = useState([]);
    
    return(
        <AuthContext.Provider value={ { token, setToken, imageUser, setImageUser, update, setUpdate }} >
            {children}
        </AuthContext.Provider>
    );

}

export default AuthProvider;