import { Navigate } from 'react-router-dom'
import { Outlet } from "react-router-dom";


export default function(){
   
    const user = {isAuthenticate:true}
    
    if(user.isAuthenticate) return redirectToDashboard()  
    else return renderGuestsComponents()
 
}

const renderGuestsComponents = () => <Outlet/>
const redirectToDashboard = () => <Navigate to='/dashboard'/>