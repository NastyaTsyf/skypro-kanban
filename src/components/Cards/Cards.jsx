import * as S from "./Cards.Styled"

function Cards({ children }) {
    return (
        <S.StyledCards>
            {children}
        </S.StyledCards>
    )
}

export default Cards

