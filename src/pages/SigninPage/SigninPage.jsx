import { Link } from "react-router-dom"
import { appRoutes } from "../../lib/appRoutes"
import { useState } from "react"
import { signIn } from "../../api";
import './SigninPage.css'
import { Wrapper } from "../../styled/common/common.styled";



function Signin ({ login }) {
    const [loginData, setLoginData] = useState({
        login: "",
        password: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        await signIn(loginData).then((data) => { login(data.user) })
    }

    return (
        <Wrapper>
            <div className="container-signin">
                <div className="modal">
                    <div className="modal__block">
                        <div className="modal__ttl">
                            <h2>Вход</h2>
                        </div>
                        <div className="modal__form-login" id="formLogIn" action="#">
                            <input
                                value={loginData.login}
                                onChange={handleInputChange}
                                className="modal__input"
                                type="text"
                                name="login"
                                id="formlogin"
                                placeholder="Эл. почта" />
                            <input
                                value={loginData.password}
                                onChange={handleInputChange}
                                className="modal__input"
                                type="password"
                                name="password"
                                id="formpassword"
                                placeholder="Пароль" />
                            <button onClick={handleLogin} className="modal__btn-enter _hover01" id="btnEnter">Войти</button>
                            <div className="modal__form-group">
                                <p>Нужно зарегистрироваться?</p>
                                <Link to={appRoutes.SIGNUP}>
                                    <span>Регистрируйтесь здесь</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Signin