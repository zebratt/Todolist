import { observable, action } from 'mobx'

class TodoStore {
    @observable todos = []

    @action
    mergeTodos = nextTodos => {
        nextTodos.forEach(nTodo => {
            this.todos.push(nTodo)
        })
    }
}

export default new TodoStore()
