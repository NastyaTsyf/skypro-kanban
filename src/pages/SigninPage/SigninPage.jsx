import { Link } from "react-router-dom"
import { appRoutes } from "../../lib/appRoutes"

function Signin({ login }) {
    return (
        <div className="wrapper">
            <div className="container-signin">
                <div className="modal">
                    <div className="modal__block">
                        <div className="modal__ttl">
                            <h2>Вход</h2>
                        </div>
                        <form className="modal__form-login" id="formLogIn" action="#">
                            <input className="modal__input" type="text" name="login" id="formlogin" placeholder="Эл. почта" />
                            <input className="modal__input" type="password" name="password" id="formpassword" placeholder="Пароль" />
                            <Link to={appRoutes.MAIN}>
                            <span onClick={login} className="modal__btn-enter _hover01" id="btnEnter">Войти</span>
                            </Link>
                            
                            <div className="modal__form-group">
                                <p>Нужно зарегистрироваться?</p>
                                <a href="signup.html">Регистрируйтесь здесь</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Signin