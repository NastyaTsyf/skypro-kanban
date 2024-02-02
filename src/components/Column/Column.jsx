import Cards from "../Cards/Cards"
import CardsItem from "../CardsItem/CardsItem"

function Column({ name, cardList }) {
    return (
        <div className="main__column column">
            <div className="column__title">
                <p>{name}</p>
            </div>
            <Cards>
                {cardList.map((card) => <CardsItem topic={card.theme} title={card.title} date={card.date} key={card.id} />)}

                {/*<CardsItem />
                <CardsItem />
                <CardsItem />
                <CardsItem />*/}
            </Cards>
        </div>
    )
}

export default Column