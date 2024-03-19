import { useState } from "react"
import Calendar from "../../Calenadr/Calendar"
import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import { postTodo } from "../../../api";
import { useUser } from "../../../hooks/useUser";
import { useTasks } from "../../../hooks/useTasks";
import * as S from './PopNewCard.Styled';
import { Categories, CategoriesSubTtl, CategoriesThemeGreen, CategoriesThemeOrange, CategoriesThemePurple, CategoriesThemes, SubTtl } from "../../../styled/common/common.styled";

function PopNewCard() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        topic: '',
    })
    const { user } = useUser()
    const { getTodosList } = useTasks()

    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target; // Извлекаем имя поля и его значение

        setNewTask({
            ...newTask, // Копируем текущие данные из состояния
            [name]: value, // Обновляем нужное поле
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const taskData = {
            ...newTask, date: selectedDate
        }
        await postTodo(user, taskData).then(() => {
            getTodosList()
            navigate(appRoutes.MAIN)
        })
    }

    return (
        <S.StyledPopNewCard id="popNewCard">
            <S.PopNewCardContainer>
                <S.PopNewCardBlock>
                    <S.PopNewCardContent>
                        <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
                        <Link to={appRoutes.MAIN}>
                            <S.PopNewCardClose>&#10006;</S.PopNewCardClose>
                        </Link>
                        <S.PopNewCardWrap>
                            <S.PopNewCardForm id="formNewCard" action="#">
                                <S.FormNewBlock>
                                    <SubTtl htmlFor="formTitle" >Название задачи</SubTtl>
                                    <S.FormNewInput
                                        onChange={handleInputChange}
                                        value={newTask.title}
                                        type="text"
                                        name="title"
                                        id="formTitle"
                                        placeholder="Введите название задачи..."
                                        autoFocus>
                                    </S.FormNewInput>
                                </S.FormNewBlock>
                                <S.FormNewBlock>
                                    <SubTtl htmlFor="textArea">Описание задачи</SubTtl>
                                    <S.FormNewArea
                                        onChange={handleInputChange}
                                        value={newTask.description}
                                        name="description"
                                        id="textArea"
                                        placeholder="Введите описание задачи...">
                                    </S.FormNewArea>
                                </S.FormNewBlock>
                            </S.PopNewCardForm>
                            <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                        </S.PopNewCardWrap>
                        <Categories>
                            <CategoriesSubTtl>Категория</CategoriesSubTtl>
                            <CategoriesThemes>
                                <CategoriesThemeOrange>
                                    <input
                                        type="radio"
                                        id="radio1"
                                        name="topic"
                                        value="Web Design"
                                        onChange={handleInputChange}
                                    />
                                    <label className="_orange" htmlFor="radio1">Web Design</label>
                                </CategoriesThemeOrange>
                                <CategoriesThemeGreen>
                                    <input
                                        type="radio"
                                        id="radio2"
                                        name="topic"
                                        value="Research"
                                        onChange={handleInputChange}
                                    />
                                    <label className="_orange" htmlFor="radio2">Research</label>
                                </CategoriesThemeGreen>
                                <CategoriesThemePurple>
                                    <input
                                        type="radio"
                                        id="radio3"
                                        name="topic"
                                        value="Copywriting"
                                        onChange={handleInputChange}
                                    />
                                    <label className="_orange" htmlFor="radio3">Copywriting</label>
                                </CategoriesThemePurple>
                            </CategoriesThemes>
                        </Categories>
                        <S.FormNewCreate onClick={handleFormSubmit} id="btnCreate">Создать задачу</S.FormNewCreate>
                    </S.PopNewCardContent>
                </S.PopNewCardBlock>
            </S.PopNewCardContainer>
        </S.StyledPopNewCard>
    )
}

export default PopNewCard