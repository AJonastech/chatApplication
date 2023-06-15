import { createContext, useState, useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
export const Auth = createContext();


function AuthContext({children}) {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        user: null,
        userSignedIn : false
    });
    useEffect(()=>{
         onAuthStateChanged(auth, (user)=>{
            if(user){
                setUserData({
                    ...userData, 
                    user:user,
                    userSignedIn: true,
                })
            }else{
           navigate("/signin")
            }
                })
    },[])
    return (
        <Auth.Provider value={userData}>
          {children}
        </Auth.Provider>
    )
}

export default AuthContext
