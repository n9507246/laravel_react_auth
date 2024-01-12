import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "@contexts/authContext"
import API from "@axiosClient"
import useFormData from '@hooks/useFormData'
import MyInput from '@UI/Myinput/MyInput'
import classes from './style.module.css'

export default function (){     

    const navigate = useNavigate()
    const formData = useFormData()
    const auth = useAuth()

    const login = (ev)=> {
        ev.preventDefault()
        API.post('/auth/login', formData.getData())
            .then((responce)=>{
                // console.log('res', responce )
                auth.setDataCurrendUser({
                    userData : responce.data.user_data,
                    token : responce.data.access_token
                })
                navigate('/', {replace:true})
            })
            .catch((error)=>{
                if(error.response.status == 422) formData.setError(error.response.data.errors)
            })

        
    }

    return (
        <div className={classes.login}>
            <h1>Вход</h1>

            <form className={classes.loginForm} onSubmit={login}>
                
                <MyInput label='Email' name='email' type='text' placeholder='JohnDoe@example.com' data={formData} />
                <MyInput label='Пароль' name='password' type='text' data={formData}/>      

                <div className={classes.loginForm__controlArea}>
                    <button  className={classes.controlArea__btnSunmit} onClick={login}>Вход</button>
                    <Link className={classes.controlArea__regLink}  to='/registration'>Регистрация</Link>
                </div>
                

            </form>
            
            
        </div>
    )
}