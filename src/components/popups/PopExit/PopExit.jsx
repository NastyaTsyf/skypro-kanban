import { Link, useNavigate } from 'react-router-dom';
import * as S from './PopExit.Styled';
import { appRoutes } from '../../../lib/appRoutes';
import { useUser } from '../../../hooks/useUser';

function PopExit() {
    const {logout} = useUser
    const navigate = useNavigate()

    const handleLogout = (e) => {
        e.preventDefault
        logout
        navigate(appRoutes.SIGNIN)
    }

    return (
    <S.StyledPopExit id="popExit">
        <S.PopExitContainer>
            <S.PopExitBlock>
                <S.PopExitTtl>
                    <h2>Выйти из аккаунта?</h2>
                </S.PopExitTtl>
                <S.PopExitForm id="formExit" action="#">
                    <S.PopExitFormGroup>
                        <S.PopExitYes onClick={handleLogout} id="exitYes">Да, выйти</S.PopExitYes>
                        <Link to={appRoutes.MAIN}>
                            <S.PopExitNo id="exitNo">Нет, остаться </S.PopExitNo>
                        </Link>
                    </S.PopExitFormGroup>
                </S.PopExitForm>
            </S.PopExitBlock>
        </S.PopExitContainer>
    </S.StyledPopExit>
    )
}

export default PopExit