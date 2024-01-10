import { useNavigate } from "react-router-dom"

export default function (){     
    const navigate = useNavigate()
    return (
        <>
            Login
            <button onClick={()=> {localStorage.setItem('TOKEN', 123); navigate('/', {replace:true})}}>Sing in</button>
        </>
    )
}