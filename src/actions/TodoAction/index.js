import todoStore from '../../store/TodoStore'
import ApiService from '../../service/ApiService'

const loadTodos = async (date) => {
    const res = await ApiService.get(`http://localhost:4000/api/todos/query/${date}`)

    if(res.code === 0){
        todoStore.loadTodos(res.data)
    }
}

const updateMonth = month => {
    todoStore.updateCurrMonth(month)
}

const updateDay = day => {
    todoStore.updateCurrDay(day)
}

const insertNewItem = (item) => {
    todoStore.insertNewItem(item)
}

const updateItem = async (nextItem) => {
    await ApiService.post('http://localhost:4000/api/todos/update', nextItem)
}

export default {
    loadTodos,
    updateMonth,
    updateDay,
    updateItem,
    insertNewItem
}
