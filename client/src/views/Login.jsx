import { useNavigate } from "react-router-dom"
import { useAuth } from "@contexts/authContext"

export default function (){     
    const navigate = useNavigate()
    const auth = useAuth()

    const login = ()=> {
        auth.setDataCurrendUser({
            userData : { name: 'ass hole', email: 'ass@hole'},
            token : 'asdsadsasadasdasdsa'
        })
        navigate('/', {replace:true})
    }

    return (
        <>
            Login
            <button onClick={login}>Sing in</button>
        </>
    )
}