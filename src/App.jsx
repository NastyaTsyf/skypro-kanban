import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import PopExit from './components/popups/PopExit/PopExit'
import PopNewCard from './components/popups/PopNewCard/PopNewCard'
import PopBrowse from './components/popups/PopBrowse/PopBrowse'
import MainContent from './components/Main/MainContent/MainContent'
import Column from './components/Column/Column'
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
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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
        <PopNewCard />
        <PopBrowse />
        {
          //<!-- pop-up end-->
        }
        <Header addCard={addCard} />
        {isLoading ? (<div>Загрузка...</div>) : (<MainContent>
          {statusList.map((status) =>
            <Column
              name={status}
              key={status}
              cardList={cards.filter((card) => card.status === status)} />)}
        </MainContent>)}

      </div>

      <script src="js/script.js"></script>
    </>
  )
}

export default App