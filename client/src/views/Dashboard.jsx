import { useNavigate } from "react-router-dom"
import { useAuth } from '@contexts/authContext';
export default function (){
    const navigate = useNavigate()

    const auth = useAuth()

    const logout = ()=> { 
        auth.logout()
        navigate('/login', {replace:true})
    }

    return (
        <>
            <h1>Dashboard</h1>
            {
                auth.dataUser !== null ? 
                    <div> Hi {auth.dataUser?.name} </div>
                    : <div> Download...</div>
            }
            <button onClick={logout}>Sing out</button>
        </>
    )
}