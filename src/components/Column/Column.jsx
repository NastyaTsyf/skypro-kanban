
import Cards from "../Cards/Cards"
import CardsItem from "../CardsItem/CardsItem"
import * as S from './Column.Styled';

function Column({ name, cardList }) {
    return (
        <S.StyledColumn>
            <S.ColumnTitle>
                <p>{name}</p>
            </S.ColumnTitle>
            <Cards>
                {cardList.map((card) => <CardsItem topic={card.theme} title={card.title} date={card.date} key={card.id} id={card.id}/>)}
            </Cards>
        </S.StyledColumn>
    )
}

export default Column