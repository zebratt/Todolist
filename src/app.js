import React from 'react'
import ReactDOM from 'react-dom'
import Todo from './components/Todo'
import { Provider } from 'mobx-react'
import * as stores from './store'

ReactDOM.render(
    <Provider {...stores}>
        <Todo />
    </Provider>,
    document.getElementById('root')
)
