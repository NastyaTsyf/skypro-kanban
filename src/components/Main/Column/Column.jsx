import Cards from "../Cards/Cards"
import CardsItem from "../CardsItem/CardsItem"

function Column({name}) {
    return (
        <div className="main__column column">
            <div className="column__title">
                <p>{name}</p>
            </div>
            <Cards>
            <CardsItem/>
                <CardsItem/>
                <CardsItem/>
                <CardsItem/>
                <CardsItem/>
            </Cards>
        </div>
    )
}

export default Column