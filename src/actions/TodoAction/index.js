import todoStore from '../../store/TodoStore'

export default function fetchTodos() {
    fetch('//localhost:9999/api/todos')
        .then(res => res.json())
        .then(data => {
            todoStore.mergeTodos(data)
        })
}
