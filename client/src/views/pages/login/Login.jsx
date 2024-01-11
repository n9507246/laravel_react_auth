import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "@contexts/authContext"
import { useRef, useState } from "react"
import API from "@axiosClient"
import classes from './style.module.css'

export default function (){     

    const navigate = useNavigate()
    const [err, setErr] = useState({})
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
            .catch((error)=>{
                console.error('aaaaaa', error)
                console.error('err',error.response.data.errors)
                console.error('xxxxxxxx',[{email: [error.response.data.error]}])
                
                // if(error.response.status == 401) setErr({email: [error.response.data.error]})
                if(error.response.status == 422) setErr(error.response.data.errors)
                console.log('err', err)
            })

        
    }

    return (
        <div className={classes.login}>
            <h1>Вход</h1>
            {/* <pre>
                {err.map((e)=> <div>{e.key}: {e.value}</div>)}
            </pre> */}
            <form className={classes.loginForm} onSubmit={login}>
        
                <div className={classes.loginForm__field}>
                    <label>Email</label>
                    <input ref={emailRef} type='email' placeholder="JohnDoe@example.com"/>
                    { err.email !== undefined && <div className={classes.field__error}>{err.email[0]}</div> }
                </div>

                <div className={classes.loginForm__field}>
                    <label>Пароль</label>
                    <input ref={passwordRef} type='password'/>
                    {err.password !== undefined && <div className={classes.field__error}>{err.password[0]}</div>}
                </div>

                <div className={classes.loginForm__controlArea}>
                    <button  className={classes.controlArea__btnSunmit} onClick={login}>Вход</button>
                    <Link className={classes.controlArea__regLink}  to='/registration'>Регистрация</Link>
                </div>
                

            </form>
            
            
        </div>
    )
}