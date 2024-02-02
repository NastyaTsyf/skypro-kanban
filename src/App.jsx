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
  const [count, setCount] = useState(0)
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
        <Header />
        <Main>
          {statusList.map((status) =>
            <Column
              name={status}
              key={status}
              cardList={cardList.filter((card) => card.status === status)} />)}
          {
            //<Column name={"Без статуса"} />
            //<Column name={"Нужно сделать"} />
            //<Column name={"В работе"} />
            //<Column name={"Тестирование"} />
            //<Column name={"Готово"} />
          }
        </Main>
      </div>

      <script src="js/script.js"></script>
    </>
  )
}

export default App