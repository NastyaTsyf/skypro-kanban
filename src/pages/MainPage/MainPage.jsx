import { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import MainContent from '../../components/Main/MainContent/MainContent'
import Column from '../../components/Column/Column'
import * as S from './MainPage.Styled';
import { Outlet } from 'react-router-dom'
import { getTodos } from '../../api';
import { useUser } from '../../hooks/useUser';



const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function MainPage() {
  const [cards, setCards] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const {user} = useUser()
  useEffect(() => {
    getTodos({token: user.token}).then((todos) => {
      setCards(todos.tasks)
      setIsLoading(false)
    }).catch((error) => {alert(error)})
  }, [user]);

  return (
    <>
      <S.Wrapper>

        <Outlet></Outlet>

        <Header/>
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

