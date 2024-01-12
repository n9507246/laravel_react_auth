import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "@contexts/authContext"
import useFormData from '@hooks/useFormData'
import MyInput from '@UI/Myinput/MyInput'
import classes from './style.module.css'

export default function (){     

    const navigate = useNavigate()
    const loginForm = useFormData()
    const auth = useAuth()

    const loginFormHandler = (ev)=> {
        
        ev.preventDefault()
        
        auth.login('/auth/login', loginForm.getData())
            .then(() => navigate('/', {replace:true}))
            .catch((error)=>{
                if(error.response.status == 422) loginForm.setError(error.response.data.errors)
            })
    }

    return (
        <div className={classes.login}>
            <h1>Вход</h1>

            <form className={classes.loginForm} onSubmit={loginFormHandler}>
                
                <MyInput label='Email' name='email' type='text' placeholder='JohnDoe@example.com' bindData={loginForm} />
                <MyInput label='Пароль' name='password' type='password' bindData={loginForm}/>      

                <div className={classes.loginForm__controlArea}>
                    <button  className={classes.controlArea__btnSunmit} onClick={loginFormHandler}>Вход</button>
                    <Link className={classes.controlArea__regLink}  to='/registration'>Регистрация</Link>
                </div>
                

            </form>
            
            
        </div>
    )
}