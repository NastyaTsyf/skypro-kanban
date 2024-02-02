import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import PopExit from './components/popups/PopExit/PopExit'
import RenderPopNewCard from './components/popups/PopNewCard/PopNewCard'
import PopBrowse from './components/popups/PopBrowse/PopBrowse'
import Main from './components/Main/Main/Main'
import Column from './components/Main/Column/Column'
import { cardList } from './data'

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function App() {
  const [cards, setCards] = useState(cardList)
  function addCard() {
    const newCard =
    {
      id: cards.length + 1,
      theme: "Web Design",
      title: "Новая задача",
      date: "30.10.23",
      status: "Без статуса",
    };
    setCards([...cards, newCard])
  }
  return (
    <>
      <div className="wrapper">
        {
          //<!-- pop-up start-->
        }
        <PopExit />
        <RenderPopNewCard />
        <PopBrowse />
        {
          //<!-- pop-up end-->
        }
        <Header addCard={addCard} />
        <Main>
          {statusList.map((status) =>
            <Column
              name={status}
              key={status}
              cardList={cards.filter((card) => card.status === status)} />)}
        </Main>
      </div>

      <script src="js/script.js"></script>
    </>
  )
}

export default App