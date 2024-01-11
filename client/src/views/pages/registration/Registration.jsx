import classes from './styles.module.css'
import { Link } from "react-router-dom"
import MyInput from '@UI/Myinput/MyInput'

import useForm from '@hooks/useForm'

export default function (){

    const {getFormData, setFormField} = useForm()

    const registration = (e)=>{
        e.preventDefault();
        console.log(getFormData())
    }
    return (
        <div className={classes.registration}>
            <h1>Регистрация</h1>
            <form className={classes.registrationForm} onSubmit={registration}>

                <MyInput label='Имя' placeholder='John Doe' data={setFormField('name')}/>      
                <MyInput label='Email' placeholder='JohnDoe@example.com' data={setFormField('email')}/>
                <MyInput label='Пароль' data={setFormField('password')}/>
                <MyInput label='Подтверждение пароля' data={setFormField('password_confrmation')}/>

                <div className={classes.registrationForm__controlArea}>
                    <button  className={classes.controlArea__btnSunmit} onClick={() => 'asd'}>Регистрация</button>
                    <Link className={classes.controlArea__authLink}  to='/login'>Вход</Link>
                </div> 
                

            </form>
            
        </div>
    )
}