import { Link, useNavigate } from "react-router-dom"
import { appRoutes } from "../../lib/appRoutes"
import "./SigninPage.css"
import { useState } from "react"
import { signIn } from "../../api"
import { useUser } from "../../hooks/useUser"

function Signin() {
    const {login} = useUser()
    const navigate = useNavigate()

    const [loginData, setLoginData] = useState({
        login: '',
        password: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target; // Извлекаем имя поля и его значение

        setLoginData({
            ...loginData, // Копируем текущие данные из состояния
            [name]: value, // Обновляем нужное поле
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault()
        await signIn(loginData).then((data) => {
            login(data.user)
            navigate(appRoutes.MAIN)
        }) 
    }

    return (
        <div className="wrapper">
            <div className="container-signin">
                <div className="modal">
                    <div className="modal__block">
                        <div className="modal__ttl">
                            <h2>Вход</h2>
                        </div>
                        <form className="modal__form-login" id="formLogIn" action="#">
                            <input
                                className="modal__input"
                                value={loginData.login}
                                onChange={handleInputChange}
                                type="text" name="login"
                                id="formlogin"
                                placeholder="Эл. почта" />
                            <input
                                className="modal__input"
                                value={loginData.password}
                                onChange={handleInputChange}
                                type="password"
                                name="password"
                                id="formpassword"
                                placeholder="Пароль" />

                                <button onClick={handleLogin} className="modal__btn-enter _hover01" id="btnEnter">Войти</button>

                            <div className="modal__form-group">
                                <p>Нужно зарегистрироваться?</p>
                                <Link to={appRoutes.SIGNUP}>
                                    Регистрируйтесь здесь
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Signin