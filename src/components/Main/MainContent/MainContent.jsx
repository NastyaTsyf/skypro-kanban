import { Container } from "../../../styled/common/common.styled"
import * as S from './MainContent.Styled';

function MainContent({children}) {
    return (
        <S.Main>
            <Container>
                <S.MainBlock>
                    <S.StyledMainContent>
                        {children}
                    </S.StyledMainContent>
                </S.MainBlock>
            </Container>
        </S.Main>
    )
}

export default MainContent

