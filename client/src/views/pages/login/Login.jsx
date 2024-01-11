import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "@contexts/authContext"
import { useRef } from "react"
import API from "@axiosClient"
import classes from './style.module.css'

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
                // console.log('res', responce )
                auth.setDataCurrendUser({
                    userData : responce.data.user_data,
                    token : responce.data.token
                })
                navigate('/', {replace:true})
            })
            .catch((error)=>{console.error('err',error)})

        
    }

    return (
        <div className={classes.login}>
            <h1>Вход</h1>
            <form className={classes.loginForm} onSubmit={login}>
        
                <div className={classes.loginForm__field}>
                    <label>Email</label>
                    <input ref={emailRef} type='email' placeholder="JohnDoe@example.com"/>
                </div>

                <div className={classes.loginForm__field}>
                    <label>Пароль</label>
                    <input ref={passwordRef} type='password'/>
                </div>

                <div className={classes.loginForm__controlArea}>
                    <button  className={classes.controlArea__btnSunmit} onClick={login}>Вход</button>
                    <Link className={classes.controlArea__regLink}  to='/registration'>Регистрация</Link>
                </div>
                

            </form>
            
            
        </div>
    )
}