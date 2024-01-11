import classes from './styles.module.css'
import { Link } from "react-router-dom"

export default function (){
    return (
        <div className={classes.registration}>
            <h1>Регистрация</h1>
            <form className={classes.registrationForm} onSubmit={()=>{console.log('reg')}}>
        
                <div className={classes.registrationForm__field}>
                    <label>Имя</label>
                    <input type='text' placeholder="John Doe"/>
                </div>

                <div className={classes.registrationForm__field}>
                    <label>Email</label>
                    <input type='email' placeholder="JohnDoe@example.com"/>
                </div >

                <div className={classes.registrationForm__field}>
                    <label>Пароль</label>
                    <input type='password'/>
                </div>

                <div className={classes.registrationForm__field}>
                    <label>Подтверждение пароля</label>
                    <input type='password'/>
                </div>

                <div className={classes.registrationForm__controlArea}>
                    <button  className={classes.controlArea__btnSunmit} onClick={()=>{console.log('reg')}}>Регистрация</button>
                    <Link className={classes.controlArea__authLink}  to='/login'>Вход</Link>
                </div> 
                

            </form>
            
        </div>
    )
}