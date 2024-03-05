import { Link, useNavigate } from "react-router-dom"
import "./SignupPage.css"
import { appRoutes } from "../../lib/appRoutes"
import { useState } from "react";
import { signUp } from "../../api";
import { useUser } from "../../hooks/useUser";

function Signup() {
    const {login} = useUser()
    const navigate = useNavigate()
    const [registerData, setRegisterData] = useState({
        login: '',
        name: '',
        password: ''
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target; // Извлекаем имя поля и его значение

        setRegisterData({
            ...registerData, // Копируем текущие данные из состояния
            [name]: value, // Обновляем нужное поле
        });
    };
    const handleRegister = async (e) => {
        e.preventDefault()
        await signUp(registerData).then((data) => {
            login(data.user)
            navigate(appRoutes.MAIN)
        })
    }

    return (
        <div className="wrapper">
            <div className="container-signup">
                <div className="modal">
                    <div className="modal__block">
                        <div className="modal__ttl">
                            <h2>Регистрация</h2>
                        </div>
                        <form className="modal__form-login" id="formLogUp" action="#">
                            <input
                                className="modal__input first-name"
                                value={registerData.name}
                                onChange={handleInputChange}
                                type="text"
                                name="name"
                                id="first-name"
                                placeholder="Имя" />
                            <input
                                className="modal__input login"
                                value={registerData.login}
                                onChange={handleInputChange}
                                type="text"
                                name="login"
                                id="loginReg"
                                placeholder="Эл. почта" />
                            <input
                                className="modal__input password-first"
                                value={registerData.password}
                                onChange={handleInputChange}
                                type="password"
                                name="password"
                                id="passwordFirst"
                                placeholder="Пароль" />
                            <button className="modal__btn-signup-ent _hover01" onClick={handleRegister} id="SignUpEnter">Зарегистрироваться</button>
                            <div className="modal__form-group">
                                <p>Уже есть аккаунт?  <Link to={appRoutes.SIGNIN}>Войдите здесь</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Signup