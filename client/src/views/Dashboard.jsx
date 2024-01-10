import { useNavigate } from "react-router-dom"

export default function (){
    const navigate = useNavigate()
    return (
        <>
            Dashboard
            <button onClick={()=> {localStorage.clear('TOKEN'); navigate('/login', {replace:true})}}>Sing out</button>
        </>
    )
}