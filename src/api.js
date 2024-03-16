const baseHost = 'https://wedev-api.sky.pro/api/kanban'
const userHost = 'https://wedev-api.sky.pro/api/user'



//Получить список задач
export async function getTodos({ token }) {
    const response = await fetch(baseHost, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    if (!response.status === 200) {
        throw new Error("ошибка!");
    }
    const data = await response.json();
    return data
}


//Добавить новую задачу 

export async function postTodo({ token}, {title, description, topic, date} ) {
    const response = await fetch(baseHost, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: 'POST',
        body: JSON.stringify({
            title,
            description,
            topic,
            date
        })
        
    }) 
    if (!response.status === 201) {
        throw new Error("ошибка!");
    }
    const data = await response.json();
    return data
}

//Авторизоваться
export function signIn({ login, password }) {
    return fetch(userHost + "/login", {
        method: "POST",
        body: JSON.stringify({
            login,
            password,
        }),
    }).then((response) => {
        if (response.status === 400) {
            throw new Error("Неверный логин или пароль");
        }
        return response.json();
    });
}

//Зарегистрироваться

export function signUp({ login, name, password }) {
    return fetch(userHost, {
        method: "POST",
        body: JSON.stringify({
            login,
            name,
            password,
        }),
    }).then((response) => {
        if (response.status === 400) {
            throw new Error("Такой пользователь уже существует");
        }
        return response.json();
    });
}