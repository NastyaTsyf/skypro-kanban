import { useState } from "react"
import Calendar from "../../Calenadr/Calendar"
import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import { postTodo } from "../../../api";
import { useUser } from "../../../hooks/useUser";
import { useTasks } from "../../../hooks/useTasks";

function PopNewCard() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        topic: '',
    })
    const {user} = useUser()
    const {getTodosList} = useTasks()

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

    return (<div className="pop-new-card" id="popNewCard">
        <div className="pop-new-card__container">
            <div className="pop-new-card__block">
                <div className="pop-new-card__content">
                    <h3 className="pop-new-card__ttl">Создание задачи</h3>
                    <Link to={appRoutes.MAIN}>
                        <span className="pop-new-card__close">&#10006;</span>
                    </Link>
                    <div className="pop-new-card__wrap">
                        <form className="pop-new-card__form form-new" id="formNewCard" action="#">
                            <div className="form-new__block">
                                <label htmlFor="formTitle" className="subttl">Название задачи</label>
                                <input
                                    className="form-new__input"
                                    onChange={handleInputChange}
                                    value={newTask.title}
                                    type="text"
                                    name="title"
                                    id="formTitle"
                                    placeholder="Введите название задачи..."
                                    autoFocus>
                                </input>
                            </div>
                            <div className="form-new__block">
                                <label htmlFor="textArea" className="subttl">Описание задачи</label>
                                <textarea
                                    className="form-new__area"
                                    onChange={handleInputChange}
                                    value={newTask.description}
                                    name="description"
                                    id="textArea"
                                    placeholder="Введите описание задачи...">
                                </textarea>
                            </div>
                        </form>
                        <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                    </div>
                    <div className="pop-new-card__categories categories">
                        <p className="categories__p subttl">Категория</p>
                        <div className="prod_checbox">
                            <div className="radio-toolbar">
                                <input
                                    type="radio"
                                    id="radio1"
                                    name="topic"
                                    value="Web Design"
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="radio1">Web Design</label>

                                <input
                                    type="radio"
                                    id="radio2"
                                    name="topic"
                                    value="Research"
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="radio2">Research</label>

                                <input
                                    type="radio"
                                    id="radio3"
                                    name="topic"
                                    value="Copywriting"
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="radio3">Copywriting</label>
                            </div>
                        </div>
                        {/*<div className="categories__themes">
                            <div className="categories__theme _orange _active-category">
                                <p className="_orange">Web Design</p>
                            </div>
                            <div className="categories__theme _green">
                                <p className="_green">Research</p>
                            </div>
                            <div className="categories__theme _purple">
                                <p className="_purple">Copywriting</p>
                            </div>
</div>*/}
                    </div>
                    <button onClick={handleFormSubmit} className="form-new__create _hover01" id="btnCreate">Создать задачу</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PopNewCard