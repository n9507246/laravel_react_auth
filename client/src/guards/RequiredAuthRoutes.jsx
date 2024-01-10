import { Outlet } from "react-router-dom";
import { Navigate} from 'react-router-dom'
import { useAuth } from '@contexts/authContext';

export default function(){

    const user = useAuth()

    if(user.isAuthenticate) return renderGuardComponents() 
    else return redirectToLoginPage()
}

const renderGuardComponents = () => <Outlet/>
const redirectToLoginPage = () => <Navigate to='/login'/>
