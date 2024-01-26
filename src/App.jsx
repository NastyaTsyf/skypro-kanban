import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import PopExit from './components/popups/PopExit/PopExit'
import RenderPopNewCard from './components/popups/PopNewCard/PopNewCard'
import PopBrowse from './components/popups/PopBrowse/PopBrowse'
import Main from './components/Main/Main/Main'
import Column from './components/Main/Column/Column'


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
          <Column name={"Без статуса"} />
          <Column name={"Нужно сделать"} />
          <Column name={"В работе"} />
          <Column name={"Тестирование"} />
          <Column name={"Готово"} />
        </Main>
      </div>

      <script src="js/script.js"></script>
    </>
  )
}

export default App