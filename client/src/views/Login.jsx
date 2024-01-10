import { Link, useNavigate } from "react-router-dom"
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
            <h1>Вход</h1>
            <form onSubmit={login}>
        
                <div>
                    <label>Email</label>
                    <input type='email' placeholder="JohnDoe@example.com"/>
                </div>

                <div>
                    <label>Пароль</label>
                    <input type='password'/>
                </div>

                <p>
                    Еще не зарегистрированны? <Link to='/registration'>Регистрация</Link>
                </p>

                <button onClick={login}>Вход</button>

            </form>
            
            
        </>
    )
}