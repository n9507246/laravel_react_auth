import { createContext, useContext, useState } from "react";

const AuthContext = createContext()
export const AuthContextProvider = ({children}) => {
    
    const [dataUser, setDataUser] = useState({ name: 'ass hole', email: 'ass@hole'})
    const [token, _setToken] = useState(
        localStorage.getItem('ACCESS_TOKEN')
    )
    
    const setToken = (token) => {
        _setToken(token)
        if(token) localStorage.setItem('ACCESS_TOKEN', token)
        else localStorage.removeItem('ACCESS_TOKEN')
    }

    const setDataCurrendUser = ({userData, token}) => {
        setDataUser(userData)
        setToken(token)
    }

    const removeCurrentUser = () => {
        setDataUser(null)
        setToken(null)
    }

    return(
        <AuthContext.Provider value={{
            data: dataUser,
            dataUser,
            token, 
            setToken,
            setUser: setDataUser,
            setDataCurrendUser,
            removeCurrentUser,
            get isAuthenticate() {
                return this.token !== null
            }
        }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext)