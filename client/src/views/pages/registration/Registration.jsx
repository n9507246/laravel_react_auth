import classes from './styles.module.css'
import { Link, useNavigate } from "react-router-dom"
import MyInput from '@UI/Myinput/MyInput'
import { useAuth } from "@contexts/authContext"

import useFormData from '@hooks/useFormData'

export default function (){

    const registrationData = useFormData()
    const auth = useAuth()
    const navigate = useNavigate()

    const registrationFormHandler = (e)=>{

        e.preventDefault();

        auth.registration('/auth/registration', registrationData.getData())
            .then(()=>{ navigate('/', {replace:true}) })
            .catch((error)=>{
                console.error('error',error)
                if(error.response.status == 422) registrationData.setError(error.response.data.errors)    
        })
        
    }
    return (
        <div className={classes.registration}>
            <h1>Регистрация</h1>
            <form className={classes.registrationForm} onSubmit={registrationFormHandler}>

                <MyInput label='Имя' name='name' type='text' placeholder='John Doe' bindData={registrationData}/>      
                <MyInput label='Email' name='email' type='text' placeholder='JohnDoe@example.com' bindData={registrationData} />
                <MyInput label='Пароль' name='password' type='password'  bindData={registrationData}/> 
                <MyInput label='Подтверждение пароля' name='password_confirmation' type='password' bindData={registrationData}/>

                <div className={classes.registrationForm__controlArea}>
                    <button  className={classes.controlArea__btnSunmit} onClick={registrationFormHandler}>Регистрация</button>
                    <Link className={classes.controlArea__authLink}  to='/login'>Вход</Link>
                </div> 
                

            </form>
            
        </div>
    )
}