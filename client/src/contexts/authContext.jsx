import { createContext, useContext, useEffect, useState } from "react";
import API from "@axiosClient"

const AuthContext = createContext()
export const AuthContextProvider = ({children}) => {
    
    const [dataUser, setDataUser] = useState(null)
    const [token, setToken] = useState(
        localStorage.getItem('ACCESS_TOKEN')
    )
    
    useEffect(()=>{
        API.post('/auth/me', {})
            .then((response) => { setDataUser(response.data) })
            .catch((error)=>{
                // console.error('error',error)
            }) 
    }, [token])

    const login = (endpoint, data) => {
        return API.post(endpoint, data)
        .then((responce)=>{
            localStorage.setItem('ACCESS_TOKEN', responce.data.access_token)
            setToken(responce.data.access_token)
        })
    }

    const registration = (endpoint, data) => {
        return API.post(endpoint, data)
        .then((responce)=>{
            localStorage.setItem('ACCESS_TOKEN', responce.data.access_token)
            setToken(responce.data.access_token)
        })
    }

    const logout = () => {
        setDataUser(null)

        localStorage.removeItem('ACCESS_TOKEN')
        setToken(null)
    }

    return(
        <AuthContext.Provider value={{
            dataUser,
            token, 

            login,
            registration,
            logout,

            get isAuthenticate() {
                return this.token !== null
            }
        }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext)