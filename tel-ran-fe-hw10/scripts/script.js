// //Создать в html форму с тремя инпутами (имя, фамилия, возраст). Написать скрипт, который при отправке формы выводит собранные данные в консоль.
// Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив users в виде объекта.
// Реализовать функцию rerender.Эта функция очищает контейнер с карточками и создает множество карточек с пользователями из массива.Настроить rerender при добавлении нового пользователя.
// Доработать rerender таким образом, чтобы при двойном клике по карточке из массива удалялся пользователь по id и вызывался rerender.

const users = []
const p_form = document.forms.form_1
const { firstName, lastName, Old } = p_form.elements
let userCards_array = document.querySelector(".userCards")
p_form.addEventListener("submit", function (e) {
    e.preventDefault()
    let user = {
        name: firstName.value,
        familie: lastName.value,
        alt: Old.value
    }
    users.push(user)

    console.log(user)
    rerender()

    p_form.reset() // очищает поля ввода
})

function rerender() {
    userCards_array.innerHTML = "" // очищаем контейнер с карточками
    for (let i = 0; i < users.length; i++) {
        let { name, familie, alt } = users[i]
        let userName = document.createElement("span")
        userName.innerText = name;
        let userFamilia = document.createElement("span")
        userFamilia.innerText = familie;
        let userAlter = document.createElement("span")
        userAlter.innerText = alt;
        let userCardDiv = document.createElement("div")
        userCardDiv.classList.add("user_card")
        userCardDiv.append(userName, userFamilia, userAlter)
        userCards_array.append(userCardDiv)

        userCardDiv.addEventListener('dblclick', function () {
            users.splice(i, 1) // удаляем продукт из массива
            rerender() // перерисовка после изменения массива
        })

    }
}