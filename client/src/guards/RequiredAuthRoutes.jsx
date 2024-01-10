import { Outlet } from "react-router-dom";
import { Navigate} from 'react-router-dom'

export default function(){

    const user = {
        data:  localStorage.getItem('TOKEN'),
        get isAuthenticate() {
            return this.data !== null
        } 
    }
    
    if(user.isAuthenticate) return renderGuardComponents() 
    else return redirectToLoginPage()
}

const renderGuardComponents = () => <Outlet/>
const redirectToLoginPage = () => <Navigate to='/login'/>
