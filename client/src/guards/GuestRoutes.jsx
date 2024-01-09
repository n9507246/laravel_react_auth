import { Navigate} from 'react-router-dom'
import { Outlet } from "react-router-dom";

export default function({children}){

    
    //const {currentUser} = getDataCurrentUser()    //получаем данные пользователя
    //if(currentUser.isAuthenticate)                //если пользователь авторизован 
    //  return renderGuardComponents()              //отривовываем защищеные компоненты
    //else                                          //если пользователь не авторизован
    //  return redirectToLoginPage()                //перенаправляем на страницу с авторизацией
    
    
    
    //const {currentUser} = useAuth()
    const currentUser = null
    
    //если пользователь 
    if(currentUser === null ) {
        return <Navigate to='/login'/>
    }
    else {
        if(children === undefined) return <Outlet/>
        else return children;
    }
}