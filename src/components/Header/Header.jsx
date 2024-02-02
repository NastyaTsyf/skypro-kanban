
import { useState } from 'react';
import PopUserSet from "../popups/PopUserSet/PopUserSet"

function Header({addCard}) {
    const [isOpened, setIsOpened] = useState(false)
    function togglePopup() {
        setIsOpened((prev) => !prev)
    }
    return <header className="header">
        <div className="container">
            <div className="header__block">
                <div className="header__logo _show _light">
                    <a href="" target="_self"><img src="/logo.png" alt="logo"></img> </a>
                </div>
                <div className="header__logo _dark">
                    <a href="" target="_self"><img src="/logo_dark.png" alt="logo"></img></a>
                </div>
                <nav className="header__nav">
                    <button className="header__btn-main-new _hover01" id="btnMainNew" onClick={addCard}>Создать новую задачу</button>
                    <div className="header__user _hover02" onClick={togglePopup}>Ivan Ivanov</div>
                    {isOpened && (<PopUserSet />)}
                </nav>
            </div>
        </div>
    </header>
}

export default Header