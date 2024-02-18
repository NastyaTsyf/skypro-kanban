import * as S from './PopExit.Styled';

function PopExit() {
    return (<S.StyledPopExit id="popExit">
        <S.PopExitContainer>
            <S.PopExitBlock>
                <S.PopExitTtl>
                    <h2>Выйти из аккаунта?</h2>
                </S.PopExitTtl>
                <S.PopExitForm id="formExit" action="#">
                    <S.PopExitFormGroup>
                        <S.PopExitYes id="exitYes"><a href="modal/signin.html">Да, выйти</a> </S.PopExitYes>
                        <S.PopExitNo id="exitNo"><a href="main.html">Нет, остаться</a> </S.PopExitNo>
                    </S.PopExitFormGroup>
                </S.PopExitForm>
            </S.PopExitBlock>
        </S.PopExitContainer>
    </S.StyledPopExit>
    )
}

export default PopExit