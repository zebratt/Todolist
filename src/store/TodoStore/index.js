import { observable, action } from 'mobx'

class TodoStore {
    @observable todos
    @observable currMonth
    @observable currDay

    constructor() {
        const today = new Date()

        this.todos = []
        this.currMonth = today.getMonth()
        this.currDay = today.getDate()
    }

    @action
    loadTodos = nextTodos => {
        this.todos.clear()
        nextTodos.forEach(item => {
            this.todos.push(item)
        })
    }

    @action
    updateCurrMonth = nextMonth => {
        this.currMonth = nextMonth
    }

    @action
    updateCurrDay = nextDay => {
        this.currDay = nextDay
    }

    @action
    insertNewItem = item => {
        this.todos.push(item)
    }
}

export default new TodoStore()
