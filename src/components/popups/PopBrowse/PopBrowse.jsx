import { Link, useNavigate, useParams } from "react-router-dom"
import { appRoutes } from "../../../lib/appRoutes"
import * as S from './PopBrowse.Styled';
import Calendar from "../../Calenadr/Calendar";
import { topicHeader } from "../../../lib/topic";
import { useTasks } from "../../../hooks/useTasks";
import { SubTtl } from "../../../styled/common/common.styled";
import { useState } from "react";
import { deleteTodo } from "../../../api";
import { useUser } from "../../../hooks/useUser";

function PopBrowse() {
    const { id } = useParams()
    const { cards } = useTasks()

    const { user } = useUser()
    const { getTodosList } = useTasks()

    const navigate = useNavigate()

    const ThisTask = cards.filter(function (task) {
        return task._id == id;
    });

    const stsusList = [
        "Без статуса",
        "Нужно сделать",
        "В работе",
        "Тестирование",
        "Готово",
    ]

    const topic = ThisTask[0].topic
    const status = ThisTask[0].status
    console.log(ThisTask)

    const [selectedDate, setSelectedDate] = useState(ThisTask[0].date);

    const [edit, setEdit] = useState(false);

    const switchToEdited = (e) => {
        e.preventDefault()
        setEdit(!edit)
    }

    const handleDeleteTask = (e) => {
        e.preventDefault()
        deleteTodo({ id }, { token: user.token })
        getTodosList()
        navigate(appRoutes.MAIN)
    }

    return (
        <S.StyledPopBrowse id="popBrowse">
            <S.PopBrowseContainer>
                <S.PopBrowseBlock>
                    <S.PopBrowseContent>
                        <S.PopBrowseTopBlock>
                            <S.PopBrowseTtl>Название задачи:{ThisTask[0].title}</S.PopBrowseTtl>
                            <S.PopBrowseCategoriesTheme $themeColor={topicHeader[topic]}>
                                <S.PopBrowseTopicText>{topic}</S.PopBrowseTopicText>
                            </S.PopBrowseCategoriesTheme>
                        </S.PopBrowseTopBlock>
                        <S.PopBrowseStatus>
                            <S.PopBrowseSubttl>Статус</S.PopBrowseSubttl>
                            <S.StatusThemes $edit={edit}>
                                <S.StatusTheme $statusTheme={true}>
                                    <input
                                        type="radio"
                                        id="radioStatus"
                                        name="status"
                                        value="Без статуса"
                                    //onChange={}
                                    />
                                    <label htmlFor="radio1">{status}</label>
                                </S.StatusTheme>
                            </S.StatusThemes>
                            <S.StatusThemesEdit $edit={edit}>
                                <S.StatusTheme $statusTheme={stsusList[0] == status}>
                                    <input
                                        type="radio"
                                        id="radioStatus"
                                        name="status"
                                        value="Без статуса"
                                    //onChange={}
                                    />
                                    <label htmlFor="radio1">Без статуса</label>
                                </S.StatusTheme>
                                <S.StatusTheme $statusTheme={stsusList[1] == status}>
                                    <input
                                        type="radio"
                                        id="radioStatus"
                                        name="status"
                                        value="Нужно сделать"
                                    //onChange={}
                                    />
                                    <label htmlFor="radio1">Нужно сделать</label>
                                </S.StatusTheme>
                                <S.StatusTheme $statusTheme={stsusList[2] == status}>
                                    <input
                                        type="radio"
                                        id="radioStatus"
                                        name="status"
                                        value="В работе"
                                    //onChange={}
                                    />
                                    <label htmlFor="radio1">В работе</label>
                                </S.StatusTheme>
                                <S.StatusTheme $statusTheme={stsusList[3] == status}>
                                    <input
                                        type="radio"
                                        id="radioStatus"
                                        name="status"
                                        value="Тестирование"
                                    //onChange={}
                                    />
                                    <label htmlFor="radio1">Тестирование</label>
                                </S.StatusTheme>
                                <S.StatusTheme $statusTheme={stsusList[4] == status}>
                                    <input
                                        type="radio"
                                        id="radioStatus"
                                        name="status"
                                        value="Готово"
                                    //onChange={}
                                    />
                                    <label htmlFor="radio1">Готово</label>
                                </S.StatusTheme>
                            </S.StatusThemesEdit>
                        </S.PopBrowseStatus>
                        <S.PopBrowseWrap>
                            <S.PopBrowseForm id="formBrowseCard" action="#">
                                <S.PopBrowseBlock>
                                    <SubTtl >Описание задачи</SubTtl>
                                    <S.FormBrowseArea
                                        $edit={edit}
                                        defaultValue={ThisTask[0].description}
                                        name="text"
                                        id="textArea01"
                                        readOnly
                                        placeholder="Введите описание задачи...">
                                    </S.FormBrowseArea>
                                    <S.FormEditArea
                                        $edit={edit}
                                        defaultValue={ThisTask[0].description}
                                        name="text"
                                        id="textArea01"
                                        placeholder="Введите описание задачи...">
                                    </S.FormEditArea>
                                </S.PopBrowseBlock>
                            </S.PopBrowseForm>

                            <S.PopNewCardCalendar $edit={edit}>
                                <S.CalendarTtl>Даты</S.CalendarTtl>
                                <Calendar selectedDate={ThisTask[0].date} />
                            </S.PopNewCardCalendar>
                            <S.PopNewCardCalendarEdit $edit={edit}>
                                <S.CalendarTtl>Даты</S.CalendarTtl>
                                <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                            </S.PopNewCardCalendarEdit>
                        </S.PopBrowseWrap>

                        <S.popBrowseBtnBrowse $edit={edit}>
                            <S.BtnGroup>
                                <S.BtnEditBor onClick={switchToEdited}>Редактировать задачу</S.BtnEditBor>
                                <S.BtnEditBor onClick={handleDeleteTask}>Удалить задачу</S.BtnEditBor>
                            </S.BtnGroup>
                            <Link to={appRoutes.MAIN}>
                                <S.BtnBg>Закрыть</S.BtnBg>
                            </Link>
                        </S.popBrowseBtnBrowse>
                        <S.popBrowseBtnEdit $edit={edit}>
                            <S.BtnGroup>
                                <S.BtnBg>Сохранить</S.BtnBg>
                                <S.BtnEditBor onClick={switchToEdited}>Отменить</S.BtnEditBor>
                                <S.BtnEditBor id="btnDelete" onClick={handleDeleteTask}>Удалить задачу</S.BtnEditBor>
                            </S.BtnGroup>
                            <Link to={appRoutes.MAIN}>
                                <S.BtnBg>Закрыть</S.BtnBg>
                            </Link>
                        </S.popBrowseBtnEdit>
                    </S.PopBrowseContent>
                </S.PopBrowseBlock>
            </S.PopBrowseContainer>
        </S.StyledPopBrowse>
    )
}

export default PopBrowse