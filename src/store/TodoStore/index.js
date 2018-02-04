import { observable, action } from 'mobx'

class TodoStore {
    @observable todos
    @observable currMonth
    @observable currDay

    constructor() {
        const today = new Date()

        this.todos = [
            {
                content: 'aaa',
                completed: false
            },
            {
                content: 'bbb',
                completed: true
            }
        ]
        this.currMonth = today.getMonth()
        this.currDay = today.getDate()
    }

    @action
    mergeTodos = nextTodos => {
        nextTodos.forEach(nTodo => {
            this.todos.push(nTodo)
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
}

export default new TodoStore()
