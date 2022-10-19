import { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({children}){
    
    const [token, setToken] = useState(null);
    const [imageUser, setImageUser] = useState("");
    const [update, setUpdate] = useState([]);
    const [updateCheck, setUpdateCheck] = useState([]);
    const [percentage, setPercentage] = useState(0);

    function percentageCalc( item ){

        const x = item.filter( (item) => item.done === true )

        const result = x.length / item.length;
        setPercentage(result.toFixed(2) * 100);

    }
    
    return(
        <AuthContext.Provider value={ { token, setToken, imageUser, setImageUser, update, setUpdate, updateCheck, setUpdateCheck, percentage, percentageCalc }} >
            {children}
        </AuthContext.Provider>
    );

}

export default AuthProvider;