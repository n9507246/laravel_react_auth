import { Navigate } from 'react-router-dom'
import { Outlet } from "react-router-dom";


export default function(){
   
    const user = {
        data:  localStorage.getItem('TOKEN'),
        get isAuthenticate() {
            return this.data !== null
        } 
    }
    
    if(user.isAuthenticate) return redirectToDashboard()  
    else return renderGuestsComponents()
 
}

const renderGuestsComponents = () => <Outlet/>
const redirectToDashboard = () => <Navigate to='/dashboard'/>