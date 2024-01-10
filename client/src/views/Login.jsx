import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "@contexts/authContext"
import { useRef } from "react"
import API from "@axiosClient"

export default function (){     

    const navigate = useNavigate()
    const auth = useAuth()
    
    const emailRef = useRef()
    const passwordRef = useRef() 
    
    const login = (ev)=> {
        ev.preventDefault()
        const formData = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        API.post('/auth/login', formData)
            .then((responce)=>{
                console.log('res', responce )
                auth.setDataCurrendUser({
                    userData : { name: 'ass hole', email: 'ass@hole'},
                    token : responce.data.access_token
                })
                navigate('/', {replace:true})
            })
            .catch((error)=>{console.error('err',error)})

        
    }

    return (
        <>
            <h1>Вход</h1>
            <form onSubmit={login}>
        
                <div>
                    <label>Email</label>
                    <input ref={emailRef} type='email' placeholder="JohnDoe@example.com"/>
                </div>

                <div>
                    <label>Пароль</label>
                    <input ref={passwordRef} type='password'/>
                </div>

                <p>
                    Еще не зарегистрированны? <Link to='/registration'>Регистрация</Link>
                </p>

                <button onClick={login}>Вход</button>

            </form>
            
            
        </>
    )
}