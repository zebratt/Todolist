import todoStore from '../../store/TodoStore'

const getTodos = date => {
    fetch('//localhost:9999/api/todos')
        .then(res => res.json())
        .then(data => {
            todoStore.mergeTodos(data)
        })
}

const updateMonth = month => {
    todoStore.updateCurrMonth(month)
}

const updateDay = day => {
    todoStore.updateCurrDay(day)
}

export default {
    getTodos,
    updateMonth,
    updateDay
}
