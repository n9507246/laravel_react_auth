import { Navigate } from 'react-router-dom'
import { Outlet } from "react-router-dom";
import { useAuth } from '@contexts/authContext';


export default function(){

    const user = useAuth()

    if(user.isAuthenticate) return redirectToDashboard()  
    else return renderGuestsComponents()
 
}

const renderGuestsComponents = () => <Outlet/>
const redirectToDashboard = () => <Navigate to='/dashboard'/>