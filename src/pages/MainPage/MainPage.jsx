import { useEffect } from 'react'
import Header from '../../components/Header/Header'
import MainContent from '../../components/Main/MainContent/MainContent'
import Column from '../../components/Column/Column'
import * as S from './MainPage.Styled';
import { Outlet } from 'react-router-dom'
import { useUser } from '../../hooks/useUser';
import { useTasks } from '../../hooks/useTasks';

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function MainPage() {
  const {user} = useUser()
  const {getTodosList} = useTasks()
  const {cards} = useTasks()
  const {isLoading} = useTasks()
  
  useEffect(() => {
    getTodosList()
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

