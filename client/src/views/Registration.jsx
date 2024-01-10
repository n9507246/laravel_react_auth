import { Link } from "react-router-dom"

export default function (){
    return (
        <>
            <h1>Регистрация</h1>
            <form onSubmit={()=>{console.log('reg')}}>
        
                <div>
                    <label>Имя</label>
                    <input type='text' placeholder="John Doe"/>
                </div>

                <div>
                    <label>Email</label>
                    <input type='email' placeholder="JohnDoe@example.com"/>
                </div>

                <div>
                    <label>Пароль</label>
                    <input type='password'/>
                </div>

                <div>
                    <label>Подтверждение пароля</label>
                    <input type='password'/>
                </div>

                <p>
                    Уже есть аккаунт? <Link to='/login'>Вход</Link>
                </p>

                <button onClick={()=>{console.log('reg')}}>Зарегистрироваться</button>

            </form>
            
        </>
    )
}