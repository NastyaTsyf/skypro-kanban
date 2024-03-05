
import { useState } from 'react';
import PopUserSet from "../popups/PopUserSet/PopUserSet"
import * as S from './Header.styled';
import { Container } from '../../styled/common/common.styled';
import { Link } from 'react-router-dom';
import { appRoutes } from '../../lib/appRoutes';

function Header() {
    const [isOpened, setIsOpened] = useState(false)
    function togglePopup() {
        setIsOpened((prev) => !prev)
    }
    return <S.StyledHeader>
        <Container>
            <S.HeaderBlock>
                <S.HeaderLogo>
                    <a href="" target="_self"><img src="/logo.png" alt="logo"></img> </a>
                </S.HeaderLogo>
                <S.HeaderLogoDark>
                    <a href="" target="_self"><img src="/logo_dark.png" alt="logo"></img></a>
                </S.HeaderLogoDark>
                <S.HeaderNav>
                    <Link to={appRoutes.NEWCARD}>
                        <S.HeaderBtnMainNew id="btnMainNew" >Создать новую задачу</S.HeaderBtnMainNew>
                    </Link>
                    <S.HeaderUser onClick={togglePopup}>Ivan Ivanov</S.HeaderUser>
                    {isOpened && (<PopUserSet />)}
                </S.HeaderNav>
            </S.HeaderBlock>
        </Container>
    </S.StyledHeader>
}

export default Header