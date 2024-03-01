import { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import MainContent from '../../components/Main/MainContent/MainContent'
import Column from '../../components/Column/Column'
import * as S from './MainPage.Styled';
import { Outlet } from 'react-router-dom'
import { getTodos } from '../../api';



const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function MainPage({user}) {
  const [cards, setCards] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    getTodos({token: user.token}).then((todos) => {
      setCards(todos.tasks)
      setIsLoading(false)
    }).catch((error) => {alert(error)})
  }, [user]);

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
      <S.Wrapper>

        <Outlet></Outlet>

        <Header addCard={addCard} />
        {isLoading ? (<div>Загрузка...</div>) : (<MainContent>
          {statusList.map((status) =>
            <Column
              name={status}
              key={status}
              cardList={cards.filter((card) => card.status === status)} />)}
        </MainContent>)}

      </S.Wrapper>

      <script src="js/script.js"></script>
    </>
  )
}

