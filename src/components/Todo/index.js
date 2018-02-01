import './style.scss'
import React from 'react'
import Month from './modules/Month'
import Day from './modules/Day'
import actions from '../../actions'
import { observer, inject } from 'mobx-react'

@inject('todoStore')
@observer
export default class TodoList extends React.Component {
    componentDidMount() {
        actions.todoAction()
    }
    render() {
        const { todoStore: { todos } } = this.props

        return (
            <div className="g-page-home">
                <Month />
                <Day />
                <div className="content-main">
                    <div className="title">
                        <button className="btn-add">添加项目</button>
                    </div>
                    <ul className="items">
                        {todos.map((todo, idx) => (
                            <li key={idx} className="item">
                                <input className="checkbox" type="checkbox" />
                                <span>{todo.content}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
