import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "@contexts/authContext"
import API from "@axiosClient"
import useFormData from '@hooks/useFormData'
import MyInput from '@UI/Myinput/MyInput'
import classes from './style.module.css'

export default function (){     

    const navigate = useNavigate()
    const loginData = useFormData()
    const auth = useAuth()

    const loginFormHandler = (ev)=> {
        ev.preventDefault()
        API.post('/auth/login', loginData.getData())
            .then((responce)=>{
                // console.log('res', responce )
                auth.setDataCurrendUser({
                    userData : responce.data.user_data,
                    token : responce.data.access_token
                })
                navigate('/', {replace:true})
            })
            .catch((error)=>{
                console.log('error',error)
                if(error.response.status == 422) loginData.setError(error.response.data.errors)
            })

        
    }

    return (
        <div className={classes.login}>
            <h1>Вход</h1>

            <form className={classes.loginForm} onSubmit={loginFormHandler}>
                
                <MyInput label='Email' name='email' type='text' placeholder='JohnDoe@example.com' bindData={loginData} />
                <MyInput label='Пароль' name='password' type='text' bindData={loginData}/>      

                <div className={classes.loginForm__controlArea}>
                    <button  className={classes.controlArea__btnSunmit} onClick={loginFormHandler}>Вход</button>
                    <Link className={classes.controlArea__regLink}  to='/registration'>Регистрация</Link>
                </div>
                

            </form>
            
            
        </div>
    )
}